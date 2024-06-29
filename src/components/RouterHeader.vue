<script setup lang="ts"></script>

<template>
  <div class="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-transparent">
    <RouterLink to="/">
      <img src="@/assets/cafc-logo.png" class="h-[52px] w-[52px]" alt="Charlton Athletic Logo" />
    </RouterLink>
    <nav class="fixed top-0 right-0 p-4">
      <ul class="flex space-x-4">
        <RouterLink to="/" class="">Home</RouterLink>
        <RouterLink to="/league-table" class="">League Table</RouterLink>
      </ul>
    </nav>
  </div>
</template>

<script></script>

<style scoped></style>
