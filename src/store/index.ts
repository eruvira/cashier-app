import { defineStore } from 'pinia';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import http from '../http-common'

export const useStore = defineStore('gameCenter', {
	state: () => ({
		gameCenters: [],
	}),

	getters:{
		givenGameCenter: ((state) => {
			return state.gameCenters.find(x => x['uuid'] == "255324da-c93f-4faf-9041-e2b901da057b") || {}
		})
	},

	actions: {
		setGameCenters(centers: any){
			this.$patch({
				gameCenters: [...centers]
			})
		},

		async getGameCenters(){
			await http.get('partners/game-centers/')
			.then((res) => {
				this.setGameCenters(res.data.results)
				
			})
			.catch((error:Error) => {
				throw new Error(error.message)
			})
		},

		async getZonePC(zone: String){
			const response = await http.get(`partners/game-centers/255324da-c93f-4faf-9041-e2b901da057b/zones/${zone}/computers/`)
			return response.data
		},

		getGivenGameCenter(){
			let currentGameCenter = this.gameCenters.find(x => x['uuid'] == "255324da-c93f-4faf-9041-e2b901da057b") || {}
			let currentGameCenterZones = currentGameCenter['zones']
			let zonesArray = []
			currentGameCenterZones.forEach((zone: String) => {
				let temp = {
					name: zone,
					computers: this.getZonePC(zone)
				}
				zonesArray.push(temp)
			});
			currentGameCenter['zones'] = zonesArray
		}
	}
});
