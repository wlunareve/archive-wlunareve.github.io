<template>
  <nav class="nav">
    <div class="nav__container">
      <router-link to="/" 
        class="nav__title"
      >
        ToD
      </router-link>
      <div class="tab">
        <div class="tab__btn"
          @click="toggleMobileTab"
        >
          <span class="tab__btn-icon" />
          <span class="tab__btn-icon" />
          <span class="tab__btn-icon" />
        </div>
        <div 
          v-if="isShowDesktopTab"
          class="tab__items"
        >
          <router-link 
            v-for="({ name, link }) in tabs "
            :key="name"
            :to="link"
            class="tab__item"
          >
            {{ name }}
          </router-link>
        </div>
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
    <div 
      v-if="!isShowDesktopTab"
      class="mobile-tab__items"
      :class="{
        'mobile-tab__items--active': isShowMobileTab
      }"
    >
      <router-link 
        v-for="({ name, link }) in tabs "
        :key="name"
        :to="link"
        class="mobile-tab__item"
        :class="{
          'mobile-tab__item--active': isShowMobileTab
        }"
      >
        {{ name }}
      </router-link>
    </div>
  </nav>
</template>
  
<script>
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'
  export default {
    name: "Navbar",

    setup() {
      const isShowMobileTab = ref(false)
      const toggleMobileTab = () => {
        isShowMobileTab.value = !isShowMobileTab.value
      }
      const store = useStore()
      
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
        isShowDesktopTab: computed(() => store.state.width > 768),
        isShowMobileTab,
        toggleMobileTab,
        tabs,
        socialMegias,
      }
    }
};
</script>

<style lang="scss" scoped>
  @import '../../css/RWD_mixin';
  @import '../../css/color';

  .nav {
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100vw;
    min-height: 3.25rem;
    border-bottom: 1px solid #dbdbdb;
    background: #fff;
    z-index: 1;

    @include mobile {
      display: grid;
      grid-template-rows: auto auto;
    }

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80vw;
      max-width: 1680px;

      @include mobile {
        padding: 0 .5rem;
        width: 100vw;
        height: 2.5rem;
      }
    }

    &__title {
      font-size: 1.5rem;
      font-weight: 800;

      &:hover {
        color: $skill-active;
      }
    }

    &__social-media {
      display: flex;
      align-items: center;
    }
  }

  .tab {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 1rem;
    font-size: 1.35rem;
    font-weight: 500;

    &__btn {
      display: none;
      cursor: pointer;

      @include mobile {
        display: flex;
        flex-direction: column;
      }

      &-icon {
        &::after {
          content: '';
          display: block;
          margin: .1rem 0;
          width: 1rem;
          height: .1rem;
          background: gray;
        }
      }
    }

    &__items {
      display: flex;
      gap: 1rem;
    }

    &__item {
      :hover {
        color: $skill-active;
      }
    }
  }

  .mobile-tab  {
    &__items { 
      position: relative;
      top: -100%;
      display: grid;
      max-height: 0;
      grid-template-columns: 1fr;
      opacity: 0;
      transition-property: opacity, max-height, top;
      transition-duration: .5s, .5s, 2s;
      transition-timing-function: linear;
      visibility: hidden;

      &--active {
        top: 0;
        max-height: 100px;
        opacity: 1;
        visibility: visible;
      }
    }

    &__item { 
      padding: .2rem .5rem;
      border-top: 1px solid #000;
    }
  }

  .icon {
    padding: 0 1rem;
    font-size: 1.5rem;

    @include mobile {
      font-size: 1rem;
    }
  }
</style>
