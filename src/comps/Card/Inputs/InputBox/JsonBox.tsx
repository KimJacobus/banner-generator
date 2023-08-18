import styled from 'styled-components'
//comps
import { ParagraphContainer } from '../../Containers/Containers'

const StyledJsonBox = styled.div`
   height: 10%;
   width: 100%;
   background-color: #f8fafc;
   border: 2px solid #ecf1f4;
   border-radius: 5px;
   overflow: scroll;
`

export const JsonBox = ({ JSONData }: { JSONData: [{}] }) => {
   const JSONString = JSON.stringify(JSONData).slice(2, -2).split(',').join('\n')

   return (
      <StyledJsonBox>
         <ParagraphContainer>
            <pre>"{JSONString}</pre>
         </ParagraphContainer>
      </StyledJsonBox>
   )
}
