export const state = {
    state: {
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
        ]
        
    },
    getters: {
        getMainList: state => state.mainList,
    },
    // mutations,
    // actions,
}

// const state = {
//     mainList: [
//         {
//             id: 1,
//             title:'비타민, 루테인 챙겨먹기',
//             reward:'봄 원피스 사기',
//             rules: [
//                 '점심먹고 먹기',
//                 '인증샷 공유하기',
//                 '하루 깜박하면, 스탬프 하나 회수',
                
//             ],
//             rate: 70,
//         },
//         {
//             id: 2,
//             title:'하루 게임 30분만 하기',
//             reward:'달성시 용돈 오만원 추가',
//             rules: [
//                 '한달간 진행',
//                 '집안일 끝나고 하기',
//                 '주말엔 1시간',
                
//             ],
//             rate: 30,
//         },
//     ]
    
// }
 

// const getters = {
//     storeMainList(state) {
//         return state.mainList;
//     }
// }

// // const mutations = {

// // }

// export default {
//     state,
//     getters,
//     // mutations
// }