<template>
    <div class="modal" v-show='visible'>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-dialog-body">
                        <slot>
                        
                        </slot>
                    </div>
                    <div class="modal-dialog-footer">
                        <button class="btn btn-primary"
                            @click='onSuccessed'>{{okText}}</button>
                        <button class="btn btn-default"
                            @click='onCanceled'>{{cancelText}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    props: {
        okText: {
            type: String,
            default () {
                return '确定'
            }
        },
        cancelText: {
            type: String,
            default () {
                return '取消'
            }
        },
        visible: {
            type: Boolean,
            default () {
                return false;
            }
        },
        onOk: {
            type: Function
        },
        onCancel: {
            type: Function
        }
    },
    methods: {
        onSwitch () {
            if(this.visible){
                this.visible = false;
            }else{
                this.visible = true;
            }
        },
        onSuccessed () {
            this.onOk&&this.onOk();
            this.onSwitch();
        },
        onCanceled () {
            this.onCancel&&this.onCancel();
            this.onSwitch();
        }
    },
    watch: {
        visible (val) {
            if (val) {
                this.visible = true; 
            }else{
                this.visible = false;
            }
        }
    },
    ready () {

    }
}
</script>
<style scoped>
    .modal {
        display: block;

        .modal-body{
            .modal-dialog-body{
                padding: 15px 0;
            }

            .modal-dialog-footer{
                text-align: right;
            }
        }
    }
</style>