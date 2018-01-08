// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:0,
    markers:[{
      // id:22,
      latitude:"40.003050",
      longitude:"116.277310",
      // title:'标注点结合callout',
      iconPath:'../images/location.png',
      width:112,
      height:51,
      callout: {content:'callout文本', color:'green', fontSize:'12px',bgColor:'#ccc',} 
    }]
  },
 xueshu() {
    wx.navigateTo({
      url:"../xueshu/xueshu"
    })
  },
  friends() {
    wx.navigateTo({
    url:'../friends/friends'
  })
  },
  yuyue() {
    wx.navigateTo({//注册选项卡，配合tagbar使用
      url: '../yuyue/yuyue'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success:(res) => {
        this.setData({
          height: res.windowHeight-60
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})