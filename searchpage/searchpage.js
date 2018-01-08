// pages/searchpage/searchpage.js
let app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
        searchfocus:false,
        SearchCity:[
              {
                    CityEn:'A',
                    City:[
                          {
                                id:'010',
                                txt:'安徽'
                          },
                          {
                                id:'021',
                                txt:'安阳'
                          },
                          {
                                id: '999',
                                txt: 'a....'
                          }
                    ],
              },
              {
                    CityEn: 'B',   
                    City:[
                          {
                                id:'321',
                                txt:'北京'
                          },
                         
                    ]
              },
              {
                    CityEn: 'C',
                    City: [
                          {
                                id: '43',
                                txt: '承德'
                          },
                          {
                                id: '488',
                                txt: '成都'
                          },
                          {
                                id: '000',
                                txt: '重庆'
                          },

                    ]
              },
              {
                    CityEn: 'D',
                    City: [
                          {
                                id: '43',
                                txt: '承德'
                          },
                          {
                                id: '488',
                                txt: '成都'
                          },
                          {
                                id: '000',
                                txt: '重庆'
                          },

                    ]
              },
              {
                    CityEn: 'E',
                    City: [
                          {
                                id: '43',
                                txt: '承德'
                          },
                          {
                                id: '488',
                                txt: '成都'
                          },
                          {
                                id: '000',
                                txt: '重庆'
                          },

                    ]
              },
              {
                    CityEn: 'F',
                    City: [
                          {
                                id: '43',
                                txt: '承德'
                          },
                          {
                                id: '488',
                                txt: '成都'
                          },
                          {
                                id: '000',
                                txt: '重庆'
                          },

                    ]
              },
              {
                    CityEn: 'G',
                    City: [
                          {
                                id: '43',
                                txt: '承德'
                          },
                          {
                                id: '488',
                                txt: '成都'
                          },
                          {
                                id: '000',
                                txt: '重庆'
                          },
                          {
                                id: '43',
                                txt: '承德'
                          },
                          {
                                id: '488',
                                txt: '成都'
                          },
                          {
                                id: '000',
                                txt: '重庆'
                          },
                          {
                                id: '43',
                                txt: '承德'
                          },
                          {
                                id: '488',
                                txt: '成都'
                          },
                          {
                                id: '000',
                                txt: '重庆'
                          },

                    ]
              },
        ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //右侧按钮-左侧滑动
  into(e){
        console.log(e);
        this.setData({
            into:e.target.dataset.en
        });
        wx.showToast({
              title: e.target.dataset.en,
              icon: 'success',
              duration: 2000
        })
  },
  BackTxt(e){
        app.globalData.ThisCity = e.currentTarget.dataset.txt;
        console.log(e)
        wx.navigateBack({
              delta:1,
        });
      
  },
  BackTxt2(e){
        app.globalData.ThisJG = e.currentTarget.dataset.txt;
        console.log(e)
        wx.navigateBack({
              delta: 1,
        });
  },
  BackTxt3(e) {
        app.globalData.ThisStu = e.currentTarget.dataset.txt;
        console.log(e)
        wx.navigateBack({
              delta: 1,
        });
  },
  BackTxt4(e) {
        app.globalData.ThisTea = e.currentTarget.dataset.txt;
        console.log(e)
        wx.navigateBack({
              delta: 1,
        });
  },
  onLoad: function (e) {
        console.log(e);
            this.setData({
                  searchindex:e.SearchIndex,
                  city:e.ThisCity,
            });

            wx.getSystemInfo({
                  success:res=>{
                     
                        this.setData({
                              windowWidth: res.windowWidth,
                              windowHeight: res.windowHeight
                        });
                  }
            })

          
  

  },
      searchfocus(e){
            this.setData({
                  searchfocus:true
            });
      },
      searchblur(e){
            this.setData({
                  searchfocus: false
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