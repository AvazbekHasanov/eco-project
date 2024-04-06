<template>
    <div class="circular-diagram">
        <div class="w-center">
            <div class="w-hide">
                <div class="boxes">
                <div class="box b1" :style="darckblue">
                    <div class="text">
                        <h3>{{ titles[0] }}</h3>
                        <p>{{ texts[0] }}</p>
                    </div>
                    <div class="icon">
                        <i :class=icons[0]></i>
                    </div>
                </div>
                <div class="box b2" :style="lighblue">
                    <div class="text">
                        <h3>{{ titles[1] }}</h3>
                        <p>{{ texts[1] }}</p>
                    </div>
                    <div class="icon">
                        <i :class=icons[1]></i>
                    </div>
                </div>
                <div class="box b3" :style="green">
                    <div class="text">
                        <h3>{{ titles[2] }}</h3>
                        <p>{{ texts[2] }}</p>
                    </div>
                    <div class="icon">
                        <i :class=icons[2]></i>
                    </div>
                </div>
                <div class="box b4" :style="red">
                    <div class="icon">
                        <i :class=icons[3]></i>
                    </div>
                    <div class="text cl">
                        <h3>{{ titles[3] }}</h3>
                        <p>{{ texts[3] }}</p>
                    </div>
                </div>
                <div class="box b5" :style="pire">
                    <div class="icon">
                        <i :class=icons[4]></i>
                    </div>
                    <div class="text cl">
                        <h3>{{ titles[4] }}</h3>
                        <p>{{ texts[4] }}</p>
                    </div>
                </div>
                <div class="box b6"  :style="sabzi">
                    <div class="icon">
                        <i :class=icons[5]></i>
                    </div>
                    <div class="text cl">
                        <h3>{{ titles[5] }}</h3>
                        <p>{{ texts[5] }}</p>
                    </div>
                </div>
                </div>
                <div class="lines">
                    <div class="line l1"></div>
                    <div class="line l2"></div>
                    <div class="line l3"></div>
                    <div class="line l4"></div>
                    <div class="line l5"></div>
                    <div class="line l6"></div>
                </div>
                <div class="center">
                    <div class="hide">
                        <h2>{{ centerTitle }}</h2>
                        <p>{{ centerText }}</p>
                    </div>
        
                    <ul class="sliceWrapper">
                        <li class="rotate0">
                            <div class="slice" :style="sabzi"></div>
                        </li>
                        <li class="rotate60">
                            <div class="slice" :style="pire"></div>
                        </li>
                        <li class="rotate120">
                            <div class="slice" :style="red"></div>
                        </li>
                        <li class="rotate180">
                            <div class="slice" :style="green"></div>
                        </li>
                        <li class="rotate240">
                            <div class="slice" :style="lighblue"></div>
                        </li>
                        <li class="rotate300">
                            <div class="slice" :style="darckblue"></div>
                        </li>
                    </ul>
        
                </div>
            </div>
            <ul class="sliceWrapper op05">
                  <li class="rotate0">
                      <div class="slice" :style="sabzi"></div>
                  </li>
                  <li class="rotate60">
                      <div class="slice" :style="pire"></div>
                  </li>
                  <li class="rotate120">
                      <div class="slice" :style="red"></div>
                  </li>
                  <li class="rotate180">
                      <div class="slice" :style="green"></div>
                  </li>
                  <li class="rotate240">
                      <div class="slice" :style="lighblue"></div>
                  </li>
                  <li class="rotate300">
                      <div class="slice" :style="darckblue"></div>
                  </li>
            </ul>
        </div>
        <div class="res-boxes">
                <div class="box" :style="darckblue">
                    <div class="text">
                        <h3>{{ titles[0] }}</h3>
                        <p>{{ texts[0] }}</p>
                    </div>
                    <div class="icon">
                        <i :class=icons[0]></i>
                    </div>
                </div>
                <div class="box f-end" :style="lighblue">
                    <div class="icon">
                        <i :class=icons[1]></i>
                    </div>
                    <div class="text cl">
                        <h3>{{ titles[1] }}</h3>
                        <p>{{ texts[1] }}</p>
                    </div>
                </div>
                <div class="box" :style="green">
                    <div class="text">
                        <h3>{{ titles[2] }}</h3>
                        <p>{{ texts[2] }}</p>
                    </div>
                    <div class="icon">
                        <i :class=icons[2]></i>
                    </div>
                </div>
                <div class="box f-end" :style="red">
                    <div class="icon">
                        <i :class=icons[3]></i>
                    </div>
                    <div class="text cl">
                        <h3>{{ titles[3] }}</h3>
                        <p>{{ texts[3] }}</p>
                    </div>
                </div>
                <div class="box" :style="pire">
                    <div class="text">
                        <h3>{{ titles[4] }}</h3>
                        <p>{{ texts[4] }}</p>
                    </div>
                    <div class="icon">
                        <i :class=icons[4]></i>
                    </div>
                </div>
                <div class="box f-end"  :style="sabzi">
                    <div class="icon">
                        <i :class=icons[5]></i>
                    </div>
                    <div class="text cl">
                        <h3>{{ titles[5] }}</h3>
                        <p>{{ texts[5] }}</p>
                    </div>
                </div>
        </div>
    </div>
</template>
  
  <script>
  export default {
    props: {
      titles: {
        type: Object,
        required: true,
        default: ['Data 01','Data 02','Data 03','Data 04','Data 05','Data 06']
      },
      texts: {
        type: Object,
        required: false,
        default: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit','Lorem ipsum dolor sit amet, consectetur adipisicing elit','Lorem ipsum dolor sit amet, consectetur adipisicing elit','Lorem ipsum dolor sit amet, consectetur adipisicing elit','Lorem ipsum dolor sit amet, consectetur adipisicing elit','Lorem ipsum dolor sit amet, consectetur adipisicing elit']
      },
      centerTitle: {
        type: String,
        required: false,
        default: 'CIRCULAR DIARGAM'
      },
      centerText: {
        type: String,
        required: false,
        default: 'INFOGRAPHIC'
      },
      bgColors: {
        type: Object,
        required: false,
        default: ['#FF8D16','#FF3F58','#E21E1E','#00BE7F','#04A9B9','#006582']
      },
      icons: {
        type: Object,
        required: false,
        default: ["fa-light fa-gear","fa-light fa-location-dot","fa-light fa-comment","fa-light fa-heart","fa-light fa-message-lines","fa-light fa-chart-mixed-up-circle-dollar"]
      },
    },
    data(){
        return{
            sabzi:{
                backgroundColor: this.bgColors[0],
            },
            pire:{
                backgroundColor: this.bgColors[1]
            },
            red:{
                backgroundColor: this.bgColors[2]
            },
            green:{
                backgroundColor: this.bgColors[3]
            },
            lighblue:{
                backgroundColor: this.bgColors[4]
            },
            darckblue:{
                backgroundColor: this.bgColors[5]
            }
        }
    }
  }
  </script>
  
  <style scoped>
.circular-diagram{
    width: 740px;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
}
.center{
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
}
.w-center{
    position: relative;
    width: 420px;
    height: 420px;
    border-radius: 50%;
}
.center .hide{
    position: absolute;
    width: 174px;
    height: 174px;
    background-color: white;
    z-index: 1;
    border-radius: 50%;
    left: 13px;
    top: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
    text-transform: uppercase;
    border: 1px solid black;
    outline: 5px solid white;
}
.w-hide{
    position: absolute;
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    border-radius: 50%;
    left: 35px;
    top: 35px;
    background-color: white;
}
.slice {
    position: absolute;
    left: -100%;
    width: 200%;
    height: 200%;
}
li{
    overflow: hidden;
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    transform-origin: 0% 100%;
}
.lines{
    position: relative;
}
.lines .line{
    position: absolute;
    width: 120px;
    height: 2px;
    background-color: black;
    padding: 1px;
    z-index: 2;
}
.boxes{
    position: relative;
}
.boxes .box{
    position: absolute;
    z-index: 3;
    border-radius: 80px;
    padding: 10px; 
    width: 240px;
    height: 90px;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
}
.box .text{
    display: flex;
    flex-direction: column;
    text-align: right;
  }
.box .text p{
    font-size: 14px;
  }
.box .icon{
    border: 6px solid white;
    border-radius: 50px;
    padding: 10px;
  }
.box i{
    font-size: 34px;
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
}
  
  
.op05{
    position: absolute;
    opacity: 0.5;
    width: 420px;
    height: 420px;
    overflow: hidden;
    border-radius: 50%;
}
.cl{
    text-align: left !important;
}
.l1{
    left: -106px;
    top: -0px;
    transform: rotate(-0deg);
    transform-origin: left center; 
}
.l2{
    left: 57px;
    top: -75px;
    transform: rotate(-117deg);
    transform-origin: left center; 
}
.l3{
    left: 57px;
    bottom: -75px;
    transform: rotate(117deg);
    transform-origin: left center; 
}
.l4{
    left: 23px;
    top: 74px;
    transform: rotate(-117deg);
    transform-origin: right center;
}
.l5{
    left: 23px;
    bottom: 74px;
    transform: rotate(117deg);
    transform-origin: right center;
}
.l6{
    left: 186px;
    top: -0px;
    transform: rotate(-0deg);
    transform-origin: left center; 
}
.b1{
    left: -200px;
    bottom: 128px;
}
.b2{
    left: -266px;
    top: -44px;
}
.b3{
    left: -200px;
    top: 123px;
}
.b4{
    left: 156px;
    top: 123px;
}
.b5{
    left: 231px;
    top: -44px;
}
.b6{
    left: 156px;
    bottom: 128px;
} 
.rotate0{
    transform: rotate(30deg) skewY(150deg);
}
.rotate60{
    transform: rotate(90deg) skewY(150deg);
}
.rotate120{
    transform: rotate(150deg) skewY(150deg);
}
.rotate180{
    transform: rotate(210deg) skewY(150deg);
}
.rotate240{
    transform: rotate(270deg) skewY(150deg);
}
.rotate300{
    transform: rotate(330deg) skewY(150deg);
}

.res-boxes{
    display: none;
    width: 300px;
}
.res-boxes .box{
    z-index: 3;
    border-radius: 80px;
    padding: 10px; 
    width: 240px;
    height: 90px;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
}
.f-end{
    justify-self: flex-end;
}
@media(max-width: 760px){
    .circular-diagram .res-boxes{
        display: grid;
        gap: 25px;
    }
    .w-center{
        display: none;
    }
}
</style>