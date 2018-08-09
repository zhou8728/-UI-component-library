import  Vue from 'vue'
import Button from './button'
import Icon from './icon'


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)


new Vue({
    el:'#app',
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect=chai.expect
{
   const Constructor=Vue.extend(Button)
    const  button =new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    button.$mount()
    let useElement=button.$el.querySelector('use')

    let href=useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')


}

{
    const Constructor=Vue.extend(Button)
    const button =new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    })

    button.$mount()
    let useElement=button.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}


{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(Button)
    const button =new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    })

    button.$mount(div)
    let svg=button.$el.querySelector('svg')
    let {order}=window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}

//mock
{

    const Constructor=Vue.extend(Button)
    const  vm=new Constructor({
        propsData:{
            icon:'settings',

        }
    })

    vm.$mount()
    let spy=chai.spy(function(){

    })
    vm.$on('click',function(){
        expect(1).to.eq(1)

    })
    let button=vm.$el
    button.click()
    expect(spy).to.have.been.called()

}