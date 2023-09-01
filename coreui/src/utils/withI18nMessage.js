// @/utils/withI18nMessage.js
import {helpers } from '@vuelidate/validators'
import i18n  from "../i18n"
// export const withI18nMessage = (validator) => helpers.withMessage
// (
//   (props) => 
//   i18n.t(`message.required`, {  property: props.$property, }),
//   validator
// )

export const withI18nMessage = (validator) => helpers.withMessage((props) =>
// {
//   console.log(props)
 i18n.t(`validations.${props.$validator}`, {
  model: props.$model,
  property: i18n.t(`fields.${props.$property}`),
  ...props.$params
  })
// }
, validator)
