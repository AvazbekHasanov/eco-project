<template>
  <div style="padding-top: 140px" class="breadcrumb_wrapper">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="breadcrumb_inner">
            <h3 class="text-white">Санитария хизматларининг нархи</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="blog_sidebar_wrapper clv_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 d-flex justify-content-center align-items-center flex-column">

          <p style="text-align: center;"><strong>Санитария хизматларининг нархи</strong></p>
          <table style="font-weight: 400; width: 80%;" border="1" align="center">
            <tbody>
            <tr>
                <td>№</td>
                <td>Nomi</td>
                <td>Birlik</td>
                <td>Narxi</td>
            </tr>
            <tr v-for="(item, index) in services" :key="item.id">
              <td width="36" style="border: 1px solid black"> {{item.id}} </td>
              <td width="36" style="border: 1px solid black"> <a :href="`/pages/service?id=${item.id}`"> {{item.name}} </a> </td>
              <td width="36" style="border: 1px solid black"> {{item.unit}} </td>
              <td width="36" style="border: 1px solid black"> {{item.price}} </td>
            </tr>
            </tbody>
          </table>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p align="center"><br></p>
          <p align="center">
            <img src="https://maxsustrans.uz/uploads/img/photo_2019-09-20_09-35-47.jpg" alt=""
                                 width="45%" class="services_img">
            <img
              src="https://maxsustrans.uz/uploads/img/photo_2019-09-20_09-35-48.jpg" alt="" width="45%"  class="services_img"></p>
          <p align="center" >
            <img src="https://maxsustrans.uz/uploads/img/photo_2019-09-20_09-35-49.jpg" alt=""
                                 width="45%" class="services_img">
            <img
              src="https://maxsustrans.uz/uploads/img/photo_2019-09-20_09-35-50.jpg" alt="" width="45%" class="services_img"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      services: []
    }
  },
  computed: {},
  methods: {
    doto() {
      document.getElementsByClassName('type_activities')[0].addEventListener()
    }
  },
  mounted() {
    fetch(`${this.$host}/all_services`).then(res => res.json()).then(res => {
      this.services = res.services;
      console.log("res", this.services[1]);
    })
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
  color: #757575;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
  overflow-x: hidden;
}

td {
  border: 1px solid black;
  text-align: center;
}
.services_img{
  width: 45% !important;
}

.breadcrumb_wrapper .breadcrumb_inner {
  text-align: center;
}
</style>