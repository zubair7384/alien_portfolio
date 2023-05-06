<template>
  <div>
    <ul>
      <li v-for="(image, index) in imageArray" :key="index">
        <img
          :src="`/images/${image}AAU.png`"
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
      images: ["/images/1AAU.png", "/images/2AAU.png"],
      isModalActive: false,
      selectedImageSrc: "",
      selectedImageAlt: "",
    };
  },
  mounted() {
    let imageArray = [];
    for (let i = 1; i <= 50; i++) {
      let imagePath = `${i}`;
      imageArray.push(imagePath);
    }
    this.imageArray = imageArray;
  },
  methods: {
    openModal(index) {
      this.selectedImageSrc = `/images/${this.imageArray[index]}AAU.png`;
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
