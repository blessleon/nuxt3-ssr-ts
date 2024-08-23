<template>
  <div>
    <h2>动态路由 User: {{ userId }}</h2>
    <p>用户信息 {{}}</p>
    <p>姓名： {{ user.username }} <img :src="user.avatar" alt="" srcset="" /></p>
    <p>邮箱：{{ user.email }}</p>
  </div>
</template>

<script lang="ts" setup>
/**
 * example http://localhost:3001/user/1001
 */

import { useRoute } from 'vue-router'
import { $getApi } from '@/api/axios'

const user = ref({
  username: '',
  avatar: '',
  email: ''
})
const getUser = async () => {
  const res = await $getApi('/user', {})
  user.value = { ...res.data }
}
getUser()

const userId = useRoute().params.id
</script>
