<script>
import LifeCycle from './components/LifeCycle.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import Pessoa from './components/Pessoa.vue'
import Picture from './components/Picture.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Picture
  }
}
</script>

<template>
  <div>
    <div class="foto-texto">
      <Picture class="picture"/>
      <PrimeiroComponente />
    </div>
    <Pessoa />
  </div>
</template>
<style>
  .foto-texto{
    display: flex;
    flex-direction: row;
  }
  .picture{
    margin-right: 10px;
  }
</style>