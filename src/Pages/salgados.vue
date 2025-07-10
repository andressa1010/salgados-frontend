<script>
  
import Logo from '../components/logo.vue';
import LogoTipo from '../components/logoTipo.vue';

</script>


<script setup>
import { ref, onMounted } from 'vue';

const salgados = ref([])
const carregado = ref(true)

const buscarSalgados = async ()=>{
   try{
      const resposta = await fetch("https://api-encomendas-salgados.onrender.com/api/salgados")
      const dados = await resposta.json()
      salgados.value = dados
   }
   catch(error){
      console.log("Erro ao buscar salgados!")
   }
   finally{
     carregado.value = false
   }
}

onMounted(()=>{
    buscarSalgados()
})




</script>

<template>
    <Logo/>
    <LogoTipo/>
    
    <div class="container-salgados">
        <div v-for="salgado in salgados" :key="salgado.id" class="salgado">
            <h2> {{salgado.nome }}  </h2>
            <img :src="`https://api-encomendas-salgados.onrender.com/${salgado.imagem}`" alt="imagem salgados"/>
            <p> {{salgado.preco }}  </p>
            <p>  {{ salgado.descricao }} </p>
             <router-link :to="`/encomendar/${salgado.id}`" class="button-link">
        <button class="btn-encomendar">Encomendar</button>
      </router-link>
        </div>
    </div>
</template>

<style>
.container-salgados{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
}

.salgado{
    margin: 10px;
    padding: 10px;
    width: 300px;
    text-align:center;
}

img{
    max-width: 100%;
    height: auto;
    border-radius: 20px;
}

h2{
    color: #FFA500;
}

p{
    color: #ffffff;
    
}

.btn-encomendar {
  margin: 10px;
  background: linear-gradient(135deg, #ff8c00, #ff4e00);
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.btn-encomendar:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

@media (max-width: 432px){
    .container-salgados{
        display: flex;
        justify-content: center;
    }
}

</style>