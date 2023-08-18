import { cardPropsT } from '../../types/cardProps'
import { Interpolation } from 'styled-components/dist/types'
import styled, { css } from 'styled-components'

type flexStrings =
   | 'StyledCard'
   | 'CondBottomFlex'
   | 'CondLogoBtnFlex'
   | 'TxtFlex'
   | 'CondTxtFlex'
   | 'CondTitleFlex'
   | 'CondDesFlex'
   | 'BxlLogo'

const flexStyles = ({ $cardData }: cardPropsT) => {
   const returnStyles = (type: flexStrings): Interpolation<cardPropsT> => {
      const defPath = $cardData?.flexbox?.[type]
      const mediaPath = $cardData?.flexbox?.[type]?.mediaQuery?.firefox

      return css`
         display: flex;
         justify-content: ${defPath?.justifyContent};
         align-items: ${defPath?.alignItems || 'center'};
         flex-direction: ${defPath?.flexDirection || 'column'};
         margin: ${defPath?.margin || '0px'};
         gap: ${defPath?.gap || '0px'};
         width: ${defPath?.width};
         height: ${defPath?.height};
         max-width: ${defPath?.maxWidth};
         max-height: ${defPath?.maxHeight};
         padding: ${defPath?.padding};
         flex-wrap: ${defPath?.flexWrap};
         flex-shrink: ${defPath?.flexShrink};

         //firefox rules
         @media screen and (min--moz-device-pixel-ratio: 0) {
            justify-content: ${mediaPath?.justifyContent};
            align-items: ${mediaPath?.alignItems};
            flex-direction: ${mediaPath?.flexDirection};
            margin: ${mediaPath?.margin};
            gap: ${mediaPath?.gap};
            width: ${mediaPath?.width};
            height: ${mediaPath?.height};
            padding: ${mediaPath?.padding};
            flex-wrap: ${mediaPath?.flexWrap};
            flex-shrink: ${defPath?.flexShrink};
         }
      `
   }
   return returnStyles
}

export const BxlLogo = styled.div<cardPropsT>`
   ${(props) => flexStyles(props)('BxlLogo')}
`
export const CondBottomWrapper = styled.div<cardPropsT>`
   ${(props) => flexStyles(props)('CondBottomFlex')};
`
export const CondLogoBtnWrapper = styled.div<cardPropsT>`
   ${(props) => flexStyles(props)('CondLogoBtnFlex')};
`
export const TxtWrapper = styled.div<cardPropsT>`
   ${(props) => flexStyles(props)('TxtFlex')};
`
export const CondTxtWrapper = styled.div<cardPropsT>`
   ${(props) => flexStyles(props)('CondTxtFlex')};
`
export const CondTitleWrapper = styled.div<cardPropsT>`
   ${(props) => flexStyles(props)('CondTitleFlex')};
`
export const CondDesWrapper = styled.div<cardPropsT>`
   ${(props) => flexStyles(props)('CondDesFlex')};
`
