<script setup>
import AttributionComp from './AttributionComp.vue'
import NftPreviewCard from './NftPreviewCard.vue'
</script>

<template>
	<div class="relative flex h-full items-center justify-center">
		<NftPreviewCard></NftPreviewCard>
		<AttributionComp
			attributorName="8teve"
			attributorLink="https://www.frontendmentor.io/profile/S7eve8"
			class="absolute bottom-0 p-4 text-white"
		></AttributionComp>
	</div>
</template>
