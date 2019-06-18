// pages/register/register_organization/register_organization.js
Page({

  /**
   * 页面的初始数据
   * data为全局变量
   */
  data: {
    phoneif: "",
    emailif: "",
    //o_idif:"",

    account: "",//账户
    password: "",//密码
    phone: "",
    email: "",
    org_name: "", //名称
    // org_field: "", //教育领域
    org_id: "", //标识码
    min_age: "", //教育适合最低年龄
    max_age: "", //教育适合最高年龄
    branch_name: "", //分店名字
    branch_address: "", //店面地址
    branch_phone: "", //联系方式
    org_info: "", //简介
    course_direction: "",//课程方向
    array1: ['其他', '中学教育', '音乐', '美术', '基础教育'],
    objectArray: [
      {
        id: 0,
        name: '其他'
      },
      {
        id: 1,
        name: '中学教育'
      },
      {
        id: 2,
        name: '音乐'
      },
      {
        id: 3,
        name: '美术'
      },
      {
        id: 4,
        name: '基础教育'
      }
    ],
    org_field: 0,
    tabBar1: {
      "color": "#9E9E9E",
      "selectedColor": "#228B22",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/login/login_organization/login_organization",
          "text": "登录",
          "iconPath": "/images/login.png",
          "selectedIconPath": "/images/login.png",
          "clas": "menu-item1",
          active: false
        },
        {
          "pagePath": "/pages/register/register_organization/register_organization",
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
      this.setData({ phone: p,phoneif: p });
    }
  },
  //获得绑定邮箱
  emailInput: function (e) {
    var em = e.detail.value;
    var reg = /^1[3456789]\d{9}$/;
    if (!reg.test(this.data.phoneif)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      })
    }
    if (em != '') {
      this.setData({ email: em, emailif: em });
    }
  },
  //获得教育机构名称
  orgNameInput: function (e) {
    var o_name = e.detail.value;
    var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    if (!reg.test(this.data.emailif)) {
      wx.showToast({
        title: '请输入正确的邮箱',
        icon: 'none'
      })
    }
    if (o_name != '') {
      this.setData({ org_name: o_name });
    }
  },
  //获得教育领域
  orgFieldInput: function (e) {
    var o_field = e.detail.value;
    if (o_field != '') {
      this.setData({ org_field: o_field });
    }
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      org_field: e.detail.value
    })
  },
  //获得标识码
  orgIdInput: function (e) {
    var o_id = e.detail.value;
    if (o_id != '') {
      this.setData({ org_id: o_id,  });
    }
    // if (o_idif.length != 8) {
    //   wx.showToast({
    //     title: '请输入正确的标识码',
    //     icon: 'none'
    //   })
    // }
  },
  //获得最低教育年龄
  minAgeInput: function (e) {
    var min_a = e.detail.value;

    if (min_a != '') {
      this.setData({ min_age: min_a });
    }
  },
  //获得最高教育年龄
  maxAgeInput: function (e) {
    var max_a = e.detail.value;
    if (max_a != '') {
      this.setData({ max_age: max_a });
    }
  },
  //获得分店名字
  branchNameInput: function (e) {
    var b_name = e.detail.value;
    if (b_name != '') {
      this.setData({ branch_name: b_name });
    }
  },
  //获得分店店面地址
  branchAddrInput: function (e) {
    var b_addr = e.detail.value;
    if (b_addr != '') {
      this.setData({ branch_address: b_addr });
    }
  },
  //获得分店联系方式
  branchPhoneInput: function (e) {
    var b_phone = e.detail.value;
    if (b_phone != '') {
      this.setData({ branch_phone: b_phone });
    }
  },
  //获得简介
  orgInfoInput: function (e) {
    var o_info = e.detail.value;
    if (o_info != '') {
      this.setData({ org_info: o_info });
    }
  },
  //获得课程方向
  courseDirectionInput: function (e) {
    var c_direction = e.detail.value;
    if (c_direction != '') {
      this.setData({ course_direction: c_direction });
    }
  },

  //处理register的触发事件
  register: function (e) {
    wx.request({
      url: 'https://www.hanjz.xyz/ruanjian/eduregis.php',
      data: {
        action: 'insert',
        EduId: this.data.org_id,
        EduIntro: this.data.org_info,
        LEduForAge: this.data.min_age,
        HEduForAge: this.data.max_age,
        UId: 1,
        TeaField: this.data.org_field,
        EduName: this.data.org_name,
        ELName: this.data.branch_name,
        EduAddress: this.data.branch_address,
        EduTelephone: this.branch_phone,
        EduId: this.org_id,
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
      url: 'https://www.hanjz.xyz/ruanjian/edulocation.php',
      data: {
        action: 'insert',
        ELName: this.data.branch_name,
        EduAddress: this.data.branch_address,
        EduTelephone: this.branch_phone,
        EduId: this.org_id,
        EduUrl: 'hanjz',
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
      }
    })
    wx.request({
      url: 'https://www.hanjz.xyz/ruanjian/eduinfo.php',
      data: {
        action: 'insert',
        EduId: this.data.org_id,
        EduIntro: this.data.org_info,
        LEduForAge: this.data.min_age,
        HEduForAge: this.data.max_age,
        UId: 1,
        TeaField: this.data.org_field,
        EduName: this.data.org_name,
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        console.log("调用API成功");
        // if (res.data.message == "ok") {
        wx.showToast({
          title: '注册成功',
          icon: 'success',
          duration: 3000
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
          url: '/pages/login/login_organization/login_organization'　　// 注册成功，跳转到登陆页面
        })
      },
      fail: function (res) {
        console.log("调用API失败");
      }
    })
  }
})