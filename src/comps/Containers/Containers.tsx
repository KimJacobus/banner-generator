import styled from 'styled-components'
import { cardPropsT } from '../../types/cardProps'

export const FlexBox = styled.div<cardPropsT>`
   display: flex;
   //put flexbox styles here and input them as props ?
`
export const MainContainer = styled(FlexBox)`
   width: 100%;
   height: 100%;
   margin: 3rem 4rem;
`
export const InputContainer = styled(FlexBox)`
   flex-direction: column;
   align-items: center;
   min-width: 25rem;
`
export const StyledCardContainer = styled(FlexBox)`
   flex-direction: column;
   height: 93%;
   overflow-x: hidden;
   overflow-y: scroll;
`
export const ImageContainer = styled(FlexBox)`
   flex-direction: column;
   padding-right: 5rem;
   align-items: center;
   min-width: 25rem;
`

export const ParagraphContainer = styled.div`
   padding: 1px 1em;
   word-wrap: break-all;
   font-size: 13px;
`
