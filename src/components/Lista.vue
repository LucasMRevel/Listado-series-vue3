<template>

  <div class="bg-dark p-2 text-dark bg-opacity-75">
  <h3 class="text-white">Agregar series:</h3>
  <input type="text" placeholder="Escriba una serie" v-model="nuevaSerie" @keypress.enter="nueva_serie">
  <button type="button" class="btn btn-outline-success" @click="nueva_serie(nuevaSerie)"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </svg> Agregar</button>
    <br>
    <div v-if="series.length >= 1">
      <br>
      <h5 class="text-white">Se agregaron: {{series.length}} series</h5>
    </div>
  <div class="list-group">
    <div class= "text-white" v-if="series.length === 0">
      <br>
      <h5>No hay series para mostrar</h5>
    </div>
    <div class="text-center" v-if="estado2 >= 1">
      <h3 class="text-white">Series vistas: {{estado2}}</h3>
    </div>
    <li v-for="(serie, index) in series" :key ="serie"
      class="d-flex justify-content-between align-items-center" >
        <div role="alert" :class="['alert', serie.estado ? 'alert-success' : 'alert-danger']">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{index}}-{{serie.nombre}}</h5>
          </div>
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-outline-success" @click="colores(index)"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>
            </button>
            <button type="button" class="btn btn-outline-danger" @click="borrar_todo(index)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
            </button>
          </div>
        </div>
    </li>
  </div>
	<br>
  <br>
  </div>
</template>

<script>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'
export default {
  name: 'Lista',

  setup(){
    const $store = useStore();

    const nuevaSerie = ref("");


      const borrar_todo = async (index) =>{
        $store.dispatch ('lista/borrar_todo',{ 
          index
        })
      }
            
      const nueva_serie = async (nombre) =>{  // NO OLVIDARRRRRR  
        $store.dispatch ('lista/nueva_serie',{
          nombre
        }) 
      }

      const colores = async (index) =>{
        await new Promise( (aceptar)=>{   
				setTimeout( ()=>{
					aceptar()
				},100)
			})
        $store.dispatch ('lista/colores', index)
      }

      //let title = computed(() => $store.getters["lista/title"]) //NO OLVIDARRRRRR

      //let estado = computed(() => $store.getters["lista/estado"])

      let estado2 = computed(() => $store.getters["lista/estado2"])

    let series = $store.state.lista.series  //NO OLVIDARRRRRR

    return { series, nuevaSerie, nueva_serie, borrar_todo, colores, estado2} 
    

  },
     
}

</script>

<style>
</style>