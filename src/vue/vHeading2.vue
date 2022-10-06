<script lang="ts">
	export default {
		props: {
			rootPath: {
				type: String,
				default: ''
			}
		},
	}
</script>

<template>
	<h2 class="v-heading2">
		<slot />
	</h2>
</template>

<style lang="scss">
@use '../scss/theme' as *;

.v-heading2 {
	text-align: center;
	font-size: 2.4rem;
	line-height: calc(29 / 24);
	margin-bottom: 70px;

	@media ($break-sp) {
		margin-bottom: 45px;
	}
}
</style>
