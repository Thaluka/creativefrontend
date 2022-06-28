<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{web.name}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {{web.discription}}
        <hr/>
        <div class="form-group row">
             <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
             <div class="col-sm-10">
                 <input type="text" v-model="email" class="form-control" id="inputEmail3">
             </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button v-on:click="add(web.id)" type="button" class="btn btn-primary">Subscribe Now</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default{
    name:'ViewWeb',
    props:['web'],
    data()
    {
      return{
          email:'',
          
      }
    },
    methods:{
       add(data){
          this.webId=data;
          axios.post("http://127.0.0.1:8000/api/addSubscribe",{
             email:this.email,
             webId:this.webId,
          });
          
       }
    }
}
</script>