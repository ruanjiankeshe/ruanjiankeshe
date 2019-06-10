// pages/register/register_organization/register_organization.js
Page({

  /**
   * 页面的初始数据
   * data为全局变量
   */
  data: {
    account: "",//账户
    password: "",//密码
    phone: "",
    email: "",
    tea_name: "", //名称
    tea_age: "", //
    tea_limit: "",//从教年限
    min_age: "", //教育适合最低年龄
    max_age: "", //教育适合最高年龄
    tea_id: "", //身份证号
    tea_phone: "",
    tea_info: "", //简介
    array1: ['男', '女'],
    tea_sex: 0,
        objectArray: [
      {
        id: 0,
        name: '男'
      },
      {
        id: 1,
        name: '女'
      }
    ],
    tabBar3: {
      "color": "#9E9E9E",
      "selectedColor": "#228B22",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/login/login_teacher/login_teacher",
          "text": "登录",
          "iconPath": "/images/login.png",
          "selectedIconPath": "/images/login.png",
          "clas": "menu-item1",
          active: false
        },
        {
          "pagePath": "/pages/register/register_teacher/register_teacher",
          "text": "注册",
          "iconPath": "/images/write.png",
          "selectedIconPath": "/images/write.png",
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

  },

  //处理accountInput的触发事件
  accountInput: function (e) {
    var username = e.detail.value;//从页面获取到用户输入的用户名/邮箱/手机号
    if (username != '') {
      this.setData({ account: username });//把获取到的密码赋值给data中的password
    }
  },
  //处理pwdBlur的触发事件
  pwdBlur: function (e) {
    var pwd = e.detail.value;//从页面获取到用户输入的密码
    if (pwd != '') {
      this.setData({ password: pwd });//把获取到的密码赋值给date中的password
    }
  },
  //获得绑定电话
  phoneInput: function (e) {
    var p = e.detail.value;
    if (p != '') {
      this.setData({ phone: p });
    }
  },
  //获得绑定邮箱
  emailInput: function (e) {
    var em = e.detail.value;
    if (em != '') {
      this.setData({ email: em });
    }
  },
  //获得教师名称
  teaNameInput: function (e) {
    var t_name = e.detail.value;
    if (t_name != '') {
      this.setData({ tea_name: t_name });
    }
  },
  //获得教师性别
  teaSexInput: function (e) {
    var t_sex = e.detail.value;
    if (t_sex != '') {
      this.setData({ tea_sex: t_sex });
    }
  },
  bindsexChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      tea_sex: e.detail.value
    })
  },
  //获得教师年龄
  teaAgeInput: function (e) {
    var t_age = e.detail.value;
    if (t_age != '') {
      this.setData({ tea_age: t_age });
    }
  },
  //获得教师从教年限
  teaTimeInput: function (e) {
    var t_time = e.detail.value;
    if (t_time != '') {
      this.setData({ tea_time: t_time });
    }
  },
  //获得教师身份证号
  teaIdInput: function (e) {
    var t_id = e.detail.value;
    if (t_id != '') {
      this.setData({ tea_id: t_id });
    }
  },
  //获得教师联系方式
  teaPhoneInput: function (e) {
    var t_phone = e.detail.value;
    if (t_phone != '') {
      this.setData({ tea_phone: t_phone });
    }
  },
  //获得教师简介
  teaInfoInput: function (e) {
    var t_info = e.detail.value;
    if (t_info != '') {
      this.setData({ tea_info: t_info });
    }
  },
  //获得教育最低教育适合年龄
  minAgeInput: function (e) {
    var min_a = e.detail.value;
    if (min_a != '') {
      this.setData({ min_age: min_a });
    }
  },
  //获得教育最高教育适合年龄
  maxAgeInput: function (e) {
    var max_a = e.detail.value;
    if (max_a != '') {
      this.setData({ max_age: max_a });
    }
  },

  //处理register的触发事件
  register: function (e) {
    wx.request({
      url: 'https://www.hanjz.xyz/ruanjian/TeaRegis.php',
      data: {
        action: 'insert',
        TeaName: this.data.tea_name,
        TeaSex: this.data.tea_sex,
        TeaAge: this.data.tea_age,
        TeaTime: this.data.tea_time,
        TeaIdCard: this.data.tea_id,
        TeaTelephone: this.data.tea_phone,
        TeaIntro: this.data.tea_info,
        LTeaForAge: this.data.min_age,
        HTeaForAge: this.data.max_age,
        UId: 1,
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
      }
    })
    wx.request({
      url: 'https://www.hanjz.xyz/ruanjian/userinfo.php',
      data: {
        action: 'insert',
        Uname: this.data.account,
        UPwd: this.data.password,
        UPhone: this.data.phone,
        UEmail: this.data.email,
        UState: 1,
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
      }
    })
    
    wx.request({
      url: 'https://www.hanjz.xyz/ruanjian/teainfo.php',
      data: {
        action: 'insert',
        TeaName: this.data.tea_name,
        TeaSex: this.data.tea_sex,
        TeaAge: this.data.tea_age,
        TeaTime: this.data.tea_time,
        TeaIdCard: this.data.tea_id,
        TeaTelephone: this.data.tea_phone,
        TeaIntro: this.data.tea_info,
        LTeaForAge: this.data.min_age,
        HTeaForAge: this.data.max_age,
        UId: 1,
        TeaUrl:'hanjz'
      },
      method: 'GET', 
      success: function (res) {
        console.log(res.data);
        console.log("调用API成功");
        // if (res.data.message == "ok") {
          wx.showToast({
            title: '注册成功',
            icon: 'success',
            duration: 2000
          })
       // }
        // else {
        //   wx.showToast({
        //     title: '注册失败',
        //     icon: 'none',
        //     duration: 2000
        //   })
        // }
        wx.reLaunch({
          url: '/pages/login/login_teacher/login_teacher'　　// 注册成功，跳转到登陆页面
        })
      },
      fail: function (res) {
      console.log("调用API失败");
    }
    })
  }
})