<template>
<!-- mt__ten  -->
  <div class="center pointer portfolio__sidebar">
    <div class="portfolio__sidebar__div">
      <div class="mr__ten portfolio__sidebar__item" @click="goPage('PortfolioPage')" :class="[toActive === 'PortfolioPage'? 'active' : '']">조회</div>
      <div class="mr__ten portfolio__sidebar__item" @click="goPage('PortfolioRecommendPage')" :class="[toActive === 'PortfolioRecommendPage'? 'active' : '']">추천</div>
      <div
      class="portfolio__sidebar__item"
      @click="goPage('PortfolioSharePage')" :class="[toActive === 'PortfolioSharePage'? 'active' : '']">공유</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromActive:'',
      toActive: ''
    }
  },
  watch: {
    $route(to,from) {
			this.fromActive = from.name;
			this.toActive = to.name;
      // console.log(this.fromActive,'-->', this.toActive)
      // console.log(this.toActive)
		}
  },
  methods : {
    goPage(idName) {
      this.$router.push({
        name:idName
      })
      this.toActive = idName;
    },
  }
}
</script>

<style>

</style>