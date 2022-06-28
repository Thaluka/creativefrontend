<template>
<div class="container-fluid">
      <div class="container">
         <HeaderView/>
         <div class="container-fluid m-1">
            <div class="text-center">
                <h2>Websites</h2>
            </div>
              <div class="row justify-content-center">
                <div v-for="website in websites" :key="website.id" class="card col-lg-4 col-md-4 col-sm-8 col-xs-12 border-1 border-white m-5 shadow-lg p-3">
                   <img :src="'http://127.0.0.1:8000/images/'+ website.image" class="card-img-top img-thumbnail mx-auto d-block border-0" style="width:200px; height:200px" alt="...">
                   <div class="card-body">
                     <h5 class="card-title">{{website.name}}</h5>
                     <p class="card-text">{{website.discription}}</p>
                     <button v-on:click="wedDetails(website)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Subscribe</button>
                     <ViewWeb v-bind:web="selectedWebsite"/>

                   </div>
                </div>
                <hr/>
                
                <div class="row justify-content-center">
         
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 border-1 border-white m-1 shadow p-3">
                     <img src="../assets/logo.jpg" class="card-img-top" alt="...">
                     <div class="card-body">
                       <h5 class="card-title">Card title</h5>
                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <a href="#" class="btn btn-primary">Go somewhere</a>
                     </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 border-1 border-white m-1 shadow p-3">
                     <img src="../assets/logo.jpg" class="card-img-top" alt="...">
                     <div class="card-body">
                       <h5 class="card-title">Card title</h5>
                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <a href="#" class="btn btn-primary">Go somewhere</a>
                     </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 border-1 border-white m-1 shadow p-3">
                     <img src="../assets/logo.jpg" class="card-img-top" alt="...">
                     <div class="card-body">
                       <h5 class="card-title">Card title</h5>
                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <a href="#" class="btn btn-primary">Go somewhere</a>
                     </div>
                  </div>
                  
                  
                </div>
             </div>
         </div>
      </div>
</div>

<h1>Home</h1>
</template>
<script>
import HeaderView from './HeaderView.vue'
import ViewWeb from './ViewWeb.vue'

export default{
    name:'HomePage',
    components:{
          HeaderView,
          ViewWeb
    },
    data(){
      return{
        websites:[],
        selectedWebsite:{},
      }
    },
    methods:{
        wedDetails(data){
        this.selectedWebsite=data;

    }
    },

    
    mounted()
        {
          fetch("http://127.0.0.1:8000/api/getwebsitedata")
          .then(res => res.json())
          .then(data => this.websites = data)
          .catch(err => console.log(err.message))
          
        }

}

</script>