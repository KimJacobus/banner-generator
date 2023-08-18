import { styled } from 'styled-components'

const StyledDiv = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: black;
   opacity: 0.5;
   margin: 0;
   padding: 0;
   z-index: 1;
`

const TextWrapper = styled.div`
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
`

const StyledH2 = styled.h2`
   color: white;
   opacity: 1;
   font-size: 250%;
   z-index: 2;
`

export const DLPendingComp = () => {
   return (
      <>
         <StyledDiv />
         <TextWrapper>
            <StyledH2>...Loading</StyledH2>
         </TextWrapper>
      </>
   )
}
