const { a } = require("../../utils/common.js") 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrs:[
      1,
      2,
      3
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    console.log("onLoad",a)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成 onmouted
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
    this.setData({
      arrs:[4,5,6]
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(()=>{
      wx.hideLoading()
      this.setData({
        arrs: [...this.data.arrs, ...[4, 5, 6]]
      })
    },2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  }
})