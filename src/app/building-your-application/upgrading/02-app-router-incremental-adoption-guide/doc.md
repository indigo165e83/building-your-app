## App Router Incremental Adoption Guide

このガイドはあなたをサポートします：

- Next.jsアプリケーションをバージョン12からバージョン13にアップデートする。
- pagesディレクトリとappディレクトリの両方で動作する機能をアップグレードする。
- 既存のアプリケーションをpagesからappに段階的に移行する。

### Upgrading
#### Node.js Version
#### Next.js Version
#### ESLint Version
### Next Steps
### Upgrading New Features
#### &lt;Image /&gt; Component
#### &lt;Link /&gt; Component
#### &lt;Script /&gt; Component
#### Font Optimization
### Migrating from pages to app
#### Step 1: Creating the app directory
#### Step 2: Creating a Root Layout
##### Migrating _document.js and _app.js
##### Migrating the getLayout() pattern to Layouts (Optional)
#### Step 3: Migrating next/head
#### Step 4: Migrating Pages
#### Step 5: Migrating Routing Hooks
#### Step 6: Migrating Data Fetching Methods
##### Server-side Rendering (getServerSideProps)
##### Accessing Request Object
##### Static Site Generation (getStaticProps)
##### Dynamic paths (getStaticPaths)
##### Replacing fallback
##### Incremental Static Regeneration (getStaticProps with revalidate)
##### API Routes
#### Step 7: Styling
##### Tailwind CSS
### Codemods
