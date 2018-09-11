import  Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Slider from './slider'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'
import TabsHeader from './tabs-header'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'



Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-slider',Slider)
Vue.component('g-content',Content)
Vue.component('g-header',Header)
Vue.component('g-footer',Footer)
Vue.component('g-toast',Toast)

Vue.component('g-tabs-header',TabsHeader)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.use(plugin)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message:'hi',
        selectedTab:'sports'
    },
    created(){
        // this.$toast('我是message',{
        //     closeButton:{
        //         text:'知道了',
        //         callback(toast){
        //             console.log(toast)
        //             console.log('用户说他知道了');
        //         }
        //
        //     }
        // })

        this.$toast('<p>段落<strong>hi</strong><a href="http://qq.com"></a></p>')


        // setTimeout(()=>{
        //     let event = new Event('change')
        //     let inputElement = this.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     console.log('hi')
        // },3000)

    },
    methods:{
        inputChange(e){
            console.log(e);
        },
        showToast(){
            console.log('1')
            // this.$toast('当前功能不稳定，如果遇到bug请关闭该功能')
        }
    }
})

//单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect=chai.expect
// console.log(chai)
// {
//    const Constructor=Vue.extend(Button)
//     const  button =new Constructor({
//         propsData:{
//             icon:'settings'
//         }
//     })
//     button.$mount()
//     let useElement=button.$el.querySelector('use')
//
//     let href=useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-settings')
//
//
// }







// {
//     const Constructor=Vue.extend(Button)
//     const button =new Constructor({
//         propsData:{
//             icon:'settings',
//             loading:true
//         }
//     })
//
//     button.$mount()
//     let useElement=button.$el.querySelector('use')
//     let href=useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-settings')
// }




//
// {
//     const div=document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor=Vue.extend(Button)
//     const button =new Constructor({
//         propsData:{
//             icon:'settings',
//             loading:true
//         }
//     })
//
//     button.$mount(div)
//     let svg=button.$el.querySelector('svg')
//     let {order}=window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     button.$el.remove()
//     button.$destroy()
// }






