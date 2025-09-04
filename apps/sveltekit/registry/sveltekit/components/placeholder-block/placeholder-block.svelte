<script lang="ts">
  import "@/registry/sveltekit/components/placeholder-block/placeholder-block.css";

  let { count: length = 0 } = $props();
</script>

{#each Array.from({ length })}
  <div data-lk-component="placeholder-block"></div>
{/each}

