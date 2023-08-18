import bxl_airport_logo from '/src/assets/png/bxl_logo.png'
import brussels_airport from '/src/assets/png/brussels_airport.png'
import { BxlLogo } from '../Containers/ConditionalStyles'
import { cardPropsT } from '../../types/cardProps'

import { styled } from 'styled-components'

const Png = styled.img`
   width: 100%;
   height: 100%;

   //firefox rules
   @media screen and (min--moz-device-pixel-ratio: 0) {
      width: auto;
      height: auto;
   }
`
export const Logos = ({ $cardData }: cardPropsT) => {
   return (
      <BxlLogo $cardData={$cardData}>
         <Png src={bxl_airport_logo} />
         <Png src={brussels_airport} />
      </BxlLogo>
   )
}
