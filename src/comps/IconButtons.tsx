import { styled } from 'styled-components'
import { useSingleDL } from '../hooks/useSingleDL'

const ButtonDiv = styled.div`
   border: none;
   img {
      border: none;
      padding: 20px;
      margin-top: 10px;
      font-family: sans-serif;
      cursor: pointer;
      background-color: #f5f5f5;
      border-radius: 5px;
      &:hover {
         background-color: grey;
      }
   }
`

const DownloadDiv = styled(ButtonDiv)`
   width: 13%;
`

export const IconButton = ({ src, tooltip, onClick }: { src: string; tooltip: string; onClick: () => void }) => {
   return (
      <ButtonDiv onClick={() => onClick()} title={tooltip}>
         <img src={src}></img>
      </ButtonDiv>
   )
}

export const DownloadButton = ({ src, currentRef }: { src: string; currentRef: HTMLDivElement | null }) => {
   const { exportAsImage } = useSingleDL()

   return (
      <DownloadDiv className="ignoreDL" onClick={() => exportAsImage(currentRef)}>
         <img src={src}></img>
      </DownloadDiv>
   )
}
