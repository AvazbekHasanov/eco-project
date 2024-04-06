<template>
    <div class="gradient-info">
        <div class="boxes">
            <div class="top-boxes">
                <div class="box">
                    <div class="top">
                        <h2 class="c1">{{ titles[0] }}</h2>
                    </div>
                    <div class="text bg1">
                        <p>{{ texts[0] }}</p>
                        <i :class=icons[0]></i>
                    </div>
                    <div class="line-bottom bg1">
                    </div>
                    <div class="line-bottom-line">
                    </div>
                    <div class="line-bottom-circle bg1">
                    </div>
                </div>
                <div class="box">
                    <div class="top">
                        <h2 class="c3">{{ titles[2] }}</h2>
                    </div>
                    <div class="text bg3">
                        <p>{{ texts[2] }}</p>
                        <i :class=icons[2]></i>
                    </div>
                    <div class="line-bottom bg3">
                    </div>
                    <div class="line-bottom-line">
                    </div>
                    <div class="line-bottom-circle bg3">
                    </div>
                </div>
                <div class="box">
                    <div class="top">
                        <h2 class="c5">{{ titles[4] }}</h2>
                    </div>
                    <div class="text bg5">
                        <p>{{ texts[4] }}</p>
                        <i :class=icons[4]></i>
                    </div>
                    <div class="line-bottom bg5">
                    </div>
                    <div class="line-bottom-line">
                    </div>
                    <div class="line-bottom-circle bg5">
                    </div>
                </div>
            </div>
            <div class="bottom-boxes">
                <div class="box">
                    <div class="text bg2">
                        <i :class=icons[1]></i>
                        <p>{{ texts[1] }}</p>
                    </div>
                    <div class="top">
                        <h2 class="c2">{{ titles[1] }}</h2>
                    </div>
                    <div class="line-bottom bg2">
                    </div>
                    <div class="line-bottom-line">
                    </div>
                    <div class="line-bottom-circle bg2">
                    </div>
                </div>
                <div class="box">
                    <div class="text bg4">
                        <i :class=icons[3]></i>
                        <p>{{ texts[3] }}</p>
                    </div>
                    <div class="top">
                        <h2 class="c4">{{ titles[3] }}</h2>
                    </div>
                    <div class="line-bottom bg4">
                    </div>
                    <div class="line-bottom-line">
                    </div>
                    <div class="line-bottom-circle bg4">
                    </div>
                </div>
            </div>
        </div>
        <div class="wave-line">
            <span>&#8967;</span>
            <span class="m-left75">&#8967;</span>
        </div>
        <div class="res-boxes">
            <div class="box">
                    <div class="top">
                        <h2 class="c1">{{ titles[0] }}</h2>
                    </div>
                    <div class="text bg1">
                        <p>{{ texts[0] }}</p>
                        <i :class=icons[0]></i>
                    </div>
                    <div class="line-bottom bg1">
                    </div>
            </div>
            <div class="box">
                    <div class="top">
                        <h2 class="c2">{{ titles[1] }}</h2>
                    </div>
                    <div class="text bg2">
                        <i :class=icons[1]></i>
                        <p>{{ texts[1] }}</p>
                    </div>
                    <div class="line-bottom bg2">
                    </div>
            </div>
            <div class="box">
                    <div class="top">
                        <h2 class="c3">{{ titles[2] }}</h2>
                    </div>
                    <div class="text bg3">
                        <p>{{ texts[2] }}</p>
                        <i :class=icons[2]></i>
                    </div>
                    <div class="line-bottom bg3">
                    </div>
            </div>
            <div class="box">
                <div class="top">
                        <h2 class="c4">{{ titles[3] }}</h2>
                    </div>
                    <div class="text bg4">
                        <i :class=icons[3]></i>
                        <p>{{ texts[3] }}</p>
                    </div>
                    <div class="line-bottom bg4">
                    </div>
            </div>
            <div class="box">
                    <div class="top">
                        <h2 class="c5">{{ titles[4] }}</h2>
                    </div>
                    <div class="text bg5">
                        <p>{{ texts[4] }}</p>
                        <i :class=icons[4]></i>
                    </div>
                    <div class="line-bottom bg5">
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
       titles: {
        type: Object,
        required: true,
        default: ['Step 1','Step 2','Step 3','Step 4','Step 5']
      },
       texts: {
        type: Object,
        required: false,
        default: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit','Lorem ipsum dolor sit amet, consectetur adipisicing elit','Lorem ipsum dolor sit amet, consectetur adipisicing elit','Lorem ipsum dolor sit amet, consectetur adipisicing elit','Lorem ipsum dolor sit amet, consectetur adipisicing elit']
      },
      icons: {
        type: Object,
        required: false,
        default: ["fa-regular fa-images","fa-brands fa-internet-explorer","fa-regular fa-gear-complex-code","fa-brands fa-discord","fa-solid fa-dice-d6"]
      },
    }
}
</script>

<style scoped>
.gradient-info span{
    content: "\2307";
    font-size: 300px;
    transform: rotate(90deg) scaleY(1.5);
}
.gradient-info{
    display: flex;
    background-color: #E7ECEE;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.gradient-info .wave-line{
    display: flex;
    position: absolute;
    left: 80px;
    top: 20px;
}
.gradient-info .m-left75{
    margin-left: -75px;
}
.gradient-info .boxes{
    display: flex;
    flex-direction: column;
    gap: 138px;
    align-items: center;

}
.gradient-info .box{
    display: flex;
    flex-direction: column;
    width: 200px;
    border-radius: 15px;
    align-items: center;
    z-index: 1;
    background-color: white;
    justify-content: flex-start;
    position: relative;
}
.gradient-info .box .top{
    background-color: white;
    color: #7FC034;
    text-align: center;
    padding: 8px;
    border-radius: 15px 15px 0 0;
}
.gradient-info .text p, .gradient-info .text i{
    color: white;
}
.gradient-info .box .text{
    background-color: #7FC034;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    border-radius: 0 0 15px 15px;
    z-index: 2;
}
.gradient-info .bottom-boxes .box .text{
    border-radius: 15px 15px 0 0;
}
.gradient-info .box i{
    font-size: 36px;
    width: 36px;
    height: 36px;
}
.gradient-info .line-bottom{
    padding: 1px;
    background-color: #7FC034;
    width: 30px;
    height: 30px;
    transform: rotate(45deg) translate(-15px ,-15px);
    z-index: 1;
    position: absolute;
    bottom: -30px;
}
.gradient-info .bottom-boxes .line-bottom{
    top: 10px;
}
.gradient-info .line-bottom-line{
    position: absolute;
    padding: 0.1px;
    border-left: 4px dotted #A6ACAE;
    height: 80px;
    bottom: -90px;
    z-index: 0;
}
.gradient-info .bottom-boxes .line-bottom-line{
    top: -100px;
}
.gradient-info .line-bottom-circle{
    position: absolute;
    padding: 10px;
    border-radius: 50%;
    background-color: #7FC034;
    bottom: -100px;
    z-index: 1;
}
.gradient-info .bottom-boxes .line-bottom-circle{
    top: -100px;
    bottom: 0;
    width: 1px;
    height: 1px
}
.gradient-info .top-boxes{
    display: flex;
    gap: 30px;
}
.gradient-info .bottom-boxes{
    display: flex;
    justify-content: center;
    gap: 30px;
}
.gradient-info .res-boxes{
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    width: 450px;
    display: none;
}
.gradient-info .res-boxes .text{
    border-radius: 0 0 15px 15px;
}

.gradient-info .bg1{
    background-color: #DE287C !important;
}
.gradient-info .bg2{
    background-color: #25B2CC !important;
}
.gradient-info .bg3{
    background-color: #7FC034 !important;
}
.gradient-info .bg4{
    background-color: #FBD302 !important;
}
.gradient-info .bg5{
    background-color: #69327E !important;
}
.gradient-info .c1{
    color: #DE287C;
}
.gradient-info .c2{
    color: #25B2CC;
}
.gradient-info .c3{
    color: #7FC034;
}
.gradient-info .c4{
    color: #FBD302;
}
.gradient-info .c5{
    color: #69327E;
}

@media (max-width: 740px){
    .gradient-info .boxes{
        display: none;
    }
    .gradient-info .wave-line{
        display: none;
    }
    .gradient-info .res-boxes{
        display: flex;
    }
}
@media (max-width: 480px){
    .gradient-info .res-boxes{
        width: 300px;
    }
}
</style>