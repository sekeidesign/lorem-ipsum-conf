<script>
  export let date = { day: 29, month: 'JUN', year: 2023 };
  export let eventName = 'Summer Social';
  export let eventLink =
    'https://www.meetup.com/lorem-ipsum-conf/events/293770958/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link';
</script>

<div
  class="bg-neutral-300 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-fun"
>
  <div class="flex p-3 pr-4 items-center gap-2">
    <div
      class="flex flex-col items-center p-2 border-t-4 border-brand-orange rounded bg-neutral-100 font-brand"
    >
      <span class="text-neutral-700 leading-none -mt-1">{date.month}</span>
      <span class="text-neutral-900 text-2xl leading-none -my-1"
        >{date.day}</span
      >
    </div>
    <div>
      <p class="uppercase text-neutral-700 leading-none text-xs text-start">
        Prochain evenement
      </p>
      <h3 class="font-brand text-brand-orange text-3xl leading-none -my-1">
        {eventName}
      </h3>
    </div>
  </div>
  <a
    href={eventLink}
    class="overflow-hidden px-6 h-14 flex items-center justify-center text-brand text-neutral-100 bg-neutral-900 relative group"
    ><span class="relative z-20">Enregistrer</span>
    <div
      class="absolute inset-0 h-full w-full flex items-center justify-center"
    >
      <div
        class="rounded-full w-full scale-0 group-hover:scale-110 transition-all duration-300 ease-fun aspect-square bg-brand-orange"
      />
    </div></a
  >
</div>
