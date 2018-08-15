import Toast from './toast'

export default{
    install(Vue,options){
        Vue.prototype.$toast=function (message){
            console.log('I am toast');
            let Constructor=Vue.extend(Toast)
            let toast=new Constructor()
            toast.$mount()
            toast.$slots.default=[message]
            document.body.appendChild(toast.$el)
        }
    }
}