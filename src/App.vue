<script setup lang="ts">
import { RouterView } from 'vue-router'
// import PlayerTable from './views/PlayerTable.vue'
import RouterHeader from './components/RouterHeader.vue'
</script>

<template class="">
  <header class="h-screen leading-6">
    <RouterHeader />
  </header>

  <!-- <body>
    <PlayerTable />
  </body> -->

  <RouterView />
</template>
