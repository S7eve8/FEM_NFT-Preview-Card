<script setup>
import AttributionComp from './AttributionComp.vue'
import NftPreviewCard from './NftPreviewCard.vue'
</script>

<template>
	<div class="flex h-full flex-col">
		<main class="m-auto">
			<NftPreviewCard></NftPreviewCard>
		</main>
		<footer>
			<AttributionComp
				attributorName="8teve"
				attributorLink="https://www.frontendmentor.io/profile/S7eve8"
				class="p-4 text-white"
			></AttributionComp>
		</footer>
	</div>
</template>
