<template>
  <div style="padding-top: 140px" class="breadcrumb_wrapper">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="breadcrumb_inner">
            <h3>Биз билан алоқа</h3>
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
              <form method="post" action="https://maxsustrans.uz/uz/contacts" data-success="1">
                <div class="col-md-12 col-lg-12">
                </div>
                <input type="hidden" name="_token" value="wEtQGvsBCz04XZLHkVIpmWokba4Yeu5QtqOUZDwt">

                <div class="col-md-12 col-lg-12">
                  <select name="category" class="form_block" style="display: none;">
                    <option value="1">Жалобы</option>
                    <option value="2">Обращения</option>
                    <option value="3">Предложения</option>
                  </select><div class="nice-select form_block" tabindex="0"><span class="current">Жалобы</span><ul class="list"><li data-value="1" class="option selected">Жалобы</li><li data-value="2" class="option">Обращения</li><li data-value="3" class="option">Предложения</li></ul></div>
                </div>

                <div class="col-md-6 col-lg-6">
                  <div class="form_block">
                    <input type="text" name="name" class="form_field require" placeholder="Name">
                  </div>
                </div>

                <div class="col-md-6 col-lg-6">
                  <div class="form_block">
                    <input type="text" name="phone" class="form_field require" placeholder="Phone" data-valid="phone" data-error="Phone should be valid.">
                  </div>
                </div>
                <div class="col-md-12 col-lg-12">
                  <div class="form_block">
                    <textarea placeholder="Message" name="message" class="form_field require"></textarea>
                    <div class="response"></div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-12">
                  <div class="form_block">
                    <button class="clv_btn submitForm" type="submit">Отправить</button>
                  </div>
                </div>
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
    data(){
        return{
            info:[
                {obl: 'Қорақалп.', schools: 25, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Андижон', schools: 12, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Бухоро', schools: 14, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Жиззах', schools: 24, classes: 13, people: 158, came: 100, notcame: 100},
                {obl: 'Қашқадарё', schools: 17, classes: 1, people: 19, came: 100, notcame: 100},
                {obl: 'Навоий', schools: 20, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Наманган', schools: 16, classes: 0, people: 0, came: 100, notcame: 0},
                {obl: 'Самарқанд', schools: 11, classes: 1, people: 18, came: 0, notcame: 100},
                {obl: 'Сурхондарё', schools: 25, classes: 7, people: 134, came: 0, notcame: 100},
                {obl: 'Сирдарё', schools: 10, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Тошкент в.', schools: 65, classes: 3, people: 33, came: 0, notcame: 100},
                {obl: 'Фарғона', schools: 4, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Хоразм', schools: 34, classes: 1, people: 15, came: 0, notcame: 100},
                {obl: 'Тошкент ш.', schools: 19, classes: 2, people: 26, came: 0, notcame: 100},
            ],
        }
    },
    computed:{
        summs(){
            let newsumms = {
                allschools: 0,
                allclasses: 0,
                allpeople: 0,
            }
            for (let i = 0; i < info.length; i++) {
                newsumms.allschools += 1
            }
        },
    },
    methods:{
        
    },
    mounted(){
        
    }

}
</script>

<style scoped>
.t-wrapper{
    background-color: #AAD9DF;
    padding: 25px;
}
.t-wrapper h1{
    color: #31478A;
    font-size: 24px;
    text-align: center;
    margin-bottom: 8px;
}
.t-wrapper .table{
    border: 1px solid #4990FF;
    /* border-radius: 5px; */
}
.t-wrapper .table .thead{
    color: white;
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 2fr;
}
.t-wrapper .thead .tr{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.t-wrapper .thead .td{
    background-color: #4990FF;
    text-align: center;
    border: 0.5px solid white;
}
.t-wrapper .td{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
.t-wrapper .tbody .tr{
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr;
}
.t-wrapper .tbody .tr:hover .td{
    background-color: #C9DCFB !important;
}
.t-wrapper .tbody .td{
    border: 0.5px solid #4990FF;
    background-color: white;
}
.t-wrapper .tbody .tr-bottom{
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr;
}
.t-wrapper .tbody .tr-bottom .td{
    background-color: #4990FF ;
    border-color: white ;
    color: white;
}
.t-wrapper .tbody .tr-bottom:hover .td{
    background-color: #4990FF !important;
}


.grid-column-2{
    grid-column: span 2;
}
.green{
    color: #07811D;
}
.red{
    color: red;
}
.bg-c .td{
    background-color: #F4F9FE !important;
}
</style>