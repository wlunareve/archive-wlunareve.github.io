<template>
  <div id="cv-content" class="cv-content">
    <section class="cv-content__section">
      <h1 class="title">Profile</h1>
      <p>
        我是 ToD，是一個看重實際的人，在職場工作上我認為是一個互利共生的關係，可以獨立解決問題，也能與夥伴良好合作，
      </p>

      <p>
        短期目標：底定 web 的基礎架構，精進語言的熟悉度，與他人良好合作。
      </p>
      <p>
        長期目標：希望有獨立架站能力，掌握清楚前後端各項技術，享受與他人談論技術的快樂。
      </p>

      <p>
        總結上述：希望能找到有良好開發流程的公司，從而培養正確的開發觀念，同時我付出的是自己面對問題、解決問題，善於學習的能力。
      </p>
    </section>

    <section class="cv-content__section">
      <h1 class="title">Employment History</h1>
      <div>
        資拓宏宇-氣象部門
      </div>
      <div>
        治略資訊
      </div>
    </section>  
    <section class="cv-content__section portfolio">
      <h1 class="title">Portfolio</h1>
      <div>
        <h2 class="portfolio__title">Qplus 劇烈天氣監測系統</h2>
        <span class="portfolio__subtitle">系統根據不同的使用單位，提供各式各樣不同的客製化氣象變數產品</span>
        <ul>
          <li> JS + Vue + Webpack</li>
          <li>在職期間主動重構前端程式碼，提高客製化的擴充性</li>
          <li>重構同時並行開發數個地圖產品，確保不延誤預期的客製化需求</li>
          <li> SCSS + BEM </li>
          <li>利用 Vue i18n 開發中英文版的切換功能</li>
          <li>在職期間修改全新設計頁面，主動學習 SCSS 及 BEM 讓網站具備 RWD</li>
        </ul>
      </div>
      <div>
        <h2 class="portfolio__title">Open Data 氣象資料開發平臺</h2>
        <span class="portfolio__subtitle">氣象局 open data api 的資料展示介紹網站</span>
        <ul>
          <li> Vue + Node JS </li>
          <li>承接他組開發網頁，處理日常網頁前後端的維護工作</li>
          <li>擁有基本的後端經驗，是具有一定機動性的工具人</li>
        </ul>
      </div>
    </section>
    <section class="cv-content__section">
      <h1 class="title">Education</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: 'cv-content',
}
</script>

<style lang="scss" scoped>
  .cv-content {
    &__section {
      margin: 0 0 2rem 0; 
    }
  }

  .portfolio {
    display: flex;
    flex-direction: column;
    
    &__title {
      font-size: 1.5rem;
    }
    
    &__subtitle { 
      color: gray;
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

  .title {
    font-size: 2rem;
  }
</style>