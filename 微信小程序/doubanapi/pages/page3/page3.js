var  app = getApp();
Page({
  data: {
    urlName : '',
    movies: [],
    nowPage: 1,
    total: 0,
    netToggle: true
  },
  getCache() {
    return new Promise((resolve, reject) => {
      app.wxapis.getStorage('list_data_' + this.data.urlName).then((storage_res) => {
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
  // 用来获取请求网络数据,
  getNetworkData() {
    var url = "https://api.douban.com/v2/movie/" + this.data.urlName ;
    var start = (this.data.nowPage - 1) * 20; 
    console.log(url);
    app.wxapis.getNetJson(url, { count: 20 , start: start}).then((res) => {
      console.log('进行了网络请求');
      wx.setStorage({
        key: 'list_data_' + this.data.urlName,
        data: {
          movies: this.data.movies.concat(res.data.subjects),
          total: res.data.total,
          expires: Date.now() + 1000 * 60 * 60 * 24
        },
      });
      this.setData({
        movies: this.data.movies.concat(res.data.subjects),
        total: res.data.total,
      });
    }).catch(function (err) {
      console.log(err);
    });

  },
  onLoad:function(options){
  
    this.setData({
      urlName: options.requesturl
    });
    
    this.getCache().then((result) => {
      if (!result) {
        //没结果
        this.getNetworkData();
      } else {
        this.setData({
          movies: result
        });
      }
     
    }).catch((err) => {
      this.getNetworkData();
    });

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      var end = this.data.nowPage*20 ;  //total 37   1 2 end : 40
     
      if (this.data.netToggle){
        this.setData({
          nowPage: ++this.data.nowPage
        });
        this.getNetworkData();
      }
      if(end> this.data.total){
        this.data.netToggle = false;
      }
   

  },

})