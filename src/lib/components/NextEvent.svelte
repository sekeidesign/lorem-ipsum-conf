<script>
  import Button from '$lib/components/Button.svelte';
  import { language } from '$lib/stores';

  let activeLanguage;
  language.subscribe((value) => {
    activeLanguage = value;
  });

  let element;
  export { element as this };
  export let date = { day: 29, month: 'JUN', year: 2023 };
  export let eventName = 'Summer Social';
  export let eventLink =
    'https://www.meetup.com/lorem-ipsum-conf/events/293770958/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link';
</script>

<div
  class="bg-neutral-300 rounded-lg p-3 gap-3 overflow-hidden flex flex-col md:flex-row items-center"
  bind:this={element}
>
  <div class="flex items-center gap-3">
    <div
      class="flex flex-col items-center p-2 pb-2.5 border-t-4 border-brand-orange rounded bg-neutral-100 font-brand"
    >
      <span class="text-neutral-700 leading-none -mt-1">{date.month}</span>
      <span class="text-neutral-900 text-2xl leading-none -my-1"
        >{date.day}</span
      >
    </div>
    <div>
      <p class="uppercase text-neutral-700 leading-none text-xs text-start">
        {activeLanguage === 'fr' ? 'Prochain evenement' : 'Next event'}
      </p>
      <h3 class="font-brand text-brand-orange text-4xl leading-none -my-1">
        {eventName}
      </h3>
    </div>
  </div>
  <div class="w-px h-12 bg-neutral-400 hidden md:block" />
  <Button as="a" href={eventLink} width="w-full md:w-min"
    >{activeLanguage === 'fr' ? 'Enregistre' : 'Register'}</Button
  >
</div>
