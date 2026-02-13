"use client"

import { useEffect, useRef } from "react"

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void
        YT: any
    }
}

interface YouTubePlayerProps {
    videoId: string
    title?: string
    onEnd?: () => void
    className?: string
}

export function YouTubePlayer({ videoId, title = "YouTube video player", onEnd, className }: YouTubePlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const playerRef = useRef<any>(null)

    useEffect(() => {
        // Load YouTube IFrame Player API code asynchronously
        if (!window.YT) {
            const tag = document.createElement("script")
            tag.src = "https://www.youtube.com/iframe_api"
            const firstScriptTag = document.getElementsByTagName("script")[0]
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
        }

        const initPlayer = () => {
            if (!containerRef.current) return

            // Clean up previous instance if exists to avoid duplicates
            if (playerRef.current) {
                playerRef.current.destroy()
            }

            playerRef.current = new window.YT.Player(containerRef.current, {
                videoId: videoId,
                playerVars: {
                    autoplay: 1,
                    rel: 0,
                    modestbranding: 1,
                    controls: 1,
                },
                events: {
                    onStateChange: (event: any) => {
                        // YT.PlayerState.ENDED is 0
                        if (event.data === 0 && onEnd) {
                            onEnd()
                        }
                    },
                },
            })
        }

        if (window.YT && window.YT.Player) {
            initPlayer()
        } else {
            // Append to existing callback or create new one
            const existingCallback = window.onYouTubeIframeAPIReady
            window.onYouTubeIframeAPIReady = () => {
                if (existingCallback) existingCallback()
                initPlayer()
            }
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy()
            }
        }
    }, [videoId, onEnd])

    return <div ref={containerRef} className={className} title={title} />
}
