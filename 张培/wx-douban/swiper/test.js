// new Promise(function (reserve,reject))
// // .then是返回新的实例，后可继续加then
// var p2 = p1.then(function (v) {
//   return 'wo'
// }).then(function (v2) {

// })
// // 好处：每个函数干自己的事，不会崩溃，防止回调地狱
// 把原生的成功和回调函数封装成promise，成功回调res,失败回调rej
// _getStorage(key) {
//  return new Promise(function (resolve,reject) {//res,rej是两个函数型参数，在then方法中进行回调函数
//     wx.getStorage({
//       key:key,
//       success:resolve,
//       fail:reject
//     })
//   })
// }
// getCache() {
  // return new Promise((res.rej) => {
  //     return res(null)//为了调用then
  // })
//   this._getStorage('index_data').then((storage_res) => {
//     // guoqi时间
//     if (过期) {
//        return null;//???
//     }else {
//       return storage_res.data.movies//???
//     }
//   }).catch(function (err) {
//     return null;
//   })
// }

// onLoad:function () {
//   this.getCache().then((result) => {
//         if () {

//         }else {

//         }
//   })
// }

// 原生部分
// resData() {
//   wx.request({//请求
//     // https://api.douban.com/v2/movie/in_theaters
//     url: 'https://api.douban.com/v2/movie/in_theaters',
//     data: {
//       count: 3
//     },
//     header: {
//       'content-type': 'json'
//     },
//     success: (res) => {
//       // console.log('请求成功', res.data)
//       wx.setStorage({
//         key: 'index_data',
//         data: {
//           movies: res.data,
//           expires: Date.now() + 1000 * 60 * 60 * 24
//         }
//       })
//     },
//     fail: (res) => {

//     }
//   })
// },


// 封装逻辑，什么时候获取存的，没有存一下再取

  // // 获取数据,常用页面渲染
  // getCache() {
  //   wx.getStorage({
  //     key: 'index_data',
  //     success: (res) => {
  //       if (res.data.expires < Date.now()) {//过期重新存
  //         this.resData()
  //       } else {
  //         console.log(res.data.movies)
  //       }
  //     },
  //     fail: (res) => {//用户第一次登录
  //       console.log(res)
  //       this.resData()
  //     }
  //   })
  // },
  // onLoad: function (options) {
  //   // this.resData(),
  //   //获取session
  //   this.getCache()
  // }
