import { ChangeEvent } from 'react'

export type inputs = {
   id: number
   paragraph: string
   typeOfInput: string
   value?: string
   onChangeFn: (value: string, input: string) => void
}

export type imageObject = {
   topLayer: string
   middleLayer: string
   bottomLayer: string
}

export type imgInputObject = {
   id?: number
   paragraph?: string
   numberOfLayer?: string
   value?: string
   onChangeFn: (e: ChangeEvent<HTMLInputElement>, numberOfLayer?: string) => void
}[]

export type singleInputObj = {
   id?: number
   lang?: string
   title?: string
   customCountry?: string
   subTitle?: string
   description?: string
   cta?: string
   JSONUrl?: string
}

export type inputObjT = singleInputObj[]

export type InputBoxPropsT = {
   resetInput: () => void
   saveToLocalStorage: () => void
   setDLBool: React.Dispatch<React.SetStateAction<boolean>>
   JSONUrl?: string
   inputObj?: singleInputObj
   inputs?: inputs[]
   imageInputs?: imageObject[]
   fileDataURL?: string | ArrayBuffer | null
}
