const expect=chai.expect;
import Vue from 'vue'
import Input  from '../src/input'
import Button from '../src/button'

Vue.config.productionTip=false;
Vue.config.dectools=false;

describe('Input',()=> {
    it('存在', () => {
        expect(Button).to.exist
    })


    describe(('props'), () => {
        // beforeEach(function(){
        //     const Constructor=Vue.extend(Input)
        //     const vm=new Constructor({
        //         propsData:{
        //             value:'1234'
        //         }
        //     }).$mount()
        // })
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })

        it('接收 value', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.value).to.equal('1234')
            // vm.$destroy()
        })
        it('接收 disabled', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            console.log(inputElement.outerHTML);
            expect(inputElement.disabled).to.equal(true)
            // vm.$destroy()
        })
        it('接收 readonly', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            console.log(inputElement.outerHTML);
            expect(inputElement.readOnly).to.equal(true)
            // vm.$destroy()
        })
        it('接收 error', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    error: 'error'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('error')
            console.log(useElement.outerHTML);

            // vm.$destroy()
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur']
                .forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
            })

            //     vm=new Constructor({}).$mount()
            //     const callback =sinon.fake()
            //     vm.$on('change',callback)
            //
            //    let event = new Event('change')
            //     console.log(event);
            //     let inputElement = vm.$el.querySelector('input')
            //     inputElement.dispatchEvent(event)
            //     expect(callback).to.have.been.calledWith(event)
            // })
            //   it('支持 input 事件', ()=>{
            //       vm=new Constructor({}).$mount()
            //       const callback =sinon.fake()
            //       vm.$on('input',callback)
            //       //    触发input change事件
            //       let event = new Event('input')
            //       console.log(event);
            //       let inputElement = vm.$el.querySelector('input')
            //       inputElement.dispatchEvent(event)
            //       expect(callback).to.have.been.calledWith(event)
            //   })
            //   it('支持 focus 事件', ()=>{
            //       vm=new Constructor({}).$mount()
            //       const callback =sinon.fake()
            //       vm.$on('focus',callback)
            //       //    触发input change事件
            //       let event = new Event('focus')
            //       console.log(event);
            //       let inputElement = vm.$el.querySelector('input')
            //       inputElement.dispatchEvent(event)
            //       expect(callback).to.have.been.calledWith(event)
            //   })
            //   it('支持 blur 事件', ()=>{
            //       vm=new Constructor({}).$mount()
            //       const callback =sinon.fake()
            //       vm.$on('blur',callback)
            //       //    触发input change事件
            //       let event = new Event('blur')
            //       console.log(event);
            //       let inputElement = vm.$el.querySelector('input')
            //       inputElement.dispatchEvent(event)
            //       expect(callback).to.have.been.calledWith(event)
            //   })

        })
    })
})