## vue component skeleton

## install

```js
npm install vc-dialog --save
```

```html
    //global varibale  vcDailog
    <script src='../dist/vc-dialog.js'></script>
```

## usage

### props

### okText

custom the ok button text.

* default: `确定`
* type: `String`

### cancelText

custom the cancel button text.

* default: `取消`
* type: `String`

### visiable

control the visiable of dialog.

* default: `false`
* type: `Boolean` 

### onOk | optional

the callback for onOk.

* type: `Function`

### onCancel | optional

the callback of onCancel

* type: `Function`


## example

* js

```js
import Vue from 'vue'
import {
        vcDialog
    } from '../dist/vc-dialog.js'

new Vue({
    el: '#app',
    data () {
        return {
            isShow: true,
            okText: 'ok',
            cancelText: 'cancel'
        }
    },
    components: {
        vcDialog
    },
    methods: {
        onOk () {

        },
        onCancel () {

        }
    },
    ready () {
    }
})
```

```vue
<vc-dialog 
    :visible='isShow'
    :okText='okText'
    :cancelText='cancelText'
    :onOk='onOk'
    :onCancel='onCancel'>
    <div class="your-html">
        
    </div>     
</vc-dialog>
```

## dev
* Build

```node
npm run build
```

* Build example

```node
npm run example
```

* run server

```node
npm run start
```