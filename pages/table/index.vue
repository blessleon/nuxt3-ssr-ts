<template>
  <div>Table</div>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="id" label="Id" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="createTime" label="CreateTime" width="180" />
    <el-table-column prop="updateTime" label="UpdateTime" width="180" />
    <el-table-column prop="state" label="State">
      <template #default="scope">
        <el-switch v-model="scope.row.state" />
      </template>
    </el-table-column>
    <el-table-column prop="remark" label="Remark" />
  </el-table>
</template>
<script lang="ts">
export default {
  setup() {
    const list = ref([])
    const listHead = ref<any>([])
    const getListData = () => {
      return new Promise(async (resolve) => {
        let { data } = await useFetch(() => '/api/list', { method: 'post' })
        resolve({
          records: unref(data)?.records,
          total: unref(data)?.total
        })
      })
    }
    getListData().then((res:any) => {
      console.log('res', res)
      const headKeys = Object.keys(res.records[0])
      listHead.value = headKeys
      list.value = res.records
    })
    return {
      list,
      listHead
    }
  }
}
</script>