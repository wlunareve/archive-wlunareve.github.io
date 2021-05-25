<template>
  <section class="portfolio">
    <div class="portfolio__section">
      <div>
        <h2>Qplus 劇烈天氣監測系統</h2>
        開發了數個地圖產品，中英文版的切換功能，全新設計頁面的修改
      </div>
      <div class="img__container">
        <img src="/src/assets/radar.gif"
            class="img"
        >
      </div>
    </div>
    <div class="portfolio__section">
      <div>
        <h2>Open Data 氣象資料開發平臺</h2>
        負責日常網頁端的維護工作
      </div>
      <div class="img__container">
        <img src="/src/assets/radar.gif"
            class="img"
        >
      </div>

    </div>

    <div>
      <h2>數個氣象局內部小型網站開發</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'portfolio'
}
</script>

<style lang="scss" scoped>
  .portfolio {
    display: flex;
    flex-direction: column;

    &__section {
      margin: 1rem;
      display: flex;
      justify-content: space-around;

      &:nth-child(even) {
        flex-direction: row-reverse;
      }
    }

    h2 {
      font-size: 3rem;
    }
    .img {
      height: 100%;

      &__container {
        height: 320px;
      }
    }
  }
</style>