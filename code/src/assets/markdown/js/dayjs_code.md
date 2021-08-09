# 簡單閱讀 day.js 原始碼
### 筆者小牢騷

這是我第一次的閱讀公開原始碼文章，如果有寫得不好的地方都歡迎來信告知！

### 起源
JavaScript 的 Date API 應是眾所皆知的難用，筆者平常在上班時候，因為覺得簡單的程式碼，不太需要安裝套件，所以就沒有安裝任何時間套件，最近因為同事們專案中都自己偷偷使用時間函式庫，所以也受不了，一用之下才發現驚為天人，寫起來也太輕鬆了吧！

不過回過頭來反思，雖然自己用的愉快，但重要的是了解這些 library 做了哪些事情，才不會陷入只會使用工具的境地，因此這篇文章主要是想看看 day.js 做了哪些事情，以及學習現代 open source library 開發該注意的事情。

### 為什麼選擇 day.js

1. day.js 有個 slogan 說他們是最小的函式庫
2. day.js 的 github stars 數量算蠻多的
3. moment.js 已經停止維護了

### 進入正題

既然選擇了 day.js ， 發揮一點 hack 精神，來看一下，程式碼到底做了些什麼吧！

```javascript=
/dayjs/src/index.js
```
這支檔案是整個 day.js 專案的進入點，整支檔案的目的是用來 init dayjs

當我們執行 dayjs() 時，會建立一個擁有很多操作時間方法的大物件，
我們先討論 5~9 行的內容，
而實際使用 dayjs() 時，第一個 arg： <b>date</b> 是被 parse 的時間格式變數


```javascript=
const dayjs = function (date, c) {
  if (isDayjs(date)) {
    return date.clone()
  }
  // eslint-disable-next-line no-nested-ternary
  const cfg = typeof c === 'object' ? c : {}
  cfg.date = date
  cfg.args = arguments// eslint-disable-line prefer-rest-params
  return new Dayjs(cfg) // eslint-disable-line no-use-before-define
}
```

第九行利用 class 建立的物件，將 cfg 帶入 parse function，之後執行 parseDate function 

```javascript=
class Dayjs {
  constructor(cfg) {
    this.$L = parseLocale(cfg.locale, null, true)
    this.parse(cfg) // for plugin
  }
  
  parse(cfg) {
    this.$d = parseDate(cfg)
    this.$x = cfg.x || {}
    this.init()
  }
}
```

重頭戲來了！在經歷了說短不短的 init 過程以後，我們終於看到 new Date 函式了，仔細來看看這個函式做了些什麼工作吧！

首先如果 date 傳入的是 null ， function 會執行 new Date(NaN)，這在 chrome得到的結果是 Invalid Date
![](https://i.imgur.com/qeMKMqh.png)


```javascript=
const parseDate = (cfg) => {
  const { date, utc } = cfg
  if (date === null) return new Date(NaN) // null is invalid
  if (Utils.u(date)) return new Date() // today
  if (date instanceof Date) return new Date(date)
  if (typeof date === 'string' && !/Z$/i.test(date)) {
    const d = date.match(C.REGEX_PARSE)
    if (d) {
      const m = d[2] - 1 || 0
      const ms = (d[7] || '0').substring(0, 3)
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3]
          || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms))
      }
      return new Date(d[1], m, d[3]
          || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms)
    }
  }

  return new Date(date) // everything else
}
```