
<script>

export default{
     data(){
        return{
           logo: "/logo.png"
        }
     }
}


</script>


<template>
    <div class="logoTipo">
        <img :src="logo" alt="imagem logo"/>
    </div>
</template>


<style>
  .logoTipo{
    display: flex;
    justify-content: center;
  }
</style>