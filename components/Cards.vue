<template>
  <!-- <ul>
    <li v-for="(imagePath, index) in imageArray" :key="index">
      <img
        :src="`~/assets/images/${imagePath}AAU.png`"
        :alt="`alien-${index + 1}`"
      />
    </li>
  </ul> -->
  <ul>
    <li>
      <img src="~/assets/images/1AAU.png" alt="alien1" />
    </li>
    <li>
      <img src="~/assets/images/2AAU.png" alt="alien2" />
    </li>
    <li>
      <img src="~/assets/images/3AAU.png" alt="alien3" />
    </li>
    <li>
      <img src="~/assets/images/4AAU.png" alt="alien4" />
    </li>
    <li>
      <img src="~/assets/images/5AAU.png" alt="alien5" />
    </li>
    <li>
      <img src="~/assets/images/6AAU.png" alt="alien6" />
    </li>
    <li>
      <img src="~/assets/images/7AAU.png" alt="alien7" />
    </li>
    <li>
      <img src="~/assets/images/8AAU.png" alt="alien8" />
    </li>
    <li>
      <img src="~/assets/images/9AAU.png" alt="alien9" />
    </li>
    <li>
      <img src="~/assets/images/10AAU.png" alt="alien10" />
    </li>
    <li>
      <img src="~/assets/images/11AAU.png" alt="alien11" />
    </li>
    <li>
      <img src="~/assets/images/12AAU.png" alt="alien12" />
    </li>
    <li>
      <img src="~/assets/images/13AAU.png" alt="alien13" />
    </li>
    <li>
      <img src="~/assets/images/14AAU.png" alt="alien14" />
    </li>
    <li>
      <img src="~/assets/images/15AAU.png" alt="alien15" />
    </li>
    <li>
      <img src="~/assets/images/16AAU.png" alt="alien16" />
    </li>
    <li>
      <img src="~/assets/images/17AAU.png" alt="alien17" />
    </li>
    <li>
      <img src="~/assets/images/18AAU.png" alt="alien18" />
    </li>
    <li>
      <img src="~/assets/images/19AAU.png" alt="alien19" />
    </li>
    <li>
      <img src="~/assets/images/20AAU.png" alt="alien20" />
    </li>
    <li>
      <img src="~/assets/images/21AAU.png" alt="alien21" />
    </li>
    <li>
      <img src="~/assets/images/22AAU.png" alt="alien22" />
    </li>
    <li>
      <img src="~/assets/images/23AAU.png" alt="alien23" />
    </li>
    <li>
      <img src="~/assets/images/24AAU.png" alt="alien24" />
    </li>
    <li>
      <img src="~/assets/images/25AAU.png" alt="alien25" />
    </li>
    <li>
      <img src="~/assets/images/26AAU.png" alt="alien26" />
    </li>
    <li>
      <img src="~/assets/images/27AAU.png" alt="alien27" />
    </li>
    <li>
      <img src="~/assets/images/28AAU.png" alt="alien28" />
    </li>
    <li>
      <img src="~/assets/images/29AAU.png" alt="alien29" />
    </li>
    <li>
      <img src="~/assets/images/30AAU.png" alt="alien30" />
    </li>
    <li>
      <img src="~/assets/images/31AAU.png" alt="alien31" />
    </li>
    <li>
      <img src="~/assets/images/32AAU.png" alt="alien32" />
    </li>
    <li>
      <img src="~/assets/images/33AAU.png" alt="alien33" />
    </li>
    <li>
      <img src="~/assets/images/34AAU.png" alt="alien34" />
    </li>
    <li>
      <img src="~/assets/images/35AAU.png" alt="alien35" />
    </li>
    <li>
      <img src="~/assets/images/36AAU.png" alt="alien36" />
    </li>
    <li>
      <img src="~/assets/images/37AAU.png" alt="alien37" />
    </li>
    <li>
      <img src="~/assets/images/40AAU.png" alt="alien40" />
    </li>
    <li>
      <img src="~/assets/images/41AAU.png" alt="alien41" />
    </li>
    <li>
      <img src="~/assets/images/42AAU.png" alt="alien42" />
    </li>
    <li>
      <img src="~/assets/images/43AAU.png" alt="alien43" />
    </li>
    <li>
      <img src="~/assets/images/44AAU.png" alt="alien44" />
    </li>
    <li>
      <img src="~/assets/images/45AAU.png" alt="alien45" />
    </li>
    <li>
      <img src="~/assets/images/46AAU.png" alt="alien46" />
    </li>
    <li>
      <img src="~/assets/images/47AAU.png" alt="alien47" />
    </li>
    <li>
      <img src="~/assets/images/48AAU.png" alt="alien48" />
    </li>
    <li>
      <img src="~/assets/images/49AAU.png" alt="alien49" />
    </li>
    <li>
      <img src="~/assets/images/50AAU.png" alt="alien50" />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      imageArray: [],
    };
  },
  mounted() {
    let imageArray = [];
    for (let i = 1; i <= 6; i++) {
      let imagePath = `${i}`;
      imageArray.push(imagePath);
    }
    this.imageArray = imageArray;
  },
};
</script>

<style lang="scss" scoped></style>
