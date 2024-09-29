export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://picsum.photos/1100/500',
        id: '1'
      },
      {
        title: 'Second ad',
        description: 'Hello i am description',
        promo: false,
        imageSrc: 'https://picsum.photos/1000/680',
        id: '2'
      },
      {
        title: 'Third ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://picsum.photos/1200/600',
        id: '3'
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd({ commit }, payload) {
      payload.id = '777'

      commit('createAd', payload)
    }
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter((ad) => {
        return ad.promo
      })
    },
    myAds(state) {
      return state.ads
    },
    adById(state) {
      return (adId) => {
        return state.ads.find((ad) => ad.id === adId)
      }
    }
  }
}
