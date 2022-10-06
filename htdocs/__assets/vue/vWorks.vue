<script setup lang="ts">
import { useStore } from 'vuex'

const props = defineProps({
	rootPath: {
		type: String,
		default: ''
	}
});

const store = useStore();
const works = store.state.works;
</script>

<template>
	<ul class="v-works">
		<li v-for="(work, index) in works" :key="index" class="v-works__item">
			<img :src="props.rootPath + work.src" :alt="work.alt">
		</li>
	</ul>
</template>

<style lang="scss">
@use '../scss/theme' as *;

.v-works {
	padding: 0;
	margin: 0;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 23px 24px;

	@media ($break-sp) {
		grid-template-columns: 1fr;
	}
}
</style>
