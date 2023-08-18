import { inputObjT, imgInputObject, singleInputObj } from './inputProps'

export type themeObject = {
   id?: number
   name: string
   themeColor?: {
      titleColor?: string
      descriptionColor?: string
      countryColor?: string
      backgroundColor?: string
      cardBackgroundColor?: string
      cardColor?: string
      hoverButtonColor?: string
      ctaColor?: string
      ctaButtonColor?: string
      logoColor?: string
   }
}

export type fontObject = {
   size?: string
   font?: 'ubuntu' | 'sans-serif' | 'Arial'
   fontStretch?: string
   weight?: '400' | '500' | '700' | string
   align?: string
   width?: string
   maxWidth?: string
   padding?: string
   margin?: string
   alignSelf?: string
   whiteSpace?: string
   flexBasis?: string
   flexGrow?: string
   flexShrink?: string | number
   wordBreak?: string
}

export type dimensionObject = {
   display?: string
   top?: string
   bottom?: string
   left?: string
   right?: string
   transform?: string
   width?: string
   height?: string
   maxWidth?: string
   maxHeight?: string
   padding?: string
   margin?: string
   gap?: string
   alignItems?: string
   overflow?: string
   borderRadius?: string
}

export type mediaQueryObject = {
   def?: dimensionObject & flexObject
   firefox?: dimensionObject & flexObject
}

export type flexObject = {
   alignItems?: string
   justifyContent?: string
   flexDirection?: string
   flexWrap?: string
   flexBasis?: string
   flexShrink?: string | number
   mediaQuery?: mediaQueryObject
}

export type paragraphObject = {
   color?: string
   fontFamily?: string
   fontSize?: string
   fontStretch?: string
   margin?: string
   textAlign?: string
   fontWeight?: string
   width?: string
   maxWidth?: string
   padding?: string
   alignSelf?: string
} & fontObject

export type cardDataObjT = {
   id?: number
   dimensions?: {
      img_dimensions?: {
         top?: dimensionObject
         middle?: dimensionObject
         bottom?: dimensionObject
      }
      card_dimensions?: dimensionObject
      logo?: dimensionObject
      cta_button?: dimensionObject & {
         borderRadius?: string
      }
   }
   flexbox?: {
      StyledCard?: flexObject & dimensionObject
      ImageWrapper?: flexObject & dimensionObject
      CondBottomFlex?: flexObject & dimensionObject
      CondLogoBtnFlex?: flexObject & dimensionObject
      TxtFlex?: flexObject & dimensionObject
      CondTxtFlex?: flexObject & dimensionObject
      CondTitleFlex?: flexObject & dimensionObject
      CondDesFlex?: flexObject & dimensionObject
      BxlLogo?: flexObject & dimensionObject
   }
   fonts?: {
      title?: fontObject
      subTitle?: fontObject
      description?: fontObject
      firstDes?: fontObject
      secondDes?: fontObject
      country?: fontObject & {
         position?: string
         top?: string
         right?: string
         bottom?: string
         left?: string
      }
      cta?: fontObject
   }
}

export type cardPropsT = {
   type?: string
   theme?: themeObject
   imageInputs?: imgInputObject
   $inputobj?: singleInputObj
   inputObj?: singleInputObj
   $cardData?: cardDataObjT
}
