<template>
  <div id="cv-content" 
    class="cv-content"
  >
    <section class="cv-content__section article">
      <h1 class="cv-content__title">
        Work Experience
      </h1>
      <Article
        title="資拓宏宇氣象部門 - 前、全端工程師"
        :li-contents="[
          '初入公司時目標以全端工程師發展，但職涯上主要以前端工作為主，也漸漸喜歡上處理前端工作',
          '積極參與技術討論，共同增進團隊開發能力，平常會讀技術文章寫成指南分享給其他人',
          '進行技術嘗試，推動技術更迭， 透過調整 webpack 或是嘗試 vite、eslint、stylelint、jest 來幫助小組快速開發',
          '做為新人 mentor，幫助上手工作'
        ]"
      />
      <Article
        title="治略資訊整合股份有限公司 - 後端實習生"
        :li-contents="[
          '擔任後端實習生，幫忙 db 備份，爬蟲工作',
          '在實習中自主學習 docker，使用 django 開發 api，與兩位前端實習生合作',
        ]"
      />
    </section>

    <section class="cv-content__section article">
      <h1 class="cv-content__title">
        Portfolio
      </h1>
      <Article
        title="Qplus 劇烈天氣監測系統"
        title-link="https://qpeplus.cwb.gov.tw/pub/"
        subtitle="系統根據不同的使用單位，提供各式各樣不同的客製化氣象變數產品 JS + Vue + SCSS + BEM + Webpack"
        :li-contents="[
          '在職期間主動重構前端程式碼，提高客製化的擴充性',
          '重構同時，能夠並行開發數個地圖產品，確保不延誤預期的客製化需求',
          '利用 Vue I18n 開發中英文版的切換功能',
          '主動學習 SCSS 及 BEM 套用至全新設計改版網站'
        ]"
      />
      <Article
        title="Open Data 氣象資料開發平臺"
        title-link="https://opendata.cwb.gov.tw/index"
        subtitle="氣象局 open data api 的資料展示介紹網站 Vue + Node JS"
        :li-contents="[
          '承接他組開發網頁，處理日常網頁前後端的維護工作',
          '本身擁有基本的後端經驗，能與後端工程師適當溝通',
        ]"
      />
    </section>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { frontEndSkills, toolSkills } from '@/config/cv/skill_config.js'
  import Article from "@/components/cv/article.vue"
  import Skill from "@/components/cv/skill.vue"
  export default {
    name: 'CvContent',

    components: {
      Article,
      Skill,
    },

    // 之後給每個地方都擴展 dialog

    setup() {
      const profileContents = [
        "我是 Tod，是一個務實的人，可以獨立解決問題，也能與夥伴良好合作，",
        "平常學習的手段是閱讀技術文章、雜誌，目前努力朝積極分享邁進",
        "對做出具實用性的產品有高度興趣，追求寫出可複用，少技術債的程式碼。",
        "在職場工作的觀點，我認為是一個互利共生的關係，",
        "與夥伴共同學習、進步，增進個人能力，同時間也開發出優秀、實用性高的產品，是我理想的工作環境。",
        "目前正尋找有良好開發流程的公司，希望能找到志同道合的夥伴，同時我付出的是自己面對問題、解決問題，善於學習的能力。",
      ]

      return {
        profileContents,
        frontEndSkills,
        toolSkills,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../css/RWD_mixin';
  @import '../../css/color';

  .cv-content {
    margin: 0 1rem;

    &__section {
      margin: 0 0 .5rem;
    }

    &__title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 2rem;

      &::after {
        position: absolute;
        top: 36px;
        display: block;
        content: '';
        width: 100%;
        border-top: 2px solid $grey-lighten2;
      }
    }
  }

  .profile {
    &__content {
      line-height: 1.68;
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
      color: $grey-base;
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

  .skill {
    &__explanation {
      position: static;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      row-gap: .3rem;
    }

    &__title {
      font-size: 1.4rem;
      font-weight: bold;
      line-height: 2;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      @include laptop {
        grid-template-columns: repeat(2, 1fr);
      }

      @include mobile {
        grid-template-columns: 1fr;
      }
    }

    &__level {
      display: flex;

      &-item {
        margin: 0 .2rem;
        width: 3rem;
        height: .5rem;
        font-size: .75rem;
        background: $grey-base;
        transform: skewX(27.5deg);

        &--active {
          background: $teal-darken4;
        }
      }
    }
  }

  .icon {
    font-size: 1.5rem;
    color: #e92f4d;
    cursor: pointer;
  }
</style>