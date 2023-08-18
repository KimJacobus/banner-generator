//comps
import { MainContainer, InputContainer } from '../comps/Containers/Containers'
import { CardContainer } from '../comps/Card/CardContainer'
import { InputBox } from '../comps/Card/Inputs/InputBox/InputBox'
import { JsonBox } from '../comps/Card/Inputs/InputBox/JsonBox'
import { ImageBox } from '../comps/Card/Inputs/ImageBox/ImageBox'
import { ThemeComp } from '../comps/Card/Inputs/InputBox/ThemeComp'
import Selectors from '../comps/Card/Inputs/InputBox/Selectors'
import { DLPendingComp } from '../comps/DLPendingComp'
//hooks
import { useInputs } from '../hooks/useInputs'
import { ContextInit } from '../hooks/useThemeContext'
import { useContext } from 'react'
import { useDownloadAll } from '../hooks/useDownloadAll'

import { styled } from 'styled-components'

export const Background = styled.div`
   position: absolute;
   width: 100vw;
   height: 100vh;
   background-color: ${({ theme }) => theme?.themeColor?.backgroundColor};
   overflow: hidden;
`

function MainPage() {
   const { resetInput, saveToLocalStorage, inputObj, inputs, imageInputs, JSONBool, JSONData, JSONUrl } = useInputs()
   const { DLBool, setDLBool, AllCardsApp } = useDownloadAll()
   const { theme } = useContext(ContextInit)
   const SelectorComp = Selectors()

   return (
      <Background theme={theme}>
         <MainContainer>
            <InputContainer>
               <ImageBox imageInputs={imageInputs} />
               <InputBox
                  resetInput={resetInput}
                  saveToLocalStorage={saveToLocalStorage}
                  setDLBool={setDLBool}
                  JSONUrl={JSONUrl}
                  inputObj={inputObj}
                  inputs={inputs}
               />
               <SelectorComp />
               <ThemeComp />
               {JSONBool && <JsonBox JSONData={JSONData} />}
            </InputContainer>
            {DLBool && <DLPendingComp />}
            <CardContainer inputObj={inputObj} imageInputs={imageInputs} DLBool={DLBool} AllCardsApp={AllCardsApp} />
         </MainContainer>
      </Background>
   )
}

export default MainPage
