<template>
    <div class="contact" id="contact_us">
        <div class="container">
            <div class="label" v-lazyanimationx>
                <div class="line"></div>
                <div class="title">
                    <h1 v-if="lang=='tr'"> Bize Ulaşın</h1>
                    <h1 v-else> Contact Us</h1>
                </div>
            </div>
            <div class="card mb-3" v-lazyanimationxl>
                <div class="row g-0" >
                    <div class="col-md-6 col-sm-12 col-xs-12" >
                        <div class="card-body">
                            <div class="contact-data ">
                                <div  v-if="modal_show && lang=='tr'" class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Aferin, </strong> Mesajınız mükemmel bir şekilde gönderildi.
                                <button type="button" class="btn-close" @click="ok" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                <div v-if="modal_show && lang=='en'" class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Well Done, </strong> You message sent perfectly.
                                <button type="button" class="btn-close" @click="ok" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                <form  >
                                    <div>
                                        <label for="exampleFormControlTextarea1" class="form-label" v-if="lang=='tr'">::: İsim</label>
                                        <label for="exampleFormControlTextarea1" class="form-label" v-else>::: Name</label>
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text" id="inputGroup-sizing-sm"><i class="fas fa-user"></i></span>
                                            <input v-if="lang=='tr'" type="text" class="form-control input-sty"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required v-model="data.userNameTr"  placeholder="Adınız ..." >
                                            <input v-else type="text" class="form-control input-sty"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required v-model="data.userName" placeholder="put your name ...">
                                        </div>
                                        <p class="text-danger" v-text="error[0].userError"></p>
                                    </div>
                                    <div>
                                        <label for="exampleFormControlTextarea1" class="form-label" v-if="lang=='tr'">::: E-posta</label>
                                        <label for="exampleFormControlTextarea1" class="form-label" v-else>::: Email</label>
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text" id="inputGroup-sizing-sm"><i class="fas fa-at"></i></span>
                                            <input v-if="lang=='tr'" type="email" class="form-control input-sty" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="data.emailTr" placeholder="E-posta adresiniz ..." required>
                                            <input v-else type="email" class="form-control input-sty" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="data.email" required placeholder="your email ..." >
                                        </div> 
                                        <p class="text-danger" v-text="error[1].emailError"></p>  
                                    </div>
                                    <div>
                                        <label for="exampleFormControlTextarea1" class="form-label" v-if="lang=='tr'">::: İleti</label>
                                        <label for="exampleFormControlTextarea1" class="form-label" v-else>::: Message</label>
                                        <div class="input-group input-group-sm mb-3">
                                            <span class="input-group-text" id="inputGroup-sizing-sm"><i class="fas fa-envelope"></i></span>
                                            <input v-if="lang=='tr'" type="text" class="form-control input-sty" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required v-model="data.messageTr" placeholder="Mesajın ...">
                                            <input v-else type="text" class="form-control input-sty" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required v-model="data.message" placeholder="your message ...">
                                        </div>
                                        <p class="text-danger" v-text="error[2].messageError"></p>
                                    </div>
                                    <div>
                                        <button v-if="lang=='tr'" type="button" class="btn btn-secondary" @click="errorform"  >göndermek</button>
                                        <button v-else type="button" class="btn btn-secondary" @click="errorform"  >Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12" v-lazyanimationx style="transition-delay:.5s ;">
                        <div class="diagram">
                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.1279907857797!2d32.99812265483652!3d40.13943263753042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408211d353ea81d3%3A0xa7d581b67e5b5e79!2sTurkey%20Air%20Traffic%20Control%20Center!5e0!3m2!1sar!2s!4v1606910965030!5m2!1sar!2s" width="100%" height="100%" frameborder="0" style="border:0; "  aria-hidden="false" ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import Firebase from 'firebase'

let config={
      apiKey: "AIzaSyBO3D-dCZgZ0a_ZJRQiBltpgcevQCYAFR0",
      authDomain: "solar-21bd8.firebaseapp.com",
      databaseURL: "https://solar-21bd8-default-rtdb.firebaseio.com",
      projectId: "solar-21bd8",
      storageBucket: "solar-21bd8.appspot.com",
      messagingSenderId: "412258145980",
      appId: "1:412258145980:web:37630eaaad2f0c290a62b9",
      measurementId: "G-358H82YSX1"
}

let app=Firebase.initializeApp(config);
let db=app.database();
let textRef=db.ref('obj');

export default {
    name:'app',firebase:{
        obj:textRef
    },
    
    data(){
        return{
            data:{
                userName:"",
                email:"",
                message:"",
                userNameTr:"",
                emailTr:"",
                messageTr:"",
            },
            error:[
                {userError:'',status:false},
                {emailError:'',status:false},
                {messageError:'',status:false}
            ],
            btn_able:false,
            modal_show:false,
            emails:[],
        }

    },
    computed:{
    lang(){
      return this.$store.getters.getLang;
    },
    },
    watch:{
        'data.userName':function(val){
            if(val.length == 0){
            this.error[0].userError='The username must not be empty';
            this.error[0].status=false;
            }
            else if(val.length < 5   ){
                this.error[0].userError="The username must not be less then 5 letters";
                this.error[0].status=false
            }
            else if(val.length > 20  ){
                this.error[0].userError="The username must not be more then 20 letters";
                this.error[0].status=false
            }
            else if(! isNaN(val)){
                this.error[0].userError= "The username must be string";
                this.error[0].status=false
            }
            else{
                this.error[0].userError= "";
                this.error[0].status=true;

            }
            
        },
        /////////////////////////////////////////////////////////////////////////////////
        'data.userNameTr':function(val){
            if(val.length == 0){
            this.error[0].userError='Kullanıcı adı boş olmamalıdır';
            this.error[0].status=false;
            }
            else if(val.length < 5   ){
                this.error[0].userError="Kullanıcı adı 5 harften az olmamalıdır";
                this.error[0].status=false
            }
            else if(val.length > 20  ){
                this.error[0].userError="Kullanıcı adı 20 harften fazla olmamalıdır";
                this.error[0].status=false
            }
            else if(! isNaN(val)){
                this.error[0].userError= "Kullanıcı adı dize olmalıdır";
                this.error[0].status=false
            }
            else{
                this.error[0].userError= "";
                this.error[0].status=true;

            }
            
        },
        ////////////////////////////////////////////////////////////////////////////////////
        'data.email':function(val){
            if(! val){
                this.error[1].emailError='You must write the email';
                this.error[1].status=false
            }
            else if (! this.validEmail(val)) {
                this.error[1].emailError='You must write a correct email';
                this.error[1].status=false
            }
            else{
                this.error[1].emailError='';
                this.error[1].status=true;
            }
        },
        'data.message':function(val){
            if(! val){
                this.error[2].messageError='You must write a message';
                this.error[2].status=false
            }
            else{
                this.error[2].messageError='';
                this.error[2].status=true;
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////
        'data.emailTr':function(val){
        if(! val){
            this.error[1].emailError='E-postayı yazmalısın';
            this.error[1].status=false
        }
        else if (! this.validEmail(val)) {
            this.error[1].emailError='Doğru bir e-posta yazmalısınız';
            this.error[1].status=false
        }
        else{
            this.error[1].emailError='';
            this.error[1].status=true;
        }
        },
        ////////////////////////////////////////////////////////////////////////////////////
        'data.messageTr':function(val){
            if(! val){
                this.error[2].messageError='Bir mesaj yazmalısın';
                this.error[2].status=false
            }
            else{
                this.error[2].messageError='';
                this.error[2].status=true;
            }
            },
        ////////////////////////////////////////////////////////////////////////////////////
    },
    methods:{
        ok(){
          this.modal_show=false 
        },
        errorform:function(){
            let status=false;
            this.error.forEach(element => {
                if(element.status == true){
                    status=true;
                    }else{
                    status=false; 
                    }
            });
            if(status){
                textRef.push(this.data);
                this.error=[
                            {userError:'',status:false},
                            {emailError:'',status:false},
                            {messageError:'',status:false}
                ];
                this.modal_show=true;
            }
        }, 
        validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        },
        submitData(){
            
        }
    }
}
</script>

<style  scoped>
.modal{
    display: inline-block;
}
.modal-header , .modal-footer{
    border: none;
    
}

.modal-header{
    margin: 0 auto;
}

.card{
    width: 60%;
    background: #f2f2f2;
    border: none;
}

.contact{
    padding: 2.5rem 0rem;
    text-align: left;
}

.diagram{
    position: relative;
    left: 50%;
    top: 20%;
    width: 200%;
    height: 100%;
}

.contact-data{
    width: 170%;
    padding: 1rem 0rem;
}
form > div{
     padding: .5rem 1rem;
}

form > div label{
    color: #272a56;
    font-weight: bold;
}

.label{
     padding: 2rem 0;
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

.input-sty , .input-group-text{
    border: none;
    border-bottom: 2px solid #999696;
    background: none;
    border-radius: 0;
    color:#999696 ;
}

.btn-secondary{
    background-color: #2a3252d6 ;
    border-color: #2a3252d6 ;
}

.btn-secondary:hover {
    background-color: #272a56;
    border-color: #272a56;
}

@media (min-width:0) and (max-width:767px) {  
  .card{
    width: 100% !important;
  }  
  .contact-data {
    width: 100% !important; 
  }
  .diagram{
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-top: 4px solid #fff;
  }
}

</style>

