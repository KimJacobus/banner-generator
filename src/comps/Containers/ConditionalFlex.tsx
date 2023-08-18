//types
import { cardDataObjT, cardPropsT } from '../../types/cardProps'
// comps
import { FlexBox } from './Containers'
import { Cta, Title, SubTitle } from '../Card/paragraphStyles'
import { Description } from '../Card/Descriptions'
import { Logos } from '../Card/Bxl_Logo'
//styles
import {
   CondBottomWrapper,
   CondLogoBtnWrapper,
   TxtWrapper,
   CondTxtWrapper,
   CondTitleWrapper,
   CondDesWrapper,
} from './ConditionalStyles'

export const CondBottomFlex = ({ $cardData, children }: { $cardData?: cardDataObjT; children: React.ReactNode }) => {
   return $cardData?.flexbox?.CondBottomFlex ? (
      <CondBottomWrapper $cardData={$cardData}>{children}</CondBottomWrapper>
   ) : (
      <>{children}</>
   )
}

export const CondLogoBtnFlex = ({ inputCta, props }: { props: cardPropsT; inputCta?: string }) => {
   const { $cardData, theme } = props
   const commonContent = (
      <>
         <button id="cta-button">
            <Cta $cardData={$cardData} theme={theme}>
               {inputCta}
            </Cta>
         </button>
         <Logos $cardData={$cardData} />
      </>
   )
   return (
      <>
         {$cardData?.flexbox?.CondLogoBtnFlex ? (
            <CondLogoBtnWrapper $cardData={$cardData}>{commonContent}</CondLogoBtnWrapper>
         ) : (
            commonContent
         )}
      </>
   )
}

export const CondTxtFlex = ({ props }: { props: cardPropsT }) => {
   const { $inputobj, $cardData, theme } = props
   const commonContent = (
      <>
         <Title theme={theme} $cardData={$cardData}>
            {$inputobj?.title}
         </Title>
         <SubTitle theme={theme} $cardData={$cardData}>
            {$inputobj?.subTitle}
         </SubTitle>
      </>
   )
   return (
      <>
         {$cardData?.flexbox?.CondTxtFlex ? (
            <CondTxtWrapper $cardData={$cardData}>
               <FlexBox>{commonContent}</FlexBox>
               <FlexBox>
                  <Description theme={theme} $cardData={$cardData} $inputobj={$inputobj} />
               </FlexBox>
            </CondTxtWrapper>
         ) : $cardData?.flexbox?.CondTitleFlex || $cardData?.flexbox?.CondDesFlex ? (
            <>
               <CondTxtWrapper $cardData={$cardData}>
                  <CondTitleWrapper $cardData={$cardData}>{commonContent}</CondTitleWrapper>
                  <CondDesWrapper $cardData={$cardData}>
                     <Description theme={theme} $cardData={$cardData} $inputobj={$inputobj} />
                  </CondDesWrapper>
               </CondTxtWrapper>
            </>
         ) : (
            <TxtWrapper $cardData={$cardData}>
               <>
                  {commonContent}
                  <Description theme={theme} $cardData={$cardData} $inputobj={$inputobj} />
               </>
            </TxtWrapper>
         )}
      </>
   )
}
