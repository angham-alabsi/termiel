<template>
    <div class="aboutus " id="about_us" >
        <div class="container">
            <div class="row">
                    <div class="about_imgs col-xs-12 col-sm-12 col-md-7" v-lazyanimationxl>
                        <img src="../assets/aboutuspic3.png" alt="solar_heater" />
                    </div>
                    
                    <div class="about_content  col-xs-12 col-sm-12 col-md-5">
                        <div v-lazyanimationx>
                            <div class="line"></div>
                            <div class="title">
                                <h1 v-if="lang=='tr'"> Hakkımızda </h1>
                                <h1 v-else> About Us</h1>
                            </div>
                        </div>
                        <div class="content" >
                            <div>
                            <p class="title" v-lazyanimationy v-if="lang=='tr'">Günlük ihtiyaçlarınızı karşılayan en iyi güneş çözümlerini sunuyoruz </p>
                            <p class="title" v-lazyanimationy v-else>We provide the best solar solutions that meet your daily needs </p>
                            </div>
                        </div>
                        <div class="desc" v-lazyanimationy v-if="lang=='tr'">Kaliteli güneş enerjisi hizmetlerinde yirmi yılı aşkın kanıtlanmış başarı ile. Uzman ekibimiz, bölgedeki mevcut en iyi hizmeti ve kaliteyi sağlamaya kendini adamıştır.
                        </div>
                        <div class="desc" v-lazyanimationy v-else>With more than two decades of proven success in quality solar services . Our expert team has been dedicated to providing the best service and quality available in the area.
                        </div>
                        <div>
                            <div class="">
                                    <div class=" row " v-lazyanimationx>
                                        <p class="col-xs-12 col-sm-12  col-md-12 num" >20+</p>
                                        <p class="col-xs-12 col-sm-12  col-md-12 num_exp" v-if="lang=='tr'">YILLARIN DENEYİMİ</p>
                                        <p class="col-xs-12 col-sm-12  col-md-12 num_exp" v-else>YEARS OF EXPERIENCE</p>
                                    </div>
                                    <div  class="row " v-lazyanimationx>
                                        <p class="col-xs-12 col-sm-12  col-md-12 num" >1000+</p>
                                        <p class="col-xs-12 col-sm-12  col-md-12 num_exp" v-if="lang=='tr'">BİR YIL SATIŞ</p>
                                        <p class="col-xs-12 col-sm-12  col-md-12 num_exp" v-else>SALES A YEAR</p>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
    lang(){
      console.log(this.$store.getters.getLang);
      return this.$store.getters.getLang;
    }
  },
    
}
</script>



<style scoped>

.aboutus{
    padding: 5rem 0rem;  
}

.title{
    display: inline-block;
    vertical-align: middle;
    color: #ed3b3b;
}

.line{
    width: 40px;
    height: 3px;
    background-color: #ed3b3b;
    display: inline-block;
    vertical-align: middle;
    margin: 0rem .5rem;
}

.about_imgs img{
    width: 100%;
    height: 100%;
}

.second_img{
    width: 35% !important;
    position: relative;
    bottom: 484px;
    left: 292px;
}

.third_img{
    position: relative;
    bottom: 303px;
    left: 128px;
}

.about_content{
    text-align: left;
    padding: 2rem 2rem;
}
.content{
    padding: 1rem .5rem;
}

.about_content .content .title{
    font-size: 35px;
    line-height: 40px;
    color: #272a56;
}

.num{
    display: inline-block;
    font-size: 40px;
    color: #ed3b3b;
}

.num_exp{
    display: inline-block;
    font-size: 30px;
    color: black;
    
}

.desc{
    color: #777777;
}


</style>




