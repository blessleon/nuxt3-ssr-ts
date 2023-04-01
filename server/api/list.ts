import  Mock from 'mockjs'

export default defineCachedEventHandler(async() => {
  return Mock.mock({
    "records|20" : [
      {
        id: '@id(6)',
        name: '@name',
        createTime: '@date',
        updateTime: '@date',
        state: '@boolean',
        remark: '@cparagraph(1)'
      },
    ],
    total:98
  })
})
