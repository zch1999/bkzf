//index.js
const app = getApp()
const db = wx.cloud.database();
const productsCollection = db.collection("products");
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    products: [],
    imgUrls:[
      '/images/index_swiper_image/1111.jpg',
      '/images/index_swiper_image/haiwai.jpg'
    ],
    // background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: false,
    // vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },
  swipclick() {//点击图片触发事件
    wx.navigateTo({
      url: '/pages/messages/messages'
    })
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad() {
    productsCollection
      .get()
      .then(res => {
        this.setData({
          products: res.data
        })
      })
    }
})
