import { withI18nMessage } from './withI18nMessage'
import * as validators from '@vuelidate/validators'

export const required = withI18nMessage(validators.required)
export const numeric = withI18nMessage(validators.numeric)
// export const maxLengthC = withI18nMessage(validators.maxLength(max))
export const maxLength= ( max ) => withI18nMessage(validators.maxLength(max))
export const minLength= ( min ) => withI18nMessage(validators.minLength(min))
export const requiredIf= ( func ) => withI18nMessage(validators.requiredIf(func))
export const email= withI18nMessage(validators.email)
export const image = withI18nMessage((value, vm) =>  {
    if (!value) { return true; }
    return (/\/(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(value.type)
})
export const pdf = withI18nMessage((value, vm) =>  {
    if (!value) { return true; }
    return (/\/(pdf)$/i).test(value.type)
})
export const fileSize = withI18nMessage((value, vm) =>  {
    if (!value) { return true; }
    return (value.size < (1024 * 1024 * 25));
})


// export const fileSize = withI18nMessage(validators.helpers.withParams(options, value => {
//     console.log(value)
//     if (!value) {
//       return true
//     }
//     const size = value.size ;
//     return size <= (1024 * 1024 * 25);
//   }));

