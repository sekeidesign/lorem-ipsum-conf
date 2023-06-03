<script>
  import { language } from '$lib/stores';

  let activeLanguage;
  language.subscribe((value) => {
    activeLanguage = value;
  });
  const toggleLanguage = () => {
    language.update((value) => {
      if (value === 'en') {
        localStorage.setItem('loremIpsumLanguagePreference', 'fr');
        return 'fr';
      } else {
        localStorage.setItem('loremIpsumLanguagePreference', 'en');
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
  class="rounded-full uppercase border border-neutral-700 text-neutral-700 py-1 px-3 ml-auto cursor-pointer hover:bg-neutral-300 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-brand-orange focus-visible:text-neutral-900 focus-visible:bg-neutral-300"
>
  {activeLanguage}
</button>
