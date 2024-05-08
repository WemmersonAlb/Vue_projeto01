<script>
import LifeCycle from './components/LifeCycle.vue'
import PessoaVue from './components/Pessoa.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import Pessoa from './components/Pessoa.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa
  }
}
</script>

<template>
  <div>
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa />
  </div>
</template>