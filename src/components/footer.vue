<template>
  <div class="footer">
    <div class="copyright">
      <div ><a href="/"><img height="35px" src="../assets/newpic/logo1.png"/></a> &copy; {{new Date().getFullYear()}}</div>
    </div>
    
  </div>
</template>

<script>

export default {

}
</script>


<style scoped>
.footer{
 
  padding-top: 7.5rem;
}
.copyright{
  position: relative;
  bottom: -100%;
  color: #ffffff;
  background: #2a3252d6;

}

</style>
