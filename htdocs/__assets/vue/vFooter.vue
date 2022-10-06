<script setup lang="ts">
import { computed } from "@vue/reactivity"

const copyYear = computed(() => {
		const now = new Date();
		return now.getFullYear();
})
</script>

<template>
	<footer class="v-footer">
		<small class="v-footer__copy">© {{ copyYear }} My Work</small>
	</footer>
</template>

<style lang="scss">
@use '../scss/theme' as *;

.v-footer {
	background: $color-darkest;
	color: $color-lightest;
	text-align: center;
	padding: 12px 0;

	&__copy {
		font-size: 1rem;
	}
}
</style>
