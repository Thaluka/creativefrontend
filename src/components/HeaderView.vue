<template>
        <nav class="navbar border-1 border-white m-5 shadow p-3 bg-body rounded">
              <a class="navbar-brand" href="#">
                <img src="../assets/logo.jpg" alt="" class="mx-auto d-block float-left">
              </a>
              <div class="ml-auto">
                <router-link to="/PostAdd"><button type="button" class="btn btn-primary">Add Post +</button></router-link>
              </div>
        </nav>
        <hr/>
</template>
<script>
 export default{
    name:'HeaderView'
}
</script>
<style>
.nav{
    background-color: #fff;
}
img{
   height: 50px;
   width: 200px;
}

</style>