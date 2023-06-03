import AttributionComp from '@/components/AttributionComp.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
	title: 'Example/Attribution Component',
	component: AttributionComp,
	tags: ['autodocs'],
	render: (args) => ({
		// Components used in your story `template` are defined in the `components` object
		components: {
			AttributionComp
		},
		// The story's `args` need to be mapped into the template through the `setup()` method
		setup() {
			// Story args can be spread into the returned object
			return {
				...args
			}
		},
		// Then, the spread values can be accessed directly in the template
		template: `
			<AttributionComp
				attributorName="8teve"
				attributorLink="https://www.frontendmentor.io/profile/S7eve8"
			></AttributionComp>
		`
	})
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const AttributionCompSample = {
	args: {
		attributorName: '8teve',
		attributorLink: 'https://www.frontendmentor.io/profile/S7eve8'
	}
}
