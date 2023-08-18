import styled from 'styled-components'
//types
import { cardPropsT } from '../../types/cardProps'

export const StyledCard = styled.div<cardPropsT>`
   display: flex;
   flex-direction: ${({ $cardData }) => $cardData?.flexbox?.StyledCard?.flexDirection || 'column'};
   align-items: ${({ $cardData }) => $cardData?.flexbox?.StyledCard?.alignItems || 'center'};
   width: ${({ $cardData }) => $cardData?.dimensions?.card_dimensions?.width || '334px'};
   height: ${({ $cardData }) => $cardData?.dimensions?.card_dimensions?.height || '600px'};
   border: solid 2px white;
   border-radius: 2px;
   background-color: ${({ theme }) => theme?.themeColor?.cardColor};
   overflow: hidden;
   #cta-button {
      display: flex;
      justify-content: center;
      background-color: ${({ theme }) => theme?.themeColor?.ctaButtonColor || '#c4221d'};
      margin: ${({ $cardData }) => $cardData?.dimensions?.cta_button?.margin || '.83em'};
      padding: ${({ $cardData }) => $cardData?.dimensions?.cta_button?.padding};
      height: ${({ $cardData }) => $cardData?.dimensions?.cta_button?.height};
      border-radius: ${({ $cardData }) => $cardData?.dimensions?.cta_button?.borderRadius || '2px'};
      border: none;
   }
   #download-button {
      background-color: grey;
      border: none;
      padding: 10px;
   }
`
