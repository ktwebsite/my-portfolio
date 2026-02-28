# ポートフォリオLP

## プロジェクト概要
シンプルでモダンなポートフォリオランディングページ。

## 技術スタック
- React + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion (motion/react)
- Lucide React (アイコン)

## ディレクトリ構造
```
src/
├── app/
│   ├── App.tsx          # メインアプリケーション
│   └── components/      # コンポーネント
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Works.tsx
│       ├── Skills.tsx
│       ├── Contact.tsx
│       └── ui/          # shadcn/ui コンポーネント
├── styles/
│   ├── index.css        # エントリーポイント
│   ├── tailwind.css     # Tailwind設定
│   ├── theme.css        # テーマ変数・ベーススタイル
│   └── fonts.css        # フォント設定
└── main.tsx             # エントリーポイント
```

## 開発コマンド
```bash
npm run dev      # 開発サーバー起動
npm run build    # ビルド
npm run preview  # ビルドプレビュー
```

## スタイリング注意点
- Tailwind CSS v4を使用（@import方式）
- 低結合、高凝縮になって保守性、拡張性、独立性の観点において良いこーどにして
- ローカルでアクセスしてテストして確かめてから作業を終わること
- わからないことがあればそのまま進めず一度確認してから進めて

## コンポーネント構成
各セクションは独立したコンポーネントとして実装:
- Navigation: 固定ヘッダー
- Hero: ファーストビュー
- About: 自己紹介
- Works: 制作実績
- Skills: スキルセット
- Contact: お問い合わせ
