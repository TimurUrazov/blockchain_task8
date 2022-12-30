<template>
  <header>
    <nav>
      <ul>
        <li><a href="#" @click.prevent="changePage('Upload')">Upload</a></li>
        <li><a href="#" @click.prevent="changePage('Download')">Download</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    changePage: function (page) {
      this.$root.$emit("onChangePage", page);
    },
  }
}
</script>

<style scoped>

</style>