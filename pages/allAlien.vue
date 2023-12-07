<template>
  <div class="cursor">
    <div class="big"></div>
  </div>
  <div class="mainContainer">
    <header class="headerWrapper">
      <!-- <h1 class="glitch headerTitle" data-text="ALIENS AMONG US">
        ALIENS AMONG US
      </h1> -->
      <img class="lgImage" src="../assets/images/logo.svg" alt="alien-logo" />
      <p class="headerName">RAMEEZ IQBAL <span>--</span> BOLEN</p>
    </header>
    <h1 class="main-text">ALIENS AMONG US</h1>
    <!-- <div class="mainBannerContainer">
      <img
        class="lgImage"
        src="https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/alien-main-banner.png?tr=w-1714,h-800,fo-auto"
        alt="alien-banner-image"
      />
      <img
        class="smImage"
        src="https://ik.imagekit.io/knip8ym3dh/AliensAmongUs/alien-main-banner-mobile.png??tr=w-441,h-511,fo-auto"
        alt="alien-banner-image"
      />
      <div class="icon"></div>
    </div> -->
    <div class="descriptionContaoner">
      <div class="featuredCol"><h2>circle gose here</h2></div>
      <div class="greenEllipse"></div>
      <div class="desCol">
        <h2>
          Building on this innovative concept, we'll take the campaign to
          dazzling new heights by incorporating elements of interstellar fashion
          and elegance. Imagine a starlit runway, where models adorned in
          shimmering, otherworldly attire glide gracefully, each showcasing a
          unique, high-end Louis Vuitton handbag.
        </h2>
        <p>
          These bags, inspired by the mystique of the cosmos, will feature bold
          colors, intricate patterns, and avant-garde designs, embodying the
          fusion of luxury and the unknown. The campaign will not only highlight
          the bags but also the idea that fashion transcends boundaries,
          inviting onlookers to explore a universe where style meets the
          extraordinary.
        </p>
        <p>
          This fusion of high fashion with the allure of the unknown promises to
          set a new trend, reinforcing Louis Vuitton's status as a pioneer in
          luxury fashion.
        </p>
      </div>
      <!-- <div class="featuredCol">
        <h3>Collection of 150 Art Pieces</h3>
        <hr class="lineBottom" />
        <h4>Featured in</h4>
        <ul>
          <li>
            <a
              href="https://www.designboom.com/art/rameez-iqbal-aliens-among-us-intergalactic-handbag-collection-10-17-2022/"
              target="_blank"
            >
              <img src="@/assets/images/db.png" alt="alien-banner-image" />
            </a>
          </li>
          <li>
            <a
              href="https://fahrenheitmagazine.com/en/design/graphic/rameez-iqbal-and-his-avant-garde-artistic-proposal"
              target="_blank"
            >
              <img src="@/assets/images/fh.png" alt="alien-banner-image" />
            </a>
          </li>
        </ul>
        <hr class="lineBottom" />
        <MyModalPreview />
      </div> -->
    </div>
    <div class="cardsContainer">
      <Cards />
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
import Cards from "~/components/Cards.vue";

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
.main-text {
  text-align: center;
  font-size: 136px;
  font-weight: 700;
  color: #00ff29;
}
.mainContainer .descriptionContaoner .desCol {
  width: 65%;
  z-index: 1;
}
.mainContainer .descriptionContaoner .desCol h2 {
  margin-bottom: 24px;
  line-height: 30.8px;
  font-size: 29px;
}
.mainContainer .descriptionContaoner .desCol p {
  font-size: 16px;
  color: #fff;
}
</style>
