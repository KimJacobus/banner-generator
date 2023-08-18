import styled from 'styled-components'
//hooks
import { useContext } from 'react'
//data
import { themesObject } from '../../../../data/themesData'
import { ContextInit } from '../../../../hooks/useThemeContext'

export const StyledForm = styled.form`
   display: grid;
   gap: 1rem;
   grid-template-columns: auto auto auto;
   background-color: #f8fafc;
   margin: 5px 0px;
   padding: 1rem;
   border-radius: 8px;
`
export const FormItem = styled.div``

export const ThemeComp = () => {
   const { theme, themeSelector } = useContext(ContextInit)
   return (
      <StyledForm>
         {themesObject.map((th) => (
            <FormItem key={th.id} onClick={() => themeSelector(th.id as number)}>
               <label>{th.name}</label>
               <input type="radio" name="theme" checked={theme?.name === th.name} value={th.name} readOnly />
            </FormItem>
         ))}
      </StyledForm>
   )
}
