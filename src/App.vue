<template>
    <div
        class="center-table"
        style="padding-top:50px;"
    >
        <div :style="computedStyle" />
    </div>
    <div class="container">
        <div class="row">
            <div class="col-9">
                <div class="container">
                    <div class="row">
                        <div class="form-group col-6">
                            <label>width:{{ boxInfo.width }}px</label>
                            <input
                                v-model="boxInfo.width"
                                class="form-control"
                                type="number"
                            >
                        </div>
                        <div class="form-group col-6">
                            <label>height:{{ boxInfo.height }}px</label>
                            <input
                                v-model="boxInfo.height"
                                class="form-control"
                                type="number"
                            >
                        </div>
                        <div class="form-group col-6">
                            <label>border-radius:{{ boxInfo.borderRadius }}%</label>
                            <input
                                v-model="boxInfo.borderRadius"
                                type="range"
                                min="0"
                                max="100"
                                class="form-control"
                            >
                        </div>
                        <div class="form-group col-6">
                            <label>rotate:{{ boxInfo.rotate }}deg</label>
                            <input
                                v-model="boxInfo.rotate"
                                type="range"
                                class="form-control"
                                min="-360"
                                max="360"
                            >
                        </div>

                        <div class="form-group col-6">
                            <label>border-top-width:{{ boxInfo.borderTopWidth }}px</label>
                            <input
                                v-model="boxInfo.borderTopWidth"
                                type="range"
                                min="0"
                                max="200"
                            >
                        </div>
                        <div class="form-group col-6">
                            <label>border-right-width:{{ boxInfo.borderRightWidth }}px</label>
                            <input
                                v-model="boxInfo.borderRightWidth"
                                type="range"
                                min="0"
                                max="200"
                            >
                        </div>
                        <div class="form-group col-6">
                            <label>border-bottom-width:{{ boxInfo.borderBottomWidth }}px</label>
                            <input
                                v-model="boxInfo.borderBottomWidth"
                                type="range"
                                min="0"
                                max="200"
                            >
                        </div>
                        <div class="form-group col-6">
                            <label>border-left-width:{{ boxInfo.borderLeftWidth }}px</label>
                            <input
                                v-model="boxInfo.borderLeftWidth"
                                type="range"
                                min="0"
                                max="200"
                            >
                        </div>

                        <div class="form-group col-6">
                            <label>border-top-color:{{ boxInfo.borderTopColor }}</label>
                            <input
                                v-model="boxInfo.borderTopColor"
                                type="color"
                                class="form-control"
                            >
                        </div>
                        <div class="form-group col-6">
                            <label>border-right-color:{{ boxInfo.borderRightColor }}</label>
                            <input
                                v-model="boxInfo.borderRightColor"
                                type="color"
                                class="form-control"
                            >
                        </div>
                        <div class="form-group col-6">
                            <label>border-bottom-color:{{ boxInfo.borderBottomColor }}</label>
                            <input
                                v-model="boxInfo.borderBottomColor"
                                type="color"
                                class="form-control"
                            >
                        </div>
                        <div class="form-group col-6">
                            <label>border-left-color:{{ boxInfo.borderLeftColor }}</label>
                            <input
                                v-model="boxInfo.borderLeftColor"
                                type="color"
                                class="form-control"
                            >
                        </div>

                        <div class="form-group col-6">
                            <label>background:{{ boxInfo.background }}</label>
                            <input
                                v-model="boxInfo.background"
                                type="color"
                                class="form-control"
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <button
                    type="button"
                    class="btn btn-primary"
                    @click="useDefaultData('triangleBottomRight')"
                >
                    triangleBottomRight
                </button>
                <button
                    type="button"
                    class="btn btn-secondary"
                    @click="useDefaultData('triangleBottomLeft')"
                >
                    triangleBottomLeft
                </button>
                <button
                    type="button"
                    class="btn btn-success"
                    @click="useDefaultData('triangleTopLeft')"
                >
                    triangleTopLeft
                </button>
                <button
                    type="button"
                    class="btn btn-danger"
                    @click="useDefaultData('triangleTopRight')"
                >
                    triangleTopRight
                </button>
                <button
                    type="button"
                    class="btn btn-warning"
                    @click="useDefaultData('trapezoid')"
                >
                    trapezoid
                </button>
                <button
                    type="button"
                    class="btn btn-info"
                    @click="useDefaultData('arrowRight')"
                >
                    arrowRight
                </button>
                <button
                    type="button"
                    class="btn btn-dark"
                    @click="useDefaultData('triangleRight')"
                >
                    triangleRight
                </button>
                <button
                    type="button"
                    class="btn btn-light"
                    @click="useDefaultData('agree')"
                >
                    agree
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    computed,
} from 'vue'

import {
    BoxInfo,
    Shapes,
} from './typings.d'

import configs from './configs'

export default defineComponent({
    name: 'App',
    setup () {
        const boxInfo = reactive<BoxInfo>({
            width: 0,
            height: 0,
            borderRadius: 50,
            rotate: 45,
            background: '#ffffff',
            borderTopWidth: 200,
            borderRightWidth: 200,
            borderBottomWidth: 200,
            borderLeftWidth: 200,
            borderTopColor: '#ff8c05',
            borderRightColor: '#43a102',
            borderBottomColor: '#c5da01',
            borderLeftColor: '#4499ee',
        })

        const computedStyle = computed(() => {
            return {
                width: boxInfo.width + 'px',
                height: boxInfo.height + 'px',
                background: boxInfo.background,
                borderRadius: boxInfo.borderRadius + '%',
                transform: 'rotate(' + boxInfo.rotate + 'deg)',
                borderStyle: 'solid',
                borderTopWidth: boxInfo.borderTopWidth + 'px',
                borderTopColor: boxInfo.borderTopColor,
                borderRightWidth: boxInfo.borderRightWidth + 'px',
                borderRightColor: boxInfo.borderRightColor,
                borderBottomWidth: boxInfo.borderBottomWidth + 'px',
                borderBottomColor: boxInfo.borderBottomColor,
                borderLeftWidth: boxInfo.borderLeftWidth + 'px',
                borderLeftColor: boxInfo.borderLeftColor,
                boxSizing: 'content-box',
            }
        })

        const useDefaultData = (key:Shapes) => {
            Object.assign(boxInfo, configs[key])
        }

        return {
            boxInfo,
            computedStyle,
            useDefaultData,
        }
    },
})
</script>

<style lang="less">
.center-table{
    display:table;
    margin-left:auto;
    margin-right:auto;
}
.btn{
    margin-top:5px;
    margin-bottom:5px;
}
</style>
