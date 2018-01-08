const app = getApp();
var url = 'https://api.douban.com/v2/movie/in_theaters';
Page({
  data: {
    imgUrls: [],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    isShow:false
  }, 
  // 请求并存数据
  resData() {
    app.wxAPI.getNetJson(url, { count: 3 }).then((res) => {
      app.wxAPI.setStorage('index_data',res.data)
      
    }, function (rej) {
      console.log(rej)
    })
  },
 
 onLoad: function (options) {
   app.wxAPI.getStorage('index_data').then((res) => {
     if (res.data.expires < Date.now()) {//过期重新存
       this.resData()
     } else {
      //  console.log(res.data.movies.subjects)
       this.setData({
         imgUrls: res.data.movies.subjects
      })
     }
   },(err) => {
     this.resData()
   })
  },
  showBtn(e) {
    // console.log(e.detail.current)
    if (e.detail.current === this.data.imgUrls.length-1) {
      this.setData({
        isShow:true
      })
    } else {
      this.setData({
        isShow: false
      })
    }
  }

})