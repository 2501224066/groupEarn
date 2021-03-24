Page({
  data: {
    tab: null,
    list: [{
        title: "拼团的商品质量是否有保障？",
        content: "因为所以，不知可"
      },
      {
        title: "怎样在系统中查看自己是否拼中商品？",
        content: "央视记者提问：中美高层战略对话举行在即，此次对话是拜登政府就职后双方高层首次面对面沟通。您认为对话对未来中美关系走向将起到什么"
      },
    ]
  },

  // 点击
  setTab(e) {
    console.log(e)
    this.setData({
      tab: this.data.tab == e.currentTarget.dataset.index ? null : e.currentTarget.dataset.index
    })
  }
})
