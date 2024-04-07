<template>
  <section class="login" :class="{ login_conatainer: isLogin }">
    <div class="container login_container">
      <div class="tab_wrapper">
        <div v-if="isLogin" class="login_tab-reg" :class="{ active: isLogin }">
          <div class="login_top">
            <h2 @click="goToLogin" class="login_title active">Kirish</h2>
            <h2 @click="goToLogin" class="login_title">Ro'yxatdan o'tish</h2>
          </div>
          <p class="error-message" v-if="states.loginError">
            Login yoki parol noto'g'ri kiritilgan
          </p>
          <div class="login_inputs">
            <div class="login_input-item">
              <label for="login">Login</label>
              <input v-model="login.login" type="text" name="login" id="login" @focus="removeError" autocomplete="off"
                     autofocus @keydown="checkEnterPress"/>
            </div>
            <div class="login_input-item">
              <label for="login_password"> Parol </label>
              <div data-loginpassword="">
                <input ref="loginPassword" v-model="login.password" type="password" name="password" id="login_password"
                       @focus="removeError" @keydown="checkEnterPress"/>
                <img v-show="!login.eye" @click="loginEyeChange" src="../assets/images/eye.svg" alt="">
                <img v-show="login.eye" @click="loginEyeChange" src="../assets/images/eye_remove.svg" alt="">
              </div>
            </div>
          </div>
          <button class="login_btn" @click="tryToLogin">Kirish</button>
          <div class="login_or-line">
            <span class="login_line"></span>
            yoki
            <span class="login_line"></span>
          </div>
          <div class="login_options"></div>
        </div>
        <div v-if="!isLogin" class="login_tab-reg" :class="{ active: !isLogin }">
          <div class="login_top">
            <h2 @click="goToLogin" class="login_title">Kirish</h2>
            <h2 @click="goToLogin" class="login_title active">Ro'yxatdan o'tish</h2>
          </div>

          <div class="reg_input-list">
            <div class="login_input-item inputname" :data-state="inputErrorState.name">
              <label for="name">Ism</label>
              <input ref="inputname" v-model="validate.name" type="text" name="name" id="name"
                     @input="controlWrite($event)" @focus="checkErrorFullname($event)"
                     :class="{ inputError: inputErrorState.name }" autofocus autocomplete="off"/>
            </div>

            <div class="login_input-item inputname" :data-state="inputErrorState.surname">
              <label for="surname">Familiya</label>
              <input ref="inputsurname" v-model="validate.surname" type="text" name="surname" id="surname"
                     @input="controlWrite($event)" @focus="checkErrorFullname($event)"
                     :class="{ inputError: inputErrorState.surname }" autocomplete="off"/>
            </div>
            <div class="login_input-item" :data-state="inputErrorState.date" @click="clearDateError">
              <label for="bday"> Tugilgan sana </label>
              <input v-model="validate.date" type="date" name="bday" id="bday" @input="dateCheck" @change="dateCheck"
                     :class="{ inputError: inputErrorState.date }" autocomplete="off"/>
            </div>
            <!--                -->
            <div class="login_input-item" :data-state="inputErrorState.phone">
              <label for="phone">Telefon raqam</label>
              <input v-model="validate.phone" type="tel" name="phone" id="phone" @keydown="checkPress"
                     @input="phoneMasking" @focus="clearPhoneError" minLength="19"
                     :class="{ inputError: inputErrorState.phone }" autocomplete="off"/>
            </div>

            <div class="login_input-item" :data-state="inputErrorState.region" @click="clearRegionError">
              <label for="region">Viloyat</label>
              <CustomSelect  :dataArray="regionList"  @select-changed="regionChanges" :curValue="validate.region"></CustomSelect>
            </div>
            <div class="login_input-item" :data-state="inputErrorState.region" @click="clearRegionError">
              <label for="region">Viloyat</label>
              <CustomSelect  :dataArray="districtList"   :curValue="validate.district_id"></CustomSelect>
            </div>

            <div class="login_input-item" :data-state="inputErrorState.login">
              <label for="reg_login">Login</label>
              <input v-model="validate.login" type="text" name="reg_login" id="reg_login" @input="controlWriteLogin"
                     @focus="clearLoginError" :class="{ inputError: inputErrorState.login }" autocomplete="off"/>
            </div>
            <div class="login_input-item" :data-state="inputErrorState.password">
              <label for="reg_password">Parol</label>
              <span class="passwordCover">
                <input v-model="validate.password" :type="passwordControl" name="reg_password" id="reg_password"
                       @input="controlWritePassword" @focus="clearPasswordError"
                       :class="{ inputError: inputErrorState.password }" autocomplete="off"/>
                <img v-show="passwordEyeControl" @click="changePasswordInput" src="../assets/images/eye.svg">
                <img v-show="!passwordEyeControl" @click="changePasswordInput" src="../assets/images/eye_remove.svg">
              </span>
            </div>
            <div class="login_input-item repeat-password" :data-state="inputErrorState.repeatPassword">
              <label for="reg_new_password"> Parolni qayta kiriting </label>
              <span class="passwordCover">
                <input v-model="validate.repeatPassword" :type="repeatControl" name="reg_new_password"
                       id="reg_new_password" @focus="clearRepeatPasswordError" @input="controlWriteRepeat"
                       :class="{ inputError: inputErrorState.repeatPassword }" autocomplete="off"/>
                <img v-show="repeatEyeControl" @click="changeRepeatPasswordInput" src="../assets/images/eye.svg" alt="">
                <img v-show="!repeatEyeControl" @click="changeRepeatPasswordInput" src="../assets/images/eye_remove.svg"
                     alt="">
              </span>
            </div>
            <div class="login_input-item imageupload" :data-state="inputErrorState.file">
              <label>Rasmni yuklang</label>
              <div class="upload-frame mobile" ref="uploadFrame">
                <img :src="fileUrlImg" alt=""/>
                <label v-show="uploadFileState" for="reg_img" class="filupload_label">
                  <img src="../assets/images/file.svg" style="width: 24px">
                  <span class="fileuploadtxt">
                    JPEG, JPG, PNG formatda 5 mb dan ortiq bolmagan rasm
                  </span>
                  <input ref="fileupload" type="file" accept=".png, .jpg, .jpeg" @change="validateCheckSize($event)"
                         id="reg_img" :class="{ inputError: inputErrorState.file }"/>
                </label>
              </div>
            </div>
          </div>

          <button class="login_btn" @click="validation()">Royxatdan otish</button>
        </div>
      </div>
    </div>
    <div class="backg_animation">
      <img class="backg_image" src="../assets/images/back_circle.svg" alt=""/>
    </div>
  </section>
</template>

<script>
import {jsx} from "vue/jsx-runtime";
import CustomSelect from "@/components/CustomSelect.vue";
import {th} from "vuetify/locale";

export default {
  components: {CustomSelect},
  scripts: [],
  data() {
    return {
      isLoggingIn: false,
      currentDocumentType: '',
      documentData: {
        name: '',
        href: '',
        downloadDocument: '',
        downloadWord: ''
      },
      regionList: [],
      pdfDownloaded: false,
      offerModal: false,
      offerReaded: false,
      agreementReaded: false,
      activeTABLogin: sessionStorage.getItem('activeTABLogin') ?? '1',
      login: {
        login: '',
        password: '',
        eye: true
      },
      states: {
        loginError: false
      },
      googleSignInParams: {
        clientId: '585287172500-uq9kqfj5iiusqoa0c394lb041s2knsvd.apps.googleusercontent.com'
      },
      reginInfo: {},
      chooseGenderState: true,
      classWhenGenderClicked: false,
      customSelect: {
        selectListBlock: {
          show: false
        },
        regionSearchState: {
          show: false
        }
      },
      inputErrorState: {
        name: '',
        surname: '',
        date: '',
        phone: '',
        email: '',
        region: '',
        gender: '',
        pnfl: '',
        login: '',
        password: '',
        repeatPassword: '',
        file: ''
      },
      regions: [],
      districtList: [],
      regionsClone: [],
      genders: [],
      fileUploadStart: false,
      showErrorUploadState: false,
      uploadFileState: true,
      passwordEyeControl: false,
      passwordControl: 'password',
      repeatEyeControl: false,
      repeatControl: 'password',
      modal: false,
      smsmodal: false,
      smsNumberArr: [],
      smsStandartTimeAsMinute: 2,
      verificationMsg: '',
      countdown: '',
      currentUserID: null,
      countrySearchPlaceholder: 'Qidirish...',
      countryNameForSort: '',
      validate: {
        name: '',
        surname: '',
        date: '',
        phone: '+998',
        region: 3,
        regionName: '',
        gender: '',
        pnfl: '',
        login: '',
        password: '',
        district_id: '',
        repeatPassword: '',
        fileCheck: false,
        file: null,
        fileID: '',
        email: ''
      },
      fileUrlImg: '',
      isLogin:
          !sessionStorage.getItem('activeTABLogin') || sessionStorage.getItem('activeTABLogin') == '1'
              ? true
              : false
    }
  },
  watch: {
    validate: {
      deep: true,
      handler(newValue, oldValue) {
        console.log(newValue.region)
        let accessCountry = [139]
        let {name, surname, date, phone, region, gender, pnfl, login, password, repeatPassword} =
            newValue
        let regionName = this.regions.find((element) => element.id === region)?.country_name

        if (accessCountry.includes(region)) {
          this.pnflInfo = "Agar One-ID tizimi orqali kirmoqchi bo'lsangiz to'ldiring"
        } else {
          this.pnflInfo = ''
        }

        if (phone.length == 13) {
          this.validate.phone = this.validate.phone.replace(
              /\+(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/g,
              '+$1 ($2) $3-$4-$5'
          )
        }
      }
    },
    countdown: {
      handler(newValue, oldValue) {
        if (newValue == '00:00') {
          this.verificationMsg =
              "Verifikatsiya uchun berilgan vaqt tugadi. Iltimos, qaytadan urunib ko'ring"
        }
      }
    },
    countryNameForSort: {
      handler(newValue, oldValue) {
        let lengthx = newValue.length
        let caseChange = newValue ? `${newValue.charAt(0).toUpperCase()}${newValue.slice(1)}` : ''
        if (this.countryNameForSort) {
          this.regionsClone = [...this.regions].filter(
              (item) => item.country_name.slice(0, lengthx) == caseChange
          )
        } else {
          this.regionsClone = [...this.regions]
        }
      }
    }
  },
  computed: {
  },

  methods: {
    regionChanges(ob){
      this.validate.region = ob.id;
      if(this.validate.region){
        fetch(`http://localhost:3000/districts?region_id=${this.validate.region}`).then(res => res.json()).then(res => {
          this.districtList = res.district_list;
        })
      }
    },
    getData(){
      fetch('http://localhost:3000/regions').then(res => res.json()).then(res => {
        console.log("res", res.region_list)
        this.regionList = res.region_list;
      })
    },

    checkEnterPress(event) {
      if (event.key == 'Enter') {
        this.tryToLogin()
      }
    },
    loginEyeChange() {
      this.login.eye = !this.login.eye

      this.$refs.loginPassword.type =
          this.$refs.loginPassword.type == 'password' ? 'text' : 'password'
    },
    removeError() {
      if (this.states.loginError) {
        this.states.loginError = false
      }
    },


    tryToLogin() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({username: this.login.login, password: this.login.password});

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("http://localhost:3000/login", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            result = JSON.parse(result);
            if (result.user_info && result.user_info.username) {
              router.push('/')
            }
          })
          .catch((error) => console.error(error));
    },
    chooseGender() {
      event.stopImmediatePropagation()
      this.chooseGenderState = false
      this.classWhenGenderClicked = true
    },
    choosingGenderItem(id) {
      event.stopPropagation()
      this.$refs.genderName.innerText = this.genders.find((item) => item.id == id).gender_name
      this.validate.gender = this.genders.find((item) => item.id == id).id
      this.classWhenGenderClicked = false
      this.chooseGenderState = true

      this.inputErrorState.gender = ''
    },
    chooseRegion(id) {
      event.stopPropagation()
      let choosenRegion = this.regions.find((item) => item.id == id)
      this.validate.region = choosenRegion.id
      this.validate.regionName = choosenRegion.country_name
      this.customSelect.selectListBlock.show = false
      // this.customSelect.regionSearchState.show = false;
      this.$refs.customSelectChooseRegion.innerText = choosenRegion.country_name
      this.countryNameForSort = ''
    },
    changeRepeatPasswordInput() {
      this.repeatControl = this.repeatControl == 'password' ? 'text' : 'password'
      this.repeatEyeControl = !this.repeatEyeControl
    },

    changePasswordInput() {
      this.passwordControl = this.passwordControl == 'password' ? 'text' : 'password'
      this.passwordEyeControl = !this.passwordEyeControl
    },
    async validation() {
      let validationState = [
        this.validateName(),
        this.validateSurname(),
        this.validateDate(),
        this.validatePhone(),
        this.validateRegion(),
        this.validateGender(),
        this.validateLogin(),
        this.validatePassword(),
        this.validateRepeatPassword(),
        this.validateFile(),
        this.offerReaded,
        this.agreementReaded,
        this.validateEmail()
      ].every((item) => item === true)
      console.log(validationState)
      this.sendData()
    },
    phoneMasking() {
      let clearNumber = this.validate.phone.split('+998')[1].replace(/[^\d]/g, '')

      if (this.validate.phone == '+998') {
        this.validate.phone = `+998${clearNumber}`
      }

      if (this.validate.phone.length > 13) {
        this.validate.phone = this.validate.phone.slice(0, 19)
      }
    },
    clearDateError() {
      if (this.inputErrorState.date) {
        this.inputErrorState.date = ''
      }
    },

    clearEmailError() {
      if (this.inputErrorState.email) {
        this.inputErrorState.email = ''
      }

      event.target.addEventListener('focusout', (event) => {
        if (this.validate.email) {
          let emailCheck =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  this.validate.email
              )

          if (!emailCheck) {
            this.inputErrorState.email = "Elektron pochta manzili noto'g'ri kiritilgan"
          }
        }
      })
    },

    clearPhoneError() {
      if (this.inputErrorState.phone) {
        let currentError = this.inputErrorState.phone
        this.inputErrorState.phone = ''

        event.target.addEventListener('focusout', (event) => {
          if (!this.validate.phone || this.validate.phone == '+998') {
            this.inputErrorState.phone = currentError
          }
          if (this.validate.phone) {
            let phone = this.validate.phone
            let clearPhone = phone.replace(/[^\d\+]/g, '')

            if (!/\+998(90|91|93|94|95|97|98|99|50|55|88)\d{7}/.test(clearPhone)) {
              this.inputErrorState.phone = "Telefon raqam noto'g'ri kiritilgan"
            }
          }
        })
      }
    },
    clearLoginError() {
      if (this.inputErrorState.login) {
        let currentError = this.inputErrorState.login
        this.inputErrorState.login = ''

        event.target.addEventListener('focusout', (event) => {
          if (!this.validate.login) {
            this.inputErrorState.login = currentError
          }
          if (this.validate.login) {
            let login = this.validate.login
            let loginCheck = /^(?=.*[a-zA-Z])(?=.*\d|.*[a-zA-Z])[a-zA-Z\d]{4,}$/gi.test(login)

            if (!loginCheck) {
              this.inputErrorState.login =
                  "Login ingliz harflaridan yoki ingliz harflari va raqamlar aralashmasidan iborat bo'lishi mumkin"
            }
          }
        })
      }
    },

    clearPasswordError() {
      this.inputErrorState.password = ''

      event.target.addEventListener('focusout', (event) => {
        if (this.inputErrorState.password) {
          let currentError = this.inputErrorState.password

          if (!this.validate.password) {
            this.inputErrorState.password = "Bu maydon bo'sh bo'lmasligi kerak"
          } else {
            let password = this.validate.password
            let passwordCheck = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(password)

            if (!passwordCheck) {
              this.inputErrorState.password =
                  "Parol kamida 6 ta belgidan iborat bo'lishi va ingliz harflari hamda raqamlar aralashmasidan iborat bo'lishi kerak. Ihtiyoriy ravishda maxsus belgilardan foydalanish mumkin (!@#$%^&*_)"
            }
          }
        } else {
          let password = this.validate.password
          let passwordCheck = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(password)

          if (!passwordCheck) {
            this.inputErrorState.password =
                "Parol kamida 6 ta belgidan iborat bo'lishi va ingliz harflari hamda raqamlar aralashmasidan iborat bo'lishi kerak"
          }
        }
      })
    },
    clearRepeatPasswordError() {
      this.inputErrorState.repeatPassword = ''

      event.target.addEventListener('focusout', (event) => {
        if (this.inputErrorState.repeatPassword) {
          let currentError = this.inputErrorState.repeatPassword

          if (!this.validate.repeatPassword) {
            this.inputErrorState.repeatPassword = "Bu maydon bo'sh bo'lmasligi kerak"
          } else {
            let repeatPassword = this.validate.repeatPassword
            let password = this.validate.password

            if (password != repeatPassword) {
              this.inputErrorState.repeatPassword = 'Parollar bir xil emas'
            }
          }
        } else {
          if (!this.validate.repeatPassword) {
            this.inputErrorState.repeatPassword = "Bu maydon bo'sh bo'lmasligi kerak"
          } else {
            let repeatPassword = this.validate.repeatPassword
            let password = this.validate.password

            if (password != repeatPassword) {
              this.inputErrorState.repeatPassword = 'Parollar bir xil emas'
            }
          }
        }

        if (this.validate.password != this.validate.repeatPassword) {
          this.passwordControl = this.passwordControl == 'password' ? 'text' : 'password'
          this.passwordEyeControl = true
          this.repeatControl = this.repeatControl == 'password' ? 'text' : 'password'
          this.repeatEyeControl = true
        } else {
          this.passwordControl = 'password'
          this.passwordEyeControl = false
          this.repeatControl = 'password'
          this.repeatEyeControl = false
        }
      })
    },
    clearRegionError() {
      event.stopPropagation()

      if (this.inputErrorState.region) {
        this.inputErrorState.region = ''
      }
      if (!this.customSelect.selectListBlock.show) {
        this.customSelect.selectListBlock.show = true
        this.customSelect.regionSearchState.show = true
      }

      window.scrollTo({
        top: 100,
        behavior: 'smooth'
      })

      // this.countrySearchPlaceholder = '';

    },
    clearGenderError() {
      if (this.inputErrorState.gender) {
        this.inputErrorState.gender = ''
      }
    },
    dateCheck() {
      let year = +this.validate.date.slice(0, 4)
      let stringYear = String(year).padStart(4, '0')
      let [, month, day] = this.validate.date.split('-')
      let currentYear = +new Date().getUTCFullYear()
      this.validate.date = `${stringYear}-${month}-${day}`

      if (year < 1900) {
        this.inputErrorState.date = "Yil 1900 dan katta bo'lishi kerak"
      }
      if (year >= currentYear) {
        this.inputErrorState.date = `Yil ${currentYear} dan kichik bo'lishi kerak`
      }
      if (year < currentYear && year > 1900) {
        if (this.inputErrorState.date) {
          this.inputErrorState.date = ''
        }
      }
    },
    goToLogin() {
      this.isLogin = this.activeTABLogin == '1' ? false : true

      this.activeTABLogin = this.activeTABLogin == '1' ? '2' : '1'

      sessionStorage.setItem('activeTABLogin', this.activeTABLogin)
    },
    controlWritePassword() {
      this.validate.password = this.validate.password.replace(
          /[^\da-z\!\@\#\$\%\^\&\*\_\+\-]/gi,
          ''
      )
    },
    controlWriteRepeat() {
      this.validate.repeatPassword = this.validate.repeatPassword.replace(
          /[^\da-z\!\@\#\$\%\^\&\*\_\+\-]/gi,
          ''
      )
    },
    controlWriteLogin() {
      let login = this.validate.login
      this.validate.login = login.replace(/[^\w]/gi, '')
    },
    controlWrite(event) {
      event.target.showPicker()
      let targetID = event.target.getAttribute('id')

      let targetValue = event.target.value
      targetValue = `${targetValue[0].replace(/[^\p{L}]/gu, '')}${targetValue
          .slice(1)
          .replace(/[^\p{Ll}]/gu, '')}`

      if (targetID == 'name') {
        this.validate.name = targetValue
      }
      if (targetID == 'surname') {
        this.validate.surname = targetValue
      }
    },
    checkErrorFullname(event) {
      let targetID = event.target.getAttribute('id')

      if (this.inputErrorState.name && targetID == 'name') {
        let currentError = this.inputErrorState.name
        this.inputErrorState.name = ''

        event.target.addEventListener('focusout', (event) => {
          if (!this.validate.name) {
            this.inputErrorState.name = currentError
          }
        })
      }

      if (this.inputErrorState.surname && targetID == 'surname') {
        let currentError = this.inputErrorState.surname
        this.inputErrorState.surname = ''

        event.target.addEventListener('focusout', (event) => {
          if (!this.validate.surname) {
            this.inputErrorState.surname = currentError
          }
        })
      }
    },
    validateName() {
      if (!this.validate.name.length) {
        this.inputErrorState.name = "Bu maydon bo'sh bo'lmasligi kerak"
        return false
      }

      return true
    },
    validateSurname() {
      if (!this.validate.surname.length) {
        this.inputErrorState.surname = "Bu maydon bo'sh bo'lmasligi kerak"
        return false
      }

      return true
    },
    validateDate() {
      let date = +this.validate.date.slice(0, 4)
      let currentYear = +new Date().getFullYear()

      if (date) {
        if (date < 1900) {
          this.inputErrorState.date = "Yil 1900 dan katta bo'lishi kerak"
          return false
        }
        if (date > currentYear) {
          this.inputErrorState.date = `Yil ${currentYear} dan kichik bo'lishi kerak`
          return false
        }

        return true
      } else {
        this.inputErrorState.date = "Bu maydon bo'sh bo'lmasligi kerak"
        return false
      }
    },
    validatePhone() {
      let phone = this.validate.phone
      let clearPhone = phone.replace(/[^\d\+]/g, '')

      if (clearPhone) {
        let phoneCheck = /\+998(90|91|93|94|95|97|98|99|50|55|88)\d{7}/.test(clearPhone)

        if (!phoneCheck) {
          if (clearPhone == '+998') {
            this.inputErrorState.phone = "Bu maydon bo'sh bo'lmasligi kerak"
            return false
          } else {
            this.inputErrorState.phone = "Telefon raqam noto'g'ri kiritilgan"
            return false
          }
        }
        return true
      } else {
        this.inputErrorState.phone = "Bu maydon bo'sh bo'lmasligi kerak"
        return false
      }
    },

    validateEmail() {
      if (this.validate.email) {
        let emailCheck =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                this.validate.email
            )

        if (!emailCheck) {
          this.inputErrorState.email = "Elektron pochta manzili noto'g'ri kiritilgan"
          return
        }

        return true
      }
      return true
    },

    validateRegion() {
      if (!this.validate.region) {
        this.inputErrorState.region = "Bu maydon bo'sh bo'lmasligi kerak"
        return false
      }
      return true
    },
    validateGender() {
      if (!this.validate.gender) {
        this.inputErrorState.gender = "Bu maydon bo'sh bo'lmasligi kerak"
        return false
      }
      return true
    },
    validatePNFL() {
      let pnfl = this.validate.pnfl
      let pnflLength = 14

      if (pnfl) {
        if (pnfl.length < 14) {
          this.inputErrorState.pnfl = `JShShIR ${pnflLength} ta raqamdan iborat bo'lishi kerak`
          return false
        }
        return true
      }

      return true
    },
    validateLogin() {
      let login = this.validate.login

      if (login) {
        let loginCheck = /^(?=.*[a-zA-Z])(?=.*\d|.*[a-zA-Z])[a-zA-Z\d]{4,}$/gi.test(login)

        if (!loginCheck) {
          this.inputErrorState.login =
              "Login ingliz harflaridan yoki ingliz harflari va raqamlar aralashmasidan iborat bo'lishi mumkin"
          return false
        }

        return true
      } else {
        this.inputErrorState.login = "Bu maydon bo'sh bo'lmasligi kerak"
        return false
      }
    },
    validatePassword() {
      let password = this.validate.password

      if (password) {
        let passwordCheck = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(password)

        if (!passwordCheck) {
          this.inputErrorState.password =
              "Parol kamida 6 ta belgidan iborat bo'lishi va ingliz harflari hamda raqamlar aralashmasidan iborat bo'lishi kerak"
          return false
        }

        return true
      } else {
        this.inputErrorState.password = "Bu maydon bo'sh bo'lmasligi kerak"
        return false
      }
    },
    validateRepeatPassword() {
      let repeatPassword = this.validate.repeatPassword
      let password = this.validate.password

      if (repeatPassword) {
        if (password != repeatPassword) {
          this.inputErrorState.repeatPassword = 'Parollar bir xil emas'
          return false
        }

        return true
      } else {
        this.inputErrorState.repeatPassword = "Bu maydon bo'sh bo'lmasligi kerak"
        return false
      }
    },
    validateFile() {
      if (!this.validate.file) {
        this.inputErrorState.file = "Bu maydon bo'sh bo'lmasligi kerak"
        return false
      }
      return true
    },
    getUploadingImage(elementForAnimate) {
      let fileInput = this.$refs.fileupload
      let [file] = fileInput.files
      let imageGet = new FileReader()
      let imageElement = this.$refs.uploadImageElement
      let uploadFrame = this.$refs.uploadFrame.classList.remove('upload-frame')
      let modalimg = this.$refs.modalimg

      imageGet.onload = function (event) {
        imageElement.src = event.target.result
        modalimg.src = event.target.result
        elementForAnimate.style.animation = 'none'
        void elementForAnimate.offsetWidth // Принудительная перезагрузка стилей
        elementForAnimate.style.animation = 'linear 2s animateUploadImage 1 forwards'
      }

      imageGet.readAsDataURL(file)
    },
    async validateCheckSize(event) {
      let file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          this.fileUrlImg = reader.result
        }
        reader.readAsDataURL(file)
      }
      console.log('file', file, this.fileUrlImg)
    },

    sendData() {
      let file = this.validate.file
      let formData = new FormData()
      formData.append('file', file)
      console.log('this.validate', this.validate)
      let data = {
        name: this.validate.name,
        surname: `${this.validate.surname[0].toUpperCase()}${this.validate.surname.slice(1)}`,
        birth_date: this.validate.date,
        phone: this.validate.phone.replace(/[^\d]/g, ''),
        region_id: this.validate.region,
        district_id: this.validate.gender,
        // photo: this.fileUrlImg,
        username: this.validate.login,
        region_name: this.validate.regionName,
        password: this.validate.password
      }

      let myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      let raw = JSON.stringify(data)

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }
      const requestSizeInBytes = new Blob([raw]).size;

      console.log('Request size:', requestSizeInBytes, 'bytes');

      fetch('http://localhost:3000/register', requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log('result', result, typeof result)
            localStorage.setItem('auth_users', JSON.stringify(result.user_info))
            history.pushState({}, '', `dashboard`)
            window.location.reload()
          })
          .catch((error) => console.log('error', error))
    }
  },
  mounted() {
    this.getData();
    let body = document.body

    body.addEventListener('click', (event) => {
      event.stopImmediatePropagation()
      if (this.customSelect.selectListBlock.show) {
        this.customSelect.selectListBlock.show = false
      }

      this.classWhenGenderClicked = false
      this.chooseGenderState = true
    })
  }
}
</script>

<style src="../assets/css/login.css"></style>
