
<template>
  <div id="app">
    <NuxtLoadingIndicator/> 
    <NuxtPage />
  </div>
</template>

<script setup>
onMounted(() => {
  localStorage.setItem('skey', import.meta.env.VITE_APP_KEY)
})
</script>


