## Routing Fundamentals

### Terminology
### The app Router

デフォルトでは、app内のコンポーネントはReact Server Componentsです。

### Roles of Folders and Files
### Route Segments
### Nested Routes
### File Conventions

入れ子になったルートで特定の動作を行う UI を作成するための特別なファイルのセットを提供します。

- layout	セグメントとその子の共有 UI
- page	ルートの独自の UI とルートへの一般公開
- loading	セグメントとその子の UI の読み込み
- not-found	セグメントとその子の UI が見つかりません
- error	セグメントとその子のエラー UI
- global-error	グローバルエラーUI
- route	サーバー側 API エンドポイント
- template	特別に再レンダリングされたレイアウト UI
- default	並列ルートのフォールバック UI //これは何？


### Component Hierarchy
[コンポーネント階層の図](https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy)

### Colocation
### Server-Centric Routing with Client-side Navigation
### Partial Rendering
### Advanced Routing Patterns
### Next Steps