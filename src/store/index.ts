import { defineStore } from 'pinia';
import http from '../http-common'

export const useStore = defineStore('gameCenter', {
	state: () => ({
		gameCenters: [],
		gameCenter: {},
		pcs: []
	}),

	actions: {
		setGameCenters(centers: any){
			this.$patch({
				gameCenters: [...centers]
			})
		},

		setPcs(computers: any){
			this.$patch({
				pcs: [...computers]
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
			const response  = await http.get(`partners/game-centers/255324da-c93f-4faf-9041-e2b901da057b/zones/${zone}/computers/`)
			return response.data				
		},

		async getPcs(zone: String){
			await http.get(`partners/game-centers/255324da-c93f-4faf-9041-e2b901da057b/zones/${zone}/computers/`)
			.then((res) => {
				this.setPcs(res.data)
				
			})
			.catch((error:Error) => {
				throw new Error(error.message)
			})
		},

		async getGivenGameCenter(){
			let currentGameCenter = this.gameCenters.find(x => x['uuid'] == "255324da-c93f-4faf-9041-e2b901da057b") || {}
			let currentGameCenterZones = currentGameCenter.zones
			let zonesArray:Array<Object> = []
			for (const zone of currentGameCenterZones){
				let pcs = await this.getZonePC(zone)
				let temp = {
							name: zone,
							computers: pcs
						}
						zonesArray.push(temp)
			}
			currentGameCenter.zones = zonesArray
			this.$patch({
				gameCenter: currentGameCenter
			})
		}
	}
});
