<script lang="ts">
	import '../globals.css';
	import ThemeProvider from "$components/theme"
	let { children } = $props();
</script>

<ThemeProvider>
	{@render children?.()}
</ThemeProvider>

<style>
	/* Google Inter Font Download */
	@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>