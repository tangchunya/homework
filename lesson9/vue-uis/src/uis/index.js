import Button from './Button'
import Icon from './Icon'
import Input from './Input'

export default {
    install(Vue,a){
        const components = {
            Button,
            Icon,
            Input
        }
        Object.keys(components).map(k=>{
            let cpt = components[k]
            Vue.component(cpt.name,cpt)
        })
    }
}