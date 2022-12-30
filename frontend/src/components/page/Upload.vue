<template>
  <div class="enter form-box">
    <div class="header">Choose image to upload</div>
    <div class="body">
      <form @submit.prevent="uploadFile">
        <div class="field">
          <div class="file">
            <input type="file" accept="image/jpeg, image/png" name="image" id="button-field-label" class="hidden"
                   v-on:change="onFileChosen">
          </div>
        </div>
        <div class="field error">{{ error }}</div>
        <label for="button-field-label">
          <div class="button-field">
            <input type="submit" value="Upload">
          </div>
        </label>
      </form>
      <template v-if="image">
        <div class="preview">
          <img style="object-fit: contain" :src="image" alt="preview">
        </div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: "Upload",
  data: function () {
    return {
      image: "",
      error: ""
    }
  },
  methods: {
    onFileChosen: function (event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = event => {
        this.error = "";
        this.image = event.target.result;
      };
    },

    uploadFile: function () {
      this.$root.$emit("onUploadImage", this.image);
    }
  },
  beforeCreate() {
    this.$root.$on("onUploadValidationError", (error) => {
      this.error = error
    })
    this.$root.$on("hideImage", () => {
      this.image = ""
    })
  }
}
</script>

<style scoped>

</style>
