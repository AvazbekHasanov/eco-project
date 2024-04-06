<template>
  <div class="showcase">
    <h3>Атроф мухитимизни авлодлар учун биргаликда саклайлик</h3>
    <h1>Давлат экологик экспертизадан утиш</h1>
    <button>кабинетга кириш <i class="fa-regular fa-chevron-right"></i></button>
  </div>
  <div class="transition-stages">
    <p>Экологик экспертиза қандай амалга оширилади ?</p>
    <h1>Davlat ekologik ekspertizasidan o'tkazish bosqichlari</h1>
    <div class="boxes">
      <div class="box">
        <div class="card bg1">
          <h3>Buyurtma Yuborish</h3>
          <p>Davlat Ekologik Ekspertizadan o'tkazish jarayonida buyurtma yuborilgandan so'ng Shartnoma tuzish amalga
            oshiriladi</p>
          <a href="http://localhost:5173/eco_xizmatlar?info=1">
            <p>Buyurtma Yuborish</p>
            <i class="fa-regular fa-chevron-right"></i>
          </a>
        </div>
        <a href="#">Buyurtma Yuborish</a>
      </div>
      <div class="box">
        <div class="card bg2">
          <h3>Shartnoma Tuzish</h3>
          <p>Davlat Ekologik Ekspertizadan o'tkazish jarayonida buyurtma yuborilgandan so'ng Shartnoma tuzish amalga
            oshiriladi</p>
          <a href="http://localhost:5173/eco_xizmatlar?info=2">
            <p>Shartnoma Tuzish</p>
            <i class="fa-regular fa-chevron-right"></i>
          </a>
        </div>
        <a href="#">Shartnoma Tuzish</a>
      </div>
      <div class="box">
        <div class="card bg3">
          <h3>Xulosa Olish</h3>
          <p>Davlat Ekologik Ekspertizadan o'tkazish jarayonida buyurtma yuborilgandan so'ng Shartnoma tuzish amalga
            oshiriladi</p>
          <a href="http://localhost:5173/eco_xizmatlar?info=3">
            <p>Xulosa Olish</p>
            <i class="fa-regular fa-chevron-right"></i>
          </a>
        </div>
        <a href="#">Xulosa Olish</a>
      </div>
    </div>
  </div>
  <div class="environmental-expertise" @mousemove="fillBottle2">
    <h1>Davlat ekologik ekspertizasidan o'tkaziladigan obyektlar</h1>
    <swiper
        :cssMode="true"
        :slidesPerView="'auto'"
        :spaceBetween="25"
        :pagination="{
          type: 'fraction',
        }"
        :modules="modules"
        class="mySwiper1"
    >
      <swiper-slide v-for="(item, id) in sliderInfo1" :key="id" class="swiper-slide">
        <div class="content">
          {{ item.text }}
          <div class="icon">
            <i class="fa-regular fa-chevron-right"></i>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="fill-bottle">
      <div class="bottle"></div>
    </div>
  </div>
  <div class="types-activities">
    <p>Қайси фаолият турлари экспертизадан ўтказилади ?</p>
    <h1>Davlat ekologik ekspertizasidan o'tkaziladigan faoliyat turlari</h1>
    <div class="card">
      <div class="bar">
        <p>{{ activActivitie }}/{{ activitiesInfo.length }}</p>
        <div class="fill-bottle">
          <div class="bottle"></div>
        </div>
      </div>
      <div class="activities">
        <div class="text" :class="{'text-active': id == activActivitie-1}" v-for="(item, id) in activitiesInfo"
             :key="id" @click="activeActivite(id)">
          <h3>{{ item.text }}</h3>
          <p>{{ item.num }}</p>
        </div>
      </div>
      <div class="image">
        <img :src="activitiesInfo[activActivitie-1].img" alt="img">
      </div>
    </div>
  </div>
  <div class="statistics-Applications">
    <p>Экологик экспертизадан ўтказиш рақамларда</p>
    <div class="card">
      <div class="left">
        <div class="box">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="#7FB949">
              <circle cx="18" cy="9" r="6" fill="#7FB949"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M24.75 33C22.2751 33 21.0377 33 20.2688 32.2312C19.5 31.4623 19.5 30.2249 19.5 27.75C19.5 25.2751 19.5 24.0377 20.2688 23.2688C21.0377 22.5 22.2751 22.5 24.75 22.5C27.2249 22.5 28.4623 22.5 29.2312 23.2688C30 24.0377 30 25.2751 30 27.75C30 30.2249 30 31.4623 29.2312 32.2312C28.4623 33 27.2249 33 24.75 33ZM27.7021 26.6187C28.0438 26.277 28.0438 25.723 27.7021 25.3813C27.3603 25.0396 26.8063 25.0396 26.4646 25.3813L23.5833 28.2626L23.0354 27.7146C22.6937 27.3729 22.1397 27.3729 21.7979 27.7146C21.4562 28.0563 21.4562 28.6103 21.7979 28.9521L22.9646 30.1187C23.3063 30.4604 23.8603 30.4604 24.2021 30.1187L27.7021 26.6187Z"
                    fill=""/>
              <path opacity="0.5"
                    d="M27.1421 22.5467C26.5049 22.5 25.7231 22.5 24.75 22.5C22.2751 22.5 21.0377 22.5 20.2688 23.2688C19.5 24.0377 19.5 25.2751 19.5 27.75C19.5 29.4995 19.5 30.6306 19.7716 31.415C19.1957 31.4709 18.6038 31.5 18 31.5C12.201 31.5 7.5 28.8137 7.5 25.5C7.5 22.1863 12.201 19.5 18 19.5C21.9201 19.5 25.3385 20.7276 27.1421 22.5467Z"
                    fill=""/>
            </svg>
          </div>
          <div class="text">
            <h3 class="countUp" data-val="1500">1 500+</h3>
            <p>Yuridik shaxslar</p>
          </div>
        </div>
        <div class="box">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="#7FB949">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.5 7.5H16.5C19.3284 7.5 20.7426 7.5 21.6213 8.37868C22.5 9.25736 22.5 10.6716 22.5 13.5V31.875H24.75H31.5H33C33.6213 31.875 34.125 32.3787 34.125 33C34.125 33.6213 33.6213 34.125 33 34.125H3C2.37868 34.125 1.875 33.6213 1.875 33C1.875 32.3787 2.37868 31.875 3 31.875H4.5V13.5C4.5 10.6716 4.5 9.25736 5.37868 8.37868C6.25736 7.5 7.67157 7.5 10.5 7.5ZM7.875 12C7.875 11.3787 8.37868 10.875 9 10.875H18C18.6213 10.875 19.125 11.3787 19.125 12C19.125 12.6213 18.6213 13.125 18 13.125H9C8.37868 13.125 7.875 12.6213 7.875 12ZM7.875 16.5C7.875 15.8787 8.37868 15.375 9 15.375H18C18.6213 15.375 19.125 15.8787 19.125 16.5C19.125 17.1213 18.6213 17.625 18 17.625H9C8.37868 17.625 7.875 17.1213 7.875 16.5ZM7.875 21C7.875 20.3787 8.37868 19.875 9 19.875H18C18.6213 19.875 19.125 20.3787 19.125 21C19.125 21.6213 18.6213 22.125 18 22.125H9C8.37868 22.125 7.875 21.6213 7.875 21ZM13.5 27.375C14.1213 27.375 14.625 27.8787 14.625 28.5V31.875H12.375V28.5C12.375 27.8787 12.8787 27.375 13.5 27.375Z"
                    fill="#7FB949"/>
              <path opacity="0.5"
                    d="M22.5 3H25.5C28.3284 3 29.7426 3 30.6213 3.87868C31.5 4.75736 31.5 6.17157 31.5 9V31.875H22.5V13.5C22.5 10.6716 22.5 9.25736 21.6213 8.37868C20.7624 7.51979 19.3919 7.50045 16.689 7.50001V5.24998C16.8154 4.66912 17.0264 4.23088 17.3786 3.87868C18.2573 3 19.6715 3 22.5 3Z"
                    fill=""/>
            </svg>
          </div>
          <div class="text">
            <h3 class="countUp" data-val="1150">1 150+</h3>
            <p>YaTT lar</p>
          </div>
        </div>
        <div class="box">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="7FB949">
              <circle opacity="0.4" cx="22.5" cy="9" r="4.5" fill="#7FB949"/>
              <ellipse opacity="0.4" cx="24" cy="25.5" rx="7.5" ry="4.5" fill="#7FB949"/>
              <circle cx="13.5015" cy="9" r="6" fill="#7FB949"/>
              <ellipse cx="13.5015" cy="25.5015" rx="10.5" ry="6" fill="#7FB949"/>
            </svg>
          </div>
          <div class="text">
            <h3 class="countUp" data-val="760">760+</h3>
            <p>Jismoniy shaxslar</p>
          </div>
        </div>
        <div class="box">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="#7FB949">
              <path opacity="0.5"
                    d="M21 6H15C9.34315 6 6.51472 6 4.75736 7.75736C3 9.51472 3 12.3431 3 18C3 23.6569 3 26.4853 4.75736 28.2426C6.51472 30 9.34315 30 15 30H21C26.6569 30 29.4853 30 31.2426 28.2426C33 26.4853 33 23.6569 33 18C33 12.3431 33 9.51472 31.2426 7.75736C29.4853 6 26.6569 6 21 6Z"
                    fill=""/>
              <path
                  d="M19.875 13.5C19.875 12.8787 20.3787 12.375 21 12.375H28.5C29.1213 12.375 29.625 12.8787 29.625 13.5C29.625 14.1213 29.1213 14.625 28.5 14.625H21C20.3787 14.625 19.875 14.1213 19.875 13.5Z"
                  fill=""/>
              <path
                  d="M21.375 18C21.375 17.3787 21.8787 16.875 22.5 16.875H28.5C29.1213 16.875 29.625 17.3787 29.625 18C29.625 18.6213 29.1213 19.125 28.5 19.125H22.5C21.8787 19.125 21.375 18.6213 21.375 18Z"
                  fill=""/>
              <path
                  d="M22.875 22.5C22.875 21.8787 23.3787 21.375 24 21.375H28.5C29.1213 21.375 29.625 21.8787 29.625 22.5C29.625 23.1213 29.1213 23.625 28.5 23.625H24C23.3787 23.625 22.875 23.1213 22.875 22.5Z"
                  fill=""/>
              <path
                  d="M13.5 16.5C15.1569 16.5 16.5 15.1569 16.5 13.5C16.5 11.8431 15.1569 10.5 13.5 10.5C11.8431 10.5 10.5 11.8431 10.5 13.5C10.5 15.1569 11.8431 16.5 13.5 16.5Z"
                  fill=""/>
              <path
                  d="M13.5 25.5C19.5 25.5 19.5 24.1569 19.5 22.5C19.5 20.8431 16.8137 19.5 13.5 19.5C10.1863 19.5 7.5 20.8431 7.5 22.5C7.5 24.1569 7.5 25.5 13.5 25.5Z"
                  fill=""/>
            </svg>
          </div>
          <div class="text">
            <h3 class="countUp" data-val="500">500+</h3>
            <p>Xorijiy fuqarolar</p>
          </div>
        </div>
        <div class="box">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="#7FB949">
              <path opacity="0.5"
                    d="M18 33C10.9289 33 7.3934 33 5.1967 30.8033C3 28.6066 3 25.0711 3 18C3 10.9289 3 7.3934 5.1967 5.1967C7.3934 3 10.9289 3 18 3C25.0711 3 28.6066 3 30.8033 5.1967C33 7.3934 33 10.9289 33 18C33 25.0711 33 28.6066 30.8033 30.8033C28.6066 33 25.0711 33 18 33Z"
                    fill="#7FB949"/>
              <path
                  d="M24.0455 13.4545C24.4848 13.8938 24.4848 14.6062 24.0455 15.0455L16.5455 22.5455C16.1062 22.9848 15.3938 22.9848 14.9545 22.5455L11.9545 19.5455C11.5152 19.1062 11.5152 18.3938 11.9545 17.9545C12.3938 17.5152 13.1062 17.5152 13.5455 17.9545L15.75 20.159L22.4545 13.4545C22.8938 13.0152 23.6062 13.0152 24.0455 13.4545Z"
                  fill=""/>
            </svg>
          </div>
          <div class="text">
            <h3>70 454+</h3>
            <p>Ko'rib chiqilgan arizalar</p>
          </div>
        </div>
        <div class="box">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="#7FB949">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18 3C11.8005 3 8.70069 3 7.79738 4.94877C7.71973 5.11628 7.65423 5.29028 7.60148 5.46914C6.98785 7.54994 9.17972 9.96167 13.5635 14.7851L16.5 18H19.5L22.4365 14.7851C26.8203 9.96167 29.0121 7.54994 28.3985 5.46914C28.3458 5.29028 28.2803 5.11628 28.2026 4.94877C27.2993 3 24.1995 3 18 3ZM15 7.125C14.3787 7.125 13.875 7.62868 13.875 8.25C13.875 8.87132 14.3787 9.375 15 9.375H21C21.6213 9.375 22.125 8.87132 22.125 8.25C22.125 7.62868 21.6213 7.125 21 7.125H15Z"
                    fill=""/>
              <path opacity="0.5"
                    d="M7.79738 31.0512C8.70069 33 11.8005 33 18 33C24.1995 33 27.2993 33 28.2026 31.0512C28.2803 30.8837 28.3458 30.7097 28.3985 30.5309C29.0121 28.4501 26.8203 26.0383 22.4365 21.2149L19.5 18H16.5L13.5635 21.2149C9.17972 26.0383 6.98785 28.4501 7.60148 30.5309C7.65423 30.7097 7.71973 30.8837 7.79738 31.0512Z"
                    fill=""/>
              <path
                  d="M15 26.625C14.3787 26.625 13.875 27.1287 13.875 27.75C13.875 28.3713 14.3787 28.875 15 28.875H21C21.6213 28.875 22.125 28.3713 22.125 27.75C22.125 27.1287 21.6213 26.625 21 26.625H15Z"
                  fill=""/>
            </svg>
          </div>
          <div class="text">
            <h3>517+</h3>
            <p>Jarayondagi arizalar</p>
          </div>
        </div>
      </div>
      <div class="right">
        <h2>Arizalar Bo'yicha Statistikalar</h2>
        <div class="applications">
          <h3>Berilgan arizalar soni</h3>
          <h2>70 971+</h2>
        </div>
        <p>With a decade of insights and expertise, we're decided to reimagine co-working space</p>
        <div class="icon">
          <i class="fa-regular fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="news">
    <div class="wrap">
      <div class="start">
        <h1>Yangiliklar va E`lonlar</h1>
        <h3>Barchasini ko'rish <i class="fa-regular fa-chevron-right"></i></h3>
      </div>
      <div class="boxes">
        <div class="box1">
          <div class="image">
            <img src="../../assets/images/eco_news0.png" alt="img">
          </div>
          <div class="content">
            <h2>Google I / O 2020 news update</h2>
            <p>Out of concern for the health and safety of our developers, employees, and local communities — and in
              line with recent ...</p>
            <div class="person">
              <div class="image"><img src="../../assets/images/eco_news-man.svg" alt="img"></div>
              <div class="info">
                <h3>Sundar pichai</h3>
                <p>CEO at Google</p>
              </div>
            </div>
            <p class="a-right">23.11.2023 y</p>
          </div>
        </div>
        <div class="box" v-for="(item, id) in news" :key="id">
          <div class="image"><img :src="item.img" alt="img"></div>
          <div class="text">
            <h3>{{ item.text }}</h3>
            <p>{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="public-projects">
    <div class="start">
      <p>Jamoatchilik eshituvi</p>
      <h1>Jamoatchilik eshituvi o'tkazilgan loyihalar</h1>
      <div class="icons">
        <div class="icon prev1"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="icon next1"><i class="fa-solid fa-chevron-right"></i></div>
      </div>
    </div>
    <swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :loop="true"
        :navigation="{enabled: true, prevEl: '.prev1', nextEl: '.next1'}"
        :modules="modules"
        class="mySwiper2"
    >
      <swiper-slide v-for="(item, id) in publicProjets" :key="id">
        <div class="card"
             :style="{backgroundImage: `url(${item.img})`}">
          <div class="bg-liner">
            <p>{{ item.text }}</p>
            <div class="bottom">
              <button><p>Batafsil malumot</p><i class="fa-solid fa-chevron-right"></i></button>
              <p>{{ item.date }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/free-mode";
import { Navigation, Pagination, Mousewheel, Keyboard , FreeMode} from 'swiper/modules';

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
      document.documentElement.style.setProperty('--ht2', document.querySelectorAll('.environmental-expertise .swiper-pagination-current')[0].innerHTML);
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
svg:hover{
    cursor: pointer;
}
.mt3{
    margin-top: 30px;
}
.del-text{
    text-decoration: line-through;
}
.black04{
    color: var(--black, #040404);
}
.darck-gray-c{
    color: var(--dark-grey, #6C6C6C);
}
.bold{
    font-weight: 900;
}
.H_1{
    font-family: SF Pro Display;
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -1.2px;
}
.H_2{
    font-family: SF Pro Display;
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.84px;
}
.H_3{
    font-family: SF Pro Display;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -0.6px;
    color: var(--black, #040404);
}
.T_1{
    font-family: SF Pro Display;
    font-size: 1.12rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
}
.T_2{
    font-family: SF Pro Display;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
}
.B_1{
    font-family: SF Pro Display;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0.32px;
}
.B_2{
    font-family: SF Pro Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0.14px;
}
.wrapper-c{
    padding: 55px 100px;
    border-radius: 20px;
    background-color: var(--white, #FFF);
    position: relative;
    z-index: 0;
}

/*       -----                navbar              -----         */

.wrapper-c nav{
    position: sticky;
    top: 0px;
    z-index: 3;
}
.wrapper-c nav .top{
    background-color: var(--white, #FFF);
    display: flex;
    align-items: center;
    gap: 14px;
    position: relative;
        padding: 25px 0 10px 0;
    z-index: 3;
}
.wrapper-c nav .top .left, .wrapper-c nav .top .right{
    display: flex;
    gap: 10px;
}
.wrapper-c nav .logo{
    width: 160px;
    height: 58px;
    border-radius: 15px;
    background: var(--light-grey, #F3F3F3);
    padding: 20px;
}
.wrapper-c nav .icon{
    border-radius: 15px;
    background: var(--light-grey, #F3F3F3);
    display: flex;
    padding: 15px;
    justify-content: center;
    align-items: center;
}
.wrapper-c nav i{
    font-size: 24px;
}
.wrapper-c nav .search{
    flex-grow: 1;
    display: flex;
    position: relative;
    align-self: stretch;
}
.wrapper-c nav .search input{
    flex-grow: 1;
    outline: none;
    border-radius: 15px;
    border: 2px solid var(--light-grey, #F3F3F3);
    padding-left: 20px;
    font-size: 1rem;
    background-color: #F3F3F300;
}
.wrapper-c nav .search .icon{
    position: absolute;
    right: -0.2px;
    top: 0px;
    border: 2.1px solid var(--light-grey, #F3F3F3);
}
.wrapper-c nav .btn{
    display: flex;
    padding: 16px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    color: var(--accent, #1E75F8);
    text-align: center;
    font-family: SF Pro Display;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0.16px;
    border: none;
}
.wrapper-c .b1{
    border: 2px solid var(--dark-grey, #F3F3F3) !important;
    background-color: #ffffff00;
}
.wrapper-c .b2{
    background: var(--light-grey, #F3F3F3);
    border: 2px solid var(--dark-grey, #F3F3F3) !important;
}
.wrapper-c nav .menu{
    position: absolute;
    width: 100%;
    height: calc(100vh);
    background-color: #ffffff00;
    opacity: 0;
    top: -270px;
    left: 0px;
    display: none;
    padding: 0 10px;
    flex-direction: column;
    align-items: flex-start;
    z-index: -1;
    transition: 0.6s all ease-in-out;
}
.wrapper-c nav .menu .search{
    display: none;
}
.wrapper-c nav .menu .saw-mode{
    position: relative;
    top: 50px;
    align-self: flex-end;
    display: none;
}
.wrapper-c nav .menu .search input{
    height: 58px;
}
.wrapper-c nav .menu ul{
    margin-bottom: 30px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: SF Pro Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: var(--dark-grey, #6C6C6C);
}
.wrapper-c nav .top70{
    top: 70px;
    z-index: 2;
    background-color: white;
    opacity: 1;
    display: flex;
}
.wrapper-c nav .user{
    display: none;
}

/*       -----                showcase              -----         */
.wrapper-c .showcase{
    padding: 180px 0;
    background-image: url(../../assets/images/exCoursesShowcase.jpeg);
    background-size: cover;
    display: flex;
    justify-content: center;
    border-radius: 40px;
    background-image: linear-gradient(98deg, rgba(30, 117, 248, 0.60) -30.27%, rgba(0, 0, 0, 0.60) 17.14%, rgba(4, 4, 4, 0.60) 71.85%, rgba(30, 117, 248, 0.60) 138.06%), url(../../assets/images/exCoursesShowcase.jpeg);
    background-position-y: 50%;
    margin-top: 50px;
}
.wrapper-c .showcase .content{
    width: 717px;
    text-align: center;
}
.wrapper-c .showcase .content h1{
    color: var(--light-grey, #FAFAF9);
    font-family: SF Pro Display;
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -1.2px;
}
.wrapper-c .showcase .content .btns{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;
}
.wrapper-c .showcase .btn{
    padding: 15px;
    width: 192px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: SF Pro Display;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0.16px;
    color: var(--light-grey, #F3F3F3);
    border-radius: 200px;
}
.wrapper-c .showcase .btn1{
    border: 2px solid var(--light-grey, #F3F3F3);
    background-color: #04040400;
}
.wrapper-c .showcase .btn2{
    background-color: var(--accent, #1E75F8);
    border: none;
}

/*       -----                res-courses              -----         */

.wrapper-c .rec-courses{
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: var(--light-grey, #F3F3F3);
    margin: 150px 0;
}
.wrapper-c .rec-courses>h2{
    text-align: center;
}
.wrapper-c .rec-courses>p{
    margin-bottom: 80px;
    color: var(--dark-grey, #6C6C6C);
}
.wrapper-c .rec-courses .boxes{
    display: flex;
    gap: 20px;
    justify-content: center;
}
.wrapper-c .course-box{
    border-radius: 15px;
    background-color: white;
    width: 400px;
    border: 2px solid var(--light-grey, #F3F3F3);
}
.wrapper-c .course-box .image{
    width: 396px;
    position: relative;
}
.wrapper-c .course-box .image img{
    border-radius: 15px 15px 0px 0;
}
.wrapper-c .course-box .image .rate{
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    border-radius: 8px;
    background: var(--light-grey, #F3F3F3);
    position: absolute;
    top: 36px;
    left: 30px;
}
.wrapper-c .course-box .image .rate i{
    font-size: 14px;
    color: #FBB732;
}
.wrapper-c .course-box .image .like{
    display: flex;
    width: 50px;
    height: 50px;
    padding: 16px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: var(--light-grey, #F3F3F3);
    position: absolute;
    right: 23px;
    bottom: -23px;
}
.wrapper-c .course-box .image .like i{
    font-size: 18px;
}
.wrapper-c .course-box .content{
    padding: 30px;
    text-align: left;
}
.wrapper-c .course-box .content .comp{
    display: flex;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
    align-items: center;
}
.wrapper-c .course-box .content .comp i{
    font-size: 30px;
}
.wrapper-c .course-box .content>h3{
    font-weight: 700;
}
.wrapper-c .course-box .content ul{
    list-style-type: disc;
    position: relative;
    left: 16px;
    margin-bottom: 30px;
}
.wrapper-c .course-box .content .sum{
    display: flex;
    flex-wrap: wrap;
    gap: 1px 15px;
    margin-bottom: 30px;
}
.wrapper-c .course-box .content .sum h3{
    font-weight: 700;
    font-size: 1.25rem;
}
.wrapper-c .course-box .content button{
    width: 100%;
    padding: 15px;
    border-radius: 200px;
    background: var(--accent, #1E75F8);
    color: white;
    border: none;
    font-size: 1rem;
    font-weight: 700;
}
.wrapper-c .rec-courses .btns{
    margin: 27px 0;
    display: none;
    justify-content: center;
    gap: 6px;
}
.wrapper-c .rec-courses .btns button{
    display: flex;
    width: 40px;
    height: 40px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    border: 1px solid var(--dark-grey, #6C6C6C);
}
.wrapper-c .rec-courses .btns i{
    color: var(--dark-grey, #6C6C6C);
    font-size: 20px;
}
.wrapper-c .mySwiper{
    width: 1240px;
}


/*       -----                catalog-courses              -----         */

.wrapper-c .catalog-courses .course-boxes{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 40px 20px;
}
.wrapper-c .catalog-courses>button{
    border-radius: 200px;
    background: var(--accent, #1E75F8);
    padding: 15px 30px;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    border: none;
    display: flex;
    margin: 110px auto 150px auto;
}
.wrapper-c .catalog-courses> h2{
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--2, #181818);
    text-align: center;
    margin-bottom: 74px;
}
.wrapper-c .catalog-courses .poisk-wrap{
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 40px;
}
.wrapper-c .catalog-courses .poisk-wrap>button{
    color: var(--dark-grey, #6C6C6C);
    font-size: 1rem;
    border-radius: 16px;
    background: var(--light-grey, #F3F3F3);
    padding: 10px;
    border: none;
}
.wrapper-c .catalog-courses .poisk{
    display: flex;
    border-radius: 15px;
    border: 2px solid var(--light-grey, #F3F3F3);
    width: 707px;
    justify-content: space-between;
    align-items: center;
}
.wrapper-c .catalog-courses .poisk input{
    padding-left: 20px;
    border: none;
    align-self: stretch;
    outline: none;
    border-radius: 15px;
    color: var(--dark-grey, #6C6C6C);
    font-size: 1rem;
}
.wrapper-c .catalog-courses .poisk .icon{
    border-radius: 10px;
    background: var(--light-grey, #F3F3F3);
    width: 34.5px;
    height: 34.5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper-c .catalog-courses .poisk .icon i{
    font-size: 18px;
}
.wrapper-c .catalog-courses .course-names{
    display: flex;
    gap: 45px;
    overflow: scroll;
    border-radius: 20px;
    border: 2px solid var(--light-grey, #F3F3F3);
    padding: 10px;
    margin-bottom: 40px;
}
.wrapper-c .catalog-courses .course-names .cours{
    flex-shrink: 0;
    display: flex;
    gap: 3px;
    align-items: center;
    border-radius: 10px;
    background: var(--light-grey, #F3F3F3);
    padding: 10px;
    color: var(--dark-grey, #6C6C6C);
}
.wrapper-c .catalog-courses .course-names .cours p{
    font-size: 1rem;
}
.wrapper-c .catalog-courses .course-names .cours i{
    font-size: 1.2rem;
}

/*       -----                choose-course              -----         */

.wrapper-c .choose-course{
    display: flex;
    gap: 20px;
}
.wrapper-c .choose-course .image{
    flex-grow: 1;
}
.wrapper-c .choose-course .content{
    padding: 50px 45px;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    border: 2px solid var(--light-grey, #F3F3F3);
    background: var(--white, #FFF);
    flex-grow: 1;
}
.wrapper-c .choose-course .content .left{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 340px;
    flex-shrink: 1;
}
.wrapper-c .choose-course .content .left h2{
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1;
}
.wrapper-c .choose-course .content .left p{
    color: var(--black, #040404);
    width: 240px;
}
.wrapper-c .choose-course .content .left .icons{
    display: flex;
    gap: 10px;
}
.wrapper-c .choose-course .content .left .icons i{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    border: 1.3px solid var(--dark-grey, #6C6C6C);
    padding: 10px;
    font-size: 20px;
    color: var(--dark-grey, #6C6C6C);
}
.wrapper-c .choose-course .content .right{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 340px;
}
.wrapper-c .choose-course .right input{
    border-radius: 15px;
    border: 1.5px solid var(--light-grey, #F3F3F3);
    background: var(--light-grey, #F3F3F3);
    padding: 16px 20px;
}
.wrapper-c .choose-course .content .right button{
    margin-top: 15px;
    border-radius: 200px;
    background: var(--unnamed, #2F80F8);
    padding: 16px;
    border: none;
    color: white;
}


/*       -----                footer              -----         */

.wrapper-c footer{
    margin-top: 40px;
    border-radius: 20px;
    background: var(--black, #040404);
    padding: 90px 25px 53px 45px;
    color: white;
}
.wrapper-c footer .top{
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    gap: 10px;
}
.wrapper-c footer .top .left{
    width: 25%;
}
.wrapper-c footer .top .left .logo{
    width: 136px;
    margin-bottom: 20px;
}
.wrapper-c footer p{
    font-family: SF Pro Display;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.28px;
}
.wrapper-c footer .top .logos{
    display: flex;
    gap: 10px;
    margin-top: 10px;
    align-items: center;
}
.wrapper-c footer .top .logos .image{
    height: 28px;
}
.wrapper-c footer .top .logos .image:nth-of-type(3){
    height: 18px;
}
.wrapper-c footer .top .right{
    display: flex;
    gap: 70px;
}
.wrapper-c footer .top h3{
    color: var(--accent, #1E75F8);
    font-family: SF Pro Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    margin-bottom: 20px;
}
.wrapper-c footer .top ul{
    display: flex;
    gap: 20px;
    flex-direction: column;
}
.wrapper-c footer .top .links{
    display: flex;
    width: 417px;
    align-items: flex-start;
    align-content: flex-start;
    gap: 10px;
    flex-wrap: wrap;
}
.wrapper-c footer .top .links h3{
    margin-bottom: 30px;
    width: 100%;
}
.wrapper-c footer .top .links .link-box{
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 200px;
    border: 1px solid var(--dark-grey, #292929);
    cursor: pointer;
}
.wrapper-c footer .top .links .link-box h3{
    color: white;
    margin-bottom: 0;
    font-size: 1rem;
}
.wrapper-c footer .top .links .link-box i{
    font-size: 20px;
    color: white;
}
.wrapper-c footer .top .info{
    width: 232px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.wrapper-c footer .top .right .logos{
    display: none;
}
.wrapper-c footer .right>p{
    display: none;
}
.wrapper-c footer .bottom{
    padding-top: 50px;
    border-top: 1px solid var(--dark-grey, #6C6C6C);
    color: var(--dark-grey, #6C6C6C);
    display: flex;
    justify-content: space-between;
}
.wrapper-c footer .bottom .left{
    width: 25%;
}
.wrapper-c footer .bottom .left a{
    font-size: 1rem;
}
.wrapper-c footer .bottom .right{
    display: flex;
    gap: 50px;
    font-size: 0.85rem;
}

/*       -----                classes              -----         */

.h780{
    height: 780px;
}
.bg-white{
    background-color: var(--white, #FFF) !important;
}
.darck-gray{
    background-color: var(--dark-grey, #292929) !important;
}
.blue-c{
    color: var(--accent, #1E75F8);
    border: 2px solid var(--dark-grey, #292929) !important;
    background-color: #F3F3F300 !important;
}
.border-gray{
    border: 2.1px solid var(--dark-grey, #292929) !important;
}
.bgnan{
    background-color: var(--black, #04040400) !important;
    border: 2px solid #161616;
}
.border2{
    background-color: var(--black, #04040400) !important;
    border: 2px solid #161616;
}
.bgnan:hover{
    background-color: #161616 !important; 
    color: white !important;
}

.darck{
    background-color: var(--black, #040404) !important;
    color: var(--white, #FFF) !important;
}
.darck2{
    color: white !important;
    background: var(--dark-grey, #292929) !important;
}

@media(max-width: 1540px){
    .wrapper-c .rec-courses .mySwiper{
        width: 820px;
    }
}
@media (max-width: 1500px){
    .wrapper-c footer .top .right{
        gap: 30px;
    }
    .wrapper-c .choose-course .content{
        padding-right: 20px;
        gap: 10px;
    }
    .wrapper-c .choose-course .content .left, .wrapper-c .choose-course .content .right{
        width: 312px;
    }
}
@media (max-width: 1400px) {
    .wrapper-c footer .top{
        flex-wrap: wrap;
        gap: 40px;
    }
    .wrapper-c footer .top .left{
        width: 264px;
    }
    .wrapper-c footer .top .right{
        gap: 30px;
        flex-wrap: wrap;
    }
    .wrapper-c .choose-course{
        flex-wrap: wrap;
    }
}
@media(max-width: 1100px){
    .wrapper-c .rec-courses .mySwiper{
        width: 400px;
    }
}
@media(max-width: 1000px){
    .wrapper-c{
        padding: 55px;
    }
    .wrapper-c nav .menu .search, .wrapper-c nav .menu .saw-mode{
        display: flex;
    }
    .wrapper-c nav .menu ul{
        margin-top: -20px;
    }
    .wrapper-c nav .top{
        justify-content: space-between;
    }
    .wrapper-c nav .top .search, .wrapper-c nav .top .btn, .wrapper-c nav .top svg{
        display: none;
    }
    .wrapper-c nav .top .tel{
        border-radius: 200px;
        background: var(--accent, #1E75F8) !important;
        color: white;
        padding: 15px 45px;
        border: none !important;
    }
    .wrapper-c nav .user{
        display: flex;
    }
    .wrapper-c .showcase{
        padding: 78px 10px;
    }
    .wrapper-c .showcase .content{
        width: 100%;
    }
    .wrapper-c .showcase .content h1{
        font-size: 2.75rem;
    }
    .wrapper-c .rec-courses{
        padding: 20px 5px;
    }
    .wrapper-c footer .bottom{
        padding-top: 40px;
        flex-direction: column-reverse;
        gap: 40px;
    }
    .wrapper-c footer .bottom .right{
        gap: 20px;
        flex-direction: column;
    }
}
@media(max-width: 800px){
    .wrapper-c .choose-course{
        border-radius: 20px;
        border: 2px solid var(--light-grey, #F3F3F3);
        background: var(--white, #FFF);
        padding: 30px 20px;
        gap: 30px;
        margin: 0 15px;
    }
    .wrapper-c .choose-course .content{
        border: none;
        padding: 0;
        flex-wrap: wrap;
        gap: 30px;
    }
    .wrapper-c .choose-course .content .right, .wrapper-c .choose-course .content .left{
        width: 100%;
    }
    .wrapper-c .catalog-courses>button{
        margin: 100px auto;
    }
}
@media (max-width: 600px) {
    .wrapper-c footer .top .right .links{
        width: 100%;
    }
}

@media(max-width: 500px){
    :root{
        font-size: 16px;
    }
    .wrapper-c{
        padding: 55px 0 0 0;
        border-radius: none;
    }
    .wrapper-c nav .top{
        padding: 25px 10px 10px 10px;
    }
    .wrapper-c nav .top .left{
        align-items: center;
    }
    .wrapper-c nav .icon{
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    .wrapper-c nav .top .tel{
        padding: 15px;
        border-radius: 50%;
    }
    .wrapper-c nav .top .logo{
        padding: 18px;
    }
    .wrapper-c nav .menu .search .icon{
        background-color: #04040400;
        border: none;
        top: 4px;
    }
    .wrapper-c nav .menu .search .icon .border-gray, .wrapper-c nav .menu .search .darck-gray{
        background: none !important;
        border: none !important;
    }
    .wrapper-c .showcase .btns{
        flex-wrap: wrap;
    }
    .wrapper-c .showcase{
       border-radius: 0;
       margin-top: 25px;
    }
    .wrapper-c .course-box .content {
        padding: 30px 10px;
    }
    .wrapper-c .course-box, .wrapper-c .course-box .image {
        width: 356px;
    }
    .wrapper-c .rec-courses .mySwiper{
        width: 360px;
    }
    .wrapper-c .rec-courses .btns{
        display: flex;
    }
    .wrapper-c .rec-courses>p{
        margin-bottom: 0px;
    }
    .wrapper-c .catalog-courses .poisk-wrap{
        padding: 0 10px;
        gap: 5px;
    }
    .wrapper-c .catalog-courses .course-names{
        border-radius: 0;
    }
    .wrapper-c footer{
        padding: 40px 20px;
        border-radius: 0;
    }
    .wrapper-c footer .top .left{
        width: 100%;
    }
    .wrapper-c footer .top .left .logos{
        display: none;
    }
    .wrapper-c footer .top .right .logos{
        display: flex;
        width: 100%;
        margin-top: -20px;
        margin-bottom: 40px;
    }
    .wrapper-c footer .top h3{
        margin-bottom: 0;
    }
    .wrapper-c footer .top .right>p{
        width: 100%;
    }
    .wrapper-c .mt3{
        margin-top: 10px;
    }
}
</style>