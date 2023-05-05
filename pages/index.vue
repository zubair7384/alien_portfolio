<template>
  <div class="mainContainer">
    <header class="headerWrapper">
      <h1 class="glitch headerTitle" data-text="ALIENS AMONG US">
        ALIENS AMONG US
      </h1>
      <p class="headerName">RAMEEZ IQBAL <span>--</span> BOLEN</p>
    </header>
    <div class="mainBannerContainer">
      <img
        src="../assets/images/alien-main-banner.png"
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
            <a>
              <img
                src="../assets/images/design-boom-logo.png"
                alt="alien-banner-image"
              />
            </a>
          </li>
          <li>
            <a class="fahrWrapper"> <span>FAHR</span>EVHENT </a>
          </li>
        </ul>
        <hr class="lineBottom" />
        <MyModalPreview />
      </div>
    </div>
    <div class="cardsContainer">
      <ul>
        <li>
          <img src="../assets/images/1.png" alt="alien-1" />
        </li>
        <li>
          <img src="../assets/images/2.png" alt="alien-2" />
        </li>
        <li>
          <img src="../assets/images/3.png" alt="alien-3" />
        </li>
        <li>
          <img src="../assets/images/4.png" alt="alien-4" />
        </li>
        <li>
          <img src="../assets/images/5.png" alt="alien-5" />
        </li>
        <li>
          <img src="../assets/images/6.png" alt="alien-6" />
        </li>
        <li>
          <img src="../assets/images/7.png" alt="alien-7" />
        </li>
        <li>
          <img src="../assets/images/8.png" alt="alien-8" />
        </li>
        <li>
          <img src="../assets/images/9.png" alt="alien-9" />
        </li>
        <li>
          <img src="../assets/images/10.png" alt="alien-10" />
        </li>
        <li>
          <img src="../assets/images/11.png" alt="alien-11" />
        </li>
        <li>
          <img src="../assets/images/12.png" alt="alien-12" />
        </li>
        <li>
          <img src="../assets/images/13.png" alt="alien-13" />
        </li>
        <li>
          <img src="../assets/images/14.png" alt="alien-14" />
        </li>
        <li>
          <img src="../assets/images/15.png" alt="alien-15" />
        </li>
        <li>
          <img src="../assets/images/16.png" alt="alien-16" />
        </li>
        <li>
          <img src="../assets/images/17.png" alt="alien-17" />
        </li>
        <li>
          <img src="../assets/images/18.png" alt="alien-18" />
        </li>
      </ul>
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
export default {
  data() {
    return {
      images: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
        "10.png",
        "11.png",
        "12.png",
        "13.png",
        "14.png",
        "15.png",
        "16.png",
        "17.png",
        "18.png",
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
