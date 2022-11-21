<script setup lang="ts">
	import { reactive, ref } from 'vue';
	import { useStore } from '@/store';
	useHead({
		title: 'Vitailse | Opinionated vite starter template',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<transition name="bounce" appear>
		<div class="p-5">
			<h1 class="text-4xl font-medium">Test Game Center Name</h1>
			<div class="grid justify-center mt-10 gap-2 grid-cols-3">
				<router-link :to="{ name: 'other-page' }">
					<div class="bg-slate-50 h-[400px] text-2xl">
						<h4 class="text-2xl font-medium">Test Zone Name</h4>
						<div class="mt-4">
							<div class="border-[#9475ED] border-2 p-2 flex w-fit rounded-[10px] absolute">
								<img src="../assets/pc_icon.svg"/>
								<div class="text-white text-xs bg-[#9475ED] h-[1.1rem] w-[1.1rem] rounded-full flex justify-center absolute bottom-[-2px] right-[-2px]">12</div>
							</div>
						</div>
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
</style>
