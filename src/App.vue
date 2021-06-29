<template>
  <div id="app">
    <Header v-if="!$route.meta.hideNavigation" />
    <router-view></router-view>
    <!--    <Preloader />-->
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@font-face {
  font-family: "Poppins-Light";
  src: local("Poppins-Light"), url(./assets/fonts/Poppins-Light.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins";
  src: local("Poppins"), url(./assets/fonts/Poppins-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins-Bold";
  src: local("Poppins-Bold"), url(./assets/fonts/Poppins-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "FontAwesome";
  src: local("FontAwesome"), url(./assets/fonts/fontawesome-webfont.ttf) format("truetype");
}
</style>

<style>
a,
a:focus,
a:hover {
  text-decoration: none;
  outline: 0;
}

.team-pa {
  padding-top: 85px;
}

.header-text h3 {
  font-size: 37px;
  font-family: Poppins-Bold, Helvetica, sans-serif;
  color: white;
  letter-spacing: 10px;
  position: relative;
  display: inline-block;
}

.header-text h3:after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 240px;
  height: 2px;
  background: #1d1d1d;
}

.header-text h3 span {
  color: #ff7657;
}

.team-header h3:after {
  width: 164px;
}

.banner-txt h3 {
  font-size: 36px;
  font-family: Poppins-Bold, Helvetica, sans-serif;
  color: #ff7657;
  line-height: 45px;
  padding-bottom: 23px;
  padding-top: 16px;
}

.banner-txt p {
  font-size: 17px;
  color: #787878;
  padding-right: 40px;
  line-height: 26px;
  padding-bottom: 45px;
}

.banner-txt a {
  padding: 14px 20px;
  background: #ff7657;
  color: white;
  font-family: Poppins-Bold, Helvetica, sans-serif;
  font-size: 18px;
  position: relative;
}

.banner-txt a:hover:after {
  top: 7px;
}

.banner-txt a::after {
  width: 100%;
  height: 100%;
  position: absolute;
  content: "";
  top: 10px;
  left: 0;
  background: #db5536;
  z-index: -1;
  -webkit-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
  transition: all linear 0.3s;
}

input::placeholder,
textarea::placeholder {
  color: white !important;
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 575px) {
  .team-pa {
    padding-top: 65px;
  }

  #price,
  #review,
  #contact,
  #blog {
    padding: 60px 0;
  }
}

@media (max-width: 991px) {
  .navbar-light .navbar-nav .nav-link {
    margin: 18px;
    color: #fff;
    line-height: 0;
  }

  .nav-bg {
    padding-left: 12px;
  }

  .menu-item {
    background: #161616;
    text-align: center;
    padding: 15px 0;
  }

  .navbar::after {
    display: none;
  }

  .navbar-light .navbar-brand {
    color: #fff;
  }

  .navbar-light .navbar-brand:hover {
    color: #fff;
  }

  .nav-bg .navbar-brand:hover {
    color: #fff;
  }

  .nav-bg .navbar-brand {
    color: #fff;
  }

  .navbar-light .navbar-nav .nav-link.active::after {
    opacity: 0;
  }

  .navbar-light .navbar-nav .nav-link:hover:after {
    opacity: 0;
  }

  .nav-bg .bor {
    background: none;
  }

  .menu-item .bor {
    color: #ff7657;
  }

  .bor::after {
    display: none;
  }
}

@media (max-width: 575px) {
  #banner::before,
  .mob-hide,
  .mob-img-hide,
  #team::before,
  #team::after,
  .design-layer {
    display: none;
  }

  .dropboxx,
  .dropboxx2 {
    font-size: 15px;
  }

  .unique-style:before,
  .unique-style2:before,
  .unique-style:after,
  .unique-style2:after {
    display: none;
  }

  .unique-style3::after {
    top: -5px;
  }

  .unique-style3::before {
    top: -12px;
  }

  .over-item {
    text-align: center !important;
    padding: 35px 14px;
  }

  .txt-right p {
    padding-left: 0;
  }

  .txt-left p {
    padding-right: 0;
  }

  #about {
    padding: 80px 0;
  }

  .about-pa {
    padding-top: 0;
  }

  .about-txt h3 {
    font-size: 24px;
  }

  #gallery {
    padding: 60px 0;
  }

  .gallery-img {
    text-align: center;
  }

  .mob-mar-top,
  .g-mar {
    margin-top: 30px;
  }

  #product {
    padding: 60px 0;
  }

  .product-pa {
    padding-top: 110px;
    padding-bottom: 70px;
  }

  .product-txt h3 {
    font-size: 30px;
  }

  .mob-mar-bottom {
    margin-bottom: 30px;
  }

  .team-item {
    padding-top: 45px;
  }

  .review-item {
    background: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding-top: 0;
  }

  .comment {
    padding-right: 0;
    padding-left: 0;
  }

  .user {
    padding: 30px 0 0;
  }

  .user-txt h3 {
    padding-top: 25px;
  }

  .card-body {
    padding: 26px 28px;
  }

  .zom {
    padding-left: 0;
  }

  .mobile-space {
    padding-top: 45px;
  }

  .tags {
    padding-top: 40px;
  }

  .tags a {
    padding: 10px 14px;
  }

  .blog-text {
    padding-top: 45px;
  }

  .sub-main {
    border-radius: 2px;
  }

  .sub-main h3 {
    padding-left: 0px;
    font-size: 21px;
    text-align: center;
    padding-bottom: 30px;
  }

  .sub-main a {
    background: white;
    padding: 14px 20px;
    font-size: 16px;
    margin-left: 10px;
  }

  .subscripe-btn {
    text-align: center;
  }

  .links h3 {
    padding-top: 40px;
  }

  .fop-btm h2 {
    line-height: 26px;
  }
}

@media (min-width: 480px) and (max-width: 575px) {
  .sub-main h3 {
    font-size: 25px;
  }

  .price-table p {
    padding-left: 0;
    text-align: center;
    font-size: 18px;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  #banner {
    padding: 145px 0 100px;
  }

  .banner-txt {
    padding-bottom: 55px;
  }

  #banner::before {
    display: none;
  }

  .over-item p {
    font-size: 16px;
  }

  .design-layer::before {
    top: 765px;
  }

  .design-layer::after {
    top: 717px;
  }

  .over-item {
    padding: 30px 25px;
  }

  .over-item h3 {
    font-size: 23px;
  }

  .unique-style:before,
  .unique-style2:before,
  .unique-style:after,
  .unique-style2:after {
    display: none;
  }

  #about {
    padding: 60px 0;
  }

  .about-item,
  .about-txt {
    padding-top: 75px;
  }

  .counter-1 span {
    font-size: 16px;
  }

  .sm-hide {
    display: none;
  }

  .sm-reduce-pa {
    padding-top: 30px;
  }

  .sm-gallery-top,
  .sm-gallery-top2 {
    margin-top: -190px;
  }

  #product {
    padding: 50px 0;
  }

  .mob-img-hide {
    display: none;
  }

  .product-pa {
    padding-top: 60px;
    padding-bottom: 70px;
  }

  .product-item {
    margin-top: 30px;
  }

  #price {
    padding: 50px 0;
  }

  .team-item h3 {
    font-size: 22px;
  }

  #team::after {
    top: 475px;
    left: -49px;
    height: 125px;
  }

  #team::before {
    top: 510px;
    left: -49px;
    height: 125px;
  }

  .team-item img {
    border: 4px solid #ff7657;
  }

  .price-pa {
    padding-top: 60px;
  }

  .price-table {
    margin-top: 30px;
  }

  #review::after {
    display: none;
  }

  .mobile-space {
    margin-top: 50px;
  }

  #blog {
    padding: 60px 0;
  }

  .blog-item-txt h3 {
    font-size: 22px;
  }

  .blog-text {
    margin-top: 45px;
  }

  .tags {
    padding-top: 45px;
  }

  .sub-main h3 {
    padding-left: 0;
    text-align: center;
    padding-bottom: 30px;
  }

  .subscripe-btn {
    text-align: center;
  }

  .sub-main a {
    padding: 15px 20px;
    font-size: 16px;
  }

  .links h3 {
    font-size: 19px;
  }

  .footer-social {
    padding-bottom: 35px;
  }

  #footer {
    padding: 120px 0 80px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .unique-style:before,
  .unique-style2:before,
  .unique-style:after,
  .unique-style2:after {
    display: none;
  }

  .over-item {
    padding: 35px 24px;
  }

  .about-txt h3 {
    font-size: 21px;
  }

  .counter-1 span {
    font-size: 13px;
  }

  .ai-two::after {
    right: 9px;
  }

  .about-txt p {
    padding-bottom: 45px;
  }

  .tab-hider,
  .tab-view-hide {
    display: none;
  }

  .sp-img {
    height: 240px;
  }

  .product-pa {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .product-item {
    margin-top: 50px;
  }

  #team::before {
    top: 530px;
  }

  #team::after {
    top: 488px;
  }

  .price-pa {
    padding-top: 55px;
  }

  .price-table {
    margin-top: 35px;
  }

  #review::after {
    display: none;
  }

  .mobile-space {
    padding-top: 60px;
  }

  #blog {
    padding: 60px 0;
  }

  .blog-text {
    padding-top: 45px;
  }

  .footer-social {
    padding-top: 11px;
    padding-bottom: 40px;
  }

  .links h3 {
    font-size: 19px;
  }

  #footer {
    padding: 115px 0 75px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .sp-img {
    height: 277px;
  }

  .sp-img2 {
    height: 286px;
  }

  .unique-style:before,
  .unique-style2:before,
  .unique-style:after,
  .unique-style2:after {
    display: none;
  }

  #product {
    padding: 65px 0;
  }

  .stars i {
    font-size: 12px;
  }

  #team::before {
    top: 600px;
  }

  #team::after {
    top: 562px;
  }

  .price-table p {
    padding-bottom: 15px;
    padding-left: 20px;
  }

  #review::after {
    display: none;
  }

  .tags a {
    padding: 12px 15px;
  }

  .blog-item-txt {
    padding-left: 13px;
  }

  .sub-main a {
    padding: 15px 19px;
    font-size: 15px;
  }

  .links h3 {
    font-size: 18px;
  }

  .footer-social {
    padding-top: 5px;
  }
}
</style>
