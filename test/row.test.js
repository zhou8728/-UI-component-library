const expect=chai.expect;
import Vue from 'vue'
import Row  from '../src/row'
import Col from '../src/col'

Vue.config.productionTip=false;
Vue.config.dectools=false;

describe('Row',()=> {
    it('存在', () => {
        expect(Row).to.exist
    })
    it('接受gutter属性', () => {
        const div=document.createElement('div')
        document.body.appendChild(div)
        const RowConstructor = Vue.extend(Row)


        const row = new RowConstructor({
            propsData: {
                gutter: 10
        }
        })
        const ColConstructor = Vue.extend(Col)
        const col=new Constructor()
        col.$mount(row)
        row.$destroy()



    })
})



