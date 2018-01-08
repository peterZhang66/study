var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: []
  },
  

  getCache(){
      return new Promise((resolve, reject)=>{
        app.wxapis.getStorage('index_data').then((storage_res) => {
          // console.log(storage_res);
          if (storage_res.data.expires < Date.now()) {
            // 因为已经过期,所以你调用的结果是null
            return resolve(null);
          } else {
            return resolve(storage_res.data.movies);
          }
        }).catch(function (err) {
          return resolve(null);
        });
      });
    
    
  },
 getCache() {
   return new Promise((resolve,reject) => {
     app.wxapis.getStorage('index_data').then((storage_res) =>{
       if (storage_res.data.expires < Date.now()) {
         return resolve(null);
       }else{
         return resolve(storage_res.data.movies);
       }
     }).catch(function(err) {
       return resolve(null);
     })
   })
 },
  // 用来获取请求网络数据,
  getNetworkData(){
    var url = "https://api.douban.com/v2/movie/coming_soon";
    app.wxapis.getNetJson(url, { count: 3}).then((res)=>{
        wx.setStorage({
          key: 'index_data',
          data: {
            movies: res.data.subjects,
            expires: Date.now() + 1000 * 60 * 60 * 24
          },
        });
        this.setData({
          movies: res.data.subjects
        });
    }).catch(function(err){
      console.log(err);
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
            movies: result
          });
        }
        console.log(this.data.movies);
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