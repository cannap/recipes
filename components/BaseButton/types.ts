import type { ButtonHTMLAttributes, PropType } from 'vue'

export interface IProps {
  outline?: boolean
  loading?: boolean
  disabled?: boolean
  loadingText?: string
  /**
   * The Variant
   */
  intent?: 'secondary' | 'primary' | 'success' | 'warning' | 'danger'
  /**
   * Native button type
   */
  type?: NonNullable<ButtonHTMLAttributes['type']>
}
