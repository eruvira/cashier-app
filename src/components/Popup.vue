<template>
	<Transition name="modal">
		<div
			class="fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/20 flex items-center justify-center"
			@click="$emit('closePopup')"
		>
			<div class="bg-white rounded-[10px] p-5 w-1/2 h-1/2">
				<div class="flex items-center justify-between">
					<div class="text-2xl font-bold">Оплата</div>
					<MiClose style="font-size: 1.5em" class="cursor-pointer" />
				</div>
				<div v-if="loading.isLoading" class="flex items-center justify-center h-3/4">
					<svg
						class="spinner"
						width="65px"
						height="65px"
						viewBox="0 0 66 66"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							class="path"
							fill="none"
							stroke-width="6"
							stroke-linecap="round"
							cx="33"
							cy="33"
							r="30"
						></circle>
					</svg>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
	import MiClose from '~icons/mi/close';

	const loading = reactive({ isLoading: true });
</script>

<style scoped>
	.spinner {
		animation: rotator 1.4s linear infinite;
	}

	@keyframes rotator {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(270deg);
		}
	}
	.path {
		stroke-dasharray: 187;
		stroke-dashoffset: 0;
		transform-origin: center;
		animation: dash 1.4s ease-in-out infinite,
			colors 5.6s ease-in-out infinite;
	}

	@keyframes colors {
		0% {
			stroke: #9475ed;
		}
		25% {
			stroke: #9475ed;
		}
		50% {
			stroke: #9475ed;
		}
		75% {
			stroke: #9475ed;
		}
		100% {
			stroke: #9475ed;
		}
	}

	@keyframes dash {
		0% {
			stroke-dashoffset: 187;
		}
		50% {
			stroke-dashoffset: 47;
			transform: rotate(135deg);
		}
		100% {
			stroke-dashoffset: 187;
			transform: rotate(450deg);
		}
	}
</style>
