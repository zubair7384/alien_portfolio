<template>
  <div>
    <ul>
      <li v-for="(image, index) in imageArray" :key="index">
        <img
          :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/${
            index + 1
          }AAU.png?tr=w-299,h-399,fo-auto`"
          :alt="`alien${index + 1}`"
          @click="openModal(index)"
        />
      </li>
    </ul>
    <Modal
      :is-active="isModalActive"
      :image-src="selectedImageSrc"
      :image-alt="selectedImageAlt"
      @close="closeModal"
    />
  </div>
</template>

<script>
import Modal from "~/components/Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      imageArray: [],
      isModalActive: false,
      selectedImageSrc: "",
      selectedImageAlt: "",
    };
  },
  mounted() {
    let imageArray = [];
    for (let i = 1; i <= 150; i++) {
      let imagePath = `${i}`;
      imageArray.push(imagePath);
    }
    this.imageArray = imageArray;
  },
  methods: {
    openModal(index) {
      this.selectedImageSrc = `https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/${
        index + 1
      }AAU.png?tr=w-600,h-830,fo-auto`;
      this.selectedImageAlt = `alien${index + 1}`;
      this.isModalActive = true;
    },
    closeModal() {
      this.isModalActive = false;
      this.selectedImageSrc = "";
      this.selectedImageAlt = "";
    },
  },
};
</script>

<style lang="scss"></style>
