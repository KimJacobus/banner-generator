import styled, { css } from "styled-components"
import { Interpolation } from "styled-components/dist/types"
//types
import { cardPropsT } from "../../types/cardProps"

type imageStrings = "top" | "middle" | "bottom"

const ImageWrapper = styled.div<cardPropsT>`
  position: relative;
  margin: ${({ $cardData }) => $cardData?.flexbox?.ImageWrapper?.margin};
  gap: ${({ $cardData }) => $cardData?.flexbox?.ImageWrapper?.gap};
  width: ${({ $cardData }) => $cardData?.flexbox?.ImageWrapper?.width};
  height: ${({ $cardData }) => $cardData?.flexbox?.ImageWrapper?.height};
  padding: ${({ $cardData }) => $cardData?.flexbox?.ImageWrapper?.padding};
  flex-wrap: ${({ $cardData }) => $cardData?.flexbox?.ImageWrapper?.flexWrap};
  overflow: ${({ $cardData }) => $cardData?.flexbox?.ImageWrapper?.overflow || "hidden"};
  border-radius: ${({ $cardData }) => $cardData?.flexbox?.ImageWrapper?.borderRadius || "2px"};
`

const imageStyles = ({ $cardData }: cardPropsT) => {
  const returnStyles = (type: imageStrings): Interpolation<cardPropsT> => {
    const imagePath = $cardData?.dimensions?.img_dimensions?.[type]

    return css`
      position: absolute;
      top: ${imagePath?.top || "50%"};
      right: ${imagePath?.right};
      bottom: ${imagePath?.bottom};
      left: ${imagePath?.left || "50%"};
      transform: ${imagePath?.transform || "translate(-50%, -50%)"};
      height: ${imagePath?.height || "auto"};
      width: ${imagePath?.width || "200px"};
    `
  }
  return returnStyles
}

export const TopImage = styled.img<cardPropsT>`
  ${(props) => imageStyles(props)("top")}
`
export const MiddleImage = styled.img<cardPropsT>`
  ${(props) => imageStyles(props)("middle")}
`
export const BottomImage = styled.img<cardPropsT>`
  ${(props) => imageStyles(props)("bottom")}
`

export const ImageContainer = ({ $cardData, imageInputs }: cardPropsT) => {
  return (
    <ImageWrapper $cardData={$cardData}>
      {imageInputs?.[2].value && <BottomImage $cardData={$cardData} src={imageInputs[2].value} />}
      {imageInputs?.[1].value && <MiddleImage $cardData={$cardData} src={imageInputs[1].value} />}
      {imageInputs?.[0].value && <TopImage $cardData={$cardData} src={imageInputs[0].value} />}
    </ImageWrapper>
  )
}
