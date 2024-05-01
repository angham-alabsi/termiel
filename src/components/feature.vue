<template>
    <div class="feature " id="feature">
        <div class="container">
                <h1 v-if="lang=='tr'" class="label" v-lazyanimationx >Özellikleri</h1>
                <h1 v-else class="label" v-lazyanimationx >Features</h1>
                <p v-if="lang=='tr'" class="desc" v-lazyanimationy> Yaratıcı Özellikler sunuyoruz :::</p>
                <p v-else class="desc" v-lazyanimationy> We provide Creative Features :::</p>
                <div class="row row-cols-1 row-cols-md-4 g-4 ">
                    <div class="col" v-rotateanimation>
                        <div class="card ">
                        <img src="../assets/1.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5  v-if="lang=='tr'" class="card-title" >Para biriktir</h5>
                            <h5 v-else class="card-title">Save money</h5>
                            <p v-if="lang=='tr'" class="card-text">Her ay kullandığınız enerji miktarını azaltmakla ilgileniyor musunuz?</p>
                            <p v-else class="card-text">Are you interested in reducing the amount of energy you use each month?</p>
                        </div>
                        </div>
                    </div>
                    <div class="col" v-rotateanimation>
                        <div class="card ">
                        <img src="../assets/2.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 v-if="lang=='tr'" class="card-title">24 saat</h5>
                            <h5 v-else class="card-title">24 Hours</h5>
                            <p v-if="lang=='tr'" class="card-text">24 saat çalışır. </p>
                            <p v-else class="card-text">It works 24 hours a day. </p>
                        </div>
                        </div>
                    </div>
                    <div class="col" v-rotateanimation>
                        <div class="card ">
                        <img src="../assets/3.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 v-if="lang=='tr'" class="card-title">Yeşil enerji</h5>
                            <h5 v-else class="card-title">Green energy</h5>
                            <p v-if="lang=='tr'" class="card-text">Tamamen güneş enerjili.</p>
                            <p v-else class="card-text">Fully solar powered.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col" v-rotateanimation>
                        <div class="card ">
                        <img src="../assets/4.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 v-if="lang=='tr'" class="card-title">Elektrik faturalarını azaltın</h5>
                            <h5 v-else class="card-title">Reduce electricity bills</h5>
                            <p v-if="lang=='tr'" class="card-text"> Güneş enerjili su ısıtıcısı takarsanız, su ısıtma faturalarınız düşmelidir 50%–80%</p>
                            <p v-else class="card-text"> if you install a solar water heater, your water heating bills should drop 50%–80%</p>
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
      return this.$store.getters.getLang;
    }
    }
}
</script>

<style scoped>
.feature{
    padding: 5rem 0rem;
    
}

.card{
    background: none;
    border: none;

}

.card-img, .card-img-bottom, .card-img-top {
    width: 70%;
    margin: 0 auto;
}

.card-img-top{
    position: relative;
    bottom: 25%;
}

.label{
    padding: .5rem 2rem;
    display: inline-block;
    color: #ed3b3b;
    border-left: 3px solid;
}    

.desc{
    padding: 2rem 2rem;
    font-size: 35px;
    color: #272a56
}

.card-title{
    color: black;
}

.card-text{
    color: #777777;
}
</style>