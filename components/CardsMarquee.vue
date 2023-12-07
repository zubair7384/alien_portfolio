<template>
  <div class="maqueeCard">
    <Vue3Marquee class="cardsMarquee" direction="reverse" duration="30">
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/1AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien1`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/2AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien2`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/3AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien3`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/4AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien4`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/5AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien5`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/6AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien6`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/7AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien7`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/8AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien3`"
      />
    </Vue3Marquee>
  </div>
  <div class="maqueeCard">
    <Vue3Marquee class="cardsMarquee" duration="30">
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/9AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien1`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/10AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien2`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/11AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien3`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/12AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien4`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/13AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien5`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/14AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien6`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/15AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien7`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/16AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien3`"
      />
    </Vue3Marquee>
  </div>
  <div class="maqueeCard lastMarquee">
    <Vue3Marquee class="cardsMarquee" direction="reverse" duration="30">
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/17AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien1`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/18AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien2`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/19AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien3`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/20AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien4`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/21AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien5`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/22AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien6`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/23AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien7`"
      />
      <img
        :src="`https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/24AAU.png?tr=w-299,h-399,fo-auto`"
        :alt="`alien3`"
      />
    </Vue3Marquee>
  </div>
</template>

<script>
export default {
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
};
</script>

<style lang="scss">
.maqueeCard {
  width: 150%;
  position: relative;
  left: -16rem;
  margin: 2rem 0;
}
.marquee img {
  margin: 0 1rem;
  border-radius: 5px;
}
</style>
