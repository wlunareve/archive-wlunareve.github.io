<template>
  <div id="cv-content" class="cv-content">
    <section class="cv-content__section">
      <h1 class="cv-content__title">Profile</h1>
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
      <h1 class="cv-content__title">Skill</h1>
      了解: 閱讀過文章，積極應用中
      具備: 擁有獨立完成作業的經驗
      熟悉: 大體上能快速找到問題，甚至指導別人完成工作
      <Article
        title="FrontEnd"
        :li_contents="[
          'HTML 了解 Semantic HTML',
          'Javascript 了解 Funtional Programming，能適當撰寫可複用程式碼',
          'CSS/Scss 能透過 BEM 命名元件，適當切割元件',
          'Vue/Vuex/VueRouter/vue-i18n 專案經驗以 Vue2 為主，在 Side Project 使用 composition API 作為練習',
          'leaflet 介接 geoJson 搭配 openStreetMap 達成台灣各地資料展現',
          'd3 能將資料繪製成柱狀、線狀圖，提供資料視覺化表現',
          'Jest 曾使用 jest 進行 vue 相關的單元測試',
          'NightWatch 曾使用 Nightwatch 進行 E2E 測試',
        ]"
      />
      <Article
        title="Tool"
        :li_contents="[
          'Git 具備基本指令操作能力，能應用 semantic commit 進行版控，了解 github flow',
          'Webpack 具有前端網站 config 調整經驗，能獨立完成版本更新工作',
          'Vite 將團隊函式庫組件轉換至 vite ，增進團隊工作效率',
          'Docker 具備基本指令操作能力 能夠撰寫 compose ',
        ]"
      />
    </section>

    <section class="cv-content__section article" >
      <h1 class="cv-content__title">Employment History</h1>
      <Article
        title="資拓宏宇國際股份有限公司-氣象部門"
        :li_contents="[
          '積極參與技術討論，共同增進團隊開發能力，平常會撰寫新手指南或是 best practice 分享給小組成員',
          '經常進行技術嘗試，推動技術更迭， 透過調整 webpack 或是嘗試 vite、stylelint、jest 來幫助小組成員快速開發',
          '做為新人 mentor，幫助上手工作'
        ]"
      />
    </section>  

    <section class="cv-content__section article">
      <h1 class="cv-content__title">Portfolio</h1>
      <Article
        title="Qplus 劇烈天氣監測系統"
        subtitle="系統根據不同的使用單位，提供各式各樣不同的客製化氣象變數產品 JS + Vue + SCSS + BEM + Webpack"
        :li_contents="[
          '在職期間主動重構前端程式碼，提高客製化的擴充性',
          '重構同時並行開發數個地圖產品，確保不延誤預期的客製化需求',
          '利用 Vue I18n 開發中英文版的切換功能',
          '在職期間主動學習 SCSS 及 BEM 修改全新設計頁面'
        ]"
      />
      <Article
        title="Open Data 氣象資料開發平臺"
        subtitle="氣象局 open data api 的資料展示介紹網站 Vue + Node JS"
        :li_contents="[
          '承接他組開發網頁，處理日常網頁前後端的維護工作',
          '擁有基本的後端經驗，是具有一定機動性的工具人',
        ]"
      />
    </section>
  </div>
</template>

<script>
import Article from "@/components/cv/article.vue"
export default {
  name: 'cv-content',

  components: {
    Article
  },

  setup() {
    const skills = [
      'HTML',
      'Javascript',
      'CSS/SCSS',
      'Vue',
      'Funtional Programming',
      'Webpack',
      'Vite',
      'Jest',
      'NightWatch',
      'Docker',
    ]

    return {
      skills
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../css/color';

  .cv-content {
    margin: 0 1rem;

    &__section {
      margin: 0 0 .5rem;
    }

    &__title {
      position: relative;
      font-size: 2rem;

      &::after {
        position: absolute;
        top: 36px;
        display: block;
        content: '';
        width: 100%;
        border-top: 2px solid $gray;
      }
    }
  }

  .article {
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 1.5rem;
    }

    &__subtitle {
      text-indent: 2rem;
      color: $gray;
    }

    ul {
      // padding: 1rem 0rem;
      list-style: disc;
    }

    li {
      margin: 0 2rem;
      line-height: 1.68;
    }
  }
</style>