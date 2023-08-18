import React, { ChangeEvent } from 'react'
import { styled } from 'styled-components'
//comps
import { FlexBox } from '../../../Containers/Containers'
//types
import { imgInputObject } from '../../../../types/inputProps'

const InputFlex = styled(FlexBox)`
   flex-direction: column;
   align-items: center;
   margin: 5%;
   padding-top: 5%;
   width: 100%;
   height: 130px;
   border: 2px solid #ecf1f4;
   border-radius: 8px;
   background-color: whitesmoke;
   label {
      margin: 0;
      font-size: 11px;
      font-weight: bold;
   }
`
// const IconFlex = styled(FlexBox)`
//    width: 70%;
//    justify-content: space-between;
// `
// const StyledInput = styled.input`
//    margin: 5px 0px;
//    width: 80%;
//    height: 10%;
//    background-color: #f8fafc;
//    border: 1px solid #98a2af;
//    border-radius: 3px;
//    outline: none;
//    &:hover {
//       background-color: #98a2af;
//    }
//    &:focus {
//       border-color: grey;
//       background-color: whitesmoke;
//       border-radius: 3px;
//    }
// `

export const ImageBox = ({ imageInputs }: { imageInputs: imgInputObject }) => {
   return (
      <InputFlex>
         {imageInputs &&
            imageInputs?.map(({ id, paragraph, numberOfLayer, onChangeFn }) => (
               <React.Fragment key={id}>
                  <label htmlFor="image-file">{paragraph}</label>
                  <input
                     type="file"
                     onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        onChangeFn(e, numberOfLayer)
                     }}
                  />
               </React.Fragment>
            ))}
      </InputFlex>
   )
}
