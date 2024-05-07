<script>
import LifeCycle from './components/LifeCycle.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle
  }
}
</script>

<template>
  <div>
    <PrimeiroComponente />
    <LifeCycle />
  </div>
</template>