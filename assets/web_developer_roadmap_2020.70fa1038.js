import{o as i,c as t,q as l}from"./vendor.c5044101.js";const e={class:"markdown-body"},p=l('<h1>2020 Frontend developer roadmap </h1><p>大家可以進去給個 star !! <a href="https://github.com/kamranahmedse/developer-roadmap">https://github.com/kamranahmedse/developer-roadmap</a></p><h2>完整的大圖，大家自己點進去</h2><p>今天想分享的是 Web developer 2020 技術學習知識庫，今年的出來以後有看到再貼給大家</p><h3>basic</h3><p>反正就一定要會</p><p><img src="https://i.imgur.com/cDh3b0u.png" alt=""></p><ul><li>Semantic Versioning 語意化版本：<a href="https://semver.org/lang/zh-TW/">https://semver.org/lang/zh-TW/</a></li><li>Design Patterns 蠻困難的東西，最簡單來說，學這個可以讓你的程式好維護一點。 有很多設計模式，ex:工廠模式 通常開發時的想法都是，不同功能的東西要分開成不同 function ，而且好擴充</li><li>Character Encoding 編碼相關的知識</li></ul><h3>Internet</h3><p><img src="https://i.imgur.com/ZuVM29f.png" alt=""></p><ul><li>How does the internet work? OSI TCP UDP 之類的東西吧，回大學翻書</li><li>What is HTTP? 協定 包含 請求方法: GET、POST header: <img src="https://i.imgur.com/ZL2Y4cm.png" alt=""></li><li>Browser and how they work? <a href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/">https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/</a><a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path">https://developers.google.com/web/fundamentals/performance/critical-rendering-path</a> 告訴你運作機制，也會稍微跟你講怎樣寫程式，效率會更好，畫面會更平滑之類的</li><li>DNS and how it works? Domain Name System，網址如何對應到 host 的機制</li><li>What is Domain Name? 域名，<a href="https://hackmd.io/aiPD7iqeSTK1JQ_ccLoYBQ">https://hackmd.io/aiPD7iqeSTK1JQ_ccLoYBQ</a> =&gt; hackmd.io</li><li>What is hosting(不確定) 好像是如何上架網頁</li></ul><h3>HTML</h3><p><img src="https://i.imgur.com/ICW6U6A.png" alt=""></p><ul><li>Semantic HTML 語意化 HTML 用一些 HTML5 的新 tag，好處是可以增加 SEO 例如<pre><code class="language-html">&lt;nav&gt;&lt;/nav&gt; \n&lt;article&gt;&lt;/article&gt;\n</code></pre></li><li>Convection and Best Practices (不確定)，下面是舉例 1. Use Meaningful Title Tags 2. Use Descriptive Meta Tags =&gt; google 搜尋時 =&gt; 可以幫助搜尋 <img src="https://i.imgur.com/DLIi1Jk.png" alt=""> 3. Use Alt Attributes with Images</li></ul><h3>CSS</h3><ul><li>Accessbillity (不確定) 與 UX 相關的東西，稍微查好像是怎麼做可以讓 user 上網時更舒服</li><li>SEO Basic 提高 SEO 就是讓你的網站更容易被搜尋引擎搜到</li><li>Making Layout 切版</li><li>Responsive design and Media Queries RWD，讓你的網頁在平板跟手機也好棒棒</li></ul><h3>JAVASCRIPT</h3><p><img src="https://i.imgur.com/YHYdzwu.png" alt=""></p><ul><li>Syntax and Basic Constructs</li><li>Learn Dom Manipulations</li><li>Learn Fetch API / Ajax(XHR)</li><li>ES6+ and modular JavaScript 語法學一下，行數可以降低，code 乾淨一點 async await Template literals `${}` Destructuring assignment obj.a const { a } = obj Optional chaining ?. Spread syntax …</li></ul><h3>Version Control Systems</h3><p><img src="https://i.imgur.com/4fKZAS4.png" alt=""></p><p>版控， 稍微深入一點的東西像是 rebase, git flow 看要不要應用</p><h3>Web Securtiy Knowledge</h3><p><img src="https://i.imgur.com/bpHQMf9.png" alt=""></p><ul><li>HTTPS 有這個協定，封包可以避免竊聽</li><li>CORS 跨來源資源共享，瀏覽器會自動 block 一些東西，這時候要做相應的處理才能拿到東西</li><li>Content Security Policy 瀏覽器的實作標準，處理一些網頁被注入的問題 XSS</li><li>OWASP Security Risks 只知道每年會公布十大危險的資安問題</li></ul><h3>Package Managers</h3><p><img src="https://i.imgur.com/aTtJaJg.png" alt=""> 讓你可以裝套件的，每個專案各自裝，才不會有套件衝突問題</p><h3>CSS Architecture and CSS preprocessors (CSS預處理器)</h3><p><img src="https://i.imgur.com/z4uOxLy.png" alt=""></p><ul><li><p>BEM 一種 css 命名方式，主要就是讓你好維護，而且不容易出現 css 汙染用的</p></li><li><p>CSS預處理器 讓你可以寫 CSS 像在寫 CODE 一樣， 我現在是用 SCSS，把變數拉出來，然後嵌套減少重複相似的命名，也有 mixin 什麼的， 要使用的話 webpack.config 跟 &lt;style&gt; 那邊改一下就行了。</p></li></ul><h3>Build Tools</h3><p><img src="https://i.imgur.com/jRaB5mW.png" alt=""></p><h4>Task Runners</h4><ul><li>npm scripts package.json 裡面寫 npm run XXXX 的指令</li></ul><h4>Module Bundlers</h4><ul><li>Webpack 打包工具 調整 webpack.config 搭配 entry point (我們是設定在 script.js) 一直往下 import，最後才能合在一起，通常也會搭配到 babel, 各式各樣 loader，或者優化打包，讓你的單一檔案不至於太大，而影響效能。</li><li>vite 也是打包工具，vue 的相關產業鏈，以後可以考慮這個，聽說速度很快</li></ul><h4>Linters and Foramtters</h4><ul><li>Prettier 一鍵幫你把 code 排好的套件(我自己沒用，因為不喜歡</li><li>ESLint 必裝，亂寫就噴你，遵守他類似做 best practice 吧，npm 裝完以後，vscode 也裝就可以從 vscode 即時看到錯誤。</li></ul><h3>Framework</h3><p><img src="https://i.imgur.com/M5lOhkC.png" alt=""></p><ul><li>React.js 主打不用寫 css html，全部都 js 幹到底</li><li>Angular (從來沒碰過 網路上聽聽影片啥的，像是主打 Typescript，強制你要寫型別，對團隊來說可能爛 code 機率降低</li><li>Vue.js 主打簡單好學，漸進式引入(Router Vuex Nuxt.js，Vue3.0 可以開始嘗試</li></ul><h3>Modern CSS</h3><p><img src="https://i.imgur.com/x8qoVwO.png" alt=""></p><p>CSS in JS <a href="https://cythilya.github.io/2020/02/25/start-your-app-the-better-way-with-styled-system/">https://cythilya.github.io/2020/02/25/start-your-app-the-better-way-with-styled-system/</a><img src="https://i.imgur.com/zTA3DM2.png" alt=""></p><ul><li><p>Styled Component 直接幫你把 style 放進 componet 中，不過這是 react 的範例就是了 <img src="https://i.imgur.com/viC77PP.png" alt=""></p></li><li><p>CSS Module 可以用 style.className 的方式專門引入一個 class，然後會幫你 hash 讓你不會被干擾 (使用 vue css scope 做的事情看起來就是這樣子了 <img src="https://i.imgur.com/qoTFbHC.png" alt=""></p></li></ul><h3>Web Components</h3><p><img src="https://i.imgur.com/TlSZjnW.png" alt=""></p><ul><li>HTML Templates <a href="https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/template">https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/template</a> 範例說，可以先建立好 html，但不會 render 等到用 js 觸發再把畫面畫出來 平常使用的 slot 的觀念跟這個也有相關</li><li>Custom Elements 自製 html tag 的概念 =&gt; vue 幫我們做爆的事情</li><li>Shadow DOM 跟 Custom Elements 很像的東西，他是指這個 input range 下面由很多東西組成 那些東西叫做 Shadow DOM <img src="https://i.imgur.com/jND2ueX.png" alt=""><img src="https://i.imgur.com/9yWVi90.png" alt=""></li></ul><h3>CSS Frameworks</h3><p><img src="https://i.imgur.com/XzV0jMG.png" alt=""></p><p>讓你不用一直重複刻 componet 的工具們 比較常聽到的是 Material UI (經典) =&gt; 這個是類似 vuetify 的東西 Tailwind CSS (今年最熱門) =&gt; 這給妳很多預先寫好的 class 讓你去套用</p><h3>Test</h3><p><img src="https://i.imgur.com/ErFSIbD.png" alt=""></p><ul><li>Jest (經典 做單元測試的工具</li><li>nightwatch 這個會開瀏覽器跑，E2E測試</li></ul><p>個人經驗是，在與前端框架配合上，要盡量找相容性高的，開發起來才輕鬆一點 例如開發 vue 想辦法去找哪一種單元測試框架最適合 vue</p><h3>Type Checkers</h3><p><img src="https://i.imgur.com/o0E0S8M.png" alt=""></p><ul><li>TypeScript 就讓你的程式碼加上型別，要想辦法不用一直 :any 有一派認為會加大開發成本，不過很多套件現在都全面改成 TypeScript 了(例如 vuetify</li></ul><h3>PWA</h3><p><img src="https://i.imgur.com/XmLH25L.png" alt=""></p><p>一句話講，長得像 app 的 web，可以被下載到手機上做 APP</p><ul><li>漸進式：用戶無需擔心使用哪個瀏覽器，也可以正常使用PWA。因為這些PWA以漸進增強作為核心信條。</li><li>響應式：PWA適應包括電腦、手機、平板等其他常用設備在內的多種瀏覽環境。</li><li>連接獨立性：利用服務工作執行緒，PWA可以離線或網絡情況較差的環境下工作。</li><li>接近原生應用：為用戶提供更接近原生應用的交互體驗與導航。</li><li>保持新版：歸功於服務工作執行緒的更新機制，PWA可以保證用戶永遠使用最新版本。</li><li>安全：通過HTTPS，PWA可以阻止通訊竊聽，而且能保證內容不被篡改。</li><li>可被發現：歸功於W3C提供的清單文件[6]，以及服務工作執行緒的註冊範圍機制，PWA可被標識為「應用」，且搜尋引擎可以正常地索引PWA。</li><li>可被組裝：類似推送通知這樣的功能在PWA上都可以輕鬆地被組裝。</li><li>可被安裝：允許用戶直接「保留」PWA到他們的系統桌面，無需到應用商店完成麻煩的步驟。</li><li>可被連結：只需輕鬆地分享URL便可連結至PWA中，無需複雜的安裝步驟。</li></ul><h3>Server Side Rendering(SSR)</h3><p><img src="https://i.imgur.com/x377W9q.png" alt=""></p><p>伺服器端渲染 目的就是要讓你的網站更容易被 google 到，增加 SEO， 因為 client side render 爛爛的爬蟲爬不出東西，就不會知道你網站幹啥用的。</p><p>以 Nuxt.js 為例，建立一個中介 server 先拿完 api 資料組合完放進 template 中， 而後顯示，其實我覺得跟 django template 很像，只是多了一層</p><h3>GraphQL</h3><p><img src="https://i.imgur.com/e3kvhRQ.png" alt=""></p><p>後端建立好 server 後，不像傳統的 Restful，前端工程師可以用嵌套的方式拿到資料</p><pre><code class="language-javascript=">{\n    title\n    author {\n       name\n       account\n    }\n}\n</code></pre><ul><li>Apollo 用來建立 GraphQL 的框架，很常見</li></ul><p>我覺得資料量越大網站越大時，才嘗試引入。</p><h3>Static Site Generators</h3><p><img src="https://i.imgur.com/DlbeVPA.png" alt=""></p><p>稍微查一下，網站中寫 markdown，可以直接幫你轉成程式碼的那種框架</p><h3>Mobile Applications</h3><p><img src="https://i.imgur.com/IcOsAsF.png" alt=""></p><p>用網頁語法寫 app  Flutter 是這一年最常聽到的吧。</p><h3>Desktop Applications</h3><p><img src="https://i.imgur.com/9RSHyYV.png" alt=""></p><ul><li>Electron 這個滿常見，例如 slack vscode，都是用這個開發的</li></ul><p><img src="https://i.imgur.com/WfkU3uG.png" alt=""></p><h3>Web Assembly</h3><p>目標是效能更好的網頁語言，有機會讓大家換個語言開發的東東。</p>',84),s={setup:(l,{expose:s})=>(s({frontmatter:{}}),(l,s)=>(i(),t("div",e,[p])))};export default s;
