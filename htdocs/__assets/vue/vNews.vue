<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from "@vue/reactivity";

const props = defineProps({
	displayNum: {
		default: false
	},
	rootPath: {
		type: String,
		default: ''
	}
});

const store = useStore();
const news = store.state.news;
const newsCount = computed(() => {
	if (props.displayNum) {
		return news.slice(0, props.displayNum);
	} else {
		return news;
	}
})
</script>

<template>
	<ul class="v-news">
		<li v-for="(i, index) in newsCount" :key="index" class="v-news__item">
			<a :href="i.href">
				<time class="v-news__item-time" :datetime="i.date.year + '-' + i.date.month + '-' + i.date.date">{{ i.date.year }}.{{ i.date.month }}.{{ i.date.date }}</time>
				<p class="v-news__item-title">{{ i.title }}</p>
			</a>
		</li>
	</ul>
</template>

<style lang="scss">
@use '../scss/theme' as *;

.v-news {
	padding: 0;
	margin: 0;
	list-style: none;

	&__item {
		border-top: 1px solid $color-border;

		&:last-of-type {
			border-bottom: 1px solid $color-border;
		}

		> a {
			display: flex;
			align-items: center;
			padding: 17px 14px;
			color: $color-font-primary;
			text-decoration: none;

			@media ($break-sp) {
				display: block;
			}
		}

		&-time {
			margin-right: 76px;
		}

		&-title {
			flex: 1;
			margin: 0;
		}
	}
}
</style>
