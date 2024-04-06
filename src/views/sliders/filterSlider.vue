<template>
  <div class="wrapper">
    <div class="filter">
        <h1>Welcome to FilterSlider</h1>
        <div class="filter-tab">
            <ul id="filters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".s1">S1</li>
              <li data-filter=".s2">S2</li>
              <li data-filter=".s3">S3</li>
            </ul>
        </div>
        <div class="boxes">
            <div class="box s1">
                <h2>1-Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nobis, delectus corporis error vel aut. Fuga adipisci tempora rerum quo.</p>
            </div>
            <div class="box s2">
                <h2>2-Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nobis, delectus corporis error vel aut. Fuga adipisci tempora rerum quo.</p>
            </div>
            <div class="box s3">
                <h2>3-Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nobis, delectus corporis error vel aut. Fuga adipisci tempora rerum quo.</p>
            </div>
            <div class="box s3">
                <h2>4-Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nobis, delectus corporis error vel aut. Fuga adipisci tempora rerum quo.</p>
            </div>
            <div class="box s2">
                <h2>5-Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nobis, delectus corporis error vel aut. Fuga adipisci tempora rerum quo.</p>
            </div>
            <div class="box s1">
                <h2>6-Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nobis, delectus corporis error vel aut. Fuga adipisci tempora rerum quo.</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        filter(){
            window.addEventListener('load', () => {
            let portfolioContainer = select('.boxes');
            if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.box',
                layoutMode: 'fitRows'
            });

            let portfolioFilters = select('#filters li', true);

            on('click', '#filters li', function(e) {
                e.preventDefault();
                portfolioFilters.forEach(function(el) {
                el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function() {
                AOS.refresh()
                });
            }, true);
            }

        });
        },
        aos(){
            window.addEventListener('load', () => {
            AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
            })
        })
        },
    },
    mounted(){
        this.aos();
    }

}
</script>

<style>
.filter{
    flex-direction: column;
    gap: 20px;
    background-color: white;
    width: 800px;
    margin: auto;
    padding: 20px;
    text-align: center;
}
.filter-active{
    color: #fff;
    background: #50d8af;
}
.filter h1{
    margin-bottom: 10px;
}
.filter .boxes{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
}
.boxes .box{
    width: 240px;
}
.boxes .box p{
    text-align: left;
    margin-top: 10px;
}
#filters{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}
#filters li{
    background-color: rgb(34, 148, 8);
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
</style>