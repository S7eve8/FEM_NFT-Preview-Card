<script setup>
defineProps({
	attributorName: {
		type: String,
		required: true
	},
	attributorLink: {
		type: String,
		required: true
	}
})
</script>

<template>
	<div class="attribution">
		Challenge by
		<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
		Coded by <a :href="attributorLink" target="_blank">{{ attributorName }}</a
		>.
	</div>
</template>

<style scoped>
.attribution {
	font-size: 11px;
	text-align: center;
}
.attribution a {
	color: hsl(228, 45%, 44%);
}
</style>
