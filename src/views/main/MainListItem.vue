<template>
    <div class="main-list-item flex-start">
        <div class="progress-area">
            <div class="progress-circle">
                <svg>
                    <circle class="bg" cx="60" cy="60" r="45" />
                    <circle class="circle-rate" cx="60" cy="60" r="55" />
                </svg>
            </div>
            <div class="circle-rate-num">
                <span>{{item.totalRate}}</span>
                <span>%</span>
            </div>
        </div>
        <div class="text-area">
            <strong class="title text-ellipsis">{{item.title}}</strong>
            <p class="reward text-ellipsis">{{item.reward}}</p>
            <div class="rules text-wrap-ellipsis" >
                <span v-for="rule in item.rules" :key="rule">{{rule}}</span>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    props:{
        item: Object,
    },
    data(){
        return{
            circle: 360,
        }
    }, 
    mounted(){
        this.progressCircleLoad()
    },
    created(){
    },
    methods:{
        progressCircleLoad(){
            const onCircle = document.querySelector('.circle-rate');
            const num = this.item.totalRate;

            let rate = this.circle - (360 * num / 100);
                onCircle.style.strokeDashoffset = rate;
                console.log(onCircle, num, rate);
            // if( num == null){
            //     onCircle.style.strokeDashoffset = 360;
            // }
            // else{
            //     const rate = this.circle - (360 * num / 100);
            //     onCircle.style.strokeDashoffset = rate;
            //     console.log(onCircle, num, rate);
            // }
        }
    }


}
</script>

<style lang="scss" scoped>
.main-list-item{
    padding: 16px 20px;

}
.progress-area{
    position: relative;
    .progress-circle{
        display: flex;
        margin-right: 10px;
        svg {
            width: 120px;
            height: 120px;
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
            stroke-dasharray: 360;
            // stroke-dashoffset: 360;
            // stroke-dashoffset: 180;
            stroke: #fdca6f;
            transition: .4s ease-in;
            // animation: progress 1s ease-out;
        }

        // @keyframes progress {
        //   from {
        //       stroke-dashoffset: 360;
        //   }
        //   to {
        //       stroke-dashoffset: 100;
        //   }
        // }
    }  
    .circle-rate-num{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // transition: .4s;
        span{
            font-size: 28px;
            font-weight: 200;
            color: #6d5de8;
            &:last-child{
                font-size: 12px;
                margin-left: 2px;
            }
        }
    }

}
.text-area{
    width: calc(100% - 130px);
    .title{
        font-size: 16px;
        width: 100%;
        display: block;
    }
    .reward{
        font-size: 14px;
        margin: 4px 0 3px;
        color: #6d5de8;
    }
    .rules{
        font-size: 14px;
        color: #949494;
        span:after{
            content: '\01C0';
            margin: 0 6px;
            color: #e4e4e4;
            // font-size: 11px;
        }
        span:last-child{
            &:after{
                content: '';
            }

        }
    }
}
</style>