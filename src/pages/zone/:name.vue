<script setup lang="ts">
	import { useStore } from '../../store';
	import { useRoute } from '@vue-router';
	import { PC } from '../../models/gameCenter.model';
	import BackIcon from '~icons/pepicons/angle-left';

	const store = useStore();
	const route = useRoute();
	let zoneName = route.params.name;

	onMounted(async () => {
		await store.getPcs(route.params.name);
	});

	useHead({
		title: zoneName,
	});

	const pcs = computed(() => {
		return PC.serializeList(store.pcs);
	});

	const popupTrigger = reactive({open: false})

	const openPopUp = () => {
		popupTrigger.open = true
	}
	
	const closePopUp = () => {
		popupTrigger.open = false
	}
</script>

<template>
	<div class="flex flex-col px-10">
		<router-link
			:to="{ name: 'home' }"
			class="mt-5 flex items-center text-sm"
		>
			<BackIcon style="font-size: 1em" />
			<p>Назад</p>
		</router-link>
		<transition name="slide-fade" appear>
			<div class="text-3xl mt-8 font-bold">{{ zoneName }} зона</div>
		</transition>

		<transition name="bounce" appear :delay="1000" v-cloak>
			<ComputerGrid :big="true" :pcs="pcs" @open-popup="openPopUp" class="mt-10"/>
		</transition>
		<Popup v-if="popupTrigger.open" @close-popup="closePopUp"/>
	</div>
</template>

<route lang="yaml">
name: other-page
</route>

<style scoped>
	[v-cloak] {
		display: none;
	}
	.slide-fade-enter-active {
		transition: all 0.3s ease-out;
	}

	.slide-fade-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}

	.slide-fade-enter-from,
	.slide-fade-leave-to {
		transform: translateX(-100px);
		opacity: 0;
	}

	.bounce-enter-active {
		animation: bounce-in 0.5s;
	}
	.bounce-leave-active {
		animation: bounce-in 0.4s ease-in-out;
	}

	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	/* width */
	::-webkit-scrollbar {
		width: 4px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
		margin-left: 100px;
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
