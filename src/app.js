import  Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)


new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    },
    created(){
        setTimeout(()=>{
            let event = new Event('change')
            let inputElement = this.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            console.log('hi')
        },3000)
    },
    methods:{
        inputChange(e){
            console.log(e);
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






