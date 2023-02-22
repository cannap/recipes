import { describe, expect, it } from 'vitest'

import TextField from '../TextField.vue'
import { mount } from '@vue/test-utils'
describe('Textfield', async () => {
  it('Updates Modelvalue', async () => {
    const wrapper = mount(TextField, {
      props: {
        modelValue: 'text',
        'onUpdate:modelValue': (value: string | number) =>
          wrapper.setProps({ modelValue: value })
      } as any
    })
    await wrapper.find('input').setValue('test2')
    expect(wrapper.props('modelValue')).toBe('test2')
  })

  it('Emits input', async () => {
    const wrapper = mount(TextField, {
      props: {
        modelValue: 'Test'
      } as any
    })

    wrapper.find('input').setValue('test2')
    //@ts-ignore
    const inputEvent = wrapper.emitted('input')[0][0]
    expect(inputEvent).toEqual('test2')
  })

  it('Show label', () => {
    const wrapper = mount(TextField, {
      props: {
        modeValue: 'yo',
        label: 'Test'
      } as any
    })

    const label = wrapper.find('label').text()
    expect(label).toEqual('Test')
  })
})
