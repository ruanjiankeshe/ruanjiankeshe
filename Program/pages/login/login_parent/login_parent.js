Page({
  //定义全局变量data
  data: {
    account: "",
    password: "",

    tabBar2: {
      "color": "#9E9E9E",
      "selectedColor": "#228B22",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/login/login_parent/login_parent",
          "text": "登录",
          "iconPath": "/images/login.png",
          "selectedIconPath": "/images/login.png",
          "clas": "menu-item1",
          active: true
        },
        {
          "pagePath": "/pages/register/register_parent/register_parent",
          "text": "注册",
          "iconPath": "/images/write.png",
          "selectedIconPath": "/images/write.png",
          "clas": "menu-item1",
          active: false
        }
      ],
      "position": "bottom"
    },
  },
  onShow: function () {
  },

  onLoad: function () {
    //加载本页面的tabBar样 
  },

  //处理accountInput的触发事件
  accountInput: function (e) {
    var username = e.detail.value;//从页面获取到用户输入的用户名/邮箱/手机号
    if (username != '') {
      this.setData({ account: username });//把获取到的密码赋值给全局变量Data中的username
    }
  },
  //处理pwdBlurt的触发事件
  pwdBlur: function (e) {
    var pwd = e.detail.value;//从页面获取到用户输入的密码
    if (pwd != '') {
      this.setData({ password: pwd });//把获取到的密码赋值给全局变量Data中的password
    }
  },


  //处理login的触发事件
  login: function (e) {

    wx.request({
      url: 'https://www.hanjz.xyz/ruanjian/userinfo.php',//-------------------连接服务器url
      //定义传到后台的数据
      data: {
        //从全局变量data中获取数据
        action: 'chaxun',
        Uname: this.data.account,
        UPwd: this.data.password,
      },
      method: 'get',//定义传到后台接受的是post方法还是get方法
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log("调用API成功");

        if (res.data.data.login_in == true) {
          wx.showToast({
            title: '登陆成功',
            icon: 'success',
            duration: 2000
          }),
          wx.reLaunch({
            url: '/pages/parents/parents',
          })
        }
        else if (res.data.data.login_in == false) {
          wx.showToast({
            title: '用户名或者密码错误',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function (res) {
        console.log("调用API失败");
      }
    })
  }
})