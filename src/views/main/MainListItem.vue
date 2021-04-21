<template>
    <div class="main-list-item flex-start">
        <div class="progress-area">
            <!-- <svg width="300" height="300">
                <circle class="bg" cx="50" cy="150" r="125" stroke-width="10" fill="#c0c0c0" opacity=".5" stroke-dasharray="0,300000" transform = " rotate(-90 100 100)"></circle>            
                <circle class="circle" cx="50" cy="150" r="110" stroke="#fdca6e" stroke-width="10" stroke-linecap="round" stroke-dasharray="0,300000" fill="#fff" transform = " rotate(-90 100 100)"/>
                <text x="150" y="150" text-anchor="middle" fill="#6d5ce8">
                    <tspan class="rate">57</tspan>
                    <tspan>%</tspan>
                </text>
            </svg> -->
            <div class="ex"></div>
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
        item: Array
    }

}
</script>

<style lang="scss" scoped>
.main-list-item{
    padding: 16px 20px;

}
.progress-area{
    // transform: scale(.4);
    // position: absolute;
    // left: -80px;
    // top: -90px;
    // tspan{
        //     font-size: 60px;
    // }
    // width: 100px;
    // height: 100px;
    margin-right: 16px;
    .ex{
        width: 100px;
        height: 100px;
        background: #efefef;
        border-radius: 50px;

    }
}
.text-area{
    width: calc(100% - 120px);
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