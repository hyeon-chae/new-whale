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
                v-for="item in listItem.group" :key="item.name"
            >
                <div class="name-area flex-sb">
                    <span>{{item.name}}</span>
                    <span>{{item.rate}}%</span>
                </div>

                <div class="progress-bar-area">
                    <div class="progress-bar">
                        <div class="bar bg"></div>
                        <div class="bar on-bar"></div>
                    </div>
                </div>

                <div class="stamp-area">
                    <span class="icon icon-stamp"></span>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>


export default {
    props:{
        listItem: Object,
    },
     components:{
         },
    data(){
        return{
            scrollUp: false,

        }
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
        }
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
            .item-header{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                box-sizing: border-box;
            }
        }
        .progress-info-area{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 30px 20px 20px;
            margin-top: 56px;
            .progress-area{
                margin: 0 16px 0 0;
                width: 100px;
                height: 100px;
                border-radius: 60px;
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
        .center{
            width: 80%;
            font-weight: bold;
            font-size: 16px;
            text-align: center;
        }
    }
    .progress-info-area{
        .progress-area{
            transition: .3s;
            margin: 25px auto;
            width: 250px;
            height: 250px;
            background: #efefef;
            border-radius: 130px;
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
    height: calc(100vh - 140px);
    
    .group-item{
        padding: 10px 20px;
        .name-area{
            span{
                font-size: 16px;
                font-weight: bold;
            }
        }
        .progress-bar-area{
            padding: 15px 0;
            .progress-bar{
                position: relative;
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
        }
        .stamp-area{
            .icon-stamp{
                width: 50px; 
                height: 42px;
                background-position: -495px 0;  
            }
        }
    }
}
</style>