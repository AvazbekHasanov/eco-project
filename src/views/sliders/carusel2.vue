<template>
  <div class="carusel2-wrapper">
    <div class="logos">
        <img src="@/assets/images/car.png" alt="img">
        <img src="@/assets/images/diamond.png" alt="img">
        <img src="@/assets/images/diamondpink.png" alt="img">
        <img src="@/assets/images/diamondyello.png" alt="img">
        <img src="@/assets/images/hatchback.png" alt="img">
        <img src="@/assets/images/quest.png" alt="img">
        <img src="@/assets/images/viking.png" alt="img">
    </div>
    <div class="logos">
        <img src="@/assets/images/car.png" alt="img">
        <img src="@/assets/images/diamond.png" alt="img">
        <img src="@/assets/images/diamondpink.png" alt="img">
        <img src="@/assets/images/diamondyello.png" alt="img">
        <img src="@/assets/images/hatchback.png" alt="img">
        <img src="@/assets/images/quest.png" alt="img">
        <img src="@/assets/images/viking.png" alt="img">
    </div>
  </div>
  <div class="carusel2-wrapper s2">
    <div class="logos">
        <img src="@/assets/images/car.png" alt="img">
        <img src="@/assets/images/diamond.png" alt="img">
        <img src="@/assets/images/diamondpink.png" alt="img">
        <img src="@/assets/images/diamondyello.png" alt="img">
        <img src="@/assets/images/hatchback.png" alt="img">
        <img src="@/assets/images/quest.png" alt="img">
        <img src="@/assets/images/viking.png" alt="img">
    </div>
    <div class="logos">
        <img src="@/assets/images/car.png" alt="img">
        <img src="@/assets/images/diamond.png" alt="img">
        <img src="@/assets/images/diamondpink.png" alt="img">
        <img src="@/assets/images/diamondyello.png" alt="img">
        <img src="@/assets/images/hatchback.png" alt="img">
        <img src="@/assets/images/quest.png" alt="img">
        <img src="@/assets/images/viking.png" alt="img">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
    background-color: cadetblue;
    padding-top: 150px;
}
.carusel2-wrapper{
    margin: auto;
    width: 430px;
    background-color: white;
    overflow: hidden;
    white-space: nowrap;
}
.carusel2-wrapper .logos{
    overflow: hidden;
    padding: 15px 5px;
    animation: 5s carusel infinite linear;
    display: inline-block;
}
.carusel2-wrapper img{
    width: 50px;
    height: 50px;
    margin: 0 10px;
}
.s2 .logos{
    animation: 5s caruselS2 infinite linear !important;
}


@keyframes carusel{
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(-100%);
    }
}
@keyframes caruselS2{
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(0);
    }
}
</style>