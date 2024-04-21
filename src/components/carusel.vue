<template>
  <div class="carusel2-wrapper">
    <div class="logos">
      <div> {{content}} </div>
    </div>
    <div class="logos">
      <div> {{content}} </div>
    </div>
  </div>

</template>

<script>
export default {
props:{
  content: {
    type: String,
    default: ''
  }
},
}
</script>

<style scoped>
body{
  background-color: cadetblue;
  padding-top: 150px;
}
.carusel2-wrapper{
  margin: auto;
  width: 100%;
  background-color: transparent;
  overflow: hidden;
  white-space: nowrap;
}
.carusel2-wrapper .logos{
  overflow: hidden;
  padding: 15px 5px;
  animation: 20s carusel infinite linear;
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
    transform: translateX(-150%);
  }
}
@keyframes caruselS2{
  0%{
    transform: translateX(-150%);
  }
  100%{
    transform: translateX(0);
  }
}
</style>