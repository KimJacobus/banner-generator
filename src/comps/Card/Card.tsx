//hooks
import { useContext, useEffect, useRef, useState } from 'react'
import { ContextInit } from '../../hooks/useThemeContext'
//comps
import { CondLogoBtnFlex, CondTxtFlex, CondBottomFlex } from '../Containers/ConditionalFlex'
import { DownloadButton } from '../IconButtons'
//types
import { cardPropsT } from '../../types/cardProps'
//images
import download from '/src/assets/download.svg'
//styles
import { StyledCard } from './StyledCard'
import { ImageContainer } from './Containers/ImageContainer'

const Card = ({ $inputobj, $cardData, imageInputs }: cardPropsT) => {
   const { theme } = useContext(ContextInit)
   const ref = useRef<HTMLDivElement | null>(null)
   const [currentRef, setCurrentRef] = useState<HTMLDivElement | null>(null)

   useEffect(() => {
      setCurrentRef(ref.current)
   }, [ref])

   return (
      <>
         <StyledCard
            ref={ref}
            theme={theme}
            $cardData={$cardData}
            $inputobj={$inputobj}
            title={`w:${currentRef?.clientWidth} h:${currentRef?.clientHeight}`}
         >
            <ImageContainer $cardData={$cardData} imageInputs={imageInputs} />
            <CondBottomFlex $cardData={$cardData}>
               <CondTxtFlex props={{ $inputobj, $cardData, theme }} />
               <CondLogoBtnFlex props={{ $cardData, theme }} inputCta={$inputobj?.cta} />
            </CondBottomFlex>
         </StyledCard>
         <DownloadButton src={download} currentRef={currentRef} />
      </>
   )
}

export default Card
