<script>
  import PhysicsBackground from '$lib/components/PhysicsBackground.svelte';
  import NextEvent from '$lib/components/NextEvent.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Loader from '$lib/components/Loader.svelte';
  import { language } from '$lib/stores';

  let activeLanguage;
  language.subscribe((value) => {
    activeLanguage = value;
  });
  const translations = {
    en: {
      heading: 'Lorem Ipsum Conf',
      paragraph: 'Convos and drinks with friends in the heart of Montréal.',
    },
    fr: {
      heading: 'Lorem Ipsum Conf',
      paragraph:
        'Discussions et breuvages entre amis dans le coeur de Montréal.',
    },
  };

  let isLoading = true;

  const loaded = () => {
    isLoading = false;
  };
</script>

{#if isLoading}
  <Loader on:loaded={loaded} />
{:else}
  <PhysicsBackground />
{/if}
<Navbar />
<div
  class="flex flex-col items-center justify-start text-center z-20 relative pt-8 md:pt-14 px-4 gap-4 md:gap-8 pb-16"
>
  <div class="hidden md:block">
    <Logo />
  </div>
  <h1
    class="text-neutral-900 md:text-10xl font-brand text-5xl font-extrabold -mt-2 md:-mt-10"
  >
    Lorem Ipsum Conf
  </h1>
  <p class="text-neutral-700 md:text-xl md:leading-tight">
    {translations[activeLanguage].paragraph}
  </p>
  <NextEvent />
</div>
