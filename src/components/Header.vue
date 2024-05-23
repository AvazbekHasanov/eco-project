<script>
import Carusel from "@/components/carusel.vue";

export default {
  name: "header",
  components: {Carusel},
  data() {
    return {
      isOpenLocation: false,
      locations: ['Uz', 'Ru', 'En'],
      serviceInfo: {
        note: ''
      },
      activeLocation: 'Uz',
      links: ['BOSH SAHIFA', 'XIZMATLAR', 'YANGILIKLAR', 'XULOSALAR', 'LOYIHACHILAR REYTINGI', 'JAMOATCHILIK ESHITUVI', 'STATISTIKA', 'ALOQALAR'],
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
  mounted() {
    this.activeLink();
  },
  methods: {
    activeLink() {
      for (let i = 0; i < this.links.length; i++) {
        if (document.querySelectorAll('nav .bottom a')[i].href === window.location.href) {
          document.querySelectorAll('nav .bottom a')[i].style.color = '#7FB949'
        }
      }
      console.log(this.$user)
      if (this.$user.id) {
        fetch(this.$host + `/get_user_service?id=${this.$user.id}`).then(res => res.json().then(res => {
          console.log("res", res.message);
          if (res.message === 'successful') {
            this.serviceInfo = res.info;
            console.log("this.serviceInfo", this.serviceInfo)
            const inputTime = this.serviceInfo.end_date;
            const date = new Date(inputTime);
            const day = String(date.getUTCDate()).padStart(2, "0");
            const month = String(date.getUTCMonth() + 1).padStart(2, "0");
            const year = date.getUTCFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            this.serviceInfo.note = 'Xizmat nomi: ' + res.info.name + '.  Tugash muddati: ' + formattedDate;
            console.log("this.serviceInfo.note", this.serviceInfo.note);
          }
        }))
      }
    },
    openLocation() {
      if (this.isOpenLocation) {
        this.isOpenLocation = false
      } else {
        this.isOpenLocation = true
      }
    },
    changeLocation(e) {
      this.activeLocation = e.target.innerHTML
    },
  }
}
</script>

<template>
  <div v-if="$user.id && serviceInfo.note" class="services_info">
    <Carusel :content="serviceInfo.note"></Carusel>
  </div>
  <div class="top">
    <a class="logo" href="/" style="text-decoration: none">
      <div class="image">
        <img src="../assets/images/eco_logo.svg" alt="logo">
      </div>
      <div class="text">
        <h2>MaxsusTrans xizmatlari</h2>
        <p>Xizmat ko'rsatish</p>
      </div>
    </a>
    <div class="right">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="#222831">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.0908 6.67264C9.5252 4.62893 7.48882 3.36664 5.47366 4.03879C4.16075 4.47668 3.36153 5.29363 3.09659 6.38329C2.85032 7.39612 3.107 8.48912 3.50564 9.45503C4.30841 11.4002 5.89725 13.3273 6.79683 14.2275C7.67567 15.107 9.59999 16.7027 11.5488 17.5129C12.5164 17.9151 13.6135 18.1763 14.6309 17.9306C15.726 17.6662 16.547 16.8629 16.9874 15.5407C17.6585 13.5256 16.3985 11.4877 14.3552 10.9213L14.3552 10.9213C12.9586 10.5342 11.4939 10.9033 10.4944 11.8005C10.2597 11.6188 10.0341 11.4203 9.81889 11.205C9.60264 10.9885 9.40344 10.7615 9.22114 10.5254C10.1112 9.52552 10.4763 8.06526 10.0908 6.67264L10.0908 6.67264Z"
                fill=""/>
        </svg>
        <a href="tel: +998 33 33 33 33">+998(33)333-33-33</a>
      </div>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="#222831">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.44575 4.19037C2.91162 4.19037 1.66797 5.46956 1.66797 7.04751V14.6666C1.66797 16.2445 2.91162 17.5237 4.44575 17.5237H15.5569C17.091 17.5237 18.3346 16.2445 18.3346 14.6666V7.04751C18.3346 5.46956 17.091 4.19037 15.5569 4.19037H4.44575ZM6.35521 7.70631C5.99583 7.4188 5.47142 7.47707 5.18391 7.83646C4.8964 8.19584 4.95467 8.72025 5.31406 9.00776L9.48072 12.3411L10.0013 12.7576L10.5219 12.3411L14.6885 9.00776C15.0479 8.72025 15.1062 8.19584 14.8187 7.83646C14.5312 7.47707 14.0068 7.4188 13.6474 7.70631L10.0013 10.6232L6.35521 7.70631Z"
                fill=""/>
        </svg>
        <a href="mailto: info@ecoservice.uz">info@ecoservice.uz</a>
      </div>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="#222831">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M14.5084 5.06166C15.8291 4.68227 17.0474 5.90063 16.6681 7.22131L13.3155 18.8919C12.7566 20.8372 10.1587 21.2068 9.09139 19.4929L7.61159 17.1165C7.20228 16.4592 7.30138 15.605 7.85066 15.0557L11.0093 11.897C11.3353 11.571 11.3362 11.0434 11.0113 10.7185C10.6864 10.3937 10.1588 10.3946 9.83284 10.7205L6.67426 13.8792C6.12498 14.4285 5.27068 14.5276 4.61339 14.1183L2.23686 12.6383C0.522898 11.571 0.892527 8.97308 2.83786 8.41425L14.5084 5.06166Z"
                fill=""/>
        </svg>
        <a href="#">Телеграмдаги гурух</a>
      </div>
      <div class="search">
        <input type="search" name="search" id="search" placeholder="Qidirish">
        <i class="fa-regular fa-magnifying-glass"></i>
      </div>


      <div class="plbrb-topbar__account ui-link action-button" v-if="$user.id">
        <svg data-v-50d82c62="" width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 3C9.79086 3 8 4.79086 8 7V8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8V7C16 4.79086 14.2091 3 12 3ZM9.5 7C9.5 5.61929 10.6193 4.5 12 4.5C13.3807 4.5 14.5 5.61929 14.5 7V8C14.5 9.38071 13.3807 10.5 12 10.5C10.6193 10.5 9.5 9.38071 9.5 8V7ZM5.50232 19.3686C5.97321 16.2577 9.01803 14.5 12.0022 14.5C14.9858 14.5 18.031 16.2577 18.5019 19.3686C18.5046 19.3866 18.5025 19.3972 18.5 19.4048C18.497 19.4137 18.4903 19.4269 18.4759 19.442C18.4453 19.4741 18.3894 19.5039 18.3171 19.5039H5.68718C5.61487 19.5039 5.55898 19.4741 5.52838 19.442C5.51394 19.4269 5.50726 19.4137 5.50427 19.4048C5.50174 19.3972 5.49961 19.3865 5.50232 19.3686ZM12.0022 13C8.57321 13 4.64037 15.0404 4.01922 19.1441C3.85624 20.2208 4.75727 21.0039 5.68718 21.0039H18.3171C19.247 21.0039 20.148 20.2208 19.985 19.1441C19.3638 15.0404 15.4306 13 12.0022 13Z"
                fill="black"></path>
        </svg>
        <span data-v-50d82c62="" class="action-button__label"> {{ $user.name }}</span>
        <div class="plbrb-topbar__account-links">
          <div class="pltpblink">
            <i class="pltpblink__icon fa fa-sign-out-alt"></i>
            <p style="margin: 0">Чиқиш</p>
          </div>
        </div>
      </div>


      <a class="ui-link action-button" data-test-id="button__user" v-else href="/login">
        <svg data-v-50d82c62="" width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 3C9.79086 3 8 4.79086 8 7V8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8V7C16 4.79086 14.2091 3 12 3ZM9.5 7C9.5 5.61929 10.6193 4.5 12 4.5C13.3807 4.5 14.5 5.61929 14.5 7V8C14.5 9.38071 13.3807 10.5 12 10.5C10.6193 10.5 9.5 9.38071 9.5 8V7ZM5.50232 19.3686C5.97321 16.2577 9.01803 14.5 12.0022 14.5C14.9858 14.5 18.031 16.2577 18.5019 19.3686C18.5046 19.3866 18.5025 19.3972 18.5 19.4048C18.497 19.4137 18.4903 19.4269 18.4759 19.442C18.4453 19.4741 18.3894 19.5039 18.3171 19.5039H5.68718C5.61487 19.5039 5.55898 19.4741 5.52838 19.442C5.51394 19.4269 5.50726 19.4137 5.50427 19.4048C5.50174 19.3972 5.49961 19.3865 5.50232 19.3686ZM12.0022 13C8.57321 13 4.64037 15.0404 4.01922 19.1441C3.85624 20.2208 4.75727 21.0039 5.68718 21.0039H18.3171C19.247 21.0039 20.148 20.2208 19.985 19.1441C19.3638 15.0404 15.4306 13 12.0022 13Z"
                fill="black"></path>
        </svg>
        <span data-v-50d82c62="" class="action-button__label">Login</span>
      </a>
      <!--      <div class="location">-->
      <!--        <div class="active" @click="openLocation">-->
      <!--          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">-->
      <!--            <g clip-path="url(#clip0_529_32)">-->
      <!--              <path-->
      <!--                  d="M12.3332 8.85708C12.3332 5.29576 8.99984 0.523743 8.99984 0.523743C8.99984 0.523743 5.6665 5.29576 5.6665 8.85708C5.6665 12.4184 8.99984 17.1904 8.99984 17.1904C8.99984 17.1904 12.3332 12.4184 12.3332 8.85708Z"-->
      <!--                  stroke="white" stroke-width="0.833333"/>-->
      <!--              <path-->
      <!--                  d="M2.33301 4.69043C2.33301 4.69043 6.34104 6.3571 8.99967 6.3571C11.6583 6.3571 15.6663 4.69043 15.6663 4.69043"-->
      <!--                  stroke="white" stroke-width="0.833333"/>-->
      <!--              <path-->
      <!--                  d="M15.6665 12.1904C15.6665 12.1904 11.408 11.3571 8.58317 11.3571C5.75837 11.3571 1.49984 12.1904 1.49984 12.1904"-->
      <!--                  stroke="white" stroke-width="0.833333"/>-->
      <!--            </g>-->
      <!--            <rect x="1.08317" y="0.940409" width="15.8333" height="15.8333" rx="7.91667" stroke="white"-->
      <!--                  stroke-width="0.833333"/>-->
      <!--            <defs>-->
      <!--              <clipPath id="clip0_529_32">-->
      <!--                <rect x="0.666504" y="0.523743" width="16.6667" height="16.6667" rx="8.33333" fill="white"/>-->
      <!--              </clipPath>-->
      <!--            </defs>-->
      <!--          </svg>-->
      <!--          <p>{{ activeLocation }}</p>-->
      <!--          <i class="fa-solid fa-caret-left fa-rotate-270"></i>-->
      <!--        </div>-->
      <!--        <Transition name="no-active">-->
      <!--          <div class="no-active" v-if="isOpenLocation">-->
      <!--            <p v-for="(item, index) in otherLocations" :key="index"-->
      <!--               @click="[changeLocation($event), openLocation()]">-->
      <!--              {{ item }}</p>-->
      <!--          </div>-->
      <!--        </Transition>-->
      <!--      </div>-->
    </div>
  </div>
  <div class="bottom">
    <a href="/" exact>BOSH SAHIFA</a>
    <a href="/pages/services" exact>XIZMATLAR</a>
    <a href="/pages/news" exact>YANGILIKLAR</a>
    <a href="/pages/conservation">Savol-Javoblar</a>
    <a href="/pages/statistics">STATISTIKA</a>
<!--    <a href="#">JAMOATCHILIK ESHITUVI</a>-->
<!--    <a href="#">STATISTIKA</a>-->
    <a href="/pages/contacts">ALOQALAR</a>
  </div>
</template>

<style scoped>
.services_info {
  width: 100%;
  background-image: url(/src/assets/images/eco_lists.png);
}

.action-button svg {
  fill: #1f2026;
  margin-right: 9px;
}

.action-button__label {
  display: initial;
}

.action-button:hover {
  background: #e6e8ed;
  border-radius: 4px;
}

.pltpblink {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
}

.plbrb-topbar__account {
  width: 150px;
  border-radius: 10px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.plbrb-topbar__account:hover {
  border-radius: 10px 10px 0 0;
}


.plbrb-topbar__account:hover .plbrb-topbar__account-links {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.plbrb-topbar__account-links {
  position: absolute;
  top: 42px;
  right: 0;
  width: auto;
  min-width: 150px;
  padding: 10px 0;
  background: var(--plcolor-lightbg);
  border-radius: 0 0 10px 10px;
  -webkit-box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  -webkit-transform: translateY(-20px);
  -ms-transform: translateY(-20px);
  transform: translateY(-20px);
}


</style>