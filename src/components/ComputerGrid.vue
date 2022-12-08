<template>
	<div class="grid gap-4">
		<div
			v-if="big && pcs.length"
			ref="pcArr"
			v-for="pc in pcs"
			:id="pc.uuid"
			:data-x="pc.mapX"
			:data-y="pc.mapY"
			class="border-[#9475ED] border-2 p-2 flex rounded-[10px] relative cursor-pointer justify-center"
			v-cloak
			@click="$emit('openPopup')"
		>
			<img src="../assets/pc_icon.svg" />
			<div
				class="text-white text-xs bg-[#9475ED] h-[1.4rem] w-[1.4rem] rounded-full flex justify-center items-center absolute bottom-[-2px] right-[-2px]"
			>
				{{ pc.number }}
			</div>
		</div>
		<div
			v-if="!big && pcs.length"
			ref="pcArr"
			v-for="pc in pcs"
			:id="pc.uuid"
			:data-x="pc.mapX"
			:data-y="pc.mapY"
			class="border-[#9475ED] border-2 p-2 flex w-[2.5rem] h-[2.5rem] rounded-[8px] relative"
			v-cloak
		>
			<img src="../assets/pc_icon.svg" />
			<div
				class="text-white text-xs bg-[#9475ED] h-[1.2rem] w-[1.2rem] rounded-full flex justify-center items-center absolute bottom-[-2px] right-[-2px]"
			>
				{{ pc.number }}
			</div>
		</div>
		<div v-if="!props.pcs.length" class="text-base" v-cloak>
			Свободных компьютеров нет
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		big: Boolean;
		pcs: Array<object>;
	}>();

	const pcArr = ref([]);

	onMounted(() => {
		if (props.pcs.length) {
			calcGrid();
			pcArr.value.forEach((elem: any) => calcPos(elem));
		}
	});

	onUpdated(() => {
		if (props.pcs.length) {
			calcGrid();
			pcArr.value.forEach((elem: any) => calcPos(elem));
		}
	});

	const calcHeight = (pc: any) => {
		const elem = document.getElementById(pc.id);
		if (elem !== null) {
			let height = elem.offsetWidth;
			elem.style.height = `${height}px`;
		}
	};

	const calcPos = (pc: any) => {
		const elem = document.getElementById(pc.id);
		if (elem !== null) {
			elem.style.gridArea = `${pc.dataset.y} / ${pc.dataset.x}`;
		}
	};

	const calcGrid = () => {
		let columns = props.pcs.reduce((max, pc) =>
			max.mapX > pc.mapX ? max : pc
		);
		let rows = props.pcs.reduce((max, pc) =>
			max.mapY > pc.mapY ? max : pc
		);
		let pcWrap = document.getElementById(
			`${props.pcs.uuid}`
		)?.parentElement;

		if (pcWrap !== null && pcWrap !== undefined) {
			pcWrap.style.gridTemplateColumns = `repeat(${columns.mapX}, 1fr)`;
			pcWrap.style.gridTemplateRows = `repeat(${rows.mapY}, 1fr)`;
		}
	};
</script>

<style>
	[v-cloak] {
		display: none;
	}
</style>
