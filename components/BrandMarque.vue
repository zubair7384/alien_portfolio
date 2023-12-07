<template>
  <div class="brandMarque">
    <Vue3Marquee class="nuxtMarquee">
      <img src="../assets/su.svg" alt="surface" />
      <img src="../assets/de.svg" alt="surface" />
      <img src="../assets/fa.svg" alt="surface" />
      <img src="../assets/pu.svg" alt="surface" />
      <img src="../assets/su.svg" alt="surface" />
      <img src="../assets/de.svg" alt="surface" />
      <img src="../assets/fa.svg" alt="surface" />
      <img src="../assets/pu.svg" alt="surface" />
      <img src="../assets/su.svg" alt="surface" />
      <img src="../assets/de.svg" alt="surface" />
    </Vue3Marquee>
  </div>
</template>

<script></script>

<style lang="scss">
.brandMarque {
  position: absolute;
  width: 146%;
  left: -230px;
  height: 52px;
  bottom: 22rem;
  transform: rotate(-10deg);
}
.nuxtMarquee {
  background: #1fff28e5;
}
.marquee {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.nuxtMarquee img {
  transform: rotate(10deg);
}
.footerMarqueeText {
  font-size: 154px;
  font-weight: 600;
  color: #000;
  margin-left: 35px;

  //   @media only screen and (max-width: $md) {
  //     font-size: 80px;
  //   }
}
</style>
