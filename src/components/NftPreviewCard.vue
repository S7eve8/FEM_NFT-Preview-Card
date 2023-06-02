<template>
	<div class="dark-blue-card flex max-w-[350px] flex-col gap-6 rounded-[15px] p-6">
		<div class="group relative cursor-pointer">
			<figure>
				<img
					class="rounded-lg"
					src="@/assets/images/image-equilibrium.jpg"
					alt="nft-image"
				/>
			</figure>
			<figure
				class="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-lg bg-cyan/50 opacity-0 transition ease-in-out group-hover:opacity-100"
			>
				<img src="@/assets/images/icon-view.svg" alt="view-icon-image" />
			</figure>
		</div>
		<p
			class="cursor-pointer self-start text-[22px] font-semibold text-white transition-colors ease-in-out hover:text-cyan"
		>
			Equilibrium #3429
		</p>
		<p class="mt-[-8px] text-[18px] font-light text-soft-blue">
			Our Equilibrium collection promotes balance and calm.
		</p>
		<div class="flex justify-between gap-3">
			<div class="mr-auto flex basis-1/2 gap-[6.5px] overflow-hidden">
				<img src="@/assets/images/icon-ethereum.svg" alt="ethereum-image" />
				<p
					class="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold text-cyan"
				>
					0.041 ETH
				</p>
			</div>
			<div
				class="ml-auto flex basis-1/2 items-center justify-end gap-[7.5px] overflow-hidden"
			>
				<img class="h-4 w-4" src="@/assets/images/icon-clock.svg" alt="clock-image" />
				<p
					class="overflow-hidden text-ellipsis whitespace-nowrap text-base font-normal text-soft-blue"
				>
					3 days left
				</p>
			</div>
		</div>
		<hr class="border-t-dark-blue-line" />
		<div class="mt-[-8px] flex items-center gap-4">
			<img
				class="h-[33px] w-[33px] rounded-full border border-white"
				src="@/assets/images/image-avatar.png"
				alt="avatar-image"
			/>
			<p class="text-base font-normal text-soft-blue">
				Creation of <span class="text-white">Jules Wyvern</span>
			</p>
		</div>
	</div>
</template>
