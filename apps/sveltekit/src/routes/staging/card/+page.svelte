<script lang="ts">
	import Section from '$components/section';
	import Row from '$components/row';
	import Column from '$components/column';
	import Container from '$components/container';
	import Card from '$components/card';
	
	const scaleFactors: LkFontClass[] = [
			"display1",
			"display2",
			"title1",
			"title2",
			"title3",
			"heading",
			"subheading",
			"body",
			"callout",
			"label",
			"caption",
			"capline",
		];
</script>

<div class="bg-surfacecontainer" style="backgroundImage: url(/testimage.png);">
	<Section padding="md">
		<Container>
			<h1 class="display2-bold mb-md">Card Staging</h1>
			<Row gap="md">
				<Column gap="md">
					{#each scaleFactors as scaleFactor}
						<Card {scaleFactor} opticalCorrection="y" class="shadow-2xl">
							<h2 class={`${scaleFactor}`}>{scaleFactor}</h2>
							<p class="subheading">Subheading</p>
							<p class="body mt-sm">
								Chainlift is a company that makes design kits for programmers. Founded in 2021 by
								Garrett Mack from his attic in Irvine.
							</p>
						</Card>
					{/each}
				</Column>
				<Column gap="md">
					{#each scaleFactors as scaleFactor}
						<Card
							{scaleFactor}
							opticalCorrection="y"
							material="glass"
							isClickable={true}
							bgColor="info"
						>
							<h2 class={`${scaleFactor}`}>{scaleFactor}</h2>
							<p class="subheading">Subheading</p>
							<p class="body mt-sm opacity-70">
								Chainlift is a company that makes design kits for programmers. Founded in 2021 by
								Garrett Mack from his attic in Irvine.
							</p>
						</Card>
					{/each}
				</Column>
				<Column gap="md">
					{#each scaleFactors as scaleFactor}
						<Card {scaleFactor} opticalCorrection="y" variant="outline" isClickable={true}>
							<h2 class={`${scaleFactor}`}>{scaleFactor}</h2>
							<p class="subheading">Subheading</p>
							<p class="body mt-sm">
								Chainlift is a company that makes design kits for programmers. Founded in 2021 by
								Garrett Mack from his attic in Irvine.
							</p>
						</Card>
					{/each}
				</Column>
			</Row>
		</Container>
	</Section>
</div>
