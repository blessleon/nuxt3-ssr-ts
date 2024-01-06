
<template>
  <div id="app">
    <NuxtLoadingIndicator/> 
    <NuxtPage />
  </div>
</template>

<script setup>
console.log("App.vue")
onMounted(() => {
  localStorage.setItem('skey', import.meta.env.VITE_APP_KEY)
})
</script>


