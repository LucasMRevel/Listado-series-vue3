export default {
	namespaced: true,
	state: {
		//contador: 0,
		series: [],
			nuevaSerie: ''
		
	},

	mutations: {

		AGREGAR_SERIE(state, payload){
			console.log(payload, "payload")
			const serie = {
				nombre: payload.nombre,
				estado: false
				
			}
			state.series.push(serie)
			state.nuevaSerie = '';
			localStorage.setItem('series', JSON.stringify(state.series))
			console.log(state.series)
		},

		COLORES_ETIQUETAS(state, index){
			state.series[index].estado = true
			localStorage.setItem('series', JSON.stringify(state.series))
		},

		BORRAR_TODO(state, index){
			state.series.splice(index, 1)
			localStorage.setItem('series', JSON.stringify(state.series))
		},

		GUARDAR_DATOS(state){
			let guardarr = JSON.parse(localStorage.getItem('series'));
			if (guardarr === null){
				state.series = [];
			}
			else{
				state.series = guardarr;
			}
		}
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
				},100)
			})
			commit('AGREGAR_SERIE', payload)       
		},

		async colores({commit}, index){
			commit('COLORES_ETIQUETAS', index)
		},

	},
	getters: {

	},

}