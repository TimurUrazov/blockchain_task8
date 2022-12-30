<template>
  <div class="middle">
    <main>
      <Upload v-if="page === 'Upload'"/>
      <Download v-if="page === 'Download'"/>
    </main>
  </div>
</template>

<script>
import Upload from "./page/Upload";
import Download from "./page/Download";

export default {
  name: "Middle",
  data: function () {
    return {
      page: "Upload",
      parameter: ""
    }
  },
  components: {
    Download,
    Upload,
  },
  computed: {}, beforeCreate() {
    this.$root.$on("onChangePage", (page) => this.page = page)
  }
}
</script>

<style scoped>

</style>
