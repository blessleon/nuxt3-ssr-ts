<template>
  <h1>index</h1>
  <h2>token: {{ token }}</h2>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { $getApi } from '../api/axios'
const token = ref('')
const getToken = async () => {
  const res = await $getApi('/', {})
  token.value = res.data.token
  localStorage.setItem('token', token.value)
}

onMounted(() => {
  getToken()
})
</script>
<style lang="scss"></style>
