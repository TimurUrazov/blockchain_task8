<template>
  <div class="enter form-box">
    <div class="header">Download last uploaded image</div>
    <div class="body">
      <form @submit.prevent="downloadFile">
        <div class="field error">{{ error }}</div>
        <div class="button-field">
          <input type="submit" value="Download">
        </div>
      </form>
      <template v-if="image">
        <div class="preview">
          <img :src="image" alt="preview">
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Download",
  data: function () {
    return {
      image: "",
      error: ""
    }
  },
  methods: {
    downloadFile: function () {
      this.$root.$emit("onDownloadImage");
    }
  },
  beforeCreate() {
    this.$root.$on("onImageDownloaded", image => {
      this.image = image
    })
    this.$root.$on("onImageNotSet", error => {
      this.error = error
    })
  }
}
</script>

<style scoped>

</style>