<script setup lang="ts">
	import BackIcon from '~icons/pepicons/angle-left';
	useHead({
		title: 'Other Pages',
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
	
		<transition  name="bounce" appear>
			<ComputerGrid class="my-10" :big="true"/>
		</transition>
	</div>
</template>

<route lang="yaml">
name: other-page
</route>

<style scoped>
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
