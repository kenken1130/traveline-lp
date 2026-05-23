# Traveline — Landing Page

仮称: **Traveline** / "Travel is a line, not a dot."

## Deploy to GitHub Pages

1. このフォルダの**中身全部**を GitHub の新しいPublicリポジトリに上げる
2. **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**
3. 1〜2分待つと `https://<ユーザー名>.github.io/<リポジトリ名>/` でアクセス可能

## ローカルで開く

ファイルを直接ダブルクリックでもほぼ動きますが、JSXの読み込みのため**ローカルサーバー経由**を推奨:

```bash
# このフォルダで:
python3 -m http.server 8000
# → http://localhost:8000
```

## 構成

| File | 役割 |
|---|---|
| `index.html` | エントリーポイント |
| `lp-data.js` | EN/JP の文言・ルートデータ |
| `lp-hero.jsx` | Hero 3案(Photo / Type / Split) |
| `lp-sections.jsx` | 問題提起 / 4本柱 / ルートプレビュー / フッター |
| `lp-app.jsx` | ルート(言語切替・Hero切替) |
| `tweaks-panel.jsx` | Tweaks パネル(本番では削除可) |
| `image-slot.js` | 画像プレースホルダー(本番では `<img>` に置換) |

## 本番化メモ

- `image-slot` プレースホルダーは実画像 `<img src="...">` に置き換える
- Tweaks パネルは社内レビュー用なので、本番公開時は `lp-app.jsx` の `<TweaksPanel>` ブロックを削除
- Babel in-browser のままだと初回ロードがやや重いので、本番では JSX を pre-compile しても良い
