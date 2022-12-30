<template>
  <div id="app">
    <Header/>
    <Middle/>
    <notifications position="bottom right" max="1"/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Middle from "./components/Middle";

export default {
  name: 'App',
  components: {
    Middle,
    Header
  },

  beforeCreate() {
    this.$root.$on("onUploadImage", image => {
      if (image === "") {
        this.$root.$emit("onUploadValidationError", "Image is not chosen");
        return
      }
      this.$ipfs.add(image).then(async r => {
        this.$contract.set(r[0].hash).then(async r => {
          await r.wait()
          this.$notify({
            title: 'Success',
            message: 'Image uploaded',
            type: 'success'
          });
        }).catch(e => {
          console.log("Error while setting to contract: " + e)
        })
      }).catch(e => {
        console.log("Error while adding image to ipfs: " + e)
      })
    })

    this.$root.$on("onDownloadImage", async function () {
      const cid = await this.$contract.get()
      if (cid === "") {
        this.$root.$emit("onImageNotSet", "Can't download image. First, upload something.");
        return
      }
      this.$ipfs.cat(cid).then(async r => {
        this.$notify({
          title: 'Success',
          message: 'Image downloaded',
          type: 'success'
        });
        this.$root.$emit("onImageDownloaded", r);
      }).catch(e => {
        console.log("Error while downloading image from ipfs: " + e)
      })
    })
  }
}
</script>

<style>
#app {

}
</style>
