import Vue from 'vue'
import {
		vcDialog
	} from '../dist/vc-dialog.js'

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
		//this.$refs.dialog.onSwitch();
	}
})