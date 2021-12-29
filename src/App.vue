<template>
  <titulo></titulo>
  <lista/>
</template>

<script>
import Lista from './components/Lista.vue'
import Titulo from './components/Titulo.vue'

export default {
  name: 'App',
  components: {
    Titulo,
    Lista

  }
}
</script>
