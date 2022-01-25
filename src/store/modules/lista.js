export default {
	namespaced: true,
	state: {
		//contador: 0,
		series: [],
			nuevaSerie: '',
			title: 'llamado por getterrrrrrr'
		
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
			state.nuevaSerie = '';
			console.log(state.series)
		},

		COLORES_ETIQUETAS(state, index){
			state.series[index].estado = true
			localStorage.setItem("guardarr", JSON.stringify(state.series))
		},

		BORRAR_TODO(state, index){
			state.series.splice(index, 1)
			localStorage.setItem("guardarr", JSON.stringify(state.series))
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
				},0)
			})
			commit('AGREGAR_SERIE', payload)       
		},

		async colores({commit}, index){
			commit('COLORES_ETIQUETAS', index)
		},


		/*async local ({commit}) {
      commit('GUARDAR_DATOS');
    },*/
	},
	getters: {

		/*getVista: state => { return state.series.filter(real => real.estado) },*/
			
		title: state => state.series.nombre,

		estado: state => state.series.filter(series => series.estado),
		
		estado2: (state, getters) => getters.estado.length
	

    },

}