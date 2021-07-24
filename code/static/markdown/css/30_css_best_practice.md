# 30 css best practice

https://code.tutsplus.com/tutorials/30-css-best-practices-for-beginners--net-6741

僅記錄還不曾實踐的做法

## 1. Organize the Stylesheet With a Top-Down Structure

建議可以根據 source code 去排序 css 的撰寫順序
```
body, a, p, h1 {

}
#header {

}
#nav-menu {

}
#main-content{

}
```

## 2. utility base or components base css

Tailwind css 的模式是 utility base 的 css
改動可以更簡單

目前我使用的 bem 命名方式是 components base 的 css
缺點是會寫重複的 css 相應的打包時也會有更大的大小

## 3. Use the Right Doctype

// <!DOCTYPE html> 
使用 html5 時添加這個，向瀏覽器宣告這份文件是 html5

## 4. Understand the Difference Between Block and Inline Elements

Here are the lists of elements that are typically inline:

inline 元素
```
span, a, strong, em, img, br, input, abbr, acronym
```

block 元素
```
div, h1...h6, p, ul, li, table, blockquote, pre, form
```

## 5. Use Absolute Positioning Sparingly

謹慎使用絕對定位，太多的絕對定位會使得網頁布局太亂

## 6. Avoid Extra Selectors

使用過多的 selector，除了 code 的複雜度更高，瀏覽器搜尋的效率也會更差