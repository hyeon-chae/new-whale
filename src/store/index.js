import { createStore } from 'vuex'
// import { mutations } from "./mutations"
// import { mainList } from './mainList/index'

export default createStore({
  state: {
    userName:'김고래',
    mainList: [
            {
                id: 1,
                title:'비타민, 루테인 챙겨먹기',
                reward:'봄 원피스 사기',
                rules: [
                    '점심먹고 먹기',
                    '인증샷 공유하기',
                    '하루 깜박하면, 스탬프 하나 회수',
                    
                ],
                rate: 70,
            },
            {
                id: 2,
                title:'하루 게임 30분만 하기',
                reward:'달성시 용돈 오만원 추가',
                rules: [
                    '한달간 진행',
                    '집안일 끝나고 하기',
                    '주말엔 1시간',
                    
                ],
                rate: 30,
            },
            {
                id: 3,
                title:'주2회 이상 운동하기',
                reward:'1kg 감량당 1만원',
                rules: [
                    '삼개월동안 진행',
                    '1시간은 하기',
                    '인증샷 보내기',
                    
                ],
                rate: 100,
            },
        ]
  },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    // mainList,
  },
  getters: {
    getMainList: state => state.mainList,
  },
  // mutations,
})
