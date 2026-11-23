"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/*
 * サムネイルを見せたまま、1回のタップ（クリック）で音付き再生するための部品。
 *
 * スマホのブラウザは「音の出る動画の自動再生」を禁止しているため、
 * サムネイル → タップ → YouTubeを読み込んで自動再生 という流れだと、
 * スマホでは再生が止められて2回タップが必要になる。
 *
 * そこで、YouTubeの再生画面をサムネイルの「下」に先に置いておき、
 * サムネイルはタップを下へ通す（見えるけれど触れない）状態にする。
 * タップは直接YouTubeに届くので、1回で音付き再生が始まる。
 * 再生が始まったらサムネイルを消す。
 */

declare global {
  interface Window {
    YT?: any
    onYouTubeIframeAPIReady?: () => void
  }
}

let apiPromise: Promise<any> | null = null

function loadYouTubeApi(): Promise<any> {
  if (typeof window === "undefined") return Promise.resolve(null)
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (!apiPromise) {
    apiPromise = new Promise((resolve) => {
      const prev = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        prev?.()
        resolve(window.YT)
      }
      const script = document.createElement("script")
      script.src = "https://www.youtube.com/iframe_api"
      script.async = true
      document.head.appendChild(script)
    })
  }
  return apiPromise
}

type Props = {
  videoId: string
  /** trueのときだけ、YouTubeの再生画面を下に仕込む（ページを軽く保つため） */
  load: boolean
  /** この数字が変わったら一時停止してサムネイルに戻す（カルーセルを送ったときなど） */
  stopSignal?: number
  /** 上にかぶせる見た目（サムネイル・再生アイコンなど） */
  cover: ReactNode
}

export function YouTubeTapToPlay({ videoId, load, stopSignal, cover }: Props) {
  const hostRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  // 準備が整う前にタップされた場合は、準備ができ次第再生を試みる
  const pendingPlay = useRef(false)

  // YouTubeの再生画面を用意する
  useEffect(() => {
    const host = hostRef.current
    if (!load || !host) return
    let cancelled = false
    const target = document.createElement("div")
    host.appendChild(target)

    loadYouTubeApi().then((YT) => {
      if (cancelled || !YT) return
      playerRef.current = new YT.Player(target, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: { rel: 0, playsinline: 1 },
        events: {
          onReady: (e: any) => {
            if (cancelled) return
            setReady(true)
            if (pendingPlay.current) {
              pendingPlay.current = false
              try {
                e.target.playVideo()
              } catch {}
            }
          },
          onStateChange: (e: any) => {
            if (cancelled) return
            if (e.data === YT.PlayerState.PLAYING || e.data === YT.PlayerState.BUFFERING) {
              setPlaying(true)
            }
          },
        },
      })
    })

    return () => {
      cancelled = true
      try {
        playerRef.current?.destroy()
      } catch {}
      playerRef.current = null
      host.innerHTML = ""
      setReady(false)
      setPlaying(false)
    }
  }, [load, videoId])

  // 合図が来たら一時停止してサムネイルに戻す
  useEffect(() => {
    if (stopSignal === undefined) return
    try {
      playerRef.current?.pauseVideo?.()
    } catch {}
    setPlaying(false)
  }, [stopSignal])

  return (
    <div className="absolute inset-0">
      {/* 下：YouTubeの再生画面 */}
      <div ref={hostRef} className="absolute inset-0 [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0" />

      {/* 上：サムネイル。準備ができたらタップを下へ通し、再生が始まったら消える */}
      <div
        onClick={() => {
          if (!ready) pendingPlay.current = true
        }}
        className={`absolute inset-0 transition-opacity duration-300 ${
          ready ? "pointer-events-none" : ""
        } ${playing ? "opacity-0" : "opacity-100"}`}
      >
        {cover}
      </div>
    </div>
  )
}
