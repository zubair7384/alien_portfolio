<template>
  <div class="cursor">
    <div class="big"></div>
  </div>
  <div class="mainContainer">
    <header class="headerWrapper">
      <h1 class="glitch headerTitle" data-text="ALIENS AMONG US">
        ALIENS AMONG US
      </h1>
      <p class="headerName">RAMEEZ IQBAL <span>--</span> BOLEN</p>
    </header>
    <div class="mainBannerContainer">
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
    </div>
    <div class="descriptionContaoner">
      <div class="greenEllipse"></div>
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
      <div class="featuredCol">
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
      </div>
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
    let currentX = 0
    let currentY = 0
    let aimX = 0
    let aimY = 0
    let speed = 0.2

    const animate = function () {
      currentX += (aimX - currentX) * speed
      currentY += (aimY - currentY) * speed
      cursorBig.style.left = currentX + "px"
      cursorBig.style.top = currentY + "px"
      requestAnimationFrame(animate)
    }
    animate()
    const positionElement = (event) => {
      aimX = event.pageX
      aimY = event.pageY
    };
    window?.addEventListener("mousemove", positionElement);
    glitch?.addEventListener("mousemove", function(event) {
      big.style.width = "4rem";
      big.style.height = "4rem";
      big.style.border = "solid 1px #00ff29";

    });
    glitch?.addEventListener("mouseleave", function(event) {
    big.style.width = "2rem";
    big.style.height = "2rem";
  });
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
