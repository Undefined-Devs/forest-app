import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
const namespaced = true
export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}