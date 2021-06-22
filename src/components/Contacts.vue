<template>
  <section id="contact">
    <div class="container">
      <div class="row header-text text-center">
        <div class="col-lg-12">
          <h3>FAQs<span> & </span>CONTACT</h3>
        </div>
      </div>
      <div class="row contact-pa">
        <div class="col-lg-8 f-text2">
          <AccordionGroup :multiple="true">
            <AccordionItem class="card">
              <div slot="header" class="card-header">
                <h5 class="mb-0 btn btn-link zom">
                  01. How does the BNB Reward Pool work?
                </h5>
              </div>
              <div slot="content" class="card-body">
                You can collect the amount of the BNB based on the ratio of $MKAT you hold/the total BNB pool. For
                example, you hold 0.5% of $MKAT, you can withdraw 0.5% of the BNB reward pool.
              </div>
            </AccordionItem>

            <AccordionItem class="card">
              <div slot="header" class="card-header">
                <h5 class="mb-0 btn btn-link zom">
                  02. What will the sharing criteria be?
                </h5>
              </div>
              <div slot="content" class="card-body">
                You can collect the amount of the BNB based on the ratio of $MKAT you hold/the total BNB pool. For
                example, you hold 0.5% of $MKAT, you can withdraw 0.5% of the BNB reward pool.
              </div>
            </AccordionItem>

            <AccordionItem class="card">
              <div slot="header" class="card-header">
                <h5 class="mb-0 btn btn-link zom">
                  03. Where will the $BNB coins be distributed?
                </h5>
              </div>
              <div slot="content" class="card-body">
                It will be distributed right into your wallet, after you claim
              </div>
            </AccordionItem>

            <AccordionItem class="card">
              <div slot="header" class="card-header">
                <h5 class="mb-0 btn btn-link zom">
                  04. Any benefit for liquidity providers?
                </h5>
              </div>
              <div slot="content" class="card-body">
                Liquidity providers' tokens will be counted as 2x their normal pool size, when distributing BNB.
              </div>
            </AccordionItem>

            <AccordionItem class="card">
              <div slot="header" class="card-header">
                <h5 class="mb-0 btn btn-link zom">
                  06. More questions?
                </h5>
              </div>
              <div slot="content" class="card-body">
                The community reserve would be used to make future developments e.g CEX listing as decided by the
                community
              </div>
            </AccordionItem>

            <AccordionItem class="card">
              <div slot="header" class="card-header">
                <h5 class="mb-0 btn btn-link zom">
                  05. Why community reserve?
                </h5>
              </div>
              <div slot="content" class="card-body">
                Join our
                <a href=" https://t.me/moonkatfinance">telegram community</a>
                and our community moderators will be happy to help
              </div>
            </AccordionItem>
          </AccordionGroup>
        </div>
        <div class="col-lg-4 mobile-space">
          <div class="row">
            <div class="col-lg-12 banner-txt">
              <a href="mailto:info@moonkat.net">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AccordionGroup from "@/components/Accordion/AccordionGroup";
import AccordionItem from "@/components/Accordion/AccordionItem";
export default {
  name: "Contacts",
  components: { AccordionItem, AccordionGroup },
};
</script>

<style scoped>
#contact {
  padding: 80px 0;
  position: relative;
}

.contact-pa {
  padding-top: 80px;
}

.faq-icon {
  background: #151515;
  border: 1px solid #151515;
}

.card-header {
  background: #151515;
  border: 1px solid #151515;
}

.card {
  background-color: #ffffff;
  border: 1px solid rgba(0, 34, 51, 0.1);
  box-shadow: 2px 4px 10px 0 rgb(0 34 51 / 5%), 2px 4px 10px 0 rgb(0 34 51 / 5%);
  border-radius: 0.15rem;
}

.card-body {
  background: #161616;
  color: #ccc;
  padding: 26px 40px;
  line-height: 28px;
  font-family: Poppins, Helvetica, sans-serif;
}

.zom {
  font-size: 17px;
}

h5 {
  color: #ff7657;
  font-family: Poppins-Bold, Helvetica, sans-serif;
}

h5:hover,
h5:focus {
  text-decoration: none;
  color: #ff7657;
}
</style>
