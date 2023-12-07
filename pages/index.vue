<template>
  <div class="cursor">
    <div class="big"></div>
  </div>
  <div class="mainContainer">
    <header class="headerWrapper">
      <img class="lgImage" src="../assets/images/logo.svg" alt="alien-logo" />
      <p class="headerName">RAMEEZ IQBAL <span>--</span> BOLEN</p>
    </header>
    <div class="mainBannerContainer">
      <h1 class="main-text">ALIENS AMONG US</h1>
      <img
        class="main-img"
        src="../assets/main-banner-image.png"
        alt="main-banner-image"
      />
      <BrandMarque />

      <div class="icon"></div>
    </div>
    <div class="descriptionContaoner">
      <div class="greenEllipse"></div>
      <div class="featuredCol">
        <h3>
          150 <br />EXCLUSIVE <br />
          ART PICES
        </h3>
      </div>
      <div class="desCol">
        <h2>
          Louis Vuitton's Intergalactic Handbag Collection is an AI-generated
          concept campaign for Louis Vuitton's latest handbag collection
          including Louis Vuitton Alma, Louis Vuitton Speedy, and Louis Vuitton
          Never Fall.
        </h2>
        <p>
          In this campaign aliens from other worlds are featured as models for
          these exclusive handbags. All the concept images are generated using
          the popular text to image AI Midjourney.
        </p>
        <p>
          The core campaign idea is to show that you too can be stylishly
          distinctive. Taking this concept further to a fashion show, models can
          don ultra-realistic Alien masks/hoods and carry the latest Louis
          Vuitton handbags with pride.
        </p>
        <p>
          This campaign is all about luxury and exclusivity – two things that
          Louis Vuitton is known for.
        </p>
      </div>
    </div>
    <div class="cardsContainer">
      <CardsMarquee />
      <nuxt-link to="/allalien" class="viewAllBtn">VIEW ALL</nuxt-link>
    </div>
  </div>
  <footer class="footerContainer">
    <Vue3Marquee class="nuxtMarquee">
      <h1 class="footerMarqueeText">ALIENS AMONG US .</h1>

      <h1 class="footerMarqueeText">ALIENS AMONG US .</h1>
    </Vue3Marquee>
    <div class="mainFooter">
      <p>© 2023 rameez iqbal <span>--</span> Bolen</p>
      <p>Privacy - Cookies</p>
    </div>
  </footer>
</template>

<script>
import CardsMarquee from "~/components/Cards.vue";
import BrandMarque from "~/components/BrandMarque.vue";

export default {
  data() {
    return {};
  },
  mounted() {
    const cursorBig = document?.querySelector(".cursor");
    const big = document?.querySelector(".big");
    const glitch = document?.querySelector(".glitch");
    let currentX = 0;
    let currentY = 0;
    let aimX = 0;
    let aimY = 0;
    let speed = 0.2;

    const animate = function () {
      currentX += (aimX - currentX) * speed;
      currentY += (aimY - currentY) * speed;
      cursorBig.style.left = currentX + "px";
      cursorBig.style.top = currentY + "px";
      requestAnimationFrame(animate);
    };
    animate();
    const positionElement = (event) => {
      aimX = event.pageX;
      aimY = event.pageY;
    };
    window?.addEventListener("mousemove", positionElement);
    glitch?.addEventListener("mousemove", function (event) {
      big.style.width = "4rem";
      big.style.height = "4rem";
      big.style.border = "solid 1px #00ff29";
    });
    glitch?.addEventListener("mouseleave", function (event) {
      big.style.width = "2rem";
      big.style.height = "2rem";
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.cardsContainer {
  text-align: center;
}
.main-text {
  position: absolute;
  top: -56px;
  text-align: center;
  font-size: 158px;
  font-weight: 700;
  color: #00ff29;
}
.viewAllBtn {
  position: relative;
  top: 35px;
  padding: 1rem 4rem;
  background-color: black;
  border: 1px solid #00ff29;
  color: #00ff29;
  border-radius: 60px;
}
</style>
