<template>
  <section id="team">
    <div class="container">
      <div class="row header-text text-center team-header">
        <div class="col-lg-12">
          <h3>TE<span>A</span>M</h3>
        </div>
      </div>
      <div class="row team-pa">
        <div class="col-lg-3 col-md-3 col-sm-4 m-auto team-item text-center">
          <img src="@/assets/images/Moonkat.png" alt="team-member" class="img-fluid" />
          <h3>Simba</h3>
          <p>CEO & Founder</p>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-4 m-auto team-item text-center">
          <img src="@/assets/images/Moonkat.png" alt="team-member" class="img-fluid" />
          <h3>Meowsie</h3>
          <p>Co-Founder & Marketer</p>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-4 m-auto team-item text-center">
          <img src="@/assets/images/Moonkat.png" alt="team-member" class="img-fluid" />
          <h3>Angel</h3>
          <p>Designer</p>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-4 m-auto team-item text-center">
          <img src="@/assets/images/Moonkat.png" alt="team-member" class="img-fluid" />
          <h3>Uz</h3>
          <p>Developer</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Team",
};
</script>

<style scoped>
.team-item img {
  border-radius: 30% 84% 28% 76% / 87% 23% 69% 29%;
  border: 6px solid #ff7657;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-transition: all linear 0.3s;
  -o-transition: all linear 0.3s;
  transition: all linear 0.3s;
}

.team-item:hover img {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}

.team-item h3 {
  font-family: Poppins-Bold, Helvetica, sans-serif;
  font-size: 26px;
  color: white;
  padding: 30px 0 14px;
}

.team-item p {
  font-family: Poppins, Helvetica, sans-serif;
  font-size: 18px;
  color: #787878;
  padding-bottom: 14px;
}

.team-item a {
  font-family: Poppins-Bold, Helvetica, sans-serif;
  font-size: 16px;
  color: #ff7657;
}

@media (max-width: 575px) {
  #team {
    padding: 60px 0;
  }
}
</style>
