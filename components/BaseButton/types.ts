import type { ButtonHTMLAttributes, PropType } from 'vue';

export interface IProps {

  outline?: boolean
  loading?: boolean,

  loadingText?: string
  /**
  * The Variant
  */
  variant?:
  | 'secondary'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';
  /**
  * Native button type
  */
  type?: NonNullable<ButtonHTMLAttributes['type']>;

}
