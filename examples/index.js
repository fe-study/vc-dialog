import Vue from 'vue'
import vcDialog from '../dist/vc-dialog.js'

console.log(vcDialog)

new Vue({
	el: '#app',
	data () {
		return {
			isShow: true
		}
	},
	components: {
		vcDialog
	},
	ready () {
	}
})