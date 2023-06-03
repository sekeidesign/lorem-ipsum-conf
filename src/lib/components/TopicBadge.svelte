<script>
  import Ai from '$lib/badges/ai.svg?component';
  import Design from '$lib/badges/design.svg?component';
  import Dev from '$lib/badges/dev.svg?component';
  import Product from '$lib/badges/product.svg?component';
  import { language } from '$lib/stores';

  let activeLanguage;
  language.subscribe((value) => {
    activeLanguage = value;
  });

  export let topic = 'ai';
  export let element;
  export let hasText = true;

  const badges = {
    ai: {
      component: Ai,
      backgroundColor: 'bg-brand-orange',
      name: { en: 'AI', fr: 'IA' },
      textColor: 'text-brand-orange',
    },
    design: {
      component: Design,
      backgroundColor: 'bg-brand-yellow',
      name: { en: 'Design', fr: 'Design' },
      textColor: 'text-brand-yellow',
    },
    dev: {
      component: Dev,
      backgroundColor: 'bg-brand-pink',
      name: { en: 'Dev', fr: 'Dev' },
      textColor: 'text-brand-pink',
    },
    product: {
      component: Product,
      backgroundColor: 'bg-brand-green',
      name: { en: 'Product', fr: 'Produit' },
      textColor: 'text-brand-green',
    },
  };
</script>

<div
  bind:this={element}
  class="rounded-full flex font-brand items-center absolute top-0 left-0 z-20 text-neutral-100 {hasText
    ? badges[topic].backgroundColor +
      ' shadow-sm border-4 border-neutral-100 px-4 md:px-7 py-2.5 gap-3 md:gap-5'
    : ''} unselectable"
>
  <svelte:component
    this={badges[topic].component}
    class={hasText
      ? 'text-neutral-100 w-5 h-5 md:w-16 md:h-16'
      : badges[topic].textColor + ' w-12 h-12 md:w-24 md:h-24'}
  />
  {#if hasText}
    <h2
      class="-mt-2 uppercase text-4xl md:text-9xl md:leading-none md:-mt-4 font-semibold"
    >
      {badges[topic].name[activeLanguage]}
    </h2>
  {/if}
</div>

<style>
  .unselectable {
    cursor: grab;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .unselectable:active {
    cursor: grabbing;
  }
</style>
