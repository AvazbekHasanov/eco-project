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
                     autofocus @keydown="checkEnterPress" />
            </div>
            <div class="login_input-item">
              <label for="login_password"> Parol </label>
              <div data-loginpassword="">
                <input ref="loginPassword" v-model="login.password" type="password" name="password" id="login_password"
                       @focus="removeError" @keydown="checkEnterPress" />
                <svg v-show="!login.eye" @click="loginEyeChange" width="20" height="20" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="#000" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.83 11.28C19.542 7.153 15.812 5 12 5c-3.812 0-7.542 2.152-9.83 6.28a1.376 1.376 0 0 0-.01 1.308C4.412 16.8 8.163 19 12 19c3.837 0 7.588-2.199 9.84-6.412a1.376 1.376 0 0 0-.01-1.307ZM12 17c-2.939 0-5.96-1.628-7.908-5.051C6.069 8.596 9.073 7 12 7c2.927 0 5.931 1.596 7.908 4.949C17.96 15.372 14.94 17 12 17Z"
                        fill="#000" />
                </svg>
                <svg v-show="login.eye" @click="loginEyeChange" width="20" height="20" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="m5.707 19.707 14-14a1 1 0 0 0-1.414-1.414l-14 14a1 1 0 1 0 1.414 1.414ZM12 5c1.201 0 2.394.214 3.536.635l-1.6 1.6A8.137 8.137 0 0 0 12 7c-2.927 0-5.931 1.596-7.908 4.949.654 1.15 1.43 2.097 2.282 2.848l-1.416 1.416c-1.071-.965-2.023-2.176-2.798-3.625a1.376 1.376 0 0 1 .01-1.307C4.458 7.15 8.188 5 12 5Z"
                      fill="#000" />
                  <path
                      d="M12 9c.056 0 .112.002.167.005l-3.162 3.162A3 3 0 0 1 12 9ZM14.995 11.833l-3.162 3.162a3 3 0 0 0 3.162-3.162Z"
                      fill="#000" />
                  <path
                      d="M12 17a8.047 8.047 0 0 1-1.935-.237L8.468 18.36c1.14.425 2.332.64 3.532.64 3.837 0 7.588-2.199 9.84-6.412a1.376 1.376 0 0 0-.01-1.307c-.776-1.4-1.717-2.573-2.771-3.511l-1.417 1.416c.842.732 1.61 1.65 2.266 2.763C17.96 15.372 14.94 17 12 17Z"
                      fill="#000" />
                </svg>
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
                     :class="{ inputError: inputErrorState.name }" autofocus autocomplete="off" />
            </div>

            <div class="login_input-item inputname" :data-state="inputErrorState.surname">
              <label for="surname">Familiya</label>
              <input ref="inputsurname" v-model="validate.surname" type="text" name="surname" id="surname"
                     @input="controlWrite($event)" @focus="checkErrorFullname($event)"
                     :class="{ inputError: inputErrorState.surname }" autocomplete="off" />
            </div>
            <div class="login_input-item" :data-state="inputErrorState.date" @click="clearDateError">
              <label for="bday"> Tugilgan sana </label>
              <input v-model="validate.date" type="date" name="bday" id="bday" @input="dateCheck" @change="dateCheck"
                     :class="{ inputError: inputErrorState.date }" autocomplete="off" />
            </div>
            <!--                -->
            <div class="login_input-item" :data-state="inputErrorState.phone">
              <label for="phone">Telefon raqam</label>
              <input v-model="validate.phone" type="tel" name="phone" id="phone" @keydown="checkPress"
                     @input="phoneMasking" @focus="clearPhoneError" minLength="19"
                     :class="{ inputError: inputErrorState.phone }" autocomplete="off" />
            </div>
            <div class="login_input-item" :data-state="inputErrorState.email">
              <label for="email">Email</label>
              <input v-model="validate.email" type="email" name="email" id="email" @keydown="checkPress"
                     @focus="clearEmailError" :class="{ inputError: inputErrorState.email }" autocomplete="password" />
            </div>

            <div class="login_input-item" :data-state="inputErrorState.region" @click="clearRegionError">
              <label for="region">Hudud</label>

              <div class="customSelectwrapper" id="region">
                <div class="customSelectContainer" :class="{ inputError: inputErrorState.region }">
                  <p ref="customSelectChooseRegion" class="customSelectPlaceholder"
                     v-show="!customSelect.selectListBlock.show">
                    Hududni tanlang
                  </p>
                  <div class="customSelectContainerWrapper">
                    <div class="selectListBlock" v-show="customSelect.selectListBlock.show">
                      <div class="countrySearchBlock" v-show="customSelect.regionSearchState.show">
                        <input v-model="countryNameForSort" type="text" ref="searchRegion" class="customSelect_search"
                               :placeholder="countrySearchPlaceholder" />
                        <!--                       <div role="button" class="countrySearchBlockCloseBtn" @click="closeMenuSearchMenu">x</div> -->
                      </div>
                      <ul class="customSelectList">
                        <li v-for="region in regionsClone" :key="region.id" class="customSelectItem"
                            @click="chooseRegion(region.id)">
                          {{ region.country_name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!--                 <select v-model="validate.region" id="region" :class="{inputError: inputErrorState.region}">
                	<option :value="region.id" v-for="region in regions" :key="region.id">{{ region.country_name }}</option>
                </select> -->
            </div>
            <div class="login_input-item" :data-state="inputErrorState.gender" @click="clearGenderError">
              <label for="gender">Jins</label>
              <div class="customGenderSelectBlock" @click="chooseGender" :class="[
                { classWhenGenderClicked: classWhenGenderClicked },
                { inputError: inputErrorState.gender }
              ]">
                <p ref="genderName" v-show="chooseGenderState" class="genderChooseCustomPlaceholder">
                  Jinsni tanlang
                </p>
                <ul class="genderList" v-show="!chooseGenderState">
                  <li class="genderList-item" v-for="gender in genders" :key="gender.id"
                      @click="choosingGenderItem(gender.id)">
                    {{ gender.gender_name }}
                  </li>
                </ul>
              </div>

              <!--                 <select v-model="validate.gender" name="gender" id="gender" :class="{inputError: inputErrorState.gender}">
                  <option :value="gender.id" v-for="gender in genders" :key="gender.id">{{ gender.gender_name }}</option>
                </select> -->
            </div>
            <!-- <div
              class="login_input-item pnfl"
              :data-state="inputErrorState.pnfl"
              :data-info="pnflInfo"
            >
              <label for="pnfl"> JShShIR elektron raqamli imzo orqali kirish uchun </label>
              <input
                v-model="validate.pnfl"
                type="text"
                name="pnfl"
                id="pnfl"
                @input="controlWritePNFL"
                @focus="checkErrorPNFL"
                :class="{ inputError: inputErrorState.pnfl }"
                :disabled="!compPnflShow"
                autocomplete="off"
              />
            </div> -->

            <div class="login_input-item" :data-state="inputErrorState.login">
              <label for="reg_login">Login</label>
              <input v-model="validate.login" type="text" name="reg_login" id="reg_login" @input="controlWriteLogin"
                     @focus="clearLoginError" :class="{ inputError: inputErrorState.login }" autocomplete="off" />
            </div>
            <div class="login_input-item" :data-state="inputErrorState.password">
              <label for="reg_password">Parol</label>
              <span class="passwordCover">
                <input v-model="validate.password" :type="passwordControl" name="reg_password" id="reg_password"
                       @input="controlWritePassword" @focus="clearPasswordError"
                       :class="{ inputError: inputErrorState.password }" autocomplete="off" />
                <svg v-show="passwordEyeControl" @click="changePasswordInput" width="20" height="20" viewBox="0 0 24 24"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="#000" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.83 11.28C19.542 7.153 15.812 5 12 5c-3.812 0-7.542 2.152-9.83 6.28a1.376 1.376 0 0 0-.01 1.308C4.412 16.8 8.163 19 12 19c3.837 0 7.588-2.199 9.84-6.412a1.376 1.376 0 0 0-.01-1.307ZM12 17c-2.939 0-5.96-1.628-7.908-5.051C6.069 8.596 9.073 7 12 7c2.927 0 5.931 1.596 7.908 4.949C17.96 15.372 14.94 17 12 17Z"
                        fill="#000" />
                </svg>
                <svg v-show="!passwordEyeControl" @click="changePasswordInput" width="20" height="20" viewBox="0 0 24 24"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="m5.707 19.707 14-14a1 1 0 0 0-1.414-1.414l-14 14a1 1 0 1 0 1.414 1.414ZM12 5c1.201 0 2.394.214 3.536.635l-1.6 1.6A8.137 8.137 0 0 0 12 7c-2.927 0-5.931 1.596-7.908 4.949.654 1.15 1.43 2.097 2.282 2.848l-1.416 1.416c-1.071-.965-2.023-2.176-2.798-3.625a1.376 1.376 0 0 1 .01-1.307C4.458 7.15 8.188 5 12 5Z"
                      fill="#000" />
                  <path
                      d="M12 9c.056 0 .112.002.167.005l-3.162 3.162A3 3 0 0 1 12 9ZM14.995 11.833l-3.162 3.162a3 3 0 0 0 3.162-3.162Z"
                      fill="#000" />
                  <path
                      d="M12 17a8.047 8.047 0 0 1-1.935-.237L8.468 18.36c1.14.425 2.332.64 3.532.64 3.837 0 7.588-2.199 9.84-6.412a1.376 1.376 0 0 0-.01-1.307c-.776-1.4-1.717-2.573-2.771-3.511l-1.417 1.416c.842.732 1.61 1.65 2.266 2.763C17.96 15.372 14.94 17 12 17Z"
                      fill="#000" />
                </svg>
              </span>
            </div>
            <div class="login_input-item repeat-password" :data-state="inputErrorState.repeatPassword">
              <label for="reg_new_password"> Parolni qayta kiriting </label>
              <span class="passwordCover">
                <input v-model="validate.repeatPassword" :type="repeatControl" name="reg_new_password"
                       id="reg_new_password" @focus="clearRepeatPasswordError" @input="controlWriteRepeat"
                       :class="{ inputError: inputErrorState.repeatPassword }" autocomplete="off" />
                <svg v-show="repeatEyeControl" @click="changeRepeatPasswordInput" width="20" height="20"
                     viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="#000" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.83 11.28C19.542 7.153 15.812 5 12 5c-3.812 0-7.542 2.152-9.83 6.28a1.376 1.376 0 0 0-.01 1.308C4.412 16.8 8.163 19 12 19c3.837 0 7.588-2.199 9.84-6.412a1.376 1.376 0 0 0-.01-1.307ZM12 17c-2.939 0-5.96-1.628-7.908-5.051C6.069 8.596 9.073 7 12 7c2.927 0 5.931 1.596 7.908 4.949C17.96 15.372 14.94 17 12 17Z"
                        fill="#000" />
                </svg>
                <svg v-show="!repeatEyeControl" @click="changeRepeatPasswordInput" width="20" height="20"
                     viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="m5.707 19.707 14-14a1 1 0 0 0-1.414-1.414l-14 14a1 1 0 1 0 1.414 1.414ZM12 5c1.201 0 2.394.214 3.536.635l-1.6 1.6A8.137 8.137 0 0 0 12 7c-2.927 0-5.931 1.596-7.908 4.949.654 1.15 1.43 2.097 2.282 2.848l-1.416 1.416c-1.071-.965-2.023-2.176-2.798-3.625a1.376 1.376 0 0 1 .01-1.307C4.458 7.15 8.188 5 12 5Z"
                      fill="#000" />
                  <path
                      d="M12 9c.056 0 .112.002.167.005l-3.162 3.162A3 3 0 0 1 12 9ZM14.995 11.833l-3.162 3.162a3 3 0 0 0 3.162-3.162Z"
                      fill="#000" />
                  <path
                      d="M12 17a8.047 8.047 0 0 1-1.935-.237L8.468 18.36c1.14.425 2.332.64 3.532.64 3.837 0 7.588-2.199 9.84-6.412a1.376 1.376 0 0 0-.01-1.307c-.776-1.4-1.717-2.573-2.771-3.511l-1.417 1.416c.842.732 1.61 1.65 2.266 2.763C17.96 15.372 14.94 17 12 17Z"
                      fill="#000" />
                </svg>
              </span>
            </div>
            <div class="login_input-item imageupload" :data-state="inputErrorState.file">
              <label>Rasmni yuklang</label>
              <div class="upload-frame mobile" ref="uploadFrame">
                <img :src="fileUrlImg" alt="" />
                <label v-show="uploadFileState" for="reg_img" class="filupload_label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
                    <path fill="#448FFF" fill-rule="evenodd"
                          d="m15.567 7.634 1.663 1.637-7.371 7.485a.975.975 0 0 0 0 1.363.902.902 0 0 0 1.284-.002l8.11-8.238a3.116 3.116 0 0 0 0-4.357c-1.13-1.153-3.128-1.127-4.235.002L6.166 14.51a5.256 5.256 0 0 0 0 7.35c1.94 1.98 5.274 1.948 7.185-.001l10.323-10.485 1.663 1.637-10.322 10.483c-2.816 2.873-7.653 2.92-10.515 0a7.59 7.59 0 0 1 .002-10.62l8.852-8.986c2.01-2.05 5.512-2.096 7.566 0a5.45 5.45 0 0 1-.002 7.626l-8.105 8.233a3.233 3.233 0 0 1-4.621.005 3.31 3.31 0 0 1 .002-4.63l7.373-7.488Z"
                          clip-rule="evenodd" />
                  </svg>
                  <span class="fileuploadtxt">
                    JPEG, JPG, PNG formatda 5 mb dan ortiq bolmagan rasm
                  </span>
                  <input ref="fileupload" type="file" accept=".png, .jpg, .jpeg" @change="validateCheckSize($event)"
                         id="reg_img" :class="{ inputError: inputErrorState.file }" />
                </label>
              </div>
            </div>
          </div>

          <button class="login_btn" @click="validation()">Royxatdan otish</button>
        </div>
      </div>
    </div>
    <div class="backg_animation">
      <img class="backg_image" src="https://expert.uz/media/store/new_images/back_circle.svg" alt="" />
    </div>
  </section>
</template>

<script>
import {jsx} from "vue/jsx-runtime";

export default {
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
      regionsClone: [],
      genders: [],
      fileUploadStart: false,
      showErrorUploadState: false,
      uploadFileState: true,
      pnflShow: false,
      pnflInfo: '',
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
        region: '',
        regionName: '',
        gender: '',
        pnfl: '',
        login: '',
        password: '',
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
        let accessCountry = [139]
        let { name, surname, date, phone, region, gender, pnfl, login, password, repeatPassword } =
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
        // else{
        //   this.validate.phone = this.validate.phone.replace(/[^\d\+]/, '');
        // }
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
        // this.countryNameForSort = this.countryNameForSort.replace(/[қ]/gi, this.replacer);

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
    compPnflShow() {
      let accessCountry = [139]

      return accessCountry.includes(this.validate.region)
    }
  },

  methods: {
    async checkPhone() {
      return await this.$api.get(
          `public/check/phone?phone=${this.validate.phone.replaceAll(/[^\d]/g, '')}`,
          (response) => {
            let {
              data: { data }
            } = response

            return data
          }
      )
    },

    checkEnterPress(event) {
      if (event.key == 'Enter') {
        this.tryToLogin()
      }
    },
    showSuccessToast() {
      this.pdfDownloaded = true
      // this.$platonApp.greenToast(this.$l('EXPERTOFFERSUCCESSDOWNLOAD', "Oferta muvaffqiyatli yuklandi"));
    },

    checkOfferInput() {
      let context = this

      setTimeout(() => {
        if (context.currentDocumentType == 'offer') {
          context.$refs.customoffercheckbox.checked = true
        }

        if (context.currentDocumentType == 'agreement') {
          context.$refs.customagreementcheckbox.checked = true
        }
      }, 250)
    },
    setDocumentData(documentType) {
      this.currentDocumentType = documentType

      if (documentType == 'offer') {
        this.documentData.name = 'Oferta'
        this.documentData.href = '/v1/store/file/docs/oferta.pdf'
        this.documentData.downloadDocument = 'oferta.pdf'
        this.documentData.downloadWord = 'Ofertani yuklab olish'
      }

      if (documentType == 'agreement') {
        this.documentData.name = 'Shartnoma'
        this.documentData.href = '/v1/store/file/docs/soglashenie.pdf'
        this.documentData.downloadDocument = 'soglashenie.pdf'
        this.documentData.downloadWord = 'Shartnomani yuklab olish'
      }

      console.log(this.documentData, this.currentDocumentType)
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

    onError() {
      console.log('Error')
      this.states.loginError = true
    },

    async xxx(username, password) {
      try {
        this.isLoggingIn = true
        const response = await this.$http.post(
            window.configs.PLATON_LOGIN_URL,
            {
              username,
              password
            },
            {
              baseURL: `${window.configs.PLATON_SERVER_URL}/${window.configs.PLATON_SERVER_PREFIX}`
            }
        )

        this.isLoggingIn = false

        response.config.baseURL = 'https://api.expert.uz/pages/certification'
        // console.log(response);
        // return;

        this.$emit('login-success', {
          user: response.data.user,
          token: response.data.token,
          parcel: { username, password, response, type: 'login-password' }
        })

        // window.location.assign('/pages/certification');
      } catch (e) {
        this.isLoggingIn = false
        const response = e.response

        if (response)
          if (response.status === 401) {
            this.$emit('login-error', 'Логин ёки пароль нотугри!')
          } else {
            this.$emit('login-error', response.error ? response.error.message : 'Хатолик')
          }
      }
    },

    tryToLogin() {
      let requestOptions = {
        method: 'POST',
        body: JSON.stringify({username: this.login.login, password: this.login.password})
      }

      fetch(
          `http://localhost:3000/login`,
          requestOptions
      )
          .then((response) => response.json())
          .then((result) => {
              console.log('result', result)
              localStorage.setItem('auth_users', JSON.stringify(result.user_info))
              // history.pushState({}, '', `dashboard`)
              // window.location.reload()
          })
          .catch((error) => console.log('error', error))
    },
    onSignInSuccess(googleUser) {
      let profile = googleUser.getBasicProfile()
      console.log(profile)
    },
    onSignInError(error) {
      // this.$platonApp.errorToast('Oh no')
      console.log(error)
    },
    backWhenRemove(index) {
      let btnName = event.code
      let verCodeSpans = Array.from(document.querySelectorAll('.smsnumberpart'))

      if (btnName == 'Backspace' && index >= 0) {
        verCodeSpans[index].innerText = ''
        if (index > 0) {
          verCodeSpans[index - 1].focus()
        }
      }
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
    closeMenuSearchMenu() {
      event.stopPropagation()
      this.classWhenGenderClicked = false
      this.customSelect.selectListBlock.show = false
      this.countryNameForSort = ''
    },

    checkPress() { },
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
    replacer(match) { },
    resendMSG() {
      let id = this.currentUserID

      if (this.verificationMsg) {
        this.verificationMsg = ''
      }

      if (this.countdown == '00:00') {
        let allInputNumbers = Array.from(document.querySelectorAll('.smsnumberpart'))

        for (let x = 0; x < allInputNumbers.length; x++) {
          allInputNumbers[x].innerText = ''
        }

        allInputNumbers[0].focus()

        this.$api
            .post(`public/send_massage`, { id: id })
            .then((res) => {
              let {
                data: { timestamp }
              } = res
              let {
                data: { data }
              } = res

              this.startSMSCountdown()
            })
            .then(() => {
              this.viewSMSWindow()
            })
      } else {
        this.verificationMsg = "Iltimos, berilgan vaqt tugagandan so'ng urunib ko'ring"
        let context = this

        setTimeout(() => {
          context.verificationMsg = ''
        }, 3000)
      }
    },
    startSMSCountdown() {
      let currentStandart = this.smsStandartTimeAsMinute
      let currentStandartToSecond = currentStandart * 60
      let takeMinute = Math.floor(currentStandartToSecond / 60)
      let takeSeconds = currentStandartToSecond - takeMinute * 60

      takeMinute = takeMinute < 10 ? `0${takeMinute}` : takeMinute
      takeSeconds = takeSeconds < 10 ? `0${takeSeconds}` : takeSeconds

      let timeToString = `${takeMinute}:${takeSeconds}`
      this.countdown = timeToString

      let context = this

      let start = setTimeout(function cb() {
        --currentStandartToSecond

        if (currentStandartToSecond >= 0) {
          let takeMinute = Math.floor(currentStandartToSecond / 60)
          let takeSeconds = currentStandartToSecond - takeMinute * 60

          takeMinute = takeMinute < 10 ? `0${takeMinute}` : takeMinute
          takeSeconds = takeSeconds < 10 ? `0${takeSeconds}` : takeSeconds

          let timeToString = `${takeMinute}:${takeSeconds}`
          context.countdown = timeToString

          setTimeout(cb, 1000)
        } else {
          clearInterval(start)
        }
      }, 1000)
    },
    changeRepeatPasswordInput() {
      this.repeatControl = this.repeatControl == 'password' ? 'text' : 'password'
      this.repeatEyeControl = !this.repeatEyeControl
    },

    changePasswordInput() {
      this.passwordControl = this.passwordControl == 'password' ? 'text' : 'password'
      this.passwordEyeControl = !this.passwordEyeControl
    },
    viewUploadFile() {
      this.modal = true
      let body = document.documentElement.querySelector('body')
      body.classList.add('no-scroll')
    },
    removeViewUploadFile() {
      this.modal = false
      let body = document.documentElement.querySelector('body')
      body.classList.remove('no-scroll')
    },
    viewSMSWindow() {
      this.smsmodal = true
      let body = document.documentElement.querySelector('body')

      body.classList.add('no-scroll')

      this.$nextTick(() => {
        document.querySelector('.verificationBlock').firstChild.focus()
      })
    },
    removeSMSWindow() {
      this.smsmodal = false
      let body = document.documentElement.querySelector('body')
      body.classList.remove('no-scroll')
    },
    removeUploadFile() {
      this.fileUploadStart = false
      this.uploadFileState = true

      let file = this.$refs.fileupload
      let uploadFrame = this.$refs.uploadFrame.classList.add('upload-frame')

      file.value = ''
      this.validate.fileCheck = false
    },

    async validation() {
      let validationState = [
        this.validateName(),
        this.validateSurname(),
        this.validateDate(),
        this.validatePhone(),
        this.validateRegion(),
        this.validateGender(),
        this.validatePNFL(),
        this.validateLogin(),
        this.validatePassword(),
        this.validateRepeatPassword(),
        this.validateFile(),
        this.offerReaded,
        this.agreementReaded,
        this.validateEmail()
      ].every((item) => item === true)

      // let {
      //   data: { data: phoneCheck }
      // } = await this.checkPhone()

      // console.log(phoneCheck, 'phonecheck')

      // if (phoneCheck) {
      //   this.validate.phone = '+998'
      //   return
      // }
      console.log(validationState)
      this.sendData()
      // if (!phoneCheck && validationState) {
      //   this.sendData()
      // }
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

      this.$nextTick(() => {
        this.$refs.searchRegion.focus()
      })
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
    controlWritePNFL() {
      this.validate.pnfl = this.validate.pnfl.replace(/[^\d]/g, '')

      if (this.validate.pnfl > 14) {
        this.validate.pnfl = this.validate.pnfl.slice(0, 14)
      }
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
    controlWriteVerCode(index) {
      let allInputNumbers = Array.from(document.querySelectorAll('.smsnumberpart'))
      let eventValue = event.target.innerText
      event.target.innerText = eventValue[0].replace(/[^\d]/g, '')

      if (index != allInputNumbers.length - 1 && event.target.innerText) {
        allInputNumbers[index + 1].focus()
      }

      let allValues = allInputNumbers.map((element) => element.innerText)
      let checkAllValues = allValues.every((element) => !!element == true)
      let allValuesToString = allValues.join('')

      if (checkAllValues) {
        if (this.countdown != '00:00') {
          this.$api
              .post(`public/registration/chack/code`, {
                id: this.currentUserID,
                code: allValuesToString
              })
              .then((res) => {
                let {
                  data: { data }
                } = res
                let { refresh, check } = data

                if (refresh === 'success' && check === 1) {
                  if (!window.q('referral') && window.q('direction_id') && window.q('course_id')) {
                    window.location.assign(
                        `/pages/${window.q('ref_next_page')}?directionid=${window.q(
                            'direction_id'
                        )}&courseid=${window.q('course_id')}`
                    )
                    return
                  } else if (
                      window.q('referral') &&
                      window.q('direction_id') &&
                      window.q('course_id')
                  ) {
                    window.location.assign(
                        `/pages/${window.q('ref_next_page')}?directionid=${window.q(
                            'direction_id'
                        )}&courseid=${window.q('course_id')}&referal=true`
                    )
                  } else {
                    this.tryLogin(this.validate.login, this.validate.repeatPassword)
                  }
                } else {
                  this.verificationMsg =
                      "Verifikatsiya uchun berilgan vaqt tugadi. Iltimos, qaytadan urunib ko'ring"
                }
              })
        }
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
    checkErrorPNFL() {
      this.inputErrorState.pnfl = ''

      event.target.addEventListener('focusout', (event) => {
        if (this.validate.pnfl) {
          if (this.validate.pnfl.length < 14) {
            this.inputErrorState.pnfl = `JShShIR 14 ta raqamdan iborat bo'lishi kerak`
          }
        }
      })
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

    imageUploadAnimate() {
      this.uploadFileState = false
      this.fileUploadStart = true

      const elementForAnimate = document.querySelector('.uploadingFileOverlay')
      this.getUploadingImage(elementForAnimate)
    },
    showErrorUpload() {
      this.showErrorUploadState = true
      this.uploadFileState = false

      setTimeout(() => {
        this.showErrorUploadState = false
        this.uploadFileState = true
      }, 3000)
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
    console.log("this.$user", this.$user)
    // this.initGoogleLogin(this.$refs.google)
    fetch('https://api.expert.uz/api/public/country/and/gender/list')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          const { country, gender } = data.data
          this.genders = gender
          let sortedArr = country
              .filter((country) => country.country_name !== 'Бошка')
              .sort((el1, el2) => el1.country_name.localeCompare(el2.country_name))
          this.regions = [...sortedArr]
          this.regionsClone = [...sortedArr]
        })
        .catch((error) => {
          console.error('Fetch error:', error)
        })

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
