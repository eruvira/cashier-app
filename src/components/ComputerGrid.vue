<template>
	<div class="grid gap-4">
		<div
			v-if="big"
			ref="pcArr"
			v-for="pc in pcs"
			:id="pc.uuid"
			:data-x="pc.mapX"
			:data-y="pc.mapY"
			class="border-[#9475ED] border-2 p-2 flex rounded-[10px] relative cursor-pointer justify-center w-14 h-14"
			:class="{
				'border-slate-400 cursor-default pointer-events-none':
					pc.isBusy,
			}"
			v-cloak
			@click="$emit('openPopup')"
		>
			<img v-if="!pc.isBusy" src="../assets/pc_icon.svg" />
			<img v-else src="../assets/pc_icon_gray.svg" />
			<div
				class="text-white text-xs bg-[#9475ED] h-[1.4rem] w-[1.4rem] rounded-full flex justify-center items-center absolute bottom-[-2px] right-[-2px]"
				:class="{ 'bg-slate-400': pc.isBusy }"
			>
				{{ pc.number }}
			</div>
		</div>
		<div
			v-if="!big"
			ref="pcArr"
			v-for="pc in pcs"
			:id="pc.uuid"
			:data-x="pc.mapX"
			:data-y="pc.mapY"
			class="border-[#9475ED] border-2 p-2 flex w-[2.5rem] h-[2.5rem] rounded-[8px] relative"
			:class="{
				'border-slate-400 cursor-default pointer-events-none':
					pc.isBusy,
			}"
			v-cloak
		>
			<img v-if="!pc.isBusy" src="../assets/pc_icon.svg" />
			<img v-else src="../assets/pc_icon_gray.svg" />
			<div
				class="text-white text-xs bg-[#9475ED] h-[1.2rem] w-[1.2rem] rounded-full flex justify-center items-center absolute bottom-[-2px] right-[-2px]"
				:class="{ 'bg-slate-400': pc.isBusy }"
			>
				{{ pc.number }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {PC} from '../models/gameCenter.model'
	const props = defineProps<{
		big: Boolean;
		pcs: Array<PC>;
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
