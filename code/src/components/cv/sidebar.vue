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
    <div class="details">
      <span>
        0975871937
      </span>
      <span>
        wlunareve@gmail.com
      </span>
      <span>
        CCU
      </span>
      <span>
        中正大學 資訊管理學系 
      </span>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'CvSidebar',

    setup() {
      
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../css/color';

  .cv-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 2rem;
    height: 100%;
    color: #fff;
    background-color: $teal-darken4;

    &__title {
      margin: 2rem 0 0;
      font-size: 2rem;
    }
  }

  .skills {
    display: flex;
    flex-direction: column;
    margin: 2rem 0 0;

    &__title {
      font-size: 1.5rem;
    }

    &__item {
      line-height: 2;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    margin: 2rem 0 0;

    &__title {
      font-size: 1.5rem;
    }

    &__item {
      line-height: 2;
    }
  }
</style>