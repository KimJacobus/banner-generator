//types
import { themeObject, cardDataObjT } from '../../types/cardProps'
import { singleInputObj } from '../../types/inputProps'
//styles
import { FirstDescription, CustomCountry, SecondDescription } from './paragraphStyles'

type stylePropsT = {
   theme?: themeObject
   $cardData?: cardDataObjT
   $inputobj?: singleInputObj
}

export const Description = ({ theme, $cardData, $inputobj }: stylePropsT) => {
   const extractStrings = (inputString: string | undefined) => {
      if (!inputString) {
         return
      }

      const add = '<'
      const start = inputString.indexOf('<')
      const end = inputString.indexOf('>')

      if (start == -1 || end == -1) {
         return [inputString]
      }

      if (start !== -1 && end !== -1 && start < end) {
         const firstDes = inputString.slice(0, start)
         const country = inputString.slice(start + add.length, end)
         const secondDes = inputString.slice(end + add.length)

         if (country.length > 0) {
            return [firstDes, $inputobj?.customCountry, secondDes]
         }
      }

      return [inputString]
   }
   const input = extractStrings($inputobj?.description)

   return (
      <>
         {input?.[1] ? (
            <>
               <FirstDescription
                  theme={theme}
                  $cardData={$cardData}
                  dangerouslySetInnerHTML={{ __html: input?.[0] as string }}
               />
               <CustomCountry
                  theme={theme}
                  $cardData={$cardData}
                  dangerouslySetInnerHTML={{ __html: input?.[1] as string }}
               />
               <SecondDescription
                  theme={theme}
                  $cardData={$cardData}
                  dangerouslySetInnerHTML={{ __html: input?.[2] as string }}
               />
            </>
         ) : (
            <>
               <FirstDescription
                  theme={theme}
                  $cardData={$cardData}
                  dangerouslySetInnerHTML={{ __html: input?.[0] as string }}
               />
               <SecondDescription
                  theme={theme}
                  $cardData={$cardData}
                  dangerouslySetInnerHTML={{ __html: input?.[2] as string }}
               />
            </>
         )}
      </>
   )
}
