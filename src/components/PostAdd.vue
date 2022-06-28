<template>
<div class="container-fluid">
      <div class="container">
         <HeaderView/>
         <div class="container-fluid m-1">
            
            <div class="row justify-content-center">
                <div>
                     <h4 class="card-title">Add Post</h4>
                </div>
                <div class="card col-lg-8 col-md-8 col-sm-410 col-xs-12  border-1 border-white m-5 shadow-lg p-3">
                    <div>
                         <h5 class="card-title">Write Post Here</h5>
                    </div>
                    <div>
                        <div class="mb-3 mt-3">
                             
                             <input type="text" v-model="title" class="form-control" placeholder="Enter post title here">
                        </div>
                        <div class="mb-3 mt-3">
                             
                             <textarea class="form-control" v-model="description" placeholder="Enter post description here"  rows="3"></textarea>
                        </div>
                        <div class="form-group mb-3 mt-3">
                             <label for="file">input image</label>
                             <input type="file" @change="imgSelect"  class="form-control-file">
                        </div>
                        <div class="mb-3 mt-3">
                             
                             <input type="text" v-model="name" class="form-control" placeholder="Enter your name here">
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-10">
                                 <button type="submit" v-on:click="add" class="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
         </div>
      </div>
</div>

</template>

<style>
.form-control {
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    border-color: #0d6efd !important;
    border-style: solid !important;
    border-width:  1px  !important;
    padding: 0px !important;
    color: #495057;
    height: auto;
    border-radius: 0;
    background-color: #fff;
    background-clip: padding-box;
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #fff;
    outline: 0;
    box-shadow: none;
}

</style>
<script>
import axios from 'axios'
export default{

    name:'PostAdd',
    data()
    {
      return{
          title:'',
          description:'',
          name:'',
          image:'',
          
      }
    },
    methods:{
    imgSelect(e){
    this.image=e.target.files[0];
    
    },
       add(){
      
          axios.post("http://127.0.0.1:8000/api/addPost",{
             title:this.title,
             description:this.description,
             name:this.name,
             image:this.image,
          });
          
       }
    }
}
</script>