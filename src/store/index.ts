import { defineStore } from 'pinia';

export const useStore = defineStore('gameCenter', {
	state: () => ({
		count: 0,
	}),
});
