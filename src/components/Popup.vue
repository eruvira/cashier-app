<template>
	<div
		class="fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/20 flex items-center justify-center"
		@click="$emit('closePopup')"
	>
		<transition name="pop" appear>
			<div class="bg-white rounded-[10px] p-5 w-1/2 h-1/2">
				<div class="flex items-center justify-between">
					<div class="text-2xl font-bold">Оплата</div>
					<MiClose style="font-size: 1.5em" class="cursor-pointer" />
				</div>
				<div class="flex items-center justify-center h-3/4">
					<svg
						v-if="loading.isLoading"
						class="spinner"
						width="88px"
						height="88px"
						viewBox="0 0 66 66"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							class="path"
							fill="none"
							stroke-width="2.5"
							stroke-linecap="round"
							cx="33"
							cy="33"
							r="30"
						></circle>
					</svg>
					<div v-if="!loading.isLoading" class="check-icon">
						<span class="icon-line line-tip"></span>
						<span class="icon-line line-long"></span>
						<div class="icon-circle"></div>
						<div class="icon-fix"></div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
	import MiClose from '~icons/mi/close';

	const props = defineProps<{
		open: Boolean;
	}>();

	const loading = reactive({ isLoading: true });
	const change = function () {
		loading.isLoading = false;
	};

	setTimeout(change, 2000);
</script>

<style scoped>
	.pop-enter-active,
	.pop-leave-active {
		transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1),
			opacity 0.4s linear;
	}

	.pop-enter,
	.pop-leave-to {
		opacity: 0;
		transform: scale(0.3) translateY(-50%);
	}
	.spinner {
		animation: rotator 4s linear infinite;
	}

	@keyframes rotator {
		0% {
			transform: scale(1, -1) rotate(0deg);
		}
		100% {
			transform: scale(1, -1) rotate(270deg);
		}
	}
	.path {
		stroke-dasharray: 187;
		stroke-dashoffset: 0;
		transform-origin: center;
		animation: dash 1s ease-in-out infinite, colors 4s ease-in-out infinite;
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

	.check-icon {
		width: 80px;
		height: 80px;
		position: relative;
		border-radius: 50%;
		box-sizing: content-box;
		border: 4px solid #9475ed;
	}

	.check-icon::before {
		top: 3px;
		left: -2px;
		width: 30px;
		transform-origin: 100% 50%;
		border-radius: 100px 0 0 100px;
	}

	.check-icon::after {
		top: 0;
		left: 30px;
		width: 60px;
		transform-origin: 0 50%;
		border-radius: 0 100px 100px 0;
		animation: rotate-circle 4.25s ease-in;
	}

	.check-icon::before,
	.check-icon::after {
		content: '';
		height: 100px;
		position: absolute;
		background: #ffffff;
		transform: rotate(-45deg);
	}

	.icon-line {
		height: 5px;
		background-color: #9475ed;
		display: block;
		border-radius: 2px;
		position: absolute;
		z-index: 10;
	}

	.icon-line.line-tip {
		top: 46px;
		left: 14px;
		width: 25px;
		transform: rotate(45deg);
		animation: icon-line-tip 0.75s;
	}

	.icon-line.line-long {
		top: 38px;
		right: 8px;
		width: 47px;
		transform: rotate(-45deg);
		animation: icon-line-long 0.75s;
	}

	.icon-circle {
		top: -4px;
		left: -4px;
		z-index: 10;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		position: absolute;
		box-sizing: content-box;
		border: 4px solid rgba(148, 117, 237, 0.5);
	}

	.icon-fix {
		top: 8px;
		width: 5px;
		left: 26px;
		z-index: 1;
		height: 85px;
		position: absolute;
		transform: rotate(-45deg);
		background-color: #ffffff;
	}

	@keyframes rotate-circle {
		0% {
			transform: rotate(-45deg);
		}
		5% {
			transform: rotate(-45deg);
		}
		12% {
			transform: rotate(-405deg);
		}
		100% {
			transform: rotate(-405deg);
		}
	}

	@keyframes icon-line-tip {
		0% {
			width: 0;
			left: 1px;
			top: 19px;
		}
		54% {
			width: 0;
			left: 1px;
			top: 19px;
		}
		70% {
			width: 50px;
			left: -8px;
			top: 37px;
		}
		84% {
			width: 17px;
			left: 21px;
			top: 48px;
		}
		100% {
			width: 25px;
			left: 14px;
			top: 45px;
		}
	}

	@keyframes icon-line-long {
		0% {
			width: 0;
			right: 46px;
			top: 54px;
		}
		65% {
			width: 0;
			right: 46px;
			top: 54px;
		}
		84% {
			width: 55px;
			right: 0px;
			top: 35px;
		}
		100% {
			width: 47px;
			right: 8px;
			top: 38px;
		}
	}
</style>
