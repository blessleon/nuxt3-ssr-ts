<template>
  <el-container>
    <el-header>Blessleon</el-header>
    <el-main>
      <div class="main-contaier flex flex-wrap m0a">
        <el-card class="m-card" v-for="card in cardData">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image" />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ card.updateTime }}</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </div>

    </el-main>
  </el-container>
</template>
<script lang="ts">
import { CardItem } from '~~/types/index.type'


export default {
  setup() {
    const cardData = ref<Array<CardItem>>([])
    const getCardData = () => {
      return new Promise(async (resolve) => {
        let { data } = await useFetch(() => '/api/card', { method: 'post' })
        resolve({
          records: unref(data)?.records,
          total: unref(data)?.total
        })
      })
    }
    getCardData().then((res: any) => {
      cardData.value = res.records
    })
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