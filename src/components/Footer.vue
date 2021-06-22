<template>
  <div>
    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-11">
            <div class="footer-logo">
              <router-link class="f-logo" :to="{ name: 'Home', hash: '#banner' }"><b>MoonKat.</b></router-link>
              <p>
                Moonkat Finance is a next generation DeFi platform. Earn $BNB by Holding $MKAT
              </p>
            </div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-2 col-sm-4">
            <div class="links">
              <h3>Overview</h3>
              <ul>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4">
            <div class="links">
              <h3>Information</h3>
              <ul>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'Home', hash: '#tokenomics' }">Tokenomics</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/#roadmap">Roadmap</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4">
            <div class="links">
              <h3>Help Desk</h3>
              <ul>
                <li class="nav-item">
                  <router-link class="nav-link" to="/#contact">FAQs</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <section id="footer-btm">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="fop-btm text-center">
              <h2>Copyright &copy; 2021. All rights reserved.</h2>
            </div>
            <div class="fop-btm text-center"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer {
  padding: 120px 0 85px;
  background: #151515;
  border-bottom: 1px solid #151515;
  border-top: 2px dashed #222;
}

.footer-logo p {
  color: #787878;
  font-family: Poppins, Helvetica, sans-serif;
  padding-top: 10px;
  line-height: 29px;
  font-size: 16px;
  padding-bottom: 13px;
}

#footer-btm {
  background: #161616;
  border-top: 2px dashed #222;
  padding: 25px 0;
}

.fop-btm h2 {
  color: #fff;
  font-size: 16px;
  font-family: Poppins, Helvetica, sans-serif;
  margin-bottom: 0;
}

.fop-btm a {
  color: #ff7657;
  font-family: Poppins-Bold, Helvetica, sans-serif;
}
.links h3 {
  font-size: 21px;
  font-family: Poppins-Bold, Helvetica, sans-serif;
  color: #fff;
  font-weight: 600;
  text-transform: capitalize;
  padding-bottom: 4px;
}

.links ul li a {
  color: #787878;
  text-transform: capitalize;
  line-height: 38px;
  font-size: 16px;
  -webkit-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
  transition: all linear 0.3s;
  font-family: Poppins, Helvetica, sans-serif;
}

.links ul li a:hover {
  color: #ff7657;
  padding-left: 10px;
}

.f-logo {
  font-size: 27px;
  color: #ff7657;
  font-family: Poppins-Bold, Helvetica, sans-serif;
}

.f-logo:hover {
  color: #ff7657;
}
</style>
