<template>
  <section id="roadmap" class="mt-8">
    <div class="container">
      <div class="row team-pa">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row header-text text-center team-header">
                <div class="col-lg-12">
                  <h3>ROA<span>D</span>MAP</h3>
                </div>
              </div>
              <div id="content">
                <ul class="timeline">
                  <li class="event" data-date="Q1 2021">
                    <h3>
                      We prepared the main features and completed the R&D
                    </h3>
                  </li>
                  <li class="event" data-date="Q2 2021">
                    <h3>Airdrop / seed</h3>
                    <h3>Launch app</h3>
                    <h3>Coingecko /coinmarket cap listing</h3>
                    <h3>$BNB Reward pool launch</h3>
                  </li>
                  <li class="event" data-date="Q3 2021">
                    <h3>CEX listing</h3>
                    <h3>MoonKat NFT</h3>
                  </li>
                  <li class="event" data-date="Q4 2021">
                    <h3>Marketing & partnerships</h3>
                    <h3>MoonKat event</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center mob-hide sm-hide">
          <img src="@/assets/images/moonkat2.jpg" alt="about-img" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RoadMap",
};
</script>

<style scoped>
.timeline {
  border-left: 3px solid #f57456;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  margin: 0 auto;
  letter-spacing: 0.2px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 50px;
  list-style: none;
  text-align: left;
  max-width: 40%;
}

.timeline h1 {
  font-weight: 300;
  font-size: 1.4em;
}

.timeline h2,
.timeline h3 {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 10px;
}

.timeline .event {
  border-bottom: 1px dashed #e8ebf1;
  padding-bottom: 25px;
  margin-bottom: 25px;
  position: relative;
}

.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .event:before {
  left: -207px;
  content: attr(data-date);
  text-align: right;
  font-weight: 100;
  font-size: 0.9em;
  min-width: 120px;
}

.timeline .event:after {
  -webkit-box-shadow: 0 0 0 3px #f57456;
  box-shadow: 0 0 0 3px #f57456;
  left: -55.8px;
  background: #fff;
  border-radius: 50%;
  height: 9px;
  width: 9px;
  content: "";
  top: 5px;
}

.card-body {
  background: #161616;
  color: #ccc;
  padding: 26px 40px;
  line-height: 28px;
  font-family: Poppins, Helvetica, sans-serif;
}

.card {
  background-color: #ffffff;
  border: 1px solid rgba(0, 34, 51, 0.1);
  box-shadow: 2px 4px 10px 0 rgba(0, 34, 51, 0.05), 2px 4px 10px 0 rgba(0, 34, 51, 0.05);
  border-radius: 0.15rem;
}
</style>
