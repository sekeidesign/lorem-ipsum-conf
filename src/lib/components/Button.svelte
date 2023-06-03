<script>
  export let href = '#';
  export let as = 'a';
  export let width = 'w-full';
</script>

<svelte:element
  this={as}
  {href}
  class="{width} overflow-hidden px-6 h-12 flex items-center justify-center text-brand rounded text-neutral-100 bg-neutral-900 relative group focus-visible:outline-2 focus-visible:outline-neutral-900 focus-visible:bg-brand-orange"
  ><span class="relative z-20"><slot>Button label</slot></span>
  <div class="absolute inset-0 h-full w-full flex items-center justify-center">
    <div
      class="rounded-full w-full scale-0 group-hover:scale-110 transition-all duration-300 ease-fun aspect-square bg-brand-orange"
    />
  </div>
</svelte:element>
