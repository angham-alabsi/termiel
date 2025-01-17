<template>
  <div>
    <div >
      <Header></Header>
      <about-us></about-us>
      <feature></feature>
      <product></product>
      <contact-us></contact-us>
      <Footer></Footer>
    </div>  
    
  </div>
</template>

<script>
import Header from "./header.vue"
import Footer from "./footer.vue"
import AboutUs from './aboutus.vue';
import Feature from './feature.vue';
import Product from './product.vue';
import ContactUs from './contactus.vue';

export default {
  created(){
    
    this.$store.commit('setLang',localStorage.getItem("lang"));
  },
  computed:{
    lang(){
      return this.$store.getters.getLang;
    }
  },
  components: {
    Header,
    Footer,
    AboutUs,
    Feature,
    Product,
    ContactUs,
  },
}
</script>
<style>

.before_move_x{
    opacity: 0;
    transform: translateX(200px);
    transition: all 2s  ease-out;
}
.move_x{
    opacity: 1;
    transform: translateX(0px);
}
.before_move_x_l{
    opacity: 0;
    transform: translateX(-200px);
    transition: all 2s  ease-out;
}
.move_x_l{
    opacity: 1;
    transform: translateX(0px);
}
.before_move_y{
    opacity: 0;
    transform: translateY(200px);
    transition: all 2s  ease-out;
}
.move_y{
    opacity: 1;
    transform: translateY(0px);
}
.before_rotate{
    transform: scale(.5)rotateZ(0);
    transition: all 2s  ease-out;
}
.rotate{
    transform: scale(1)rotateZ(0deg);
}
@media only screen and (max-width: 991px) {
  .navbar-brand {
      margin-right: 0 !important;
  }
}


</style>

