<script setup>
import AttributionComp from './AttributionComp.vue'
import NftPreviewCard from './NftPreviewCard.vue'
</script>

<template>
	<div
		class="flex h-full flex-col items-center justify-center overflow-y-scroll bg-dark-blue-main"
	>
		<main>
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
