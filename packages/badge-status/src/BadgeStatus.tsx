import { defineComponent, PropType } from '@vue/composition-api'

const BadgeStatusProps = {
  type: {
    type: String as PropType<'success' | 'error' | 'warning' | 'info' | 'default'>,
    default: 'default'
  }
} as const

export default defineComponent({
  name: 'BadgeStatus',
  props: BadgeStatusProps,
  render () {
    const { prefixCls, $slots, type } = this
    const name = 'badge-status'
    const elCls = `${prefixCls}-${name}`
    const dotCls = `${prefixCls}-${name}__dot is-${type}`
    const textCls = `${prefixCls}-${name}__text`
    return (
      <span class={elCls}>
        <span class={dotCls}></span>
        <span class={textCls}>
          {$slots.default}
        </span>
      </span>
    )
  }
})
