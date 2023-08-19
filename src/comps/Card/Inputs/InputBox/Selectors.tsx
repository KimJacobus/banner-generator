import styled from 'styled-components'
//hooks
import { useContext } from 'react'
import { ContextInit } from '../../../../hooks/useThemeContext'
//comps
import { FlexBox } from '../../../Containers/Containers'

const StyledColorSelector = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   input {
   }
   label {
      padding: 3px;
      font-size: 10px;
      font-family: sans-serif;
      font-weight: bold;
   }
`
const SelectorFlex = styled(FlexBox)`
   width: 100%;
   justify-content: space-around;
   margin: 1em;
`

const Selectors = () => {
   const { ColorFn, theme } = useContext(ContextInit)

   const TitleColorSelector = () => {
      return (
         <StyledColorSelector>
            <input
               type="color"
               onChange={(e) => ColorFn(e.target.value, 'titleColor')}
               value={theme?.themeColor?.titleColor}
            />
            <label htmlFor="button-color">Title</label>
         </StyledColorSelector>
      )
   }

   const DescriptionColorSelector = () => {
      return (
         <StyledColorSelector>
            <input
               type="color"
               onChange={(e) => ColorFn(e.target.value, 'descriptionColor')}
               value={theme?.themeColor?.descriptionColor}
            />
            <label htmlFor="button-color">Description-Color</label>
         </StyledColorSelector>
      )
   }

   const ButtonColorSelector = () => {
      return (
         <StyledColorSelector>
            <input
               type="color"
               onChange={(e) => ColorFn(e.target.value, 'ctaButtonColor')}
               value={theme?.themeColor?.ctaButtonColor}
            />
            <label htmlFor="button-color">Button</label>
         </StyledColorSelector>
      )
   }

   const CardColorSelector = () => {
      return (
         <StyledColorSelector>
            <input
               type="color"
               onChange={(e) => ColorFn(e.target.value, 'cardColor')}
               value={theme?.themeColor?.cardColor}
            />
            <label htmlFor="card-color">Card-Color</label>
         </StyledColorSelector>
      )
   }

   const SelectorComp = () => {
      return (
         <SelectorFlex>
            <TitleColorSelector />
            <ButtonColorSelector />
            <CardColorSelector />
            <DescriptionColorSelector />
         </SelectorFlex>
      )
   }
   return SelectorComp
}

export default Selectors
