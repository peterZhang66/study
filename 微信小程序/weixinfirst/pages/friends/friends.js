// pages/friends/friends.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teachers: [
      {
        id: 1,
        avatar: '../images/teacher2.jpg',
        name: '李静',
        haoping: 99,
        yanzhi: 92,
        xueke: 1,
        intro: '从事网站设计行业11年,Adobe中国认证设计师,拥有多年Fireworks、Flash、Dreamweaver和Web网站前端授课经验。担任过北京中搜网络技术股份有限公司高级UI设计师职务，负责公司整体网站版面策划、设计与制作。'
      },
      {
        id: 2,
        avatar: '../images/teacher4.jpg',
        name: '蔡水红',
        haoping: 98,
        yanzhi: 95,
        xueke: 1,
        intro: '7年的web前端开发经验 在公司主要负责网站设计与前端开发 有丰富教学经验；HTML5就业指导专家 '
      },
      {
        id: 3,
        avatar: '../images/teacher1.jpg',
        name: '江山',
        haoping: 100,
        yanzhi: 100,
        xueke: 3,
        intro: '北京大学 软件工程硕士，8年互联网开发制作经验。上市集团核心移动研发团队成员，有丰富教学经验。IT行业就业指导专家，中科院国家信息安全重点实验室项目组长'
      },
      {
        id: 4,
        avatar: '../images/teacher3.jpg',
        name: '李方园',
        haoping: 96,
        yanzhi: 90,
        xueke: 3,
        intro: '业内6余年工作经验，资深互联网行业软件技术开发人士；有丰富教学经验  IT行业就业指导专家'
      },
      {
        id: 5,
        avatar: '../images/20161215110546236.jpg',
        name: '穆梅',
        haoping: 96,
        yanzhi: 92,
        xueke: 2,
        intro: '曾任职中企动力设计服务运营总监，业内10余年工作经验，资深互联网行业产品运营人士。曾举办2届“十佳设计师大赛”活动，提升千余名设计师综合设计能力'
      }
    ],
    active:'',
    filter:{}
  
  
  },
  teacherDetail: function (e) {
    
    var tid = e.currentTarget.id;
   

    wx.navigateTo({
      url: '../teacher/teacher?id='+tid
    })
  },
  change(e) {

    var cname = e.currentTarget.dataset.sort;
    var newFilter = {
      'zhineng':'',
      'good':'',
      'data':'',
      'small':'',
    }
    

    switch (cname) {
      case 'zhineng':
     var newArr =  this.data.teachers.sort(function (a,b) {
        return a.id - b.id
      });
     newFilter[cname] = 'active';
      this.setData({
        active:'active',
        teachers:newArr,
        filter:newFilter
      })
      break;
      case 'good':
        var newArr = this.data.teachers.sort(function (a, b) {
          return (a.haoping - b.haoping)
        });
        newFilter[cname] = 'active';
        this.setData({
          active: 'active',
          teachers: newArr,
          filter: newFilter
        })
        break;
      case 'data':
        var newArr = this.data.teachers.sort(function (a, b) {
          return (a.xueke - b.xueke)
        })
        newFilter[cname] = 'active';
        console.log(newFilter)
        this.setData({
          active: 'active',
          teachers: newArr,
          filter: newFilter
        })
        break;
      case 'Smile':
        var newArr = this.data.teachers.sort(function (a, b) {
          return (a.yanzhi - b.yanzhi)
        })
        newFilter[cname] = 'active';
        this.setData({
          active: 'active',
          teachers: newArr,
          filter: newFilter
        })
        break;

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
  }
})