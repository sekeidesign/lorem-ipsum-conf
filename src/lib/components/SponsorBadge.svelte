<script>
  import { language } from '$lib/stores';

  export let element;

  let activeLanguage;
  language.subscribe((value) => {
    activeLanguage = value;
  });

  const translations = {
    en: 'Thanks to',
    fr: 'Merci à',
  };
</script>

<div
  bind:this={element}
  class="rounded-full flex font-brand items-center absolute top-0 left-0 z-20 text-neutral-100 shadow-sm border-4 border-neutral-100 pr-3 py-1 pl-1.5 md:pr-4 md:py-2 md:pl-2.5 gap-1.5 md:gap-3 unselectable bg-brand-green"
>
  <div class="w-6 h-6 md:w-8 md:h-8">
    <slot name="logo" />
  </div>
  <div class="flex flex-col">
    <span class="text-xs md:text-base leading-none md:-mt-1">
      {translations[activeLanguage]}
    </span>
    <span
      class=" uppercase text-lg md:text-2xl md:leading-none -mt-1 font-semibold leading-none"
    >
      <slot />
    </span>
  </div>
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
