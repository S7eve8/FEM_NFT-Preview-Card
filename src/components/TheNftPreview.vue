<script setup>
import AttributionComp from './AttributionComp.vue'
import NftPreviewCard from './NftPreviewCard.vue'
import nftImagePath from '@/assets/images/image-equilibrium.jpg'
import nftCurrencyImagePath from '@/assets/images/icon-ethereum.svg'
import nftCreatorImagePath from '@/assets/images/image-avatar.png'

const nftCardData = {
	nftImagePath,
	nftTitle: 'Equilibrium #3429',
	nftDescription: 'Our Equilibrium collection promotes balance and calm.',
	nftCurrencyImagePath,
	nftCurrencyAmount: '0.041',
	nftCurrency: 'ETH',
	timeLeft: '3 days left',
	nftCreatorImagePath,
	nftCreator: 'Jules Wyvern'
}
</script>

<template>
	<div class="relative flex h-full items-center justify-center">
		<main>
			<NftPreviewCard :nftCardData="nftCardData"></NftPreviewCard>
		</main>
		<footer>
			<AttributionComp
				attributorName="8teve"
				attributorLink="https://www.frontendmentor.io/profile/S7eve8"
				class="absolute bottom-0 left-1/2 -translate-x-1/2 p-4 text-white"
			></AttributionComp>
		</footer>
	</div>
</template>
