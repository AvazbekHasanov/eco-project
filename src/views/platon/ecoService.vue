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
    getInfoAboutService() {
      console.log("this.$host", this.$host)
      if (this.$route.query.id) {
        fetch(`${this.$host}/get_service?id=${this.$route.query.id}`).then(res => res.json()).then(res => {
          this.serviceInfo = res.service_info;
          console.log("this.serviceInfo", this.serviceInfo)
        })
      }
    },
  },
}
</script>

<template>
  <div style="display: flex; justify-content: center; flex-direction: row; align-items: center; gap: 20px;">
    <div class="description" style="width: 50%">
      <h3>Musurlarni olib tashlash</h3>
      <span style="vertical-align: inherit;">Chiqindilarni olib tashlash, talab bo'yicha</span>
      <p>Biz Buyuk Britaniyadagi “Odam va Van” uslubidagi axlatni tozalash bo'yicha eng yirik kompaniyamiz va biz
        to'g'ridan-to'g'ri ishlaydigan tozalash guruhlariga ega bo'lgan katta avtoulov parkini boshqaramiz. Bizning
        axlatni tozalash xizmatimiz o'tkazib yuborilgan ijara xizmatiga nisbatan juda moslashuvchan bo'lib , sizga
        deyarli har qanday tozalash hajmini tanlash imkonini beradi. Shuningdek, biz kun davomida ko'proq yoki kamroq
        chiqindilarni tozalashdan xursandmiz va nazoratni sizning qo'lingizda qoldiramiz.


        Biz sizning axlatingizni o'sha kuni yoki siz tanlagan kunda osongina tozalashimiz mumkin. Biz yig'ilgan
        axlatning 95% dan ortig'ini poligondan boshqa joyga yo'naltiramiz va avtomobillarimizdagi CO₂ ni 150% dan
        ko'proq qoplaymiz.</p>
      <div class="booking" style="display: flex; justify-content: center; flex-direction: column; align-items: center; gap: 10px;">
        <div ><span>Xizmat narxi: </span> <span>3232332</span></div>
        <button type="button" class="btn btn-success"> Buy service</button>
      </div>
    </div>
    <div class="media-container" style="width: 50%">
      <img src="https://www.clearabee.co.uk/_next/image?url=https%3A%2F%2Fclearabee.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F09%2FMan-and-van-hero_1-1.png&w=1920&q=75">
    </div>
  </div>
</template>

<style scoped>

</style>
