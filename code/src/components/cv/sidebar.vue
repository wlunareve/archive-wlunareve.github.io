<template>
  <aside id="cv-sidebar" 
    class="cv-sidebar"
  >
    <span class="cv-sidebar__title">
      宋明謙 
    </span>
    <span>
      Tod Sung
    </span>
    <span>
      前端工程師
    </span>
    <ul class="details">
      <li>
        0975-871-937
      </li>
      <li>
        wlunareve@gmail.com
      </li>
      <li>
        中正大學 資訊管理學系 
      </li>
    </ul>
    <div class="about">
      <p v-for="(about, index) in aboutContents"
        :key="index"
        class="about__item"
      >
        {{ about }}
      </p>
    </div>
    <div class="skills">
      <span class="skills__title">skills</span>
      <div class="skills__content">
        <Skill v-for="toolSkill in skills" 
          :key="toolSkill.name"
          :name="toolSkill.name"
          :icon="toolSkill.icon"
          class="skills__item"
        />
      </div>
    </div>
  </aside>
</template>

<script>
  import { frontEndSkills, toolSkills } from '@/config/cv/skill_config.js'
  import { computed } from "vue";
  import Skill from "@/components/cv/skill.vue"

  export default {
    name: 'CvSidebar',
    
    components: {
      Skill,
    },

    setup() {
      const aboutContents = [
        '我是 Tod，是講究務實的人，總是渴望把一切事情的基本做好，追求寫出可複用，少技術債的程式碼。',
        '正嘗試著分享我的歷程，期待精進自己的同時也能幫到他人，希望自己能夠從小處開始分享，將自己的小小能量散發出去！'
      ]

      const skills = computed(() => {
        return [...frontEndSkills, ...toolSkills]
      })

      return {
        aboutContents,
        skills,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../css/color';

  .cv-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    height: 100%;
    color: #fff;
    background-color: $teal-darken4;

    &__title {
      margin: 2rem 0 0;
      font-size: 2rem;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    margin: 2rem 0 0;
    width: 100%;

    &__title {
      font-size: 1.5rem;
    }

    &__item {
      line-height: 2;
    }
  }

  .about {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
  }

  .skills {
    align-self: flex-start;
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 2rem;

    }

    &__content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 1rem 0;
    }

    &__item {
      padding: .125rem 0;
      // border: 1px solid #fff;
      // border-radius: 2rem;
    }
  }
</style>