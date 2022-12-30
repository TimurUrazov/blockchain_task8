import Vue from 'vue'
import App from './App.vue'
import {ethers} from 'ethers'
import create from 'ipfs-http-client'
import IPFS from '../../artifacts/contracts/IPFS.sol/IPFS.json'
import Notifications from 'vue-notification'

Vue.use(Notifications)

Vue.config.productionTip = false
Vue.prototype.$ipfs = create(process.env.VUE_APP_IPFS_API_SERVER_URL)
Vue.prototype.$contract = new ethers.Contract(
    process.env.VUE_APP_CONTRACT_ADDRESS,
    IPFS.abi,
    new ethers.providers.JsonRpcBatchProvider(process.env.VUE_APP_PROVIDER_URL).getSigner(
        process.env.VUE_APP_SIGNER_ADDRESS
    )
)

new Vue({
    render: h => h(App),
}).$mount('#app')
