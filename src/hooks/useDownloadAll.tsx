//hooks
import React, { useCallback, useRef, useState, useEffect } from 'react'
import { toPng } from 'html-to-image'
import { styled } from 'styled-components'
import JSZip from 'jszip'

const CardFlex = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin: 0em 5em;
   gap: 2em 5em;
   justify-content: flex-start;
`

export const useDownloadAll = () => {
   const [DLBool, setDLBool] = useState<boolean>(false)
   const containerRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if (DLBool) {
         downloadAllFn()
      }
   }, [DLBool])

   const AllCardsApp = ({ children }: { children: React.ReactNode }) => {
      return <CardFlex ref={containerRef}>{children}</CardFlex>
   }

   const downloadAllFn = useCallback(async () => {
      setDLBool(true)

      if (containerRef.current === null) {
         return
      }

      const childElements = Array.from(containerRef.current.children) as HTMLElement[]

      const zip = new JSZip()

      let fileNumber = 1

      for (let i = 0; i < childElements.length; i++) {
         const childElement = childElements[i]

         if (childElement.classList.contains('ignoreDL')) {
            continue
         }

         const dataUrl = await toPng(childElement, { cacheBust: true })
         try {
            const uniqueId = childElement.getAttribute('class')

            const fileName = uniqueId ? `bac-banner-${fileNumber}.png` : `${uniqueId}.png`

            fileNumber++

            zip.file(fileName, dataUrl.split('base64,')[1], { base64: true })
         } catch (err) {
            console.log(err)
         }
      }

      zip.generateAsync({ type: 'blob' })
         .then((content) => {
            const link = document.createElement('a')
            link.download = 'images.zip'
            link.href = URL.createObjectURL(content)
            link.click()
         })
         .catch((err) => {
            console.log(err)
         })
      setDLBool(false)
   }, [containerRef])

   return { downloadAllFn, AllCardsApp, DLBool, setDLBool }
}
