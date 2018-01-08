function getStorage(key){
  return new Promise(function (resolve, reject) {
    wx.getStorage({
      key: key,
      success: resolve,
      fail: reject
    });
  });
};

function getNetJson(url, params){
    return new Promise(function(resolve, reject){
      wx.request({
        url: url,
        data: params,
        header: {
          'content-type': 'json' // 默认值
        },
        success:resolve,
        fail: reject
      });
    }); 
};


module.exports = {
  getStorage,
  getNetJson
};
