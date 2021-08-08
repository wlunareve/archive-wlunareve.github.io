<template>
  <div id="cv-content" 
    class="cv-content"
  >
    <section class="cv-content__section article">
      <h1 class="cv-content__title">
        Profile
      </h1>
      <p class="profile__content">
        三年的網頁開發經驗，建置具備 i18n，RWD 的大型地圖互動網站，亦有快速迭代提供專業人員操作的數個小系統經驗。
        前端使用 JavaScript 後端使用 Node.js，Python，
        除了發展系統，擔任小組骨幹，經常幫助團隊成員解決問題，與主管討論如何優化開發流程並且協助面試新夥伴。
        工作之餘閱讀技術文章，分享給組員，對技術富有熱忱，具備有效解決問題的自信。
      </p>
      <!-- 技術網誌： 除了個人網頁之外，還有一個與 UI 夥伴共同合作的部落格。 -->
    </section>

    <section class="cv-content__section article">
      <h1 class="cv-content__title">
        Employment History
      </h1>
      <Article
        title="資拓宏宇氣象部門 - 前、全端工程師 － Apr 2019 ~ Aug 2021"
        paragraph="擔任全端工程師，負責氣象局專案業務，解決客戶需求議題、設計網頁架構、實作系統程式、串接即時資料，提供實時資料查詢、各式不同氣象參數整合的地圖互動網站。"
        :ul-contents="[
          {
            title: '系統開發',
            content: [
              '與客戶定期開會討論，剖析需求問題可行性，提供解決方案。',
              '使用 Vue 生態系 Vuetify 作為主要工具，開發、維護、重構共計 6 個專案網頁。',
              '配合設計師，以 Scss BEM 實作具備 RWD 的網站，提供各式裝置也能觀看得宜的介面。',
              '使用 Leaflet 搭配 OpenstreetMap 開發用以展示台灣地圖氣象資訊的網頁功能，供給各政府部門單位實時防災監控。',
              '使用 D3.js 繪製各式氣象資訊圖表，給予使用者更佳的資料視覺化體驗。',
              '除了前端工作，亦使用 Node.js 維護氣象局 Open Data 前台網站，並擴充網站新年度功能。',
            ]
          },
          {
            title: '技術導入',
            content: [
              '導入 Vue I18n 提供網站多國語言功能，友善他國使用者不受語言隔閡。',
              '調整 webpack 參數，自主導入 vite，ESlint，Stylelint，Jest ，確保程式碼支援度、開發速度、品質。',
            ]
          },
          {
            title: '自主學習、協同合作',
            content: [
              '自發學習 functional programming ，目的是讓程式碼更簡潔更易讀更優美。',
              '工作兩年半間，於組內分享超過十篇技術討論，涵蓋語言深度細節、框架的語法糖、撰寫的 Best Practice、單元測試、瀏覽器渲染、functional programming。',
              '寫過 Python，Django，能操作 Docker，了解 Compose 與 Swarm：與後端工程師的溝通相對快速、有效。',
            ]
          },
        ]"
      />
      <Article
        title="治略資訊整合股份有限公司 - 後端實習生 － Jan 2018 ~ Jul 2018"
        paragraph="於大四上學期提早修畢學分，後於大四下尋找實習機會，學習職場生活，提早培養工作能力。"
        :ul-contents="[
          {
            title: '經驗積累',
            content: [
              '利用 Requests，pandas，SQLAlchemy 處理網頁爬蟲、資料處理、 db 備份。',
              '與兩位前端實習生合作，使用 Flask 開發 API，學習 Docker 套用網站部屬。',
              '居家學習 Django，確保不會被框架所局限。',
            ]
          },
        ]"
      />
    </section>
  </div>
</template>

<script>
  import Article from "@/components/cv/article.vue"
  export default {
    name: 'CvContent',

    components: {
      Article,
    },

    setup() {

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

      // &::after {
      //   position: absolute;
      //   top: 36px;
      //   display: block;
      //   content: '';
      //   width: 100%;
      //   border-top: 2px solid $grey-lighten2;
      // }
    }
  }

  .profile {
    &__content {
      text-indent: 2rem;
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