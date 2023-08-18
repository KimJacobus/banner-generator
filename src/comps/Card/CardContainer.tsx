import styled from 'styled-components'
import React from 'react'
//comps
import { StyledCardContainer } from '../Containers/Containers'
import Card from './Card'
//data
import { cardObj } from '../../data/cardData'
//types
import { cardPropsT } from '../../types/cardProps'

const FlexBox = styled.div`
   display: flex;
   flex-direction: column;
`
const CardWrapper = styled.div`
   flex-basis: 25%;
`
type cardContainerProps = {
   DLBool: boolean
   AllCardsApp: ({ children }: { children: React.ReactNode }) => JSX.Element
}

export const CardContainer = ({ inputObj, imageInputs, DLBool, AllCardsApp }: cardPropsT & cardContainerProps) => {
   //function for selecting cards
   // const specificCards = cardObj.filter((card) => card.someCondition);
   // will need boolean for toggling components

   return (
      <StyledCardContainer>
         <CardWrapper>
            <AllCardsApp>
               {cardObj.map((card, index) => (
                  <React.Fragment key={index}>
                     {DLBool ? (
                        <Card key={index} $inputobj={inputObj} imageInputs={imageInputs} $cardData={card} />
                     ) : (
                        <FlexBox>
                           <Card key={index} $inputobj={inputObj} imageInputs={imageInputs} $cardData={card} />
                        </FlexBox>
                     )}
                  </React.Fragment>
               ))}
            </AllCardsApp>
         </CardWrapper>
      </StyledCardContainer>
   )
}
