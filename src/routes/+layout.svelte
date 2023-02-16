<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/header/header.svelte'; 
	export const prerender = true
</script>

<div class="app">
	<Header>
		<a href="/"><h1 class:small={$page.url.pathname !== '/'}>d0ngeun</h1></a>
	</Header>	
	<main>
		<slot />
	</main>
</div>
