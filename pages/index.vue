<template>
  <el-container>
    <el-header>Blessleon</el-header>
    <el-main>
      <div class="main-contaier flex flex-wrap m0a">
        
      </div>
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { CardItem } from '~~/types/index.type'


export default {
  setup() {
    const cardData = ref<Array<CardItem>>([])
    return {
      cardData,
    }
  }
}


</script>
<style lang="scss">
.main-contaier{
  // justify-content: space-around;
  width: fit-content;
}
.m-card {
  width: 280px;
  margin: 0px 10px 10px 0px;
}
</style>