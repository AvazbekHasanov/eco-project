<template>
  <div class="wrapper-eco">

    <nav>
      <Header/>
    </nav>
    <div class="showcase">
      <h3>Атроф мухитимизни авлодлар учун биргаликда саклайлик</h3>
      <h1>Чиқиндиларни транспорт орқали ташиш</h1>
      <button>кабинетга кириш <i class="fa-regular fa-chevron-right"></i></button>
    </div>
    <div class="transition-stages">
      <p>Экологик экспертиза қандай амалга оширилади ?</p>
      <h1>MaxsusTrans xizmatlarisidan foydalanish  bosqichlari</h1>
      <div class="boxes">
        <div class="box">
          <div class="card bg1">
            <h3>Buyurtma Yuborish</h3>
            <p>MaxsusTrans xizmatlaridan foydalanish jarayonida buyurtma yuborilgandan so'ng Shartnoma tuzish amalga
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
            <p>MaxsusTrans xizmatlaridan foydalanish jarayonida jarayonida buyurtma yuborilgandan so'ng Shartnoma tuzish amalga
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
            <p>MaxsusTrans xizmatlaridan foydalanish jarayonida jarayonida buyurtma yuborilgandan so'ng Shartnoma tuzish amalga
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
      <h1>MaxsusTrans xizmatlaridan foydalanishgan obyektlar</h1>
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
      <h1>MaxsusTrans xizmatlaridan foydalanishgan faoliyat turlari</h1>
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
      <p>Tizimdan foydalanish raqamlarda</p>
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
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
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