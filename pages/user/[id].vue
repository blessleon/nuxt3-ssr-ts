<template>
  <div>
    <h2>动态路由 User: {{ userId }}</h2>
  </div>
</template>

<script lang="ts">
/**
 * 例如 http://localhost:3001/user/1001
 */

export default {
  setup() {
    const userId = useRoute().params.id
    return {
      userId
    }
  }
}

</script>