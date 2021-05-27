<template>
  <nav class="nav">
    <div class="nav__container">
      <a href="/" class="nav__title">ToD</a>
      <div class="nav__link">
        <a v-for="({ name, link }) in links" :key="name" 
          :href="link" 
          target="_blank" rel="noopener noreferrer"
        >
          <i class="icon fab"
            :class="name"
          ></i>
        </a>
      </div>
    </div>
  </nav>
</template>
  
<script>
  export default {
    name: "navbar",

    setup() {
      const links = [
        { name:  'fa-github', link: 'https://github.com/wlunareve'},
        { name:  'fa-linkedin-in', link: 'https://www.linkedin.com/in/%E6%98%8E%E8%AC%99-%E5%AE%8B-982b30172/'},
        { name:  'fa-instagram', link: 'https://www.instagram.com/sung35680/?hl=zh-tw'},
      ]

      return {
        links
      }
    }
};
</script>

<style lang="scss" scoped>
  .nav {
    width: 88%;
    min-height: 3.25rem;
    position: fixed;
    left: 6%;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    z-index: 1;

    &__title {
      font-size: 1.5rem;
      font-weight: 800;
    }

    &__container {
      width: 1680px;
      display: flex;
      justify-content: space-between;
    }

    &__link {
      display: flex;
      align-items: center;
    }
  }

  .nav::hover {
    background-color: #f9f8f7
  }

  .icon {
    font-size: 1.5rem;
    padding: 0 1rem;
  }
</style>
