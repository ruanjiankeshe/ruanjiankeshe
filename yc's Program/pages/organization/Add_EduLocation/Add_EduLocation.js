// pages/organization/Add_EduLocation/Add_EduLocation.js
Page({
  addELInfo:function(e){
    wx.request({
      url: 'https://www.hanjz.xyz/ruanjian/edulocation.php',
      data: {
        action: 'insert',
        ELName: this.data.branch_name,
        EduAddress: this.data.branch_address,
        EduTelephone: this.data.branch_phone,
        EduId: this.data.org_id,

      },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        wx.navigateBack({
          delta: 1
        })
      }
    })
  }
})