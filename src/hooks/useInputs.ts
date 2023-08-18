//hooks
import { useState, useEffect, useContext, ChangeEvent } from 'react'
import { ContextInit } from './useThemeContext'
//types
import { singleInputObj, imageObject, inputObjT } from '../types/inputProps'
//data
import { defaultImageObj, defaultInputObj } from '../data/themesData'

export const useInputs = () => {
   const { defInputObj, themeSelector } = useContext(ContextInit)
   const [customCountry, setCustomCountry] = useState<string>('Griekenland')
   const [JSONUrl, setJSONUrl] = useState<string>('')
   const [JSONData, setJSONData] = useState<[{}]>([{}])
   const JSONBool = Object.keys(JSONData).length > 2

   //https://jsonplaceholder.typicode.com/users/1

   const [inputObj, setInputObject] = useState<singleInputObj>(defInputObj)
   const [imageObj, setImageObject] = useState<imageObject>(defaultImageObj)

   const [imageSrc, setImageSrc] = useState<string>('')
   const [numberOfLayer, setNumberOfLayer] = useState<string | undefined>('')

   useEffect(() => {
      if (typeof imageSrc === 'string' && numberOfLayer !== undefined) {
         setImageObject((prev) => ({ ...prev, [numberOfLayer]: imageSrc }))
      }
   }, [imageSrc])

   useEffect(() => {
      if (!JSONUrl || JSONUrl === ' ') return

      fetch(JSONUrl)
         .then(async (resp) => await resp.json())
         .then((d) => {
            setJSONData(d)
         })
         .catch((error) => {
            console.error(error)
         })
   }, [JSONUrl])

   const handleInputChange = (value: string, typeOfInput: string) => {
      if (typeOfInput === 'json') {
         setJSONUrl(value)
      }
      if (typeOfInput === 'customCountry') {
         setCustomCountry(value)
         setInputObject((prevInputObject) => ({ ...prevInputObject, [typeOfInput]: value }))
      }
      const txt = fillTextWithCustomData(value, JSONData)
      setInputObject((prevInputObject) => ({ ...prevInputObject, [typeOfInput]: txt }))
   }

   const handleImageChange = (e: ChangeEvent<HTMLInputElement>, numberOfLayer: string | undefined) => {
      setNumberOfLayer(numberOfLayer)

      if (e.target.files && e.target.files[0]) {
         const file = e.target.files[0]
         const imageUrl = URL.createObjectURL(file)
         setImageSrc(imageUrl)
      }
   }

   const imageInputs = [
      {
         id: 1,
         paragraph: 'top-layer :',
         numberOfLayer: 'topLayer',
         value: imageObj.topLayer,
         onChangeFn: handleImageChange,
      },
      {
         id: 2,
         paragraph: 'middle-layer :',
         numberOfLayer: 'middleLayer',
         value: imageObj.middleLayer,
         onChangeFn: handleImageChange,
      },
      {
         id: 3,
         paragraph: 'bottom-layer :',
         numberOfLayer: 'bottomLayer',
         value: imageObj.bottomLayer,
         onChangeFn: handleImageChange,
      },
   ]

   const inputs = [
      {
         id: 1,
         paragraph: 'title:',
         typeOfInput: 'title',
         value: inputObj.title,
         onChangeFn: handleInputChange,
      },
      {
         id: 2,
         paragraph: 'sub-title:',
         typeOfInput: 'subTitle',
         value: inputObj.subTitle,
         onChangeFn: handleInputChange,
      },
      {
         id: 3,
         paragraph: 'description:',
         typeOfInput: 'description',
         value: inputObj.description,
         onChangeFn: handleInputChange,
      },
      {
         id: 4,
         paragraph: 'cta:',
         typeOfInput: 'cta',
         value: inputObj.cta,
         onChangeFn: handleInputChange,
      },
      {
         id: 5,
         paragraph: 'custom-country:',
         typeOfInput: 'customCountry',
         value: inputObj.customCountry,
         onChangeFn: handleInputChange,
      },
      {
         id: 6,
         paragraph: 'json',
         typeOfInput: 'json',
         JSONUrl: inputObj.JSONUrl,
         onChangeFn: handleInputChange,
      },
   ]

   const resetInput = () => {
      setInputObject(defInputObj)
      setImageObject(defaultImageObj)
      setJSONData([{}])
      setJSONUrl('')
      themeSelector(0)
   }

   const saveToLocalStorage = () => {
      if (inputObj) {
         const localObj = {
            title: inputObj.title,
            subTitle: inputObj.subTitle,
            description: inputObj.description,
            cta: inputObj.cta,
         }
         console.log(localObj)
         localStorage.setItem('inputs', JSON.stringify(localObj))
      }
   }

   const fillTextWithCustomData = (value: string, customData: object | null) => {
      if (!customData) {
         return value
      }
      const re = /{%[a-zA-Z0-9?=-]*%}/gm
      const customTags = value.match(re)

      if (!customTags?.length) {
         return value
      }
      customTags.forEach((tag) => {
         const key = tag.replace('{%', '').replace('%}', '')
         value = value.replace(tag, (customData as { [key: string]: string })[key])
      })

      return value
   }

   return {
      resetInput,
      inputObj,
      setInputObject,
      saveToLocalStorage,
      inputs,
      imageInputs,
      imageObj,
      JSONUrl,
      JSONData,
      JSONBool,
      handleInputChange,
   }
}
