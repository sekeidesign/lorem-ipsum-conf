<script>
  import Ai from '$lib/assets/badges/ai.svg?component';
  import Design from '$lib/assets/badges/design.svg?component';
  import Dev from '$lib/assets/badges/dev.svg?component';
  import Product from '$lib/assets/badges/product.svg?component';
  import { timeline } from 'motion';
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatchEvent = createEventDispatcher();

  let badgeWrap;
  let loaderWrap;

  onMount(async () => {
    const animateBadges = [
      badgeWrap,
      {
        y: ['0%', '-20%', '-40%', '-60%', '-80%'],
      },
      {
        duration: 1.75,
        easing: 'steps(1, start)',
      },
    ];
    const hideLoader = [
      loaderWrap,
      {
        opacity: [1, 0],
      },
      {
        duration: 0.15,
        easing: 'linear',
      },
    ];
    await timeline([animateBadges, hideLoader]).finished;
    dispatchEvent('loaded');
  });
</script>

<div
  bind:this={loaderWrap}
  class="w-screen h-screen flex items-center justify-center absolute z-50 inset-0 bg-neutral-100"
>
  <div class="h-6 w-6 overflow-hidden">
    <div bind:this={badgeWrap} class="flex flex-col">
      <Ai class="h-6 w-6 shrink-0 text-brand-orange" />
      <Ai class="h-6 w-6 shrink-0 text-brand-orange" />
      <Design class="h-6 w-6 shrink-0 text-brand-green" />
      <Dev class="h-6 w-6 shrink-0 text-brand-pink" />
      <Product class="h-6 w-6 shrink-0 text-brand-yellow" />
    </div>
  </div>
</div>
