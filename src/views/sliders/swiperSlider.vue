<template>
  <div class="carusel-wrapper">
    <swiper
        :slidesPerView="2"
        :spaceBetween="30"
        :loop="true"
        :navigation="{enabled: true, prevEl: '.prev', nextEl: '.next'}"
        :modules="modules"
        class="mySwiper"
        :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        }">
        <!-- :pagination="{
        clickable: true,
        }" -->

        <swiper-slide
        v-for="(item, index) in info" :key="index">
            {{ item.text }}
        </swiper-slide>
        
    </swiper>
    <div class="btns">
        <button class="prev">Prev</button>
        <button class="next">Next</button>
    </div>
  </div>
</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay,  Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
        return {
          modules: [Autoplay, Pagination, Navigation],
        };
    },
    data(){
        return{
            info:[
                {id: 1, text: 'Slide 1'},
                {id: 2, text: 'Slide 2'},
                {id: 3, text: 'Slide 3'},
                {id: 4, text: 'Slide 4'},
                {id: 5, text: 'Slide 5'},
                {id: 6, text: 'Slide 6'},
                {id: 7, text: 'Slide 7'},
                {id: 8, text: 'Slide 8'},
                {id: 9, text: 'Slide 9'},
                {id: 10, text: 'Slide 10'},
                {id: 11, text: 'Slide 11'},
            ]
        }
    }
}
</script>

<style scoped>
.carusel-wrapper{
  background-color: var(--electric-blue);
    width: 800px;
    height: 500px;
    margin: auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}
.carusel-wrapper .btns{
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 10px;
}
.btns button{
    border: none;
    border-radius: 20px;
    padding: 7px 15px;
    font-size: 17px;
    background-color: blue;
    color: white;
}
.swiper {
  width: 100%;
  height: 90%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
} 
</style>