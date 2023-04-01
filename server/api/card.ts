import  Mock from 'mockjs'

export default defineCachedEventHandler(async() => {
  return Mock.mock({
    "records|18" : [
      {
        id: '@id(6)',
        name: '@name',
        title: '@ctitle',
        createTime: '@date',
        updateTime: '@date',
        state: '@boolean',
        remark: '@cparagraph(1)'
      },
    ],
    total:18
  })
})
