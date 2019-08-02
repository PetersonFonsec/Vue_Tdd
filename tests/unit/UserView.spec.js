import { shallowMount } from '@vue/test-utils'

import UserView from '@/views/UserView'

describe('UserView', ()=>{
    it('renders the component', () => {

        const wrapper = shallowMount(UserView)

        expect(wrapper.html()).toMatchSnapshot()

    })
})