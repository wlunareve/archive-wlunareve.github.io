<template>
  <aside id="cv-sidebar" class="cv-sidebar">
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
  name: 'cv-sidebar',

  setup() {
    
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