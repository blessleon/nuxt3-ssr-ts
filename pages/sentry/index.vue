<template>
  <div>INDEX</div>
  <button @click="clickEv()">点击</button>
</template>
<script lang="ts">
export default {
  setup() {
    const clickEv = () => {
      const list: any[] = []
      const b = list[9]
      b.c()
    }
    return {
      clickEv
    }
  }
}
</script>