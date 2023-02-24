import { isEmpty } from 'lodash-es'
import slugify from 'slugify'
export const removeEmptyObjectsFromArray = (
  arr: Array<any>,
  mustFilledKey: Array<any>
) => {
  return arr.filter((a) => {
    for (const key of mustFilledKey) {
      if (isEmpty(a[key])) {
        return false
      }
      return true
    }
  })
}

export const makeSlug = (item: string) => {
  return slugify(item, { lower: true })
}
