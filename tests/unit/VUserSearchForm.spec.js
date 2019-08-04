import { shallowMount } from '@vue/test-utils'
import VUserSearchForm  from '@/components/VUserSearchForm' 

describe('VUserSearchForm', ()=>{
    const build = () => {
        const wrapper = shallowMount(VUserSearchForm)

        return {
            wrapper,
            input : ()=> wrapper.find('input'),
            button : ()=> wrapper.find('button'),
        }
    }

    it('renders the components', ()=> {
        const { wrapper } = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('calls "submitted" event when submiting a form ', ()=>{
        const expectedUser = 'kuroski'
        const { wrapper, input, button } = build()

        input().element.value = expectedUser

        input().trigger('input')
        button().trigger('click')
        button().trigger('submit')

        expect( wrapper.emitted().submitted[0] ).toEqual([expectedUser])
    })
})