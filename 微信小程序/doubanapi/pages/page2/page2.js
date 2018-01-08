// pages/page2/page2.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      all_info: [{
        title:'',
        requestUrl: 'in_theaters'
      },{
        title: "正在上映的电影-北京",
        requestUrl: 'coming_soon'
        // movies: []
      },{
          title: "口碑榜 - 北京",
          requestUrl: 'us_box'
      },{
          title:"Top250 - 北京",
          requestUrl: 'top250'
      }]
  },
  getCache() {

    return new Promise((resolve, reject) => {
      app.wxapis.getStorage('board_data').then((storage_res) => {
        // console.log(storage_res);
        if (storage_res.data.expires < Date.now()) {
          // 因为已经过期,所以你调用的结果是null
          return resolve(null);
        } else {
          return resolve(storage_res.data.all_info);
        }
      }).catch(function (err) {
        return resolve(null);
      });
    });
  },
  // 用来获取请求网络数据,
  getNetworkData() {
    var promises = this.data.all_info.map(function(info){
      var url = "https://api.douban.com/v2/movie/" + info.requestUrl;
      return app.wxapis.getNetJson(url, { count: 10 }).then((res) => {
        console.log('进行了一次网络请求');
          info.movies = res.data.subjects;
          return info; 
      });
    });
    
    Promise.all(promises).then((infos)=>{
      console.log(infos);
      wx.setStorage({
        key: 'board_data',
        data: {
          all_info: infos,
          expires: Date.now() + 1000 * 60 * 60 * 24
        },
      });
      this.setData({
        all_info: infos
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getCache();
    this.getCache().then((result) => {
      if (!result) {
        //没结果
        this.getNetworkData();
      } else {
        this.setData({
          all_info: result
        });
      }
    }).catch((err) => {
      this.getNetworkData();
    });
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
    this.getNetworkData();
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