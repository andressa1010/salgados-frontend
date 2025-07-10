
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const salgado = ref(null)

const nome = ref('')
const email = ref('')
const celular = ref('')
const endereco = ref('')
const dataHora = ref('')

onMounted(async () => {
  const id = route.params.id
  const resposta = await fetch(`https://api-encomendas-salgados.onrender.com/api/salgados`)
  const lista = await resposta.json()
  salgado.value = lista.find(s => s.id == id)
})

const fazerEncomenda = async () => {
  const pedido = {
    nome: nome.value,
    email: email.value,
    celular: celular.value,
    endereco: endereco.value,
    dataHora: dataHora.value,
    salgadosId: salgado.value.id
  }

  const resposta = await fetch('https://api-encomendas-salgados.onrender.com/api/encomendas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pedido)
  })

  if (resposta.ok) {
    alert('Pedido enviado com sucesso!')
    router.push('/')
  } else {
    alert('Erro ao enviar pedido.')
  }
}
</script>

<template>
  <div v-if="salgado">
    <h2>Encomendar: {{ salgado.nome }}</h2>
    <img :src="`https://api-encomendas-salgados.onrender.com${salgado.imagem}`" alt="Imagem do salgado" width="200" />

    <form @submit.prevent="fazerEncomenda">
      <input v-model="nome" placeholder="Seu nome" required />
      <input v-model="email" placeholder="Seu email" required />
      <input v-model="celular" placeholder="Celular" required />
      <input v-model="endereco" placeholder="Endereço" required />
      <input v-model="dataHora" type="datetime-local" required />

      <button type="submit">Enviar Pedido</button>
      <router-link to="/" class="voltar-button">
           Voltar
      </router-link>
    </form>
  </div>
</template>

<style scoped>
div {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: #fff5f0;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Arial', sans-serif;
}

h2 {
  color: #d35400;
  margin-bottom: 20px;
}

img {
  margin-bottom: 20px;
  border-radius: 10px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #e67e22;
  outline: none;
}

button {
  padding: 12px;
  background-color: #e67e22;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #cf711f;
}

.voltar-button{
  text-decoration: none;
   padding: 12px;
  background-color: #e67e22;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
