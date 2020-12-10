import NoSignList from '../pages/stats/components/no-sign-list.vue'

// 实用工具
import {shallowMount} from '@vue/test-utils'

describe('no-sign-list.vue', () => {

  it('should work', () => {
    //
    const notSignRecords = {
      name: 'test'
    }
    const wrapper = shallowMount(NoSignList, {
      props: {notSignRecords}
    })
    expect(wrapper.find('text').text()).toBe(notSignRecords.name)
  })
})
