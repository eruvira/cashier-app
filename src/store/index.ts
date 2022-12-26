import { defineStore } from 'pinia';
import http from '../http-common'

export const useStore = defineStore('gameCenter', {
	state: () => ({
		gameCenters: [],
		gameCenter: {},
		pcs: [],
		}),

	actions: {
		setGameCenters(centers: any){
			this.$patch({
				gameCenters: [...centers]
			})
		},

		setPcs(computers: any){
			this.$patch({
				pcs: [...computers],
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

		async getZonePC(zoneId: String){
			const response  = await http.get(`partners/game-centers/e7d22698-2e68-4d2a-8756-9d25abcb7c7f/zones/${zoneId}/computers/`)
			return response.data				
		},

		async getPcs(zone: String){
			await http.get(`partners/game-centers/e7d22698-2e68-4d2a-8756-9d25abcb7c7f/zones/${zone}/computers/`)
			.then((res) => {
				this.setPcs(res.data)
			})
			.catch((error:Error) => {
				throw new Error(error.message)
			})
		},

		async getGivenGameCenter(){
			let currentGameCenter = this.gameCenters.find(x => x['uuid'] == "e7d22698-2e68-4d2a-8756-9d25abcb7c7f") || {} as any
			let currentGameCenterZones = currentGameCenter.zones
			let zonesArray:Array<Object> = []
			for (const zone of currentGameCenterZones){
				let pcs = await this.getZonePC(zone.uuid)
				let temp = {
							uuid: zone.uuid,
							name: zone.name,
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
