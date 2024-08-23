import Mock from 'mockjs'

export default defineCachedEventHandler(async () => {
  return Mock.mock({
    code: 200,
    data: {
      token: '@id(13)'
    }
  })
})
