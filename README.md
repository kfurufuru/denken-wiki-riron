# 電験3種 理論Wiki

電験3種（第三種電気主任技術者）の **理論科目** に特化した個人学習用リファレンスWikiです。

**公式 × 直感 × 過去問クロスリファレンス** の3軸で構成しています。

## 概要

- **対象**: 電験3種 理論科目（電気回路・電磁気・電子理論・電気計測）
- **目的**: 「なぜそうなるか」を理解し、初見問題にも対応できる思考力を養う
- **構成**: 16テーマ × 公式リファレンス × 過去問マッピング × 学習ロードマップ

## サイト

GitHub Pages: https://kfurufuru.github.io/denken-wiki-riron/

## セットアップ

### ローカル開発環境

```bash
# Python 3.x が必要
pip install mkdocs-material

# ローカルサーバー起動
mkdocs serve

# ビルド
mkdocs build
```

### デプロイ

`main` ブランチへのプッシュで GitHub Actions が自動デプロイします。
GitHub Pages の設定は **GitHub Actions** を source として設定してください。

## ディレクトリ構成

```
denken-wiki-riron/
├── mkdocs.yml              # MkDocs 設定
├── docs/
│   ├── index.md            # ホーム
│   ├── themes/             # テーマ別（16テーマ）
│   ├── roadmap/            # 学習ロードマップ（3コース）
│   ├── kakomon/            # 過去問マッピング
│   ├── reference/          # リファレンス
│   ├── javascripts/        # MathJax 設定
│   └── stylesheets/        # カスタムCSS
├── includes/
│   └── abbreviations.md    # 略語ツールチップ定義
└── .github/workflows/
    └── deploy.yml          # GitHub Pages 自動デプロイ
```

## バージョニング

各ページには成熟度バッジ（v0.5 / v0.7 / v1.0）が付いています。
詳細は [バージョニング基準](docs/reference/versioning.md) を参照。

## ライセンス

個人学習用。無断転載・商用利用不可。
