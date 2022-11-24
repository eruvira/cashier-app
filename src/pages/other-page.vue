<script setup lang="ts">
	import BackIcon from '~icons/pepicons/angle-left';
	useHead({
		title: 'Other Pages',
	});
	const test = ref([
		{
			uuid: '2fc3c180-0969-4327-bd77-4f83f5b11bc7',
			number: 0,
			status: 'free',
			mapX: 1,
			mapY: 1,
		},
		{
			uuid: 'b24243b4-16d6-47e9-8c1d-a18437b7f925',
			number: 1,
			status: 'free',
			mapX: 2,
			mapY: 2,
		},
		{
			uuid: 'e2e2b501-098f-46ad-9f21-34adb551c1dd',
			number: 2,
			status: 'free',
			mapX: 46,
			mapY: 23,
		},
		{
			uuid: '19e497fc-195e-40ec-9dd6-6f68217eee62',
			number: 6,
			status: 'free',
			mapX: 2,
			mapY: 4,
		},
		{
			uuid: 'd229cfd5-0fef-470e-a2f4-f26313c4deb5',
			number: 12,
			status: 'free',
			mapX: 1,
			mapY: 2,
		},
	]);
	const pcArr = ref([])
	const calcPos = (pc: any) => {
		const elem = document.getElementById(pc.id);
		if (elem !== null) {
			elem.setAttribute(
				'style',
				`top: ${
					Number(pc.dataset.y) * 50 + 10 * pc.dataset.y
				}px; left: ${Number(pc.dataset.x) * 50 + 10 * pc.dataset.x}px`
			);
		}
	};

	const calcHeight = () => {
		let verticalPosArr = [];
		for (let i = 0; i < test.value.length; i++) {
			verticalPosArr.push(test.value[i].mapY);
		}
		const max = verticalPosArr.reduce(
			(a: number, b: number) => Math.max(a, b),
			-Infinity
		);
		const box = document.getElementById('pcElemWrap');
		box?.setAttribute('style', `min-height: ${max * 46}px`);
	};

	onMounted(() => {
		calcHeight();
		pcArr.value.forEach((elem: any) => calcPos(elem))
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
		<div v-if="!test.length">test</div>
		<transition v-else name="bounce" appear>
			<div class="mt-10 relative" id="pcElemWrap">
				<div
					ref="pcArr"
					v-for="pc in test"
					:id="pc.uuid"
					:data-x="pc.mapX - 1"
					:data-y="pc.mapY - 1"
					class="border-[#9475ED] border-2 p-2 flex w-14 h-14 rounded-[10px] absolute"
				>
					<img src="../assets/pc_icon.svg" />
					<div
						class="text-white text-xs bg-[#9475ED] h-[1.4rem] w-[1.4rem] rounded-full flex justify-center items-center absolute bottom-[-2px] right-[-2px]"
					>
						{{ pc?.number }}
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

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
