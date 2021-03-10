# Vue3 + vite template
2021/3/2　V1.0上線

最後一次編輯： 2021.03.10 By ToD

您好，歡迎來到氣象團隊的 Vue3 Single File Component 開發範本

本次版本特色：
* 已裝設 Vuex VueRouter Mock.js scss
* HelloWorld 有少量 Composition API, Vuex, VueRouter, axios code 範例可供參考 

本範本包括幾個部分：

初次使用請依據步驟：
1. 確保自己的 node js 本版足夠新，以避免無法解析語法而導致無法開始專案，當前使用的版本是 v15.10.0
2. npm install
3. npm run dev

部屬時:
1. npm run build
2. 將 dist 中的檔案放置於後端該放置的位置中

在您 glt clone 完本套件後　請先注意下列事項：
* 本範本未使用 Vuetify，該套件暫無支持 Vue3 開發使用
* 本範本僅安裝所有必須之套件　若有其他需求請自行於 npm 上安裝
* 請務必利用 git remote set-url 將其改為自己之專案　請勿將修改後之專案推上此處
* 請務必打開 package.json，將專案名稱改為自己之專案名字
* 本專案於 Vue3, Vuex, VueRouter, scss，各處已具備簡單的範例程式可供開發參考，後可逕行刪除即可

裝不起來的人看這裡:

1. 刪除 node js
2. 確認 node 跟 npm 在 terminal 中都無效了
3. 重新安裝(確定 14 版可以)
4. 刪除專案底下的 node modules 
5. npm install
6. npm run dev 開始開發
7. npm run serve 要執行過 npm run build 才可以用