//获取应用实例
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    menuitems: [
      { text: '编辑公告', url: '' },
      { text: '修改账户信息', url: '/pages/organization/Mod_UserInfo/Mod_UserInfo' },
      { text: '修改机构信息', url: '/pages/organization/Mod_EduInfo/Mod_EduInfo' },
      { text: '设置课表信息', url: '/pages/organization/Set_Curriculum/Set_Curriculum' },
    ],
    tabBar4: {
      "color": "#9E9E9E",
      "selectedColor": "#228B22",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/organization/Homepage_Organization/Homepage_Organization",
          "text": "资讯",
          "iconPath": "/images/calendar.png",
          "selectedIconPath": "/images/calendar.png",
          "clas": "menu-item1",
          active: false
        },
        {
          "pagePath": "/pages/organization/Curriculum/Curriculum",
          "text": "店面",
          "iconPath": "/images/shop.png",
          "selectedIconPath": "/images/shop.png",
          "clas": "menu-item1",
          active: false
        },
        {
          "pagePath": "/pages/organization/organization",
          "text": "我",
          "iconPath": "/images/user.png",
          "selectedIconPath": "/images/user.png",
          "clas": "menu-item1",
          active: true
        }
      ],
      "position": "bottom"
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (app.globalData.userInfo) {
      that.setUserInfo(app.globalData.userInfo);
    } else if (that.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setUserInfo(res.userInfo);
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          that.setUserInfo(res.userInfo);
        }
      })
    }
  },

  getUserInfo: function (e) {
    this.setUserInfo(e.detail.userInfo);
  },

  setUserInfo: function (userInfo) {
    if (userInfo != null) {
      app.globalData.userInfo = userInfo
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      })
    }
  },

  backIndex: function(e){
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})