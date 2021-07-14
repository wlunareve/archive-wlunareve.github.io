<template>
  <div id="cv-content" class="cv-content">
    <section class="cv-content__section">
      <h1 class="cv-content__title profile">Profile</h1>
      <p class="profile__content">
        我是 ToD，是一個務實的人，在職場工作上我認為是一個互利共生的關係，可以獨立解決問題，也能與夥伴良好合作，
      </p>
      <p>
        平常研究的手段是閱讀技術文章、雜誌，目前想要努力朝向分享前進。
      </p>
      <p class="profile__content">
        對做出具實用性的產品有高度興趣，正積極於寫出可複用，少技術債的程式碼，
      </p>
      <p class="profile__content">
        目前正尋找有良好開發流程的公司，希望能找到志同道合的夥伴，同時我付出的是自己面對問題、解決問題，善於學習的能力。
      </p>
    </section>

    <section class="cv-content__section">
      <h1 class="cv-content__title">
        Skill
        <i class="icon fas fa-exclamation-circle"
          @click="showSkillExplanation"
        />
      </h1>
      <div v-if="isShowSkillExplanation"
        class="skill__explanation"
      >
        <div class="skill__level">
          <div v-for="(levelItem, index) in [...Array(3)]"
            :key="index"
            class="skill__level-item skill__level-item--active"
          >
          </div>
        </div>
        <span>了解: 閱讀過文章，積極應用中</span>
        <span>具備: 擁有獨立完成作業的經驗</span>
        <span>熟悉: 大體上能快速找到問題，甚至指導別人完成工作</span>
      </div>
      <h2 class="skill__title">
        Front End
      </h2>
      <div class="skill__wrapper">
        <Skill v-for="frontEndSkill in frontEndSkills" :key="frontEndSkill.name"
          :name='frontEndSkill.name'
          :description='frontEndSkill.description'
          :level='frontEndSkill.level'
          :icon="frontEndSkill.icon"
        />
      </div>
      <h2 class="skill__title">
        Tool
      </h2>
      <div class="skill__wrapper">
        <Skill v-for="toolSkill in toolSkills" :key="toolSkill.name"
          :name='toolSkill.name'
          :description='toolSkill.description'
          :level='toolSkill.level'
          :icon="toolSkill.icon"
        />
      </div>
    </section>

    <section class="cv-content__section article" >
      <h1 class="cv-content__title">Employment History</h1>
      <Article
        title="資拓宏宇國際股份有限公司-氣象部門"
        :li_contents="[
          '積極參與技術討論，共同增進團隊開發能力，平常會讀技術文章寫成指南或是 best practice 分享給小組',
          '經常進行技術嘗試，推動技術更迭， 透過調整 webpack 或是嘗試 vite、stylelint、jest 來幫助小組快速開發',
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
          '本身擁有基本的後端經驗，能與後端工程師適當溝通',
        ]"
      />
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import Article from "@/components/cv/article.vue"
import Skill from "@/components/cv/skill.vue"
export default {
  name: 'cv-content',

  components: {
    Article,
    Skill,
  },

  setup() {
    const frontEndSkills = [
      {
        name: 'HTML',
        description: '了解 Semantic HTML',
        level: 1,
        icon: {
          source: 'fas',
          name: 'fa-code',
        },
      },
      {
        name: 'Javascript',
        description: '了解 Funtional Programming，能適當撰寫可複用程式碼',
        level: 3,
        icon: {
          source: 'fab',
          name: 'fa-js',
        },
      },
      {
        name: 'CSS/Scss',
        description: '能透過 BEM 命名元件，適當切割元件',
        level: 2,
        icon: {
          source: 'fab',
          name: 'fa-css3',
        },
      },
      {
        name: 'Vue',
        description: '專案經驗以 Vue2 為主，在 Side Project 使用 composition API 作為練習',
        level: 2,
        icon: {
          source: 'fab',
          name: 'fa-vuejs',
        },
      },
      {
        name: 'leaflet',
        description: '介接 geoJson 搭配 openStreetMap 達成台灣各地資料展現',
        level: 2,
        icon: {
          source: 'far',
          name: 'fa-map',
        },
      },
      {
        name: 'd3',
        description: '能將資料繪製成柱狀、線狀圖，提供資料視覺化表現',
        level: 2,
        icon: {
          source: 'fas',
          name: 'fa-chart-line',
        },
      },
      {
        name: 'Jest',
        description: '曾使用 jest 進行 vue 相關的單元測試',
        level: 1,
        icon: {
          source: 'fas',
          name: 'fa-file-alt',
        },
      },
      {
        name: 'NightWatch',
        description: '曾使用 Nightwatch 進行 E2E 測試',
        level: 1,
        icon: {
          source: 'fas',
          name: 'fa-file-alt',
        },
      },
    ]

    const toolSkills = [
      {
        name: 'Git',
        description: '具備基本指令操作能力，能應用 semantic commit 進行版控，了解 github flow',
        level: 2,
        icon: {
          source: 'fas',
          name: 'fa-code-branch',
        },
      },
      {
        name: 'Webpack',
        description: '具有前端網站 config 調整經驗，能獨立完成版本更新工作',
        level: 2,
        icon: {
          source: 'far',
          name: 'fa-file-archive',
        },
      },
      {
        name: 'Vite',
        description: '將團隊函式庫組件轉換至 vite ，增進團隊工作效率',
        level: 1,
        icon: {
          source: 'far',
          name: 'fa-file-archive',
        },
      },
      {
        name: 'Docker',
        description: '具備基本指令操作能力 能夠撰寫 compose',
        level: 2,
        icon: {
          source: 'fab',
          name: 'fa-docker',
        },
      },
    ]

    const isShowSkillExplanation = ref(true)

    const showSkillExplanation = () => {
      isShowSkillExplanation.value = !isShowSkillExplanation.value
    }

    return {
      frontEndSkills,
      toolSkills,
      isShowSkillExplanation,
      showSkillExplanation,
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
        border-top: 2px solid $gray;
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

  .skill {
    &__explanation {
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-size: 1.2rem;
      font-weight: bold;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    &__level {
      display: flex;

      &-item {
        margin: 0 .2rem;
        width: 3rem;
        height: .5rem;
        font-size: .75rem;
        background: $gray;
        transform: skewX(27.5deg);

        &--active {
          background: $skill-active;
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