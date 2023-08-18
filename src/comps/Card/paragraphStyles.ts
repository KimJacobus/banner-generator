import { paragraphObject } from '../../types/cardProps'
import { Interpolation } from 'styled-components/dist/types'
import { themeObject, cardDataObjT } from '../../types/cardProps'
import styled, { css } from 'styled-components'

type stylePropsT = {
   theme?: themeObject
   $cardData?: cardDataObjT
}

type paraStrings = 'title' | 'subTitle' | 'cta' | 'firstDes' | 'secondDes' | 'country'
type themeTypeStrings =
   | 'titleColor'
   | 'descriptionColor'
   | 'countryColor'
   | 'cardColor'
   | 'hoverButtonColor'
   | 'ctaColor'
   | 'ctaButtonColor'

const paragraphStyles = ({ theme, $cardData }: stylePropsT) => {
   const returnStyles = (type: paraStrings, themeType: themeTypeStrings): Interpolation<paragraphObject> => css`
      color: ${theme?.themeColor?.[themeType] || '#c4221d'};
      font-family: ${$cardData?.fonts?.[type]?.font || 'Ubuntu'};
      font-size: ${$cardData?.fonts?.[type]?.size || '16px'};
      font-stretch: ${$cardData?.fonts?.[type]?.fontStretch};
      margin: ${$cardData?.fonts?.[type]?.margin || '0px'};
      font-weight: ${$cardData?.fonts?.[type]?.weight || '700'};
      text-align: ${$cardData?.fonts?.[type]?.align || 'center'};
      width: ${$cardData?.fonts?.[type]?.width};
      max-width: ${$cardData?.fonts?.[type]?.maxWidth};
      padding: ${$cardData?.fonts?.[type]?.padding};
      align-self: ${$cardData?.fonts?.[type]?.alignSelf};
      white-space: ${$cardData?.fonts?.[type]?.whiteSpace};
      flex-basis: ${$cardData?.fonts?.[type]?.flexBasis};
      flex-grow: ${$cardData?.fonts?.[type]?.flexGrow};
      flex-shrink: ${$cardData?.fonts?.[type]?.flexShrink};
      word-break: ${$cardData?.fonts?.[type]?.wordBreak};
   `
   return returnStyles
}

export const Title = styled.p<stylePropsT>`
   ${(props) => paragraphStyles(props)('title', 'titleColor')};
`
export const SubTitle = styled.p<stylePropsT>`
   ${(props) => paragraphStyles(props)('subTitle', 'titleColor')};
`
export const Cta = styled.p<stylePropsT>`
   ${(props) => paragraphStyles(props)('cta', 'ctaColor')};
`
export const FirstDescription = styled.p<stylePropsT>`
   ${(props) => paragraphStyles(props)('firstDes', 'descriptionColor')};
`
export const SecondDescription = styled.p<stylePropsT>`
   ${(props) => paragraphStyles(props)('secondDes', 'descriptionColor')};
`
export const CustomCountry = styled(FirstDescription)<stylePropsT>`
   ${(props) => paragraphStyles(props)('country', 'countryColor')};
   position: ${({ $cardData }) => $cardData?.fonts?.country?.position};
   top: ${({ $cardData }) => $cardData?.fonts?.country?.top};
   right: ${({ $cardData }) => $cardData?.fonts?.country?.right};
   bottom: ${({ $cardData }) => $cardData?.fonts?.country?.bottom};
   left: ${({ $cardData }) => $cardData?.fonts?.country?.left};
`
