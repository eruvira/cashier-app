<template>
	<div class="grid gap-2" id="pcElemWrap">
		<div
			v-if="big"
			ref="pcArr"
			v-for="pc in test"
			:id="pc.uuid"
			:data-x="pc.mapX"
			:data-y="pc.mapY"
			class="border-[#9475ED] border-2 p-2 flex w-14 h-14 rounded-[10px] relative"
		>
			<img src="../assets/pc_icon.svg" />
			<div
				class="text-white text-xs bg-[#9475ED] h-[1.4rem] w-[1.4rem] rounded-full flex justify-center items-center absolute bottom-[-2px] right-[-2px]"
			>
				{{ pc?.number }}
			</div>
		</div>
		<div
			v-if="!big"
			ref="pcArr"
			v-for="pc in test"
			:id="pc.uuid"
			:data-x="pc.mapX"
			:data-y="pc.mapY"
			class="border-[#9475ED] border-2 p-2 flex w-[2.5rem] h-[2.5rem] rounded-[8px] relative"
		>
		<img src="../assets/pc_icon.svg" />
			<div
				class="text-white text-xs bg-[#9475ED] h-[1.2rem] w-[1.2rem] rounded-full flex justify-center items-center absolute bottom-[-2px] right-[-2px]"
			>
				{{ pc?.number }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps({
		big: Boolean,
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

	const pcArr = ref([]);

	onMounted(() => {
		calcGrid();
		pcArr.value.forEach((elem: any) => calcPos(elem));
	});

	const calcPos = (pc: any) => {
		const elem = document.getElementById(pc.id);
		if (elem !== null) {
			elem.setAttribute(
				'style',
				`grid-area: ${pc.dataset.y} / ${pc.dataset.x}`
			);
		}
	};

	const calcGrid = () => {
		let columns = test.value.reduce((max, pc) =>
			max.mapX > pc.mapX ? max : pc
		);
		let rows = test.value.reduce((max, pc) =>
			max.mapY > pc.mapY ? max : pc
		);
		document.getElementById(
			'pcElemWrap'
		).style.gridTemplateColumns = `repeat(${columns.mapX}, 1fr)`;
		document.getElementById(
			'pcElemWrap'
		).style.gridTemplateRows = `repeat(${rows.mapY}, 1fr)`;
	};
</script>
