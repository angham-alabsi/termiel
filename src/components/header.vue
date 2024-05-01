<template>
  <div>
      <div class="header">
        <!-- Image and text -->
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img height="40px" src="../assets/newpic/logo1.png"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a v-if="lang=='tr'" class="nav-link active" aria-current="page" href="/">Ev</a>
                    <a v-else class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a v-if="lang=='tr'" class="nav-link" href="#about_us" v-smooth-scroll>Hakkımızda</a>
                    <a v-else class="nav-link" href="#about_us" v-smooth-scroll>About us</a>
                    </li>
                    <li class="nav-item">
                    <a v-if="lang=='tr'" class="nav-link" href="#feature" v-smooth-scroll>Özellikleri</a>
                    <a v-else class="nav-link" href="#feature" v-smooth-scroll>Features</a>
                    </li>
                    <li class="nav-item">
                    <a v-if="lang=='tr'" class="nav-link" href="#product" v-smooth-scroll>Ürünler</a>
                    <a v-else class="nav-link" href="#product" v-smooth-scroll>Products</a>
                    </li>
                    <li class="nav-item">
                    <a v-if="lang=='tr'" class="nav-link " href="#contact_us" v-smooth-scroll>Bize Ulaşın</a>
                    <a v-else class="nav-link " href="#contact_us" v-smooth-scroll>Contact us</a>
                    </li>
                    <div class=" nav-item flags">
                        <a class="" @click="handleLang('tr')"><img src="../assets/tr1.png" alt="us"/></a>
                        <a class="" @click="handleLang('en')"><img src="../assets/us1.png" alt="tr"/></a>
                  </div>
                </ul>
                </div>
            </div>
        </nav>
      </div>
      <div class="slider_photo_size">
        <img width="100%" height="100%" src="../assets/newpic/slide1.jpg" alt="soler picture" />
      </div>
  </div>
</template>

<script>



export default {
  data(){
    return{
      href:null,
    }
  },
  computed:{    
      lang(){
        return this.$store.getters.getLang;
      },
    },

   methods: { 

     handleLang(lang){
       localStorage.setItem('lang',lang);
       window.location.reload();
       setTimeout(function(){ this.$store.commit('setLang',lang);}, 1000);
        
     },

    }
}
</script>


<style >


.header{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    
}
.navbar-toggler:focus{
  box-shadow: 0 0 0 0 #fff ;
}
.slider_photo_size{
  width: 100%;
  height: 100vh;
}

.slider_photo {
   width: 100%;
  background-image:url(../assets/newpic/slide1.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.bg-light{
  background-color: #2a3252d6 !important ;
  
}

.navbar-brand{
  margin-right: 8rem;
}

.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link{
  color: #ed3b3b;
}

.nav-link{
  width: 100%;
  white-space: nowrap;
  padding-right: 2rem !important;
}

.navbar-light .navbar-nav .nav-link {
    color: rgb(255 255 255);
}

.navbar-light .navbar-toggler {
    color: rgba(0,0,0,.5);
    border : none !important; 
}
.navbar-nav{
  width: 100%;
}

.flags{
  width: 100%;
  text-align: right;

}

.flags img{
  width: 22px;
  margin: 0rem .5rem;
}

.flags img:hover{
  cursor: pointer;
}

</style>
