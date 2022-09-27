<template>
  <header>
    <div class="wrapper">
      <nav>
        <HomeView/>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
  import { createClient, provideClient } from '@urql/vue';
  const client = createClient({
    url: 'http://localhost:3000/graphql',
  });

  provideClient(client);
</script>
