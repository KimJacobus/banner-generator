import { toPng } from 'html-to-image'

export const useSingleDL = () => {
   const exportAsImage = async (el: HTMLDivElement | null) => {
      const fileName = `bac-image-${el?.clientWidth}x${el?.clientHeight}.png`
      if (el === null || undefined) return
      const dataURL = await toPng(el)
      const img = new Image()
      img.src = dataURL
      downloadImage(dataURL, fileName)
   }
   const downloadImage = (blob: string, fileName: string) => {
      const fakeLink = window.document.createElement('a')
      fakeLink.style.display = 'none'
      fakeLink.download = fileName
      fakeLink.href = blob
      document.body.appendChild(fakeLink)
      fakeLink.click()
      document.body.removeChild(fakeLink)
      fakeLink.remove()
   }
   return {
      exportAsImage,
   }
}
