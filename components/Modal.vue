<template>
  <div class="modal" :class="{ 'is-active': isActive }" @click="close">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="imageWrapper">
        <img :src="imageSrc" :alt="imageAlt" />
        <button class="modal-close is-large" aria-label="close" @click="close">
          <img src="@/assets/images/close.svg" alt="close-modal" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    imageSrc: String,
    imageAlt: String,
  },
  methods: {
    close() {
      this.$emit("close");
      document?.body?.classList?.remove("modal-open");
    },
    open() {
      document?.body?.classList?.add("modal-open");
    },
  },
};
</script>

<style lang="scss">
body.modal-open {
  overflow: hidden;
}
.modal {
  display: none;
}
.modal {
  position: absolute;
  top: 0;
  opacity: 0;

  &.is-active {
    position: relative;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    background: #00000070;
    backdrop-filter: blur(40px);
    transition: all 0.1s ease-in-out;
    z-index: 3;
  }

  .modal-background {
    background-color: rgba(17, 0, 255, 0.144);
  }

  .modal-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .imageWrapper {
      min-width: 600px;
      width: 100%;
      min-height: 890px;
      height: auto;
      position: relative;
      display: flex;
      justify-content: center;
      @media only screen and (max-width: 768px) {
        width: 400px;
        min-width: 400px;
        min-height: 690px;
      }
      @media only screen and (max-width: 500px) {
        width: 380px;
        min-width: 380px;
        min-height: 690px;
      }
      @media only screen and (max-width: 380px) {
        width: 300px;
        min-width: 300px;
        min-height: 690px;
      }
      img {
        position: relative;
        width: 100%;
        height: auto;
        z-index: 2;
        top: 0;
        border-radius: 12px;
        margin: 5%;
        @media only screen and (max-width: 768px) {
          height: 493px;
        }
        @media only screen and (max-width: 380px) {
          height: 416px;
        }
      }
      .modal-close {
        position: absolute;
        right: 12px;
        top: 42px;
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 38px;
        height: 38px;
        background-color: #000;
        border-radius: 50%;
        color: #fff;
        font-size: 40px;
        cursor: none;
        @media only screen and (max-width: 768px) {
          right: 30px;
          top: 30px;
        }
        @media only screen and (max-width: 380px) {
          right: 7px;
          top: 21px;
        }
      }
    }
  }
}
</style>
