<template>
  <div class="wrapper-eco">
    <nav>
      <Header/>
    </nav>
    <RouterView></RouterView>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { RouterView } from 'vue-router'
import 'swiper/css/navigation';
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";


export default {
  components: {
    Swiper,
    SwiperSlide,
    Header,
    Footer
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
  data() {
    return {
      links: ['BOSH SAHIFA', 'XIZMATLAR', 'YANGILIKLAR', 'XULOSALAR', 'LOYIHACHILAR REYTINGI', 'JAMOATCHILIK ESHITUVI', 'STATISTIKA', 'ALOQALAR'],
      activActivitie: 1,
      isOpenLocation: false,
      activeLocation: 'Uz',
      locations: ['Uz', 'Ru', 'En'],
      sliderInfo1: [
        {
          id: 1,
          text: 'Фаолият турлари бўйича лойиҳаолди ва лойиҳа ҳужжатларини давлат экологик экспертизасидан ўтказиш'
        },
        {id: 2, text: 'Шаҳарсозлик ҳужжатларини давлат экологик экспертизасидан ўтказиш'},
        {
          id: 3,
          text: 'Барча турдаги қурилиш учун ер участкаларини танлаш материалларини давлат экологик экспертизасидан ўтказиш'
        },
        {
          id: 4,
          text: 'Фаолият турлари бўйича лойиҳаолди ва лойиҳа ҳужжатларини давлат экологик экспертизасидан ўтказиш'
        },
        {id: 5, text: 'Шаҳарсозлик ҳужжатларини давлат экологик экспертизасидан ўтказиш'},
        {
          id: 6,
          text: 'Барча турдаги қурилиш учун ер участкаларини танлаш материалларини давлат экологик экспертизасидан ўтказиш'
        },
        {
          id: 7,
          text: 'Фаолият турлари бўйича лойиҳаолди ва лойиҳа ҳужжатларини давлат экологик экспертизасидан ўтказиш'
        },
        {id: 8, text: 'Шаҳарсозлик ҳужжатларини давлат экологик экспертизасидан ўтказиш'},
      ],
      activitiesInfo: [
        {id: 1, text: 'I toifadagi faoliyat turlari', num: 34, img: './src/assets/images/eco_activity1.png'},
        {id: 2, text: 'II toifadagi faoliyat turlari', num: 33, img: './src/assets/images/eco_buyutma.png'},
        {id: 3, text: 'II toifadagi faoliyat turlari', num: 61, img: './src/assets/images/eco_shartnoma1.webp'},
        {id: 4, text: 'IV toifadagi faoliyat turlari', num: 15, img: './src/assets/images/eco_xulosa.png'},
      ],
      news: [
        {
          id: 1,
          text: 'Minimal workspace for inspirations',
          date: '12.11.2023 y',
          img: '/src/assets/images/eco_news1.png'
        },
        {
          id: 2,
          text: 'Does productivity increase when working remotely ?',
          date: '10.11.2023 y',
          img: '/src/assets/images/eco_news2.png'
        },
        {
          id: 3,
          text: 'Morning routine to boost your mood',
          date: '08.11.2023 y',
          img: '/src/assets/images/eco_news3.png'
        },
        {
          id: 4,
          text: '5+ tips to find comfortable co-working space',
          date: '03.11.2023 y',
          img: '/src/assets/images/eco_news4.png'
        },
      ],
      publicProjets: [
        {
          id: 1,
          text: 'Қорақалпоғистон Республикаси Қораўзак туманидаги «Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш”',
          date: '12.11.2023 y',
          img: '/src/assets/images/eco_public1.png'
        },
        {
          id: 2,
          text: '«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...',
          date: '12.11.2023 y',
          img: '/src/assets/images/eco_public2.png'
        },
        {
          id: 3,
          text: '«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...',
          date: '12.11.2023 y',
          img: '/src/assets/images/eco_public3.png'
        },
        {
          id: 4,
          text: '«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...',
          date: '12.11.2023 y',
          img: '/src/assets/images/eco_public4.png'
        },
        {
          id: 1,
          text: 'Қорақалпоғистон Республикаси Қораўзак туманидаги «Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш”',
          date: '12.11.2023 y',
          img: '/src/assets/images/eco_public1.png'
        },
        {
          id: 2,
          text: '«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...',
          date: '12.11.2023 y',
          img: '/src/assets/images/eco_public2.png'
        },
        {
          id: 3,
          text: '«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...',
          date: '12.11.2023 y',
          img: '/src/assets/images/eco_public3.png'
        },
        {
          id: 4,
          text: '«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...',
          date: '12.11.2023 y',
          img: '/src/assets/images/eco_public4.png'
        },
      ],
    }
  },
  computed: {
    otherLocations() {
      let res = []
      for (let i = 0; i < this.locations.length; i++) {
        if (this.locations[i] != this.activeLocation) {
          res.push(this.locations[i])
        }
      }
      return res
    }
  },
  methods: {
    activeActivite(a) {
      this.activActivitie = a + 1
      document.documentElement.style.setProperty('--ht1', a + 1);
    },
    changeLocation(e) {
      this.activeLocation = e.target.innerHTML
    },
    openLocation() {
      if (this.isOpenLocation) {
        this.isOpenLocation = false
      } else {
        this.isOpenLocation = true
      }
    },
    fillBottle2() {
      return
      // document.documentElement.style.setProperty('--ht2', document.querySelectorAll('.environmental-expertise .swiper-pagination-current')[0].innerHTML);
    },
    countUp() {
      document.querySelectorAll('.countUp').forEach(item => {
        let startValue = 0;
        let endValue = parseInt(item.getAttribute('data-val'));
        let duration = Math.floor(5000 / endValue);
        let card = setInterval(() => {
          startValue += 1;
          item.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(card)
          }
        }, duration);
      })
    },
  },
  mounted() {
    this.fillBottle2();
    this.countUp();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper-eco {
  max-width: 1440px;
  margin: auto;
  background-color: white;
  padding-top: 22px;
  position: relative;
}

.wrapper-eco img {
  width: 100%;
  height: 100%;
}

.wrapper-eco svg path {
  fill: inherit;
}

.wrapper-eco .H_2 {
  font-family: 'Lora', serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.wrapper-eco .location svg path, .wrapper-eco .location svg rect {
  stroke: white;
}


/*       -----                navbar              -----         */

.wrapper-eco nav {
  margin: auto;
  z-index: 20;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  padding-top: 20px;
}

.wrapper-eco nav .top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 19px;
  border-bottom: 1px solid var(--brand-color-primary-120, rgba(22, 121, 20, 0.491))
}

.wrapper-eco nav .top .logo {
  display: flex;
  gap: 4px;
}

.wrapper-eco nav .top .logo .image {
  width: 46px;
  height: 46px;
}

.wrapper-eco nav .top .logo h2 {
  color: #222831;
  font-family: SF Pro;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;
}

.wrapper-eco nav .logo p {
  color: #222831;
  font-family: SF Pro;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 510;
  text-transform: uppercase;
}

.wrapper-eco nav .right {
  display: flex;
  gap: 20px;
}

.wrapper-eco nav .right .icon {
  display: flex;
  align-items: center;
  gap: 8px;
}

.wrapper-eco nav .right .icon a {
  color: #222831;
  font-family: Lato;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
}

.wrapper-eco nav .right .icon i {
  font-size: 1.25rem;
}

.wrapper-eco nav .right .icon.icon:hover a,
.wrapper-eco nav .right .icon.icon:hover svg {
  color: var(--Brand-Color-Primary, #7FB949);
  fill: var(--Brand-Color-Primary, #7FB949);
}

.wrapper-eco nav .search {
  display: flex;
  width: 220px;
  justify-content: space-between;
  padding: 8px 14px;
  background-color: #EAEDF6;
  justify-content: space-between;
  align-items: center;
}

.wrapper-eco nav .search input {
  border: none;
  outline: none;
  background-color: #ffffff00;
  color: #868EA2;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.wrapper-eco nav .location {
  position: relative;
  display: flex;
  margin-left: -8px;
}

.wrapper-eco nav .location::before {
  content: '';
  position: absolute;
  top: -5px;
  width: 100%;
  padding: 20px;
  background-color: white;
  width: 100%;
  z-index: 1;
}

.wrapper-eco nav .active {
  display: flex;
  align-self: flex-start;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: var(--Brand-Color-Primary, #7FB949);
  color: white;
  cursor: pointer;
  z-index: 2;
  height: 40px;
}

.wrapper-eco nav .no-active {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  cursor: pointer;
}

.wrapper-eco nav .no-active p {
  text-align: right;
  padding: 8px 15px 8px 8px;
  background-color: white;
  border: 1px solid var(--Brand-Color-Primary, #7FB949);
}

.wrapper-eco nav .no-active p:hover {
  background-color: var(--Brand-Color-Primary, #7FB949);
  color: white;
}

.wrapper-eco nav .bottom {
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 14px;
  width: 100%;
}

.wrapper-eco nav .bottom a {
  color: #222831;
  font-family: Lato;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.wrapper-eco nav .bottom a:hover {
  color: var(--Brand-Color-Primary, #7FB949)
}

.no-active-enter-active,
.no-active-leave-active {
  transition: all 0.5s ease-in-out;
}

.no-active-enter-from,
.no-active-leave-to {
  transform: translateY(-80px);
}

/*       -----                showcase              -----         */

.wrapper-eco .showcase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px 0 87px;
  background-image: url(../../assets/images/eco_showcase.png);
  background-size: cover;
}

.wrapper-eco .showcase h3 {
  color: var(--Brand-Color-Secondary, #FF6422);
  font-family: Gilroy;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
}

.wrapper-eco .showcase h1 {
  position: relative;
  color: var(--Brand-Color-Primary, #7FB949);
  font-family: Gilroy;
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 14px 30px;
  border: 2px solid var(--Brand-Color-Primary, #7FB949);
  margin: 69px 0 40px;
}

.wrapper-eco .showcase h1::before {
  content: '';
  position: absolute;
  top: -30px;
  width: 130px;
  height: 2px;
  left: calc(50% - 65px);
  background-color: var(--Brand-Color-Primary, #7FB949);
}

.wrapper-eco .showcase button {
  background: var(--Brand-Color-Secondary, #FF6422);
  padding: 16px 16px 16px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid var(--Brand-Color-Secondary, #FF6422);
  transition: 0.4s ease-in-out;
}

.wrapper-eco .showcase button:hover {
  background-color: rgba(255, 255, 255, 0);
  color: var(--Brand-Color-Secondary, #FF6422);
}

.wrapper-eco .showcase button i {
  font-size: 22px;
}

/*       -----                transition-stages              -----         */

.wrapper-eco .transition-stages .bg1 {
  background-image: url(../../assets/images/eco_buyutma.png);
}

.wrapper-eco .transition-stages .bg2 {
  background-image: url(../../assets/images/eco_shartnoma1.webp);
  background-size: cover;
}

.wrapper-eco .transition-stages .bg3 {
  background-image: url(../../assets/images/eco_xulosa.png);
}

.wrapper-eco .transition-stages {
  margin: 115px auto;
  width: 1110px;
}

.wrapper-eco .transition-stages > p {
  font-family: Lato;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  color: var(--Color-Black, #222831);
  position: relative;
  width: fit-content;
}

.wrapper-eco .transition-stages > p::after {
  content: '';
  position: absolute;
  background: var(--Color-Black, #222831);
  width: 73px;
  height: 2px;
  right: -88px;
  top: calc(50% - 1px);
}

.wrapper-eco .transition-stages h1 {
  color: var(--Brand-Color-Primary, #7FB949);
  font-family: Lora;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 33px;
  width: 630px;
  margin-top: 8px;
}

.wrapper-eco .transition-stages .boxes {
  display: flex;
  gap: 30px;
  height: 467px;
}

.wrapper-eco .transition-stages .boxes .box {
  width: 350px;
  text-align: center;
}

.wrapper-eco .transition-stages .boxes .box > a {
  color: var(--Color-Black, #222831);
  font-size: 1.25rem;
  font-weight: 700;
}

.wrapper-eco .transition-stages .card {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  position: relative;
  color: rgba(255, 255, 255, 0);
  margin-bottom: 25px;
  padding: 30px;
  transition: all 0.5s ease-in-out;
}

.wrapper-eco .transition-stages .card:hover {
  background-color: var(--Brand-Color-Primary, #7FB949);
  color: white;
  background-image: none;
  height: 467px;
}

.wrapper-eco .transition-stages .card:hover a p {
  max-width: fit-content;
  max-height: fit-content;
}

.wrapper-eco .transition-stages .box:hover > a {
  display: none;
}

.wrapper-eco .transition-stages .card h3 {
  font-size: 2rem;
  margin-bottom: 14px;
}

.wrapper-eco .transition-stages .card p {
  line-height: 1.34;
  font-size: 1.125rem;
  font-weight: 500;
}

.wrapper-eco .transition-stages .card a {
  position: absolute;
  bottom: 0;
  left: 0;
  border: none;
  padding: 20px;
  background: var(--Brand-Color-Secondary, #FF6422);
  display: flex;
  align-items: center;
  gap: 15px;
  color: white;
}

.wrapper-eco .transition-stages .card a p {
  font-weight: 700;
  font-size: 1.125rem;
  font-family: Lato;
  max-width: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.wrapper-eco .transition-stages .card a i {
  font-size: 22px;
}


/*       -----                environmental-expertise              -----         */

.wrapper-eco .environmental-expertise {
  margin-bottom: 155px;
}

.wrapper-eco .environmental-expertise h1 {
  font-family: Lora;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  width: 632px;
  margin: 0 auto 53px;
  color: var(--Brand-Color-Primary, #7FB949);
}

.wrapper-eco .environmental-expertise .mySwiper1 {
  width: 1110px;
  padding-bottom: 50px;
}

.wrapper-eco .environmental-expertise .mySwiper1 .swiper-wrapper {
  padding: 30px 5px 50px;
  box-sizing: border-box !important;
}

.wrapper-eco .environmental-expertise .mySwiper1 .swiper-slide {
  width: 350px;
  height: 171px;
  display: flex;
}

.wrapper-eco .environmental-expertise .swiper-slide .content {
  background: var(--Color-White, #FFF);
  padding: 20px 10px 55px;
  font-family: Lato;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.33;
  box-shadow: 0px 0px 25px 5px rgba(223, 223, 223, 0.40);
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  transition: all 0.5s ease-in-out;
}

.wrapper-eco .environmental-expertise .swiper-slide .content:hover {
  background: var(--Brand-Color-Primary, #7FB949);
  color: white;
}

.wrapper-eco .environmental-expertise .swiper-slide .content .icon {
  position: absolute;
  bottom: -24px;
  left: calc(50% - 32px);
  width: 64px;
  height: 48px;
  background: #FF5722;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}

.wrapper-eco .environmental-expertise .swiper-slide .content:hover .icon {
  background: white;
  color: #FF5722;
  box-shadow: -5px 10px 15px rgba(223, 223, 223, 0.30);
}

.environmental-expertise .fill-bottle {
  width: 160px;
  height: 3px;
  background: var(--Color-Gray-3, #DFDFDF);
  padding: 0.1px;
  margin: auto;
  margin-top: -45px;
}

.environmental-expertise .fill-bottle .bottle {
  background: var(--brand-color-secondary-120, #DD2C00);
  padding: 0.1px;
  height: 3px;
  width: calc(var(--ht2) * 16.6%);
  transition: all 0.3s ease-in-out;
}


/*       -----                types-activities              -----         */

.wrapper-eco .types-activities {
  margin: 115px auto;
  width: 1110px;
}

.wrapper-eco .types-activities > p {
  font-family: Lato;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  color: var(--Color-Black, #222831);
  position: relative;
  width: fit-content;
}

.wrapper-eco .types-activities > p::after {
  content: '';
  position: absolute;
  background: var(--Color-Black, #222831);
  width: 73px;
  height: 2px;
  right: -88px;
  top: calc(50% - 1px);
}

.wrapper-eco .types-activities h1 {
  color: var(--Brand-Color-Primary, #7FB949);
  font-family: Lora;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 33px;
  width: 630px;
  margin-top: 8px;
}

.wrapper-eco .types-activities .card {
  display: flex;
  position: relative;
  gap: 24px;
  justify-content: space-between;
}

.wrapper-eco .types-activities .card .bar {
  position: absolute;
  top: 100px;
  left: -80px;
  transform: rotate(-90deg);
  display: flex;
  align-items: center;
  gap: 24px;
}

.wrapper-eco .types-activities .card .bar .fill-bottle {
  width: 160px;
  height: 4px;
  background: var(--Color-Gray-3, #DFDFDF);
  padding: 0.1px;
}

.wrapper-eco .types-activities .card .bar .bottle {
  background: var(--Brand-Color-Secondary, #FF6422);
  width: calc(var(--ht1) * 25%);
  height: 4px;
  padding: 0.1px;
  transition: all 0.6s ease-in-out;
}

.wrapper-eco .types-activities .card .activities {
  display: flex;
  flex-direction: column;
  padding-left: 40px;
}

.wrapper-eco .types-activities .card .activities .text {
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.wrapper-eco .types-activities .card .activities h3 {
  font-family: Lato;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--Color-Black, #222831);
}

.wrapper-eco .types-activities .card .activities p {
  border-radius: 0px 200px 200px 200px;
  background-color: var(--Gradient, linear-gradient(225deg, #98D355 0%, #5A9336 100%));
  padding: 6px 3px;
  color: var(--White, #FFF);
  text-align: center;
  font-size: 0.875rem;
  font-weight: 590;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper-eco .types-activities .card .image {
  width: 720px;
  height: 450px;
}

.wrapper-eco .activities .text-active {
  background: var(--Brand-Color-Primary, #7FB949);
  transition: all 0.5s ease-in-out;
}

.wrapper-eco .activities .text-active h3 {
  color: white !important;
}

.wrapper-eco .activities .text-active p {
  background-color: white !important;
  color: var(--Brand-Color-Primary, #7FB949) !important;
}


/*       -----                statistics-Applications         -----         */

.wrapper-eco .statistics-Applications {
  margin: 112px auto;
  width: 1110px;
}

.wrapper-eco .statistics-Applications > p {
  font-family: Lato;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  color: var(--Color-Black, #222831);
  position: relative;
  width: fit-content;
}

.wrapper-eco .statistics-Applications > p::after {
  content: '';
  position: absolute;
  background: var(--Color-Black, #222831);
  width: 73px;
  height: 2px;
  right: -88px;
  top: calc(50% - 1px);
}

.wrapper-eco .statistics-Applications .card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
}

.wrapper-eco .statistics-Applications .left {
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  padding: 30px 0;
}

.wrapper-eco .statistics-Applications .left .box {
  width: 220px;
  display: flex;
  gap: 20px;
  align-items: center;
}

.wrapper-eco .statistics-Applications .left .box h3 {
  color: var(--Brand-Color-Primary, #7FB949);
  font-family: Lora;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 8px;
}

.wrapper-eco .statistics-Applications .left p {
  color: var(--Color-Gray-1, #9A9A9A);
  font-family: Lato;
  font-size: 1rem;
  font-weight: 400;
}

.wrapper-eco .statistics-Applications .right {
  padding: 60px 53px 100px;
  background: url(../../assets/images/eco_lists.png), lightgray 0px 0.587px / 282.222% 119.911%;
  color: white;
  position: relative;
  background-size: cover;
}

.wrapper-eco .statistics-Applications .right h2 {
  font-family: Lora;
  font-size: 2.5rem;
  font-weight: 700;
}

.wrapper-eco .statistics-Applications .right .applications {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 29px 0 50px;
}

.wrapper-eco .statistics-Applications .right h3 {
  font-family: Lora;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
}

.wrapper-eco .statistics-Applications .right p {
  color: var(--Color-Gray-3, #DFDFDF);
  font-family: Lato;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.3;
}

.wrapper-eco .statistics-Applications .right .icon {
  padding: 20px;
  background-color: var(--Brand-Color-Secondary, #FF6422);
  position: absolute;
  bottom: 0;
  left: 0;
}

.wrapper-eco .statistics-Applications .right .icon i {
  font-size: 24px;
  color: white;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*       -----                news              -----         */

.wrapper-eco .news {
  background: var(--Color-Gray-4, #F8F8F8);
  padding: 60px 0 96px;
}

.wrapper-eco .news .wrap {
  width: 1110px;
  margin: auto;
}

.wrapper-eco .news .start {
  display: flex;
  justify-content: space-between;
  margin-bottom: 56px;
}

.wrapper-eco .news h1 {
  color: var(--Brand-Color-Primary, #7FB949);
  font-family: Lora;
  font-size: 2.5rem;
  font-weight: 700;
}

.wrapper-eco .news .start h3 {
  color: var(--Brand-Color-Secondary, #FF6422);
  font-family: Lato;
  font-size: 1rem;
  font-weight: 500;
  align-self: flex-end;
}

.wrapper-eco .news .boxes {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.wrapper-eco .news .boxes div {
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.wrapper-eco .news .boxes > div:hover {
  transform: scale(1.05);
}

.wrapper-eco .news .box1 {
  display: flex;
  width: 730px;
}

.wrapper-eco .news .box1 > .image {
  width: 350px;
  flex-shrink: 0;
}

.wrapper-eco .news .box1 .content {
  padding: 32px;
  background-color: white;
}

.wrapper-eco .news .box1 h2 {
  color: var(--Color-Black, #222831);
  font-family: Lora;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
}

.wrapper-eco .news .box1 p {
  color: var(--Color-Gray-1, #9A9A9A);
  font-family: Lato;
  font-size: 1rem;
  line-height: 1.6;
}

.wrapper-eco .news .box1 .content .person {
  display: flex;
  gap: 23px;
  margin-top: 16px;
}

.wrapper-eco .news .box1 .content .person .image {
  width: 56px;
}

.wrapper-eco .news .box1 .person h3 {
  color: var(--Brand-Color-Primary, #7FB949);
  font-family: Lato;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 6px 0;
}

.wrapper-eco .news .box1 .person .info p {
  color: var(--Color-Gray-1, #9A9A9A);
  font-family: Lato;
  font-size: 1rem;
}

.wrapper-eco .news .box {
  width: 350px;
  background-color: white;
}

.wrapper-eco .news .box .text {
  padding: 16px;
}

.wrapper-eco .news .box h3 {
  color: var(--Color-Black, #222831);
  font-family: Lora;
  font-size: 1.375rem;
}

.wrapper-eco .news .box p {
  color: var(--Color-Gray-1, #9A9A9A);
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  margin-top: 8px;
}

/*       -----                public-projects              -----         */

.wrapper-eco .public-projects {
  min-height: 570px;
  margin: 112px auto;
  position: relative;
}

.wrapper-eco .public-projects .start {
  width: 500px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  transition: 0s;
}

.wrapper-eco .public-projects .start p {
  font-family: Lato;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  color: var(--Color-Black, #222831);
  position: relative;
  width: fit-content;
}

.wrapper-eco .public-projects .start p::after {
  content: '';
  position: absolute;
  background: var(--Color-Black, #222831);
  width: 73px;
  height: 2px;
  right: -88px;
  top: calc(50% - 1px);
}

.wrapper-eco .public-projects .start h1 {
  color: var(--Brand-Color-Primary, #7FB949);
  font-family: Lora;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 33px;
  margin-top: 8px;
}

.wrapper-eco .public-projects .start .icons {
  display: flex;
  gap: 130px;
}

.wrapper-eco .public-projects .start i {
  position: relative;
  color: #9A9A9A;
  font-size: 22px;
}

.wrapper-eco .public-projects .start .icon:nth-of-type(2) i {
  color: #FF5722;
}

.wrapper-eco .public-projects .start i::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 3px;
  top: calc(50% - 1.6px);
  left: 1px;
  background-color: #9A9A9A;
}

.wrapper-eco .public-projects .start .icon:nth-of-type(2) i::after {
  width: 80px;
  left: -70px;
  top: calc(50% - 1.9px);
  background-color: #FF5722;
}

.wrapper-eco .public-projects .mySwiper2 {
  width: 100%;
  height: 570px;
}

.wrapper-eco .public-projects .mySwiper2 .swiper-slide {
  width: 350px;
  height: 350px;
}

.wrapper-eco .public-projects .mySwiper2 .swiper-wrapper {
  align-items: flex-end;
}

.wrapper-eco .public-projects .mySwiper2 .card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: 350px 350px;
}

.wrapper-eco .public-projects .mySwiper2 .card .bg-liner {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);
  padding: 10px 22px;
}

.wrapper-eco .public-projects .swiper-slide p {
  color: var(--Color-White, #FFF);
  font-family: Lato;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.3;
}

.wrapper-eco .public-projects .swiper-slide .bottom {
  display: flex;
  margin-top: 4px;
  align-items: flex-end;
}

.wrapper-eco .public-projects .swiper-slide .bottom button {
  color: white;
  padding: 20px;
  gap: 18px;
  display: none;
  align-items: center;
  border: none;
  background: var(--Brand-Color-Secondary, #FF6422);
  position: absolute;
  bottom: 0;
  left: 0;
}

.wrapper-eco .public-projects .swiper-slide .bottom p {
  color: var(--Color-Gray-3, #DFDFDF);
  font-family: Lato;
  font-size: 1rem;
  font-weight: 400;
}

.wrapper-eco .public-projects .swiper-slide .bottom button p {
  font-weight: 700;
  font-size: 1.125rem;
  color: white;
}

.wrapper-eco .public-projects .swiper-slide .bottom button i {
  font-size: 18px;
  margin-bottom: -4px;
}

.wrapper-eco .public-projects .swiper-slide-next {
  height: 570px !important;
  width: 445px !important;
  transition: all 0.5s ease-in-out;
}

.wrapper-eco .public-projects .swiper-slide-next .card {
  background-size: 445px 400px;
}

.wrapper-eco .public-projects .swiper-slide-next .bottom {
  justify-content: flex-end;
  margin-top: 50px;
}

.wrapper-eco .public-projects .swiper-slide-next .bg-liner {
  background-image: none !important;
}

.wrapper-eco .public-projects .swiper-slide-next .bg-liner p {
  color: black;
}

.wrapper-eco .public-projects .swiper-slide-next button {
  display: flex !important;
}

.wrapper-eco .public-projects .swiper-slide-next button p {
  color: white;
}

/*       -----                footer              -----         */

.wrapper-eco footer {
  background-image: url(../../assets/images/eco_lists.png);
}

.wrapper-eco footer .top {
  width: 1110px;
  margin: auto;
  padding: 30px 0 24px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.60);
}

.wrapper-eco footer .top .left {
  display: flex;
  gap: 25px;
}

.wrapper-eco footer .top .logo {
  display: flex;
  align-items: flex-start;
  gap: 5px;
}

.wrapper-eco footer .top .logo .image {
  width: 46px;
  height: 46px;
}

.wrapper-eco footer .top .logo h3 {
  color: #FFF;
  font-family: SF Pro;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;
}

.wrapper-eco footer .top .logo p {
  color: #FFF;
  font-family: SF Pro;
  font-size: 0.75rem;
  font-weight: 510;
  line-height: 1.66;
  text-transform: uppercase;
}

.wrapper-eco footer .top ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
}

.wrapper-eco footer .top ul a {
  font-family: Lato;
  font-size: 1rem;
  font-weight: 400;
}

.wrapper-eco footer .top .right h3 {
  font-family: Inter;
  font-size: 1rem;
  color: white;
  font-weight: 600;
  margin-bottom: 20px;
}

.wrapper-eco footer .top .right .link {
  display: flex;
  gap: 8px;
  align-items: center;
  color: white;
  margin-top: 12px;
}

.wrapper-eco footer .top .right .link i {
  font-size: 24px;
}

.wrapper-eco footer .top .right .link a {
  color: var(--Base-White, #ffffff);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.7;
}

.wrapper-eco footer .top .right .icons {
  margin-top: 33px;
  display: flex;
  gap: 15px;
}

.wrapper-eco footer .top .right .icons .icon {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 200px;
  border: 1.5px solid white;
}

.wrapper-eco footer .top .right .icons .icon i {
  font-size: 20px;
}
.breadcrumb_wrapper {
  position: relative;
  background: url(https://maxsustrans.uz/frontend/images/slider/bar_fon.jpg) no-repeat center;
  background-size: cover;
  padding: 63px 0px 57px;
  z-index: 1;
}
.breadcrumb_wrapper:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(37,37,37,0.7);
  z-index: -1;
}

.wrapper-eco footer .bottom {
  display: flex;
  justify-content: flex-end;
  padding: 27px 0;
  width: 1110px;
  margin: auto;
}

.wrapper-eco footer .bottom p {
  color: #FFF;
  font-family: Inter;
  font-size: 0.875rem;
  font-weight: 300;
}

/*       -----                classes              -----         */

:root {
  --ht1: 1;
  --ht2: 1;
}

.wrapper-eco a, .wrapper-eco i {
  color: inherit;
}

.a-right {
  text-align: right;
}
</style>