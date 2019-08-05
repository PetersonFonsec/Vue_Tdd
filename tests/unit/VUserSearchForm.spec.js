import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Element from 'element-ui'
import VUserSearchForm  from '@/components/VUserSearchForm' 

const localVue = createLocalVue()

localVue.use(Element)

describe('VUserSearchForm', ()=>{
    const build = () => {
        const wrapper = shallowMount(VUserSearchForm, { localVue })
        const wrapperMounted = mount(VUserSearchForm, { localVue })
        return {
            wrapper,       
            wrapperMounted,     
            input: () => wrapper.find('.search-form__input'),
            inputMounted: () => wrapperMounted.find('input'),
            button: () => wrapperMounted.find('button'),
        }
    }

    it('renders the components', ()=> {
        const { wrapper } = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('calls "submitted" event when submiting a form ', ()=>{
        const expectedUser = 'kuroski'
        const { wrapperMounted, inputMounted, button } = build()

        inputMounted().element.value = expectedUser

        inputMounted().trigger('input')
        button().trigger('click')
        button().trigger('submit')

        expect( wrapperMounted.emitted().submitted[0] ).toEqual([expectedUser])
    })
})