import { mount } from '@vue/test-utils'
import BadgeStatus from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('BadgeStatus.vue', () => {
  test('render test', () => {
    const wrapper = mount(BadgeStatus, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
