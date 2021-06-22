<template>
  <section class="skills">
    <div class="skills__pinner">
      <div class="skills__title-wrapper">
        <h1 class="skills__title">My skills</h1>
      </div>
      <div class="skills__content">
        <p class="skills__item" v-for="skill in skills" :key="skill">{{ skill }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup() {
    const skills = [
      'HTML',
      'Javascript',
      'CSS/SCSS',
      'Vue',
      'Funtional Programming',
      'Babel',
      'Webpack',
      'Svelte',
      'Jest',
      'NightWatch',
      'Docker',
    ]

    const create_skill_item_observer = () => {
      const be_moved_dom = document.querySelector('.skills__content')
      const skills_top = window.scrollY

      const control_scroll_event_listener = (entries, observer) => {
        const translate_skill_content = e => {
          const last_known_scroll_position = window.scrollY
          const translateY_value = (skills_top - last_known_scroll_position) / 4
          be_moved_dom.style.transform = `translateY(${translateY_value}px)`
        }
        if (entries[0].isIntersecting) {
          window.addEventListener('scroll', translate_skill_content)
        } else {
          window.removeEventListener('scroll', translate_skill_content)
        }
      }
      const observer = new IntersectionObserver(control_scroll_event_listener)
      
      observer.observe(be_moved_dom)  
    }
    
    onMounted(() => create_skill_item_observer())

    return {
      skills
    }
  }
}


// function add_scroll_position_event (center_rgb, selector) {
//   const [red, green, blue] = center_rgb.map(color => 255 - color)
//   const section = document.querySelector(selector)
//   const sectionHeight = section.offsetHeight 
//   window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY || window.pageYOffset
//     const difference = (sectionHeight / 3) - scrollY
//     const positiveDifference = difference < 0 ? -difference : difference

//     let y = 1 + (positiveDifference) / 100
//     y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
//     const [r, g, b] = [red/y, green/y, blue/y]
//       .map(Math.round)
//       .map(color => 255 - color)
//     section.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
//   })
// }

</script>

<style lang="scss" scoped>

  $skill-text-color: rgba(154, 205, 50);
  $skill-mask-color: rgba(188, 238, 104, .75);

  h1 {
    // position: absolute;
    font-size: 10rem;
  }

  .skills {
    width: 1280px;
    height: 500vh;
    margin: 0 auto;

    &__pinner {
      width: 100%;
      height: calc(100vh - 7.5rem);
      position: -webkit-sticky;
      position: sticky;
      top: 7.5rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    &__title {
      position: absolute;
      color: $skill-text-color;  

      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 70vw;
        height: 5rem;
        top: -3rem;
        background: $skill-mask-color;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        width:70vw;
        height: 50vh;
        top: 15rem;
        background: $skill-mask-color;;
      }
    }

    &__content {
      font-size: 4rem;
      line-height: 8rem;
      margin-top: 5rem;
      text-align: right;
      color: $skill-text-color;  
      
    }
  }

</style>
