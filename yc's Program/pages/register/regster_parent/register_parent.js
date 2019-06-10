// pages/register/register_parent/register_parent.js
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
    parent_name: "", //家长姓名
    phone_num: "", //联系方式
    stu_name: "", //学生姓名
    stu_bornDate: '2000-01-01',//学生出生日期
    stu_bornYear: "", //学生出生年
    stu_bornMonth: "", //学生出生月
    array1: ['男', '女'],
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
    stu_sex: 0,
    // date:'2016-09-01',
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
          active: false
        },
        {
          "pagePath": "/pages/register/register_parent/register_parent",
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
  //获得家长姓名
  parentNameInput: function (e) {
    var p_name = e.detail.value;
    if (p_name != '') {
      this.setData({ parent_name: p_name });
    }
  },
  //获得联系方式
  phoneNumInput: function (e) {
    var num = e.detail.value;
    if (num != '') {
      this.setData({ phone_num: num });
    }
  },
  //获得学生姓名
  studentNameInput: function (e) {
    var s_name = e.detail.value;
    if (s_name != '') {
      this.setData({ stu_name: s_name });
    }
  },

  //获得学生性别
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
  //获得学生出生日期-选择日期触发事件
  stuBornDateInput: function (e) {
    var s_date = this.detail.value;
    if (s_date != '') {
      splitDate(s_date),
      this.setData({ 
        stu_bornDate: s_date,
      })
    }
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      stu_bornDate: e.detail.value,
      
    })
  },
  //分离年月
  splitDate: function (stu_bornDate){
    var strArray = stu_bornDate.split("-");
    for (var i = 0; i < strArray.length; i++) {
      console.log(" " + strArray[i] + " ")
    }
    var s_year = strArray[0];
    var s_month = strArray[1];
    this.setData({
      stu_bornYear: s_year,
      stu_bornMonth: s_month
    })
  },
  //处理register的触发事件
  register: function (e) {
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
      url: 'https://www.hanjz.xyz/ruanjian/parentinfo.php',
      //定义传到后台的数据
      data: {
        //从全局变量data中获取数据
        action: 'insert',
        PName: this.data.parent_name,
        PTelephone: this.data.phone_num,
        StuName: this.data.stu_name,
        StuSex: this.data.stu_sex,
        StuBYear: this.data.stu_bornYear,
        StuBMonth: this.data.stu_bornMonth,
        UId: 5
      },
      method: 'get',//定义传到后台接受的是post方法还是get方法
      success: function (res) {
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
          url: '/pages/login/login_parent/login_parent'　　// 注册成功，跳转到登陆页面
        })
      },
      fail: function (res) {
        console.log("调用API失败");
      }
    })
  }
})