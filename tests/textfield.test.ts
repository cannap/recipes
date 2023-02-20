import { describe, expect, it } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'
import TextField from '../components/TextField/TextField.vue'
import { mount } from '@vue/test-utils'
describe('Textfield', async () => {
  it('Updates Modelvalue', async () => {
    const wrapper = mount(TextField, {
      props: {
        modelValue: 'text',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })
    await wrapper.find('input').setValue('test')
    expect(wrapper.props('modelValue')).toBe('test')
    wrapper.unmount()
  })

  it('Emits input', async () => {
    const wrapper = mount(TextField, {
      props: {
        modelValue: 'Test'
      }
    })

    wrapper.find('input').setValue('test2')
    const inputEvent = wrapper.emitted('input')[0][0]
    expect(inputEvent).toEqual('test2')
    wrapper.unmount()
  })

  it('Show label', () => {
    const wrapper = mount(TextField, {
      props: {
        label: 'Test'
      }
    })

    const label = wrapper.find('label').text()
    expect(label).toEqual('Test')
    wrapper.unmount()
  })
})
