Page({
  data: {
    shareData: {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/API/pages/share/share'
    }
  },
  onShareAppMessage: function () {
    // 获取用户名
    var username = '';
    wx.getUserInfo({
      success: function (res) {
       
        username = res.userInfo.nickName
       console.log(username)
      }
    })
    this.setData({
      shareData: {
        title: username,
        desc: '自定义分享描述',
        path: '/page/API/pages/share/share'
      }
    })
    return this.data.shareData
  }
})
