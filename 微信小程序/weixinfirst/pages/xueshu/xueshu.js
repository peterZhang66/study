// pages/xueshu/xueshu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: [
      {
        avaImg: '../images/img_01.png',
        name: 'AAA教育小助手',
        time: '2017-2-4',
        text: '工资超过1万的已毕业学生来报个到，让我看到你们的双手',
        img: [
          { imgUrl: 'http://oynz95uan.bkt.clouddn.com/20140825082917_LaGy4.thumb.224_0.jpg' },
          { imgUrl: 'http://oynz95uan.bkt.clouddn.com/20161215110546236.jpg' },

          { imgUrl: 'http://oynz95uan.bkt.clouddn.com/5392de935ac3d200.jpg%21200x200.jpg' }
        ],
        dianzanshu: 108,
        pinglunshu: 22
      },
      {
        avaImg: '../images/1.jpg',
        name: '前端大牛',
        time: '2017-2-9',
        text: '征服 JavaScript 面试：什么是闭包',
        img: [
          { imgUrl: 'http://oynz95uan.bkt.clouddn.com/20161215110546236.jpg' },

          { imgUrl: 'http://oynz95uan.bkt.clouddn.com/5392de935ac3d200.jpg%21200x200.jpg' }
        ],
        dianzanshu: 138,
        pinglunshu: 26
      },
      {
        avaImg: '../images/20140825082917_LaGy4.thumb.224_0.jpg',
        name: 'Web山口组',
        time: '2017-1-9',
        text: '二十个令程序员泪流满面的瞬间',
        img: [
          { imgUrl: 'http://oynz95uan.bkt.clouddn.com/20161215110546236.jpg' },
          { imgUrl: 'http://cc.cocimg.com/api/uploads/20170122/1485072081625857.jpg' },
          { imgUrl: 'http://photocdn.sohu.com/20140513/Img399484222.jpg' }
        ],
        dianzanshu: 1208,
        pinglunshu: 272
      },
      {
        avaImg: '../images/20140825082917_LaGy4.thumb.224_0.jpg',
        name: 'Web山口组',
        time: '2017-1-9',
        text: '二十个令程序员泪流满面的瞬间',
        img: [
          { imgUrl: 'http://oynz95uan.bkt.clouddn.com/20161215110546236.jpg' },
          { imgUrl: 'http://cc.cocimg.com/api/uploads/20170122/1485072081625857.jpg' },
          { imgUrl: 'http://photocdn.sohu.com/20140513/Img399484222.jpg' }
        ],
        dianzanshu: 1208,
        pinglunshu: 272
      }, {
        avaImg: '../images/20140825082917_LaGy4.thumb.224_0.jpg',
        name: 'Web山口组',
        time: '2017-1-9',
        text: '二十个令程序员泪流满面的瞬间',
        img: [
          { imgUrl: 'http://oynz95uan.bkt.clouddn.com/20161215110546236.jpg' },
          { imgUrl: 'http://cc.cocimg.com/api/uploads/20170122/1485072081625857.jpg' },
          { imgUrl: 'http://photocdn.sohu.com/20140513/Img399484222.jpg' }
        ],
        dianzanshu: 1208,
        pinglunshu: 272
      }],
      isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
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
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom:function  () {
    // console.log('到底了');
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    setTimeout(()=>{
      this.setData({
        news: this.data.news.concat([{
          avaImg: '../images/img_01.png',
          name: 'AAA教育小助手',
          time: '2017-2-4',
          text: '工资超过1万的已毕业学生来报个到，让我看到你们的双手',
          img: [
            { imgUrl: 'http://oynz95uan.bkt.clouddn.com/20140825082917_LaGy4.thumb.224_0.jpg' },
            { imgUrl: 'http://oynz95uan.bkt.clouddn.com/20161215110546236.jpg' },

            { imgUrl: 'http://oynz95uan.bkt.clouddn.com/5392de935ac3d200.jpg%21200x200.jpg' }
          ],
          dianzanshu: 108,
          pinglunshu: 22
        },
        {
          avaImg: '../images/1.jpg',
          name: '前端大牛',
          time: '2017-2-9',
          text: '征服 JavaScript 面试：什么是闭包',
          img: [
            { imgUrl: 'http://oynz95uan.bkt.clouddn.com/20161215110546236.jpg' },

            { imgUrl: 'http://oynz95uan.bkt.clouddn.com/5392de935ac3d200.jpg%21200x200.jpg' }
          ],
          dianzanshu: 138,
          pinglunshu: 26
        },
        {
          avaImg: '../images/20140825082917_LaGy4.thumb.224_0.jpg',
          name: 'Web山口组',
          time: '2017-1-9',
          text: '二十个令程序员泪流满面的瞬间',
          img: [
            { imgUrl: 'http://oynz95uan.bkt.clouddn.com/20161215110546236.jpg' },
            { imgUrl: 'http://cc.cocimg.com/api/uploads/20170122/1485072081625857.jpg' },
            { imgUrl: 'http://photocdn.sohu.com/20140513/Img399484222.jpg' }
          ],
          dianzanshu: 1208,
          pinglunshu: 272
        }]),
        isShow:false
      });
    },2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})