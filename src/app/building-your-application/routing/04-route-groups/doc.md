## Route Groups

### Convention

ルートグループは、フォルダー名を括弧で囲むことによって作成できます。(folderName)

### Examples
#### Organize routes without affecting the URL path
#### Opting specific segments into a layout
#### Creating multiple root layouts
複数のルートレイアウトを作成するには、トップレベルのlayout.jsファイルを削除し、各ルートグループ内にlayout.jsファイルを追加します。

これは、アプリケーションを分割して、まったく異なるUIやエクスペリエンスを持つセクションにする場合に便利です。

各ルートレイアウトには、<html>タグと<body>タグを追加する必要があります。

