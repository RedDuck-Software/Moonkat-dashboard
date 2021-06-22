<template>
  <section id="media">
    <div class="container">
      <div class="row header-text text-center blog-header">
        <div class="col-lg-12">
          <h3>ME<span>D</span>IA</h3>
        </div>
      </div>
      <div class="blog-pa">
        <VueSlickCarousel v-bind="settings" class="">
          <div class="blog-item col-lg-12">
            <div class="blog-shadow">
              <img src="@/assets/images/satoshiclub.jpg" alt="blog-img" height="200" class="w-100" />
              <div class="blog-item-txt">
                <h3>AMA RECAP: SATOSHI CLUB</h3>
                <p>
                  Hello, Satoshi clubbers! Another AMA took place in Satoshi Club and we would like to introduce to you
                  the AMA session with our friends from Moonkat Finance.
                </p>
                <a
                  href="https://esatoshi.club/moonkat-finance-x-satoshi-club-ama-recap-from-9th-of-june/"
                  target="_blank"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div class="blog-item col-lg-12">
            <div class="blog-shadow">
              <img src="@/assets/images/bscdaily.png" alt="blog-img" height="200" class="w-100" />
              <div class="blog-item-txt">
                <h3>AMA RECAP: BSCDaily</h3>
                <p>
                  BSCDaily.com hosts Moonkat Finance: a community-driven project built on Binance Smart Chain which
                  ensures that holders of $MKAT are entitled to receive BNB through the community pool system.
                </p>
                <a href="https://cryptodaily.io/moonkat-finance-ama-recap/" target="_blank">Read More</a>
              </div>
            </div>
          </div>
          <div class="blog-item col-lg-12">
            <div class="blog-shadow">
              <img src="@/assets/images/cryptopolitan.jpg" alt="blog-img" height="200" class="w-100" />
              <div class="blog-item-txt">
                <h3>How Moonkat finance is adding spice to DeFi Space</h3>
                <p>
                  Moonkat Finance is the DeFi project poised to bring disruptive solution to the major flaw experienced
                  in the DeFi space today, Inflation.
                </p>
                <a href="https://www.cryptopolitan.com/how-moonkat-finance-is-adding-spice-to-defi">Read More</a>
              </div>
            </div>
          </div>
          <div class="blog-item col-lg-12">
            <div class="blog-shadow">
              <img src="@/assets/images/oxbull.png" alt="blog-img" height="200" class="w-100" />
              <div class="blog-item-txt">
                <h3>SURPRISE IDO: Mooning with Moonkat</h3>
                <p>
                  Ever seen a community project specifically designed to promote equality and to curb hyperinflation?
                  Look no further than Moonkat.
                </p>
                <a href="https://oxbull.medium.com/surprise-ido-mooning-with-moonkat-eca87fbc353e" target="_blank"
                  >Read More</a
                >
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="row team-pa">
        <div class="col-lg-6 col-md-6 m-auto text-center">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/iT7yRXDStoQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-lg-6 col-md-6 m-auto text-center">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/BWWx9jnNv1w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  name: "Media",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.blog-header h3:after {
  width: 186px;
}

.blog-pa {
  padding-top: 80px;
}

.blog-item-txt h3 {
  color: white;
  font-size: 24px;
  font-family: Poppins-Bold, Helvetica, sans-serif;
  padding: 22px 0 16px;
}

.blog-item-txt p {
  color: #787878;
  padding-bottom: 14px;
}

.blog-item-txt a {
  color: #ff7657;
  font-size: 17px;
  font-family: Poppins-Bold, Helvetica, sans-serif;
  padding-top: 5px;
}

.blog-item-txt {
  padding-left: 23px;
  padding-bottom: 25px;
}

.blog-shadow {
  background: #151515;
  border-radius: 6px;
}
</style>
