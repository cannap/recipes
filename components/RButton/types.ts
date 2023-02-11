import type { ButtonHTMLAttributes, PropType } from 'vue';

export interface Props {
  /**
  * The Color variant
  */
  variant?:
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';
  /**
  * Native button type
  */
  type: NonNullable<ButtonHTMLAttributes['type']>;

}
