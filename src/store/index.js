import { createStore } from 'vuex'
// import { mutations } from "./mutations"
// import { mainList } from './mainList/index'

export default createStore({
  state: {
    userName:'김고래',
    mainList: [
            {
              title:'비타민, 루테인 챙겨먹기',
              reward:'봄 원피스 사기',
              rules: [
                  '점심먹고 먹기',
                  '인증샷 공유하기',
                  '하루 깜박하면, 스탬프 하나 회수',
                  
              ],
              totalRate: 70,
              basicStamp: 10,
              group: [
                {
                  name: '김하루',
                  rate: 70,
                  activeStamp: 7,
                  active: false,
                },
              ]
            },
            {
              title:'하루 게임 30분만 하기',
              reward:'달성시 용돈 오만원 추가',
              rules: [
                  '한달간 진행',
                  '집안일 끝나고 하기',
                  '주말엔 1시간',
                  
              ],
              totalRate: 30,
              basicStamp: 20,
              group: [
                {
                  name: '김봄',
                  rate: 70,
                  activeStamp: 7,
                  active: false,
                },
                {
                  name: '김여름',
                  rate: 70,
                  activeStamp: 7,
                  active: false,
                },
              ]
            },
            {
              title:'주2회 이상 운동하기',
              reward:'1kg 감량당 1만원',
              rules: [
                  '삼개월동안 진행',
                  '1시간은 하기',
                  '인증샷 보내기',
                  
              ],
              totalRate: 100,
              basicStamp: 90,
              group: [
                {
                  name: '김내일',
                  rate: 100,
                  activeStamp: 90,
                  active: false,
                },
              ]
            },
            {
              title:'주1회 강아지 목욕',
              reward:'용돈 1만원',
              rules: [
                  '매주 토요일 저녁에 하기',
                  '깨끗하게 씻기기',
                  '털까지 바싹 말리고 간식주기', 
              ],
              totalRate: 40,
              basicStamp: 10,
              group: [
                {
                  name: '김산',
                  rate: 50,
                  activeStamp: 5,
                  active: false,
                },
                {
                  name: '김들',
                  rate: 30,
                  activeStamp: 3,
                  active: false,
                },
                {
                  name: '김강',
                  rate: 40,
                  activeStamp: 4,
                  active: false,
                },
              ]
            },
            {
              title:'인터넷 강의 하루 30분 이상 듣고, 10분 문제 풀기',
              reward:'완강시 스테이크 먹으러 가기',
              rules: [
                  '주말 2틀 중 하루로 몰아 듣기 가능',
                  '지하철 이동시간 활용가능',
                  '',
                  
              ],
              totalRate: 100,
              basicStamp: 30,
              group: [
                {
                  name: '김모레',
                  rate: 100,
                  activeStamp: 30,
                  active: false,
                },
              ]
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
