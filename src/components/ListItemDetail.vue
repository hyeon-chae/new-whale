<template>
    <div class="list-item-detail" 
        @scroll="scrollUpEvent"
        :class="{ 'scrolled' : scrollUp }"
    >
        <div class="main-view " 
        >
            <div class="item-header flex-sb">
                <button type="button" @click="gotoBack">
                    <i class="fas fa-arrow-left font-24"></i>
                </button>
                    
                <div class="center text-ellipsis" >
                    {{listItem.title}}
                </div>
                    
                <button type="button">
                    <i class="far fa-trash-alt font-24"></i>
                </button>
            </div>
            
            <div class="progress-info-area">
                <div class="progress-area">
                    <div class="progress-circle">
                        <svg>
                            <circle class="bg" cx="125" cy="125" r="110" />
                            <circle class="circle-rate" cx="125" cy="125" r="120" :style="`stroke-dashoffset:${circle_rate}`"/>
                        </svg>
                    </div>
                    <div class="circle-rate-num">
                        <span>{{listItem.totalRate}}</span>
                        <span>%</span>
                    </div>
                </div>

                <div class="info-area">
                    <div class="row flex-col">
                        <span>목표</span>
                        <p class="title">{{listItem.title}}</p>
                    </div>
                    <div class="row flex-col">
                        <span>리워드</span>
                        <p class="reward">{{listItem.reward}}</p>
                    </div>
                    <div class="row flex-col">
                        <span>규칙</span>
                        <div class="rules" 
                            v-for="item in listItem.rules" :key="item"
                        >
                            <p>{{item}}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="group-area">
            <div class="group-item"
                v-for="(item, index) in listItem.group" :key="item.name"
            >
                <div class="name-area flex-sb">
                    <span>{{item.name}}</span>
                    <span>{{item.rate}}%</span>
                </div>

                <div class="progress-bar-area">
                    <div class="progress-bar">
                        <div class="bar bg"></div>
                        <div class="bar on-bar" :style="`width: ${item.rate}%`"></div>
                    </div>
                    <div 
                        class="arrow-area" 
                        @click="showStampArea(item, index)"
                    >
                        <i 
                            class="fas"
                            :class="item.active ? 'fa-chevron-up' : 'fa-chevron-down' "
                        ></i>
                        <!-- <i class="fas fa-chevron-up"></i> -->
                    </div>
                </div>

                <div 
                    class="stamp-area" 
                    :class="{ show : item.active}"
                >
                    <span 
                        v-for="(item, index) in listItem.basicStamp" :key="item"
                        class="icon-stamp"
                        @click="stampActive(index, {selected: false})"
                    >
                        <!-- <img :src="`../assets/img/${selected ? imgStamp.active : imgStamp.inactive}.svg`" alt="stamp"> -->
                        <img v-if="selected" src="../assets/img/stamp-active.svg" alt="stamp">
                        <img v-else src="../assets/img/stamp-bg.svg" alt="stamp">
                    </span>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>

export default {
    props:{
        listItem: Object,
        circle_rate: Number,
    },
     components:{
         },
    data(){
        return{
            scrollUp: false,
            selectedItemIndex: '',
            selectedStamp:'',
            imgStamp: {
                active: 'stamp-active',
                inactive:'stamp-bg'
            },
        }
    }, 
    mounted(){
    },
    methods:{
        scrollUpEvent(event){
            // console.log('event.srcElement.scrollTop', event.srcElement.scrollTop);
            if(event.srcElement.scrollTop > 0) {
                this.scrollUp = true;
            }
            else {
                this.scrollUp = false;
            }
        },
        gotoBack(){
            this.$emit('close');
            document.querySelector('.list-item-detail').scrollTo(0, 0);
        },
        showStampArea(item, index){
           this.selectedItemIndex = index;
           if(this.selectedItemIndex == index){
               item.active = !item.active;
           }else{
               item.active = false;
           }
        },
        stampActive(index){
            this.selectedStamp = index;
            // console.log('selectedStamp', this.selectedStamp, index);
            if(this.selectedStamp == index){
                this.selected = !this.selected;
                console.log(this.selected);
            }
            else{
                this.selected = false;
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.list-item-detail{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1000;
    overflow-y: scroll;

    
    // 스크롤시 progress 영역 축소
    &.scrolled{
        .main-view{
            height: initial;
            position: relative;
            .item-header{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                box-sizing: border-box;
            }
        }
        .progress-info-area{
            // position: fixed;
            // top: 56px;
            // left: 0;
            // margin-bottom: 56px;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 30px 20px 20px;
            margin-top: 56px;
            .progress-area{
                margin: 0 16px 0 0;
                // width: 100px;
                // height: 100px;
                // border-radius: 60px;
                .progress-circle{
                    display: none;
                }
                .circle-rate-num{
                    position: initial;
                    top: initial;
                    left: initial;
                    transform: initial;
                    background: #cbd0ff;
                    border-radius: 50px;
                    padding: 10px;
                    width: 100px;
                    height: 100px;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    span{
                        font-size: 42px;
                        color: #fff;
                        &:last-child{
                            font-size: 18px;
                            margin: 15px 0 0 6px;
                        }
                    }
                }
            }
            .info-area{
                width: calc(100% - 120px);
                .row{
                    padding: 0;
                    flex-direction: row;
                    justify-content: flex-start;
                    span{
                        display: none;
                    }
                    .title{
                        display: none;
                    }
                    .reward{
                        color: #6d5de8;
                        font-size: 16px;
                        font-weight: bold;
                    }
                    .rules{
                        p{
                            font-size: 14px;
                            color: #929292;
                            line-height: 18px;
                        }
                    }
                    &:last-child{
                        padding-top: 8px;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }

            }
        }
    }
}
.main-view{
    height: 100vh;
    .item-header{
        padding: 16px 20px;
        background: #fff;
        z-index: 100;
        .center{
            width: 80%;
            font-weight: bold;
            font-size: 16px;
            text-align: center;
        }
    }
    .progress-info-area{
        .progress-area{
            position: relative;
            transition: .3s;
            margin: 25px auto;
            // width: 250px;
            // height: 250px;
            // background: #efefef;
            // border-radius: 130px;
            .progress-circle{
                display: flex;
                justify-content: center;
                svg {
                    width: 250px;
                    height: 250px;
                // margin: 1em;
                }
                .bg {
                    fill: none;
                    stroke-width: 10px;
                    stroke: #efefef;
                }
                .circle-rate {
                    fill: none;
                    stroke-width: 5px;
                    stroke-linecap: round;
                    transform: rotate(-90deg);
                    transform-origin: 50% 50%;
                    stroke-dasharray: 755;
                    // stroke-dasharray: 360;
                    // stroke-dashoffset: 360;
                    // stroke-dashoffset: 180;
                    stroke: #fdca6f;
                    transition: .4s ease-in;
                    animation: progress 1s ease-out;
                }
                @keyframes progress {
                    from {
                        stroke-dashoffset: 755;
                    }
                    to {
                        stroke-dashoffset: circle_rate;
                    }
                }
            }
            .circle-rate-num{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                // transition: .4s;
                span{
                    font-size: 64px;
                    font-weight: 200;
                    color: #6d5de8;
                    &:last-child{
                        font-size: 26px;
                        margin-left: 8px;
                    }
                }
            }
        }
        .info-area{
            .row{
                padding-top: 20px;
                font-size: 16px;
                .title{
                    font-weight: bold;
                }
                .rules{
                    p{
                        font-size: 14px;
                    }
                }
                span{
                    font-size: 12px;
                    color: #fff;
                    background: #6d5de8;
                    border-radius: 15px;
                    padding: 3px 8px 2px;
                    font-weight: bold;
                    margin-bottom: 6px;
                }
                p{
                    font-size: 16px;
                    line-height: 24px;
                }
            }
        }
    }
    
}

.group-area{
    // height: calc(100% - );
    height: calc(100vh - 150px);
    
    .group-item{
        padding: 15px 20px;
        border-top: 1px solid #eee;
        .name-area{
            padding-bottom: 20px;
            span{
                font-size: 16px;
                font-weight: bold;
            }
        }
        .progress-bar-area{
            // padding: 15px 0;
            .progress-bar{
                position: relative;
                padding-bottom: 15px;
                .bar{
                    background: #efefef;
                    height: 8px;
                    border-radius: 6px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .bg{
                    width: 100%;
                }   
                .on-bar{
                    transition: .4s ease-in;
                    background: #6d5de8;
                    width: 0%;
                }
                
            }
            .arrow-area{
                width: 100%;
                text-align: right;
                .fas{
                    width: 16px;
                    height: 16px;
                    color: #6d5de8;
                    // color: #8a8a8a;
                    padding: 5px;
                }
            }
        }
        .stamp-area{
            // border-top: 1px solid #000;
            padding: 5px;
            display: none;
            transition: .4s;
            &.show{
                display: block;
            }
            .icon-stamp{
                width: 20%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 10px 5px;
                box-sizing: border-box;
                img{
                    width: 40px;
                    height: 40px;
                }
            }
        }
       
    }
}
</style>