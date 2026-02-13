import os
from PIL import Image

# ==========================================
# 👇 ここだけ確認してください
# 画像が入っているフォルダ（public の直下なら "public" でOK）
input_folder = "public"
# ==========================================

output_folder = "resized_temp" # 一時保存用
max_size = 1200 # 長辺の最大サイズ

# 出力用フォルダ作成
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

print(f"フォルダ「{input_folder}」内の画像を処理します...")

count = 0
for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        try:
            # 画像を開く
            img_path = os.path.join(input_folder, filename)
            img = Image.open(img_path)

            # リサイズ計算
            width, height = img.size
            if max(width, height) > max_size:
                ratio = max_size / max(width, height)
                new_width = int(width * ratio)
                new_height = int(height * ratio)
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            else:
                # すでに小さいならそのまま
                new_width, new_height = width, height

            # JPEGとして保存（上書きせず、一時フォルダに同じ名前で保存）
            # もしPNGが混ざっていても強制的にRGBモードに変換
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            # 拡張子を.jpgに統一して保存（今回は元々jpgなのでそのまま名前を使う）
            name_body, _ = os.path.splitext(filename)
            save_path = os.path.join(output_folder, filename) # 元のファイル名維持

            img.save(save_path, "JPEG", quality=85)
            print(f"OK: {filename} ({width}x{height} -> {new_width}x{new_height})")
            count += 1
            
        except Exception as e:
            print(f"スキップ: {filename} (フォルダなど)")

print(f"------------------------------------------------")
print(f"完了！ {count} 枚の画像を「{output_folder}」フォルダに作りました。")