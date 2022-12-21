<script setup lang="ts">
	import { useStore } from '../store';
	import {GameCenter} from '../models/gameCenter.model'

	useHead({
		title: '',
	});

	const store = useStore();
	const { t } = useI18n();
	onMounted( async() => {
		 await store.getGameCenters()
		 await store.getGivenGameCenter()
		 store.pcs = []
	})
	const center = computed(() => {
		return GameCenter.serialize(store.gameCenter)
	})
</script>

<template>
	<transition name="bounce" mode="out-in" appear>
		<div class="px-10 p-5">
			<h1 class="text-4xl font-medium">{{center.name}}</h1>
			<div class="grid justify-center mt-10 gap-10 grid-cols-3">
				<router-link :to="{ path: `/zone/${zone.name}`, query: {id: zone.uuid}, props: {id: zone.uuid}}" v-for="(zone, index) in center.zones" :key="index">
					<div class="h-[400px] text-2xl overflow-auto">
						<h4 class="text-2xl font-medium sticky">
							{{zone.name}}
						</h4>
						<computer-grid class="my-3 pr-[5px]" :big="false" :pcs="zone.computers"/>
					</div>
				</router-link>
			</div>
		</div>
	</transition>
</template>

<route lang="yaml">
name: home
</route>

<style scoped>
	.bounce-enter-active {
		animation: bounce-in 0.5s;
	}
	.bounce-leave-active {
		animation: bounce-in 0.5s ease-in-out;
		animation-direction: reverse;
	}

	@keyframes bounce-in {
		0% {
			transform: scale(2);
		}
		100% {
			transform: scale(1);
		}
	}

	/* width */
	::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #9475ed;
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #6d52b8d8;
	}
</style>
