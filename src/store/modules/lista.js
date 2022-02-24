
const state = {
		//contador: 0,
		series: [],
			nuevaSerie: '',
		
	}

const mutations = {

	AGREGAR_SERIE(state, payload){
		//console.log(payload, "payload")
		const serie = {
			nombre: payload.nombre,
			estado: false				
		}
			state.series.push(serie)
			state.nuevaSerie = "";
			console.log(state.series)
			console.log(state.nuevaSerie)
			//localStorage.setItem('lasSeries', JSON.stringify('localStorage/getStateDef'))
		},

	COLORES_ETIQUETAS(state, index){
		state.series[index].estado = true
			//localStorage.setItem('lasSeries', JSON.stringify('localStorage/getStateDef'))
	},

	BORRAR_TODO(state, index){
		state.series.splice(index, 1)
			//localStorage.setItem('lasSeries', JSON.stringify('localStorage/getStateDef'))
	},

	TODO_VISTO(state){
		state.series.forEach((serie) => serie.estado = true)
			//localStorage.setItem('lasSeries', JSON.stringify('localStorage/getStateDef'))
	},
}

const actions={

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
		

	async colorDefinitivo({commit}, index){
		await new Promise( (aceptar)=>{   
			setTimeout( ()=>{
				aceptar()
			},50)
		})
		commit('TODO_VISTO', index)       
	},
}

const	getters= {

	estado: state => state.series.filter(series => series.estado),
		
	estadoDefinitivo: (state, getters) => getters.estado.length,

	title: state => state.title,

		/*series: (state, rootGetters, root) =>{
			console.log(root['localStorage'], rootGetters)
			return root['localStorage/getItem', "lasSeries"]
			
		}*/
}

	export default {
		namespaced: true,
		state,
		getters,
		actions,
		mutations
	}
