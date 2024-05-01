<template>
    <div class="product" id="product">
        <div class="container">
            <div class="card mb-3" style="width: 100%;">
                <div class="row g-0">
                    <div class="col-md-6">
                        <div class="card-body" >
                            <h1 v-if="lang=='tr'" class="card-title" v-lazyanimationx>Ürünler</h1>
                            <h1 v-else class="card-title" v-lazyanimationx>Products</h1>
                            <p v-if="lang=='tr'" class="card-text" v-lazyanimationy> Farklı ebatlarda en kaliteli Türk yapımı ürünleri sunuyoruz :::</p>
                            <p v-else class="card-text" v-lazyanimationy> We offer the best quality Turkish-made products in different sizes :::</p>
                            <p  style=" font-size:30px" v-lazyanimationx>
                                <small v-if="lang=='tr'" class="text-muted">Kapasite :</small>
                                <small v-else class="text-muted">&nbsp;&nbsp;&nbsp;&nbsp;Capacity :</small>
                            </p>
                            <div class="row " >
                                <!--<div>80 L   100 L &nbsp; 150 L &nbsp; 200 L &nbsp; 250 L &nbsp; 300 L</div>-->
                                
                                <div class="col-md-2 col-sm-4 col-xs-4 liter" v-lazyanimationy style="transition-delay:.3s ;">80 L</div>
                                <div class="col-md-2 col-sm-4 col-xs-4 liter" v-lazyanimationy style="transition-delay:.6s ;">100 L</div>
                                <div class="col-md-2 col-sm-4 col-xs-4 liter" v-lazyanimationy style="transition-delay:.9s ;">150 L</div>
                                <div class="col-md-2 col-sm-4 col-xs-4 liter" v-lazyanimationy style="transition-delay:1.1s ;">200 L</div>
                                <div class="col-md-2 col-sm-4 col-xs-4 liter" v-lazyanimationy style="transition-delay:1.4s ;">250 L</div>
                                <div class="col-md-2 col-sm-4 col-xs-4 liter" v-lazyanimationy style="transition-delay:1.7s ;">300 L</div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="../assets/80.jpg" class="d-block w-100" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img src="../assets/100.jpg" class="d-block w-100" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img src="../assets/150.jpg" class="d-block w-100" alt="">
                                </div>
                                <div class="carousel-item ">
                                    <img src="../assets/200.jpg" class="d-block w-100" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img src="../assets/250.jpg" class="d-block w-100" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img src="../assets/300.jpg" class="d-block w-100" alt="">
                                </div>
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
      return this.$store.getters.getLang;
    }
    }
}
</script>

<style scoped>
.product{
    background-color: #f2f2f2;
    padding: 5rem 0rem;
}

.card{
    text-align: left;
    border: none;
    background: none;
}

.card-title{
    padding: .5rem 2rem;
    display: inline-block;
    color: #ed3b3b;
    border-left: 3px solid;
}

.card-text{

    font-size: 35px;
    color: #272a56
}

.liter{
    
    /*width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #c1c1c1;
    line-height: 60px;
    text-align: center;
    margin: .2rem;
    color: white;
    box-shadow: 1px 3px 2px 1px #908e8e;*/
    font-size: 25px;
    display: inline-block;
    line-height: 60px;
    text-align: center;
    white-space: nowrap;
    color: #000000;
}

@media (min-width:0) and (max-width:767px) {  
  
}

</style>