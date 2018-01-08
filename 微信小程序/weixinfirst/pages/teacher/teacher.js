// pages/teacher/teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [
      {
        id:1,
        avatar: '../images/teacher2.jpg',
        name: '李静',
        intro: '从事网站设计行业11年,Adobe中国认证设计师,拥有多年Fireworks、Flash、Dreamweaver和Web网站前端授课经验。担任过北京中搜网络技术股份有限公司高级UI设计师职务，负责公司整体网站版面策划、设计与制作。',
        comments: [{
          cname: '嚎叫的小绵羊',
          updateTime: '2017-1-10',
          content: '赞！一切为了学员，为了学员一切！'
        }, {
          cname: '帅雷雷',
          updateTime: '2017-2-14',
          content: 'AAA教育，有梦想一起实现！'
        }, {
          cname: '我是谁',
          updateTime: '2017-2-10',
          content: '嗯，我觉得这个老师不错。'
        }, {
          cname: '淡淡的',
          updateTime: '2012-12-10',
          content: '女神男神们，欢迎来我班找我PK技术，美女尤佳。'
        }, {
          cname: '嚎叫的小绵羊',
          updateTime: '2017-1-10',
          content: '赞！一切为了学员，为了学员一切！'
        }, {
          cname: '帅雷雷',
          updateTime: '2017-2-14',
          content: 'AAA教育，有梦想一起实现！'
        }, {
          cname: '我是谁',
          updateTime: '2017-2-10',
          content: '嗯，我觉得这个老师不错。'
        }, {
          cname: '淡淡的',
          updateTime: '2012-12-10',
          content: '女神男神们，欢迎来我班找我PK技术，美女尤佳。'
        }]
      },
      {
        id:2,
        avatar: '../images/teacher4.jpg',
        name: '蔡水红',
        intro: '7年的web前端开发经验 在公司主要负责网站设计与前端开发 有丰富教学经验；HTML5就业指导专家 ',
        comments: [{
          cname: '我是谁',
          updateTime: '2017-2-10',
          content: '嗯，我觉得这个老师不错。'
        }, {
          cname: '淡淡的',
          updateTime: '2012-12-10',
          content: '女神男神们，欢迎来我班找我PK技术，美女尤佳。'
        }, {
          cname: '嚎叫的小绵羊',
          updateTime: '2017-1-10',
          content: '赞！一切为了学员，为了学员一切！'
        }, {
          cname: '帅雷雷',
          updateTime: '2017-2-14',
          content: 'AAA教育，有梦想一起实现！'
        }, {
          cname: '我是谁',
          updateTime: '2017-2-10',
          content: '嗯，我觉得这个老师不错。'
        }]
      },
      {
        id:3,
        avatar: '../images/teacher1.jpg',
        name: '江山',
        intro: '北京大学 软件工程硕士，8年互联网开发制作经验。上市集团核心移动研发团队成员，有丰富教学经验。IT行业就业指导专家，中科院国家信息安全重点实验室项目组长',
        comments: [{
          cname: '淡淡的',
          updateTime: '2012-12-10',
          content: '女神男神们，欢迎来我班找我PK技术，美女尤佳。'
        }, {
          cname: '我是谁',
          updateTime: '2017-2-10',
          content: '嗯，我觉得这个老师不错。'
        }, {
          cname: '嚎叫的小绵羊',
          updateTime: '2017-1-10',
          content: '赞！一切为了学员，为了学员一切！'
        }, {
          cname: '帅雷雷',
          updateTime: '2017-2-14',
          content: 'AAA教育，有梦想一起实现！'
        }, {
          cname: '我是谁',
          updateTime: '2017-2-10',
          content: '嗯，我觉得这个老师不错。'
        }]
      },
      {
        id:4,
        avatar: '../images/teacher3.jpg',
        name: '李方园',
        intro: '业内6余年工作经验，资深互联网行业软件技术开发人士；有丰富教学经验  IT行业就业指导专家',
        comments: [{
          cname: '淡淡的',
          updateTime: '2012-12-10',
          content: '女神男神们，欢迎来我班找我PK技术，美女尤佳。'
        }, {
          cname: '嚎叫的小绵羊',
          updateTime: '2017-1-10',
          content: '赞！一切为了学员，为了学员一切！'
        }, {
          cname: '帅雷雷',
          updateTime: '2017-2-14',
          content: 'AAA教育，有梦想一起实现！'
        }, {
          cname: '我是谁',
          updateTime: '2017-2-10',
          content: '嗯，我觉得这个老师不错。'
        }]
      },
      {
        id:5,
        avatar: '../images/20161215110546236.jpg',
        name: '穆梅',
        intro: '曾任职中企动力设计服务运营总监，业内10余年工作经验，资深互联网行业产品运营人士。曾举办2届“十佳设计师大赛”活动，提升千余名设计师综合设计能力',
        comments: [{
          cname: '淡淡的',
          updateTime: '2012-12-10',
          content: '女神男神们，欢迎来我班找我PK技术，美女尤佳。'
        }, {
          cname: '嚎叫的小绵羊',
          updateTime: '2017-1-10',
          content: '赞！一切为了学员，为了学员一切！'
        }, {
          cname: '帅雷雷',
          updateTime: '2017-2-14',
          content: 'AAA教育，有梦想一起实现！'
        }, {
          cname: '我是谁',
          updateTime: '2017-2-10',
          content: '嗯，我觉得这个老师不错。'
        }
        ]
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({

      detail: this.data.detail.filter(function (v, i, a) {
        return v.id == (options.id)
      })
    })
    // console.log(options.id, this.data.detail)
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