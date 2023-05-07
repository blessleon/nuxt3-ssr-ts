<template>
  <div>
    <h2>动态路径：{{ authPath }}</h2>
  </div>
</template>

<script lang="ts" setup>
/**
 * 例如： http://localhost:3001/goods1/detail
 */
const authPath = ref('')
authPath.value = useRoute().path
</script>