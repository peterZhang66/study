// 全局获取数据缓存
function getStorage(key) {
 return new Promise((resolve,reject) =>  {//res,rej是两个函数型参数，在then方法中进行回调函数
    wx.getStorage({
      key:key,
      success:resolve,
      fail:reject
    })
  })
};
// 全局保存数据缓存
function setStorage(key,data) {
  return new Promise((resolve,reject) => {
    wx.setStorage({
      key,
      data: {
        movies: data,//data
        expires: Date.now() + 1000 * 60 * 60 * 24
      }
    })
  })
};
//全局网络请求数据
function getNetJson (url,data) {
  return new Promise((resolve,reject) => {//???this指向可能出错
    wx.request({
      url: url,
      data: data,
      header: {
        'content-type': 'json'
      },
      success:resolve,
      fail:reject
    })
  }) 
};

module.exports = {//app.wxAPI.get...调用
  getStorage,
  getNetJson,
  setStorage
}