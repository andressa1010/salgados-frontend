
<script>
  export default {
     data(){
        return{
            imagem:"/coxinha.png",
            texto:"Crocante por fora, cremosa por dentro! A clássica coxinha que conquista todo mundo.",
            imagemBolinho:"/bolinho.png",
            textoQueijo:"Queijo derretendo a cada mordida! O bolinho de queijo perfeito para quem ama sabor e aconchego",
            imagemChurros:"/churros.png",
            textoChurros:"Doce, macio e recheado de amor! Churros irresistíveis com aquele toque especial de canela e doce de leite.",
            textoCardapio:"Escolha seu sabor favorito e faça sua encomenda!",
            textoParagrafo:"Delícias feitas com carinho, prontas para conquistar seu paladar!"
        }
     }
  }
</script>

<template>
    <div class="container-conteudo">
        <p class="texto"> {{ texto }}</p>
       <img :src="imagem" alt="imagem coxinha" class="img-coxinha"/>
       
    </div>

    <div class="container-bolinho">
        <img :src="imagemBolinho" alt="imagem Bolinho de Queijo" class="img-bolinho" />
         <p class="texto">{{ textoQueijo }}  </p>
    </div>

    <div class="container-churros">
         <p class="texto">  {{ textoChurros }}</p>
        <img :src="imagemChurros" alt="imagem churros" class="img-churros"/>
       
    </div>

    <div class="texto-cardapio">
        <h2> {{ textoCardapio }} </h2>
    </div>
    <div class="texto-paragrafo">
        <p> {{ textoParagrafo }} </p>
    </div>
</template>


<style>
   .container-conteudo, .container-bolinho, .container-churros{
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .texto{
    max-width: 600px;
    font-size: 30px;
    color: #FFA500;
   }

   .img-coxinha, .img-bolinho, .img-churros{
     width: 500px;
   }

   .texto-cardapio{
    display: flex;
    justify-content: center;
   }

   .texto-cardapio h2{
     font-size: 40px;
     color: #FFA500;
   }

   .texto-paragrafo{
    display: flex;
    justify-content: center;
   }

   .texto-paragrafo p{
     color: #ffffff;
     font-size: 20px;
   }

   @media (max-width: 432px){
      .img-coxinha, .img-bolinho, .img-churros{
     width: 200px;
   }

   .texto{
    max-width: 400px;
    font-size: 20px;
   }

   .texto-cardapio{
      display: flex;
      justify-content: center;
   }

   .texto-cardapio h2{
    font-size: 20px;
    text-align: center;
   }

   }
</style>