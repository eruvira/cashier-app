<template>
	<div class="grid gap-2">
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
	defineProps<{
		big: Boolean,
		test1: Array<object>,
	}>();

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
		let columns = test1.reduce((max, pc) =>
			max.mapX > pc.mapX ? max : pc
		);
		let rows = test1.reduce((max, pc) =>
			max.mapY > pc.mapY ? max : pc
		);
		let pcWrap = document.getElementById(`${test1.uuid}`)?.parentElement

		if (pcWrap !== null && pcWrap !== undefined) {
			pcWrap.style.gridTemplateColumns = `repeat(${columns.mapX}, 1fr)`;
			pcWrap.style.gridTemplateRows = `repeat(${rows.mapY}, 1fr)`;
		}
	};
</script>
