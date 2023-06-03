<script>
  import Logo from '$lib/components/Logo.svelte';
  import LanguageToggle from '$lib/components/LanguageToggle.svelte';
</script>

<div
  class="w-screen flex items-center justify-between relative z-40 p-4 md:p-4"
>
  <div class="block md:hidden">
    <Logo />
  </div>
  <LanguageToggle />
</div>
