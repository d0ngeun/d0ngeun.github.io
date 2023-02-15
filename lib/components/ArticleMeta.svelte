<script lang="ts">
	export let date: string;

	const formattedDate = new Date(date.replace(/-/g, '\/').replace(/T.+/, '')).toDateString();
</script>

<p>
	<span class="date">{formattedDate}</span>
</p>

<style>
	p {
	margin: 0;
	margin-bottom: calc(var(--spacing-unit) * 4);
	}

	.date {
		color: var(--color-text-secondary);
		opacity: 0.6;
	}
</style>
