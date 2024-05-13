<script>
import LifeCycle from './components/LifeCycle.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import Pessoa from './components/Pessoa.vue'
import Picture from './components/Picture.vue'
import Formulario from './components/Formulario.vue'
import MultiplosEventos from './components/MultiplosEventos.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Picture,
    Formulario,
    MultiplosEventos
  }
}
</script>

<template>
  <div class="div-mae">
    <div class="foto-texto">
      <Picture class="picture"/>
      <PrimeiroComponente />
    </div>
    <Pessoa />
    <Formulario />
    <MultiplosEventos />
  </div>
</template>
<style scoped>
  .foto-texto{
    display: flex;
    flex-direction: row;
  }
  .picture{
    margin-right: 10px;
  }
  .div-mae{
    padding:100px 0;
  }
</style>