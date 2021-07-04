<template>
  <div id="cv-sidebar" class="cv-sidebar">
    <span class="cv-sidebar__title">
      宋明謙 
    </span>
    <span>
      Tod Sung
    </span>
    <span>
      前端工程師
    </span>
    <div class="details">
      <span class="details__title">
        details
      </span>
      <span>
        0975871937
      </span>
      <span class="skills__item">
        wlunareve@gmail.com
      </span>
    </div>
    <div class="skills">
      <span class="skills__title">
        skills
      </span>
      <span v-for="skill in skills" :key="skill"
        class="skills__item" 
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cv-sidebar',

  setup() {
    const skills = [
        'HTML',
        'Javascript',
        'CSS/SCSS',
        'Vue',
        'Funtional Programming',
        'Babel',
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
  .cv-sidebar {
    margin: 0 0 2rem 0;
    height: 100%;
    background-color: #084C41;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    &__title {
      margin: 2rem 0 0 0;
      font-size: 2rem;
    }
  }

  .skills {
    margin: 2rem 0 0 0;
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 1.5rem;
    }

    &__item {
       line-height: 2;
    }
  }

  .details {
    margin: 2rem 0 0 0;
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 1.5rem;
    }

    &__item {
       line-height: 2;
    }
  }
</style>