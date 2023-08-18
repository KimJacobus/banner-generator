//hooks
import { createContext, useState } from "react"
//data
import { defaultInputObj, defaultImageObj, themesObject } from "../data/themesData"
//types
import { themeObject } from "../types/cardProps"
import { imageObject, singleInputObj } from "../types/inputProps"

type ContextType = {
  theme?: themeObject
  defInputObj: singleInputObj
  defaultImageObj: imageObject
  themeSelector: (id: number) => void
  ColorFn: (color: string, typeOfInput: string) => void
}

const ContextInit = createContext<ContextType>({
  theme: themesObject[0],
  defInputObj: defaultInputObj[0],
  defaultImageObj,
  themeSelector: () => {},
  ColorFn: () => {},
})

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<themeObject>(themesObject[0])
  const [defInputObj] = useState<singleInputObj>(defaultInputObj[0])

  const themeSelector = (param: number) => {
    const sT = !param ? themesObject.find((t) => t.id === 0) : themesObject.find((t) => t.id === param)

    const Df = !param ? defaultInputObj.find((t) => t.id === 0) : defaultInputObj.find((t) => t.id === param)

    if (sT || Df) {
      setTheme((prev) => ({ ...prev, ...sT }))
      // setDefInputObj((prev) => ({ ...prev, ...Df }))
    }
  }

  const ColorFn = (color: string, typeOfComp: string) => {
    setTheme((prev) => ({ ...prev, themeColor: { ...prev.themeColor, [typeOfComp]: color } }))
  }

  const ContextValue: ContextType = {
    theme,
    defInputObj,
    defaultImageObj,
    themeSelector,
    ColorFn,
  }

  return <ContextInit.Provider value={ContextValue}>{children}</ContextInit.Provider>
}

export { ThemeContextProvider, ContextInit }
