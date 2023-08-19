import React from 'react'
import { styled } from 'styled-components'
//types
import { InputBoxPropsT } from '../../../../types/inputProps'
//icons
import refresh from '/src/assets/refresh-ccw.svg'
import arrowUp from '/src/assets/arrow-up.svg'
import downloadAll from '/src/assets/arrow-down-circle.svg'

//comps
import { FlexBox } from '../../../Containers/Containers'
import { IconButton } from '../../../IconButtons'

const InputFlex = styled(FlexBox)`
   flex-direction: column;
   align-items: center;
   margin: 5%;
   padding-top: 3em;
   width: 100%;
   height: 400px;
   border: 2px solid #ecf1f4;
   border-radius: 8px;
   background-color: whitesmoke;
   label {
      margin: 0;
      font-size: 11px;
      font-weight: bold;
   }
`
const IconFlex = styled(FlexBox)`
   width: 70%;
   justify-content: space-between;
`
const StyledInput = styled.input`
   margin: 5px 0px;
   width: 80%;
   height: 10%;
   background-color: #f8fafc;
   border: 1px solid #98a2af;
   border-radius: 3px;
   outline: none;
   &:hover {
      background-color: #98a2af;
   }
   &:focus {
      border-color: grey;
      background-color: whitesmoke;
      border-radius: 3px;
   }
`
export const InputBox = ({ resetInput, saveToLocalStorage, setDLBool, inputs }: InputBoxPropsT) => {
   return (
      <InputFlex>
         {inputs?.map((input) => (
            <React.Fragment key={input.id}>
               <label>{input.paragraph}</label>
               <StyledInput
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                     input.onChangeFn(e.target.value, input.typeOfInput)
                  }}
                  value={input.value}
               />
            </React.Fragment>
         ))}
         <IconFlex>
            <IconButton src={refresh} tooltip="reset input" onClick={() => resetInput()} />
            <IconButton src={arrowUp} tooltip="save to local storage" onClick={() => saveToLocalStorage()} />
            <IconButton src={downloadAll} tooltip="download all" onClick={() => setDLBool(true)} />
         </IconFlex>
      </InputFlex>
   )
}
