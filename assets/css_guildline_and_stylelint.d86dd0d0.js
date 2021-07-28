import{o,b as t,s as e}from"./vendor.8ecb0615.js";const n={class:"markdown-body"},s=e('<h1>css guildline &amp; stylelint</h1><h2>出處</h2><p>此文章用於與辦公室的同事分享， 是我自行整理及簡單白話翻譯的筆記， 為了尊重原作者亦或是需要更詳盡的內容，建議以連結內容為優先</p><p><a href="https://github.com/airbnb/css">https://github.com/airbnb/css</a> <br><a href="https://github.com/ArvinH/css-style-guide">https://github.com/ArvinH/css-style-guide</a> <br><a href="https://google.github.io/styleguide/htmlcssguide.html">https://google.github.io/styleguide/htmlcssguide.html</a> <br><a href="https://dotblogs.com.tw/explooosion/2018/09/30/141005">https://dotblogs.com.tw/explooosion/2018/09/30/141005</a> <br></p><h1>Airbnb CSS / Sass 指南</h1><p><em>用更合理的方式寫 CSS 和 Sass</em></p><p>翻譯自 <a href="https://github.com/airbnb/css">Airbnb CSS / Sass Styleguide</a></p><p><a name="terminology"></a></p><h2>術語</h2><p><a name="rule-declaration"></a></p><h3>規則宣告</h3><p>我們把包含一組屬性的一個（或多個組合的）選擇器稱之為 “規則宣告”。舉個例子：</p><pre><code class="language-css">.listing {\n  font-size: 18px;\n  line-height: 1.2;\n}\n</code></pre><p><a name="selectors"></a></p><h3>選擇器</h3><p>在規則宣告中，“選擇器” 決定了 DOM 樹中的哪些元素將被定義的屬性所修飾。選擇器可以配對 HTML 元素，也可以配對一个元素的類別名稱、ID, 或者元素擁有的屬性。以下是選擇器的例子：</p><pre><code class="language-css">.my-element-class {\n  /* ... */\n}\n\n[aria-hidden] {\n  /* ... */\n}\n</code></pre><p><a name="properties"></a></p><h3>屬性</h3><p>最後，屬性決定了規則宣告裡面被選擇的元素將會得到何種樣式。屬性以 key-value pairs 形式存在，一個規則宣告可以包含一或多個屬性宣告。屬性宣告如下：</p><pre><code class="language-css">/* some selector */ {\n  background: #f1f1f1;\n  color: #333;\n}\n</code></pre><p><a name="css"></a></p><h2>CSS</h2><p><a name="formatting"></a></p><h3>格式</h3><ul><li>使用 soft tabs (兩個空格）作為縮排。(我自己是四格，覺得影響不大，但是 stylelint 要調整)</li><li>類別名稱建議使用 dashes 代替 camelCasing。如果你使用 BEM，也可以使用底線或 PascalCasing（參考下面的 <a href="#oocss-and-bem">OOCSS 和 BEM</a>）。</li><li>不要使用 ID 選擇器。<br> (ID 選擇器會影響 css 套用的優先權，在 HTML 的準則中，每個 ID 應該獨一無二)</li><li>在一個規則宣告中，若同時使用多個選擇器時，讓每個選擇器各佔一行。</li><li>在規則宣告的左大括弧 <code>{</code> 前加上一個空格。</li><li>在屬性設定的冒號 <code>:</code> 後面加上一個空格，前面不要加空格。</li><li>讓規則宣告的結束右大括弧 <code>}</code> 獨自一行。</li><li>每個規則宣告之間用空白行隔開。</li></ul><p><strong>Bad</strong></p><pre><code class="language-css">.avatar{\n    border-radius:50%;\n    border:2px solid white; }\n.no, .nope, .not_good {\n    // ...\n}\n#lol-no {\n  // ...\n}\n</code></pre><p><strong>Good</strong></p><pre><code class="language-css">.avatar {\n  border-radius: 50%;\n  border: 2px solid white;\n}\n\n.one,\n.selector,\n.per-line {\n  // ...\n}\n</code></pre><p><a name="comments"></a></p><h3>註解</h3><ul><li>建議使用單行註解 (在 Sass 中是 <code>//</code>) 代替區塊註解。</li><li>建議讓註解獨自一行，避免行末註解。</li><li>為沒有文件紀錄的程式碼寫上詳細註解，比如： <ul><li>z-index 的使用情境</li><li>兼容性處理或是針對特定瀏覽器的特殊寫法</li></ul></li></ul><p><a name="oocss-and-bem"></a></p><h3>OOCSS 和 BEM</h3><p>由於以下原因，我們鼓勵使用 OOCSS 和 BEM 的某些組合：</p><ul><li>可使 CSS 與 HTML 之間的關係更清晰且嚴謹。</li><li>可幫助我們創建出可重用、可重組的元件。</li><li>可以減少巢狀宣告，並降低特定性。</li><li>可以幫助我們創建出可擴展的樣式。</li></ul><p><strong>OOCSS</strong>，也就是 “Object Oriented CSS（物件導向的CSS）”，是一種寫 CSS 的方法，中心哲學就是鼓勵你把樣式表看成“物件”的集合：利用擁有可重用、可重組特性的程式碼，使你可以在整個網站中多次使用。</p><p>参考資料：</p><ul><li>Nicole Sullivan 的 <a href="https://github.com/stubbornella/oocss/wiki">OOCSS wiki</a></li><li>Smashing Magazine 的 <a href="http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/">Introduction to OOCSS</a></li></ul><p><strong>BEM</strong>，也就是 “Block-Element-Modifier”，是一種用於 HTML 和 CSS 類別名稱的_命名约定_。BEM 最初由 Yandex 所提出，他們擁有大量的程式庫以及延展性。可以作為一套遵循 OOCSS 的實作參考規範。</p><ul><li>CSS Trick 的 <a href="https://css-tricks.com/bem-101/">BEM 101</a></li><li>Harry Roberts 的 <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">introduction to BEM</a></li></ul><p>建議使用搭配 PascalCased &quot;區塊&quot;的變形 BEM，在與元件結合操作時特別適用 (e.g. React)。底線與破折號依然用在修飾符與子元件。</p><p><strong>範例</strong></p><pre><code class="language-html">&lt;article class=&quot;listing-card listing-card--featured&quot;&gt;\n\n  &lt;h1 class=&quot;listing-card__title&quot;&gt;Adorable 2BR in the sunny Mission&lt;/h1&gt;\n\n  &lt;div class=&quot;listing-card__content&quot;&gt;\n    &lt;p&gt;Vestibulum id ligula porta felis euismod semper.&lt;/p&gt;\n  &lt;/div&gt;\n\n&lt;/article&gt;\n</code></pre><pre><code class="language-css">.listing-card { }\n.listing-card--featured { }\n.listing-card__title { }\n.listing-card__content { }\n</code></pre><ul><li><code>.listing-card</code> 是一個區塊（block），代表高層次的元件。</li><li><code>.listing-card__title</code> 是一個元素（element），它屬於 <code>.listing-card</code> 的一部份，因此區塊是由元素所組成。</li><li><code>.listing-card--featured</code> 是一個修飾符（modifier），表示這個區塊與 <code>.listing-card</code> 有不同的狀態或變化。</li></ul><p><a name="id-selectors"></a></p><h3>ID 選擇器</h3><p>雖然在 CSS 中，你可以透過 ID 選擇元素，但這種作法應該列為 anti-pattern。ID 選擇器為你的規則宣告帶來了不必要的高<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity">優先權級</a>，而且 ID 選擇器不可重用。</p><p>想要了解更多關於這個主題的內容，請參考 <a href="http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/">CSS Wizardry 的文章</a>，內有關於如何處理優先權級的文章。</p><p><a name="javascript-hooks"></a></p><h3>JavaScript 掛鉤</h3><p>避免在 CSS 和 Javascript 中綁定相同的類別。否則開發者在進行重構時容易出現問題，輕則浪費時間在相互對照尋找要修改的類別名稱，嚴重則因為害怕破壞功能而不敢進行更動。</p><p>我們推薦在創建用於 JavaScript 的類別名稱時，添加 <code>.js-</code> 前綴：</p><pre><code class="language-html">&lt;button class=&quot;btn btn-primary js-request-to-book&quot;&gt;Request to Book&lt;/button&gt;\n</code></pre><p><a name="border"></a></p><h3>邊框</h3><p>在定義無邊框樣式時，使用 <code>0</code> 代替 <code>none</code>。</p><p><strong>Bad</strong></p><pre><code class="language-css">.foo {\n  border: none;\n}\n</code></pre><p><strong>Good</strong></p><pre><code class="language-css">.foo {\n  border: 0;\n}\n</code></pre><p><a name="sass"></a></p><h2>Sass</h2><p><a name="syntax"></a></p><h3>語法</h3><ul><li>使用 <code>.scss</code> 的語法，不使用 <code>.sass</code> 原本的語法。</li><li>CSS 和 <code>@include</code> 宣告依照以下邏輯排序（詳見下文）</li></ul><p><a name="ordering-of-property-declarations"></a></p><h3>屬性宣告的排序</h3><ol><li><p>屬性宣告</p><p>列出除了 <code>@include</code> 與 巢狀選擇器之外的所有屬性宣告。</p><pre><code class="language-scss">.btn-green {\n  background: green;\n  font-weight: bold;\n  // ...\n}\n</code></pre></li><li><p><code>@include</code> 宣告</p><p>接著再放入 <code>@include</code>，這樣可以提高整個選擇器的可讀性。</p><pre><code class="language-scss">.btn-green {\n  background: green;\n  font-weight: bold;\n  @include transition(background 0.5s ease);\n  // ...\n}\n</code></pre></li><li><p>巢狀選擇器</p><p>_如果有必要_用到巢狀選擇器，把它們放到最後。此外，規則宣告與巢狀選擇器之間要加上空白行。而巢狀選擇器中的內容也要遵循上述指引。</p><pre><code class="language-scss">.btn {\n  background: green;\n  font-weight: bold;\n  @include transition(background 0.5s ease);\n\n  .icon {\n    margin-right: 10px;\n  }\n}\n</code></pre></li></ol><p><a name="variables"></a></p><h3>變數</h3><p>變數名稱建議使用破折號（例如 <code>$my-variable</code>）代替 camelCased 和 snake_cased 風格。可以在變數名稱之前添加底線前綴符，用以代表此變數只使用於當前文件。（例如 <code>$_my-variable</code>）。</p><p><a name="mixins"></a></p><h3>Mixins</h3><p>Mixins 可幫助你的代碼遵循 DRY 原則（Don’t Repeat Yourself）、增加清晰度或抽象畫複雜度。這與使用良好命名的函數有異曲同工之妙。Mixins 可以不接收參數，但要注意的是，如果你不壓縮 payload（e.g. gzip），可能會導致最終的樣式表包含不必要的重複程式碼。</p><p><a name="extend-directive"></a></p><h3>擴展指令</h3><p>應避免使用 <code>@extend</code> 指令，因為他並不直觀，且具有潛在風險，特別是用在巢狀選擇器時。即使是針對在最上層的佔位符選擇器使用擴展，如果選擇器的順序最終會改變，也可能會導致問題。（比如，擴展的選擇器存在於別份文件，而其加載順序發生變化）。使用 <code>@extend</code> 所獲得的大部分優化效果，透過 gzip 縮就已經幫你做到了，而你可以再透過 mixin 來讓你的樣式表更符合 DRY 原則。</p><p><a name="nested-selectors"></a></p><h3>巢狀選擇器</h3><p><strong>請不要讓巢狀選擇器超過三層！</strong></p><pre><code class="language-scss">.page-container {\n  .content {\n    .profile {\n      // STOP!\n    }\n  }\n}\n</code></pre><p>當上述情況發生時，你也許是這樣寫 CSS 的：</p><ul><li>與 HTML 強耦合的（也是脆弱）<em>—或者—</em></li><li>過於針對與具體（強大）<em>—或者—</em></li><li>沒有重複使用程式碼</li></ul><p>再說一遍: <strong>永遠不要巢狀 ID 選擇器！</strong></p><p>如果你真的必須使用 ID 選擇器（你真的不應該…），那他們也不該是巢狀的。如果你發現你正在這樣做，那你可能需要重新檢查你的 markup，或是說明這樣做的原因。如果你想要寫出良好風格的 HTML 和 CSS，你絕對<strong>不</strong>應該這麼做。</p><p>（越多層的選擇器，會影響越多的效能）</p><h1>Google CSS Style Guide</h1><h2>Type Selectors</h2><p>由於效能考量，不要在 css 選擇器中使用 element 名稱 <a href="https://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/">https://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/</a></p><p><strong>Bad</strong></p><pre><code class="language-css">div.error {\n\n}\n</code></pre><p><strong>Good</strong></p><pre><code class="language-css">.error {\n\n}\n</code></pre><h2>Shorthand Properties</h2><p>盡可能使用縮寫的屬性，可以增進效能，且更易讀</p><p><strong>Bad</strong></p><pre><code class="language-css=">.example {\n    border-top-style: none;\n    font-family: palatino, georgia, serif;\n    font-size: 100%;\n    line-height: 1.6;\n    padding-bottom: 2em;\n    padding-left: 1em;\n    padding-right: 1em;\n    padding-top: 0;\n}\n</code></pre><p><strong>Good</strong></p><pre><code class="language-css=">.example {\n    border-top: 0;\n    font: 100%/1.6 palatino, georgia, serif;\n    padding: 0 1em 2em;\n}\n</code></pre><h2>Declaration Order</h2><p>照字幕順序排列 css 屬性，除了為了 browser 兼容所使用的屬性</p><p><strong>Good</strong></p><pre><code class="language-css=">.example {\n    background: fuchsia;\n    border: 1px solid;\n    -moz-border-radius: 4px;\n    -webkit-border-radius: 4px;\n    border-radius: 4px;\n    color: black;\n    text-align: center;\n    text-indent: 2em;\n}\n</code></pre><p>或是根據以下規則排列(我個人覺得這種方式更好) <strong>Good</strong></p><ol><li>間距位置容器設定</li><li>背景顏色字體設定</li><li>邊框圓角陰影設定</li><li>動畫變形設定</li></ol><h2>CSS Quotation Marks</h2><p>使用 ‘’ 而非 “” 包住字串 不要在 url 中使用 ‘’</p><p><strong>Bad</strong></p><pre><code class="language-css=">@import url(&quot;https://www.google.com/css/maia.css&quot;);\n\nhtml {\n  font-family: &quot;open sans&quot;, arial, sans-serif;\n}\n</code></pre><p><strong>Good</strong></p><pre><code class="language-css=">@import url(https://www.google.com/css/maia.css);\n\nhtml {\n  font-family: &#39;open sans&#39;, arial, sans-serif;\n}\n</code></pre><h1>stylelint</h1><h2>安裝套件</h2><pre><code>npm install -D stylelint \nnpm install -D stylelint-config-standard \nnpm install -D stylelint-config-sass-guidelines\nnpm install -D stylelint-order\n</code></pre><p>個人非常建議套用，雖然剛 import 的時候會有點痛苦，但長久習慣以後會更好<br> eslint 以及 vscode extension 也非常推薦</p><h2>設定檔</h2><p><strong>.stylelintrc.json</strong></p><pre><code class="language-json=">{\n    &quot;extends&quot;: [\n        &quot;stylelint-config-standard&quot;,\n        &quot;stylelint-config-sass-guidelines&quot;\n    ],\n    &quot;plugins&quot;: [\n        &quot;stylelint-scss&quot;,\n        &quot;stylelint-order&quot;\n    ],\n    &quot;rules&quot;: {\n        &quot;indentation&quot;: [\n            4,\n            {\n                &quot;baseIndentLevel&quot;: 1\n            }\n        ],\n        &quot;order/properties-alphabetical-order&quot;: null,\n        &quot;order/properties-order&quot;: [\n            &quot;position&quot;,\n            &quot;top&quot;,\n            &quot;bottom&quot;,\n            &quot;right&quot;,\n            &quot;left&quot;,\n            &quot;display&quot;,\n            &quot;align-items&quot;,\n            &quot;justify-content&quot;,\n            &quot;float&quot;,\n            &quot;clear&quot;,\n            &quot;overflow&quot;,\n            &quot;overflow-x&quot;,\n            &quot;overflow-y&quot;,\n            &quot;margin&quot;,\n            &quot;margin-top&quot;,\n            &quot;margin-right&quot;,\n            &quot;margin-bogttom&quot;,\n            &quot;margin-left&quot;,\n            &quot;padding&quot;,\n            &quot;padding-top&quot;,\n            &quot;padding-right&quot;,\n            &quot;padding-bottom&quot;,\n            &quot;padding-left&quot;,\n            &quot;width&quot;,\n            &quot;min-width&quot;,\n            &quot;max-width&quot;,\n            &quot;height&quot;,\n            &quot;min-height&quot;,\n            &quot;max-height&quot;,\n            &quot;font-size&quot;,\n            &quot;font-family&quot;,\n            &quot;font-weight&quot;,\n            &quot;text-align&quot;,\n            &quot;text-justify&quot;,\n            &quot;text-indent&quot;,\n            &quot;text-overflow&quot;,\n            &quot;text-decoration&quot;,\n            &quot;white-space&quot;,\n            &quot;color&quot;,\n            &quot;background&quot;,\n            &quot;background-position&quot;,\n            &quot;background-repeat&quot;,\n            &quot;background-size&quot;,\n            &quot;background-color&quot;,\n            &quot;background-clip&quot;,\n            &quot;border&quot;,\n            &quot;border-style&quot;,\n            &quot;border-width&quot;,\n            &quot;border-color&quot;,\n            &quot;border-top-style&quot;,\n            &quot;border-top-width&quot;,\n            &quot;border-top-color&quot;,\n            &quot;border-right-style&quot;,\n            &quot;border-right-width&quot;,\n            &quot;border-right-color&quot;,\n            &quot;border-bottom-style&quot;,\n            &quot;border-bottom-width&quot;,\n            &quot;border-bottom-color&quot;,\n            &quot;border-left-style&quot;,\n            &quot;border-left-width&quot;,\n            &quot;border-left-color&quot;,\n            &quot;border-radius&quot;,\n            &quot;opacity&quot;,\n            &quot;filter&quot;,\n            &quot;list-style&quot;,\n            &quot;outline&quot;,\n            &quot;visibility&quot;,\n            &quot;z-index&quot;,\n            &quot;box-shadow&quot;,\n            &quot;text-shadow&quot;,\n            &quot;resize&quot;,\n            &quot;transition&quot;\n        ]\n    }\n}\n</code></pre>',121),i={setup:(e,{expose:i})=>(i({frontmatter:{}}),(e,i)=>(o(),t("div",n,[s])))};export default i;
