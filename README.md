# Node Farm

這是一個基於 Node.js 基礎模組（http, fs, url）所建置的簡單 Web 伺服器與動態網頁專案，主要展示如何透過後端讀取 JSON 資料並動態渲染前端 HTML 範本。

## 線上展示
*  成果展示網站：[Node Farm ](https://node-farm-q3xs.onrender.com)
*  原課程範例參考：[Jonas 的 Node Farm 示範網頁](https://node-farm.jonas.io/)

## 功能特點
* **純 Node.js 原生模組開發**：不依賴 Express 等第三方後端框架。
* **動態路由 (Routing)**：支援首頁 (`/overview`)、產品詳細頁 (`/product`) 以及 API 頁面 (`/api`)。
* **伺服器端渲染 (SSR)**：讀取本地 `data.json` 資料，並動態替換 HTML 範本中的變數。
* **URL 參數解析**：利用 `url` 模組解析查詢字串（Query String），精確顯示對應的產品內容。

## 使用技術
* **後端環境**：Node.js
* **套件管理**：NPM

## 本地端執行步驟

1. **複製此專案到本地**
   ```bash
   git clone https://github.com/wen-77/node-farm.git
   cd node-farm

2. **安裝必要套件**
   ```bash
   npm install

3. **啟動伺服器**
   ```bash
   node index.js
