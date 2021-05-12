<template>
  <section class="skills">
    <div>
      <h1 class="skills__title">My skills</h1>
    </div>
    <div class="skills__content">
      <p v-for="skill in skills" :key="skill">{{ skill }}</p>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const skills = [
      'HTML',
      'Javascript',
      'CSS/SCSS',
      'Vue',
      'Babel',
      'Webpack',
      'Jest',
      'NightWatch',
      'Docker',
    ]

    return {
      skills
    }
  }
}

function add_scroll_position_event (center_rgb, selector) {
  const [red, green, blue] = center_rgb.map(color => 255 - color)
  const section = document.querySelector(selector)
  const sectionHeight = section.offsetHeight 
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset
    const difference = (sectionHeight / 3) - scrollY
    const positiveDifference = difference < 0 ? -difference : difference

    let y = 1 + (positiveDifference) / 100
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red/y, green/y, blue/y]
      .map(Math.round)
      .map(color => 255 - color)
    section.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  })
}

</script>

<style lang="scss" scoped>

  h1 {
    // position: absolute;
    font-size: 10rem;
  }

  .skills {
    width: 1280px;
    height: 500vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &__title {
      color: #e77d5d;  
    }

    &__content {
      font-size: 3rem;
      margin-top: 5rem;
    }
  }

</style>
