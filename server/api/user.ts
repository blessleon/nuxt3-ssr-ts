import  Mock from 'mockjs'

export default defineCachedEventHandler(async() => {
  return Mock.mock({
    code: 200,
    data: {
      username: '@cname',
      avatar: '/favicon.ico',
      email: '@email',
      role: 'admin',
      permissions: ['admin', 'editor', 'user'],
      introduction: 'I am a super administrator',
    }
  })
})
