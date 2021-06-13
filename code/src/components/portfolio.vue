<template>
  <section class="portfolio">
    <div class="portfolio__section">
      <div>
        <h2 class="portfolio__title">Qplus 劇烈天氣監測系統</h2>
        <span class="portfolio__subtitle">Qplus 根據不同的使用單位，提供各式各樣不同的客製化氣象變數產品</span>
        <ul>
          <h3> JS + Vue + Webpack</h3>
          <li>在職期間主動重構前端程式碼，提高客製化的擴充性</li>
          <li>重構同時並行開發數個地圖產品，確保不延誤預期的客製化需求</li>
          <h3> SCSS + BEM </h3>
          <li>利用 Vue i18n 開發中英文版的切換功能</li>
          <li>在職期間修改全新設計頁面，主動學習 SCSS 及 BEM 讓網站具備 RWD</li>
        </ul>
      </div>
      <div class="img__container">
        <img src="/src/assets/radar_satellite.gif"
            class="img"
        >
      </div>
    </div>
    <div class="portfolio__section">
      <div>
        <h2 class="portfolio__title">Open Data 氣象資料開發平臺</h2>
        <span class="portfolio__subtitle">氣象局 open data api 的資料展示介紹網站</span>
        <ul>
          <h3> Vue + Node JS </h3>
          <li>承接他組開發網頁，處理日常網頁前後端的維護工作</li>
          <li>擁有基本的後端經驗，是具有一定機動性的工具人</li>
        </ul>
      </div>
      <div class="img__container">
        <img src="/src/assets/radar_satellite.gif"
            class="img"
        >
      </div>

    </div>

    <div class="portfolio__section">
      <div>
        <h2 class="portfolio__title">數個氣象局內部小型網站開發</h2>
        <ul>
          <h3>Vue</h3>
          <li>具備快速完成數個小型資料網站開發工作的能力</li>
          <h3>Python + Django + Docker</h3>
          <li>也曾作為後端與前端夥伴合作，了解基本的網頁顯示流程</li>
          <li>執行爬蟲工作，提供相關資訊給客戶參考</li>
        </ul>
      </div>
      <div class="img__container">
        <img src="/src/assets/pare2.png"
            class="img"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'portfolio'
}
</script>

<style lang="scss" scoped>
  .portfolio {
    display: flex;
    flex-direction: column;

    &__section {
      margin: 1rem;
      display: flex;
      justify-content: space-around;

      &:nth-child(even) {
        flex-direction: row-reverse;
      }
    }
    
    &__title {
      font-size: 3rem;
    }
    
    &__subtitle { 
      color: gray;
    }

    h3 {
      font-size: 1.5rem;
      margin: 0.25rem 0;
    }
    
    .img {
      height: 100%;

      &__container {
        height: 320px;
      }
    }
    
    ul {
      padding: 1rem 0rem;
      list-style: disc;
    }

    li {
      margin: 0rem 2rem;
      font-size: 1.2rem;
    }
  }

</style>