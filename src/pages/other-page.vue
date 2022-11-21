<script setup lang="ts">
	import { reactive } from 'vue';
	import BackIcon from '~icons/pepicons/angle-left';
	useHead({
		title: 'Other Pages',
	});
	const test = reactive({
		count: 0,
	});
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
			<div class="text-3xl mt-8 font-bold">Test Name Zone</div>
		</transition>
		<transition name="bounce" appear>
			<div class="h-[200px] bg-slate-50 mt-10">
				<div
					class="border-[#9475ED] border-2 p-2 flex w-fit rounded-[10px] absolute"
				>
					<img src="../assets/pc_icon.svg" />
					<div
						class="text-white text-xs bg-[#9475ED] h-[1.1rem] w-[1.1rem] rounded-full flex justify-center absolute bottom-[-2px] right-[-2px]"
					>
						12
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: other-page
</route>

<style>
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
</style>
