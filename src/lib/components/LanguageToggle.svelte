<script>
  import { language } from '$lib/stores';

  let activeLanguage;
  language.subscribe((value) => {
    activeLanguage = value;
  });
  const toggleLanguage = () => {
    language.update((value) => {
      if (value === 'en') {
        return 'fr';
      } else {
        return 'en';
      }
    });
  };
  const handleKeydown = (event) => {
    if (event.key === 'Enter') {
      toggleLanguage();
    }
  };
</script>

<button
  on:click={toggleLanguage}
  on:keypress|preventDefault={handleKeydown}
  class="rounded-full uppercase border border-neutral-700 text-neutral-700 py-1 px-3 ml-auto cursor-pointer hover:bg-neutral-300 hover:text-neutral-900"
>
  {activeLanguage}
</button>
