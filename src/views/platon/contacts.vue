<template>
  <div style="padding-top: 140px" class="breadcrumb_wrapper">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="breadcrumb_inner">
            <h3 class="text-white">Биз билан алоқа</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="contact_blocks_wrapper clv_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div class="contact_block">
            <span></span>
            <div class="contact_icon"><img src="https://maxsustrans.uz/frontend/images/contact_icon1.png" alt="image"></div>
            <h4>Телефон</h4>
            <p>Абонент.бўлими:: 712472599</p>
            <p>Диспетчер:: 712470211</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="contact_block">
            <span></span>
            <div class="contact_icon"><img src="https://maxsustrans.uz/frontend/images/contact_icon2.png" alt="image"></div>
            <h4>Эл.манзил</h4>
            <br>
            <p>maxsustrans@inbox.uz</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="contact_block">
            <span></span>
            <div class="contact_icon"><img src="https://maxsustrans.uz/frontend/images/contact_icon3.png" alt="image"></div>
            <h4>Манзил</h4>
            <p>Шаҳар: Тошкент тумани: Учтепа БЕКАБАД саноат зонаси</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="contact_form_wrapper clv_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8">
          <div class="contact_form_section">
            <div class="row">
              <div class="col-md-12 col-lg-12">
                <h3>Саволингиз борми?</h3>
              </div>
              <form method="post" action="https://maxsustrans.uz/uz/contacts" class="d-flex flex-column" style="gap: 20px">
                <select class="form-control">
                  <option value="1">Жалобы</option>
                  <option value="2">Обращения</option>
                  <option value="3">Предложения</option>
                </select>
                <div class="d-flex flex-row gap-3 " style="width: 100%">
                  <div class="form-group" style="width: 50%">
                    <label for="name">Ismingiz </label>
                    <input type="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Ismingini kiriting">
                  </div>
                  <div class="form-group" style="width: 50%">
                    <label for="phone">Ismingiz </label>
                    <input type="phone" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="Ismingini kiriting">
                  </div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="working_time_section">
            <div class="timetable_block">
              <h5>Иш вақти</h5>
              <ul>
                <li>
                  <p>Душанба</p>
                  <p>9:00 - 18:00</p>
                </li>
                <li>
                  <p>Сешанбаy</p>
                  <p>9:00 - 18:00</p>
                </li>
                <li>
                  <p>Чоршанба</p>
                  <p>9:00 - 18:00</p>
                </li>
                <li>
                  <p>Пайшанба</p>
                  <p>9:00 - 18:00</p>
                </li>
                <li>
                  <p>Жума</p>
                  <p>9:00 - 18:00</p>
                </li>
                <li>
                  <p>Шанба</p>
                  <p>Дам олиш куни</p>
                </li>
                <li>
                  <p>Якшанба</p>
                  <p>Дам олиш куни</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.contact_blocks_wrapper {
  background-color: #ffffff;
  padding-top: 125px;
}
.contact_block {
  position: relative;
  box-shadow: 0px 0px 30px 1px rgba(0,0,0,0.06);
  border-radius: 10px;
  background-color: #ffffff;
  text-align: center;
  padding: 50px 40px 43px;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
}
.contact_block .contact_icon {
  margin-bottom: 15px;
}
img {
  vertical-align: middle;
  border-style: none;
}

.contact_block h4:before, .contact_block h4:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  width: 104px;
  height: 1px;
  background-color: #fec007;
}
.contact_block h4:after {
  width: 56px;
  top: calc(100% + 5px);
}
.contact_block h4:before, .contact_block h4:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  width: 104px;
  height: 1px;
  background-color: #fec007;
}
.contact_block:after {
  top: auto;
  bottom: 0;
  border-radius: 0px 0px 0px 10px;
  border-width: 0px 0px 1px 1px;
}
.contact_form_section {
  background-color: #ffffff;
  border-radius: 10px 10px 10px 10px;
  padding: 33px 40px 10px;
  box-shadow: 0px 0px 30px 1px rgba(0,0,0,0.06);
}
.timetable_block {
  padding: 40px 40px 20px;
  background-color: #ffffff;
}
.working_time_section {
  background-color: #ffffff;
  box-shadow: 0px 0px 30px 1px rgba(0,0,0,0.06);
}
.timetable_block > ul > li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
}
.timetable_block > ul > li > p {
  margin: 0;
  color: #222222;
  text-transform: capitalize;
  text-align: left;
  width: 45%;
}
.contact_icon img{
  width: 60px;
}
.contact_block:before, .contact_block:after, .contact_block span:before, .contact_block span:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  border-width: 1px 0px 0px 1px;
  border-radius: 10px 0px 0px 0px;
  z-index: -1;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
}
.contact_form_section h3 {
  text-transform: capitalize;
  font-size: 32px;
  margin-bottom: 22px;
  color: #222222;
  font-weight: 600;
}
.form_block {
  margin-bottom: 30px;
}
</style>