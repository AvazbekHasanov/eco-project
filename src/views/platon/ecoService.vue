<script>
export default {
  name: "ecoService",
  data() {
    return {
      serviceInfo: {}
    }
  },
  mounted() {
    console.log("this.$route", this.$route.query);
    this.getInfoAboutService()
  },
  methods: {
    getInfoAboutService(){
      if (this.$route.query.id) {
        fetch(`http://localhost:3000/get_service?id=${this.$route.query.id}`).then(res => res.json()).then(res => {
          this.serviceInfo = res.service_info;
          console.log("this.serviceInfo", this.serviceInfo)
        })
      }
    },
  },
}
</script>

<template>
  <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5950de5"
       data-id="5950de5" data-element_type="column">
    <div class="elementor-widget-wrap elementor-element-populated">
      <div class="elementor-element elementor-element-f0a9bc3 elementor-widget elementor-widget-text-editor"
           data-id="f0a9bc3" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
          <h6>Whether you are an SME or a larger organisation, you are likely to handle confidential information, which
            means you will require secure shredding services.</h6>
          <p>As well as our <a href="https://changewasterecycling.co.uk/our-services/">excellent recycling services</a>,
            we can ensure that confidential documents are disposed of through secure shredding. Businesses in Glasgow
            and Edinburgh, as well as further afield within our network can rest assured that their sensitive waste is
            disposed of with care and compliance to all relevant legislation&nbsp;</p>
          <p>By using our service, you can ensure&nbsp;<span
              style="color: var( --e-global-color-text ); font-family: var( --e-global-typography-text-font-family ), Sans-serif; font-weight: var( --e-global-typography-text-font-weight ); letter-spacing: var(--the7-base-letter-spacing); text-transform: var(--the7-base-text-transform); word-spacing: normal;">your confidential documents are regularly collected and shredded, making it easy to keep on top of them and prevents them sitting in <a
              href="https://changewasterecycling.co.uk/sectors/offices/">an office</a> longer than necessary. We offer both an ad-hoc service to those who don’t regularly produce confidential material and a bulk uplift service for large clear-outs. All of our collections are carried out separately from the rest of your waste and recycling by a dedicated and trained team.</span>
          </p></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
