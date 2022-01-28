export default {
	namespaced: true,
	state: {
		//contador: 0,
		series: [],
			nuevaSerie: '',
		
	},

	mutations: {

		AGREGAR_SERIE(state, payload){
			console.log(payload, "payload")
			const serie = {
				nombre: payload.nombre,
				estado: false				
			}
			state.series.push(serie)
			localStorage.setItem("guardarr", JSON.stringify(state.series))
			state.nuevaSerie = "";
			console.log(state.series)
			console.log(state.nuevaSerie)
		},

		COLORES_ETIQUETAS(state, index){
			state.series[index].estado = true
			localStorage.setItem("guardarr", JSON.stringify(state.series))
		},

		BORRAR_TODO(state, index){
			state.series.splice(index, 1)
			localStorage.setItem("guardarr", JSON.stringify(state.series))
		},

		TODO_VISTO(state){
			state.series.forEach((serie) => serie.estado = true)
		},

		GUARDAR_DATOS(state){
			let guardarr = localStorage.getItem("guardarr");
			if (guardarr){
				state.series = JSON.parse(guardarr)
				return;
			}
		},
	},

	actions:{

		async borrar_todo({commit}, index){
			await new Promise( (cancelar)=>{   
				setTimeout( ()=>{
					cancelar()
				},100)
			}) 
			commit('BORRAR_TODO', index)
		},

		async nueva_serie({commit}, payload){
			await new Promise( (aceptar)=>{   
				setTimeout( ()=>{
					aceptar()
				},50)
			})
			commit('AGREGAR_SERIE', payload)       
		},

		async colores({commit}, index){
			commit('COLORES_ETIQUETAS', index)
		},
		

		async color2({commit}, index){
			await new Promise( (aceptar)=>{   
				setTimeout( ()=>{
					aceptar()
				},50)
			})
			commit('TODO_VISTO', index)       
		},

	},
	getters: {

		estado: state => state.series.filter(series => series.estado),
		
		estado2: (state, getters) => getters.estado.length
	

    },

}