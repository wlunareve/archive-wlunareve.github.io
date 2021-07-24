<template>
  <nav class="nav">
    <div class="nav__container">
      <div class="tab">
        <router-link to="/" 
          class="nav__title tab__item"
        >
          ToD
        </router-link>
        <router-link v-for="({ name, link }) in tabs "
          :key="name"
          :to="link"
          class="tab__item"
        >
          {{ name }}
        </router-link>
      </div>
      <div class="nav__social-media">
        <a v-for="({ name, link }) in socialMegias" 
          :key="name" 
          :href="link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i class="icon fab"
            :class="name"
          />
        </a>
      </div>
    </div>
  </nav>
</template>
  
<script>
  export default {
    name: "Navbar",

    setup() {
      const tabs = [
        { name:  '文章清單', link: '/markdown'},
        { name:  '關於我', link: '/cv'},
      ]

      const socialMegias = [
        { name:  'fa-github', link: 'https://github.com/wlunareve'},
        { name:  'fa-linkedin-in', link: 'https://www.linkedin.com/in/%E6%98%8E%E8%AC%99-%E5%AE%8B-982b30172/'},
        { name:  'fa-instagram', link: 'https://www.instagram.com/sung35680/?hl=zh-tw'},
      ]

      return {
        tabs,
        socialMegias
      }
    }
};
</script>

<style lang="scss" scoped>
  @import '../../css/color';

  .nav {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1680px;
    min-height: 3.25rem;
    border-bottom: 1px solid #dbdbdb;
    background: #fff;
    z-index: 1;

    &__title {
      font-size: 1.5rem;
      font-weight: 800;
    }

    &__container {
      display: flex;
      justify-content: space-between;
      width: 1680px;
    }

    &__social-media {
      display: flex;
      align-items: center;
    }
  }

  .tab {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.35rem;
    font-weight: 500;

    &__item:hover {
      color: $skill-active;
    }
  }

  // .nav:hover {
  //   background-color: #f9f8f7;
  // }

  .icon {
    padding: 0 1rem;
    font-size: 1.5rem;
  }
</style>
