import NftPreviewCard from '@/components/NftPreviewCard.vue'
import nftImagePath from '@/assets/images/image-equilibrium.jpg'
import nftCurrencyImagePath from '@/assets/images/icon-ethereum.svg'
import nftCreatorImagePath from '@/assets/images/image-avatar.png'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
	title: 'Example/NFT Preview Card',
	component: NftPreviewCard,
	tags: ['autodocs'],
	render: (args) => ({
		// Components used in your story `template` are defined in the `components` object
		components: {
			NftPreviewCard
		},
		// The story's `args` need to be mapped into the template through the `setup()` method
		setup() {
			// Story args can be spread into the returned object
			return {
				...args
			}
		},
		// Then, the spread values can be accessed directly in the template
		template: '<NftPreviewCard :nftCardData="nftCardData" />'
	})
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const NftPreviewCardSample = {
	args: {
		nftCardData: {
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
	}
}

export const NftPreviewCardLongTextSample = {
	args: {
		nftCardData: {
			nftImagePath,
			nftTitle: 'Equilibrium Wingardium Leviosa #3429',
			nftDescription: 'Our Equilibrium collection promotes balance and calm. The Levitation Charm was invented in 1544 by warlock Jarleth Hobart who mistakenly believed that he had at last succeeded in doing what wizardkind had so far failed to do, and learnt to fly.',
			nftCurrencyImagePath,
			nftCurrencyAmount: '0.00000041',
			nftCurrency: 'ETHxxx',
			timeLeft: '3 days left',
			nftCreatorImagePath,
			nftCreator: 'Jules Wyvern Harry Potter JK Rowling'
		}
	}
}

