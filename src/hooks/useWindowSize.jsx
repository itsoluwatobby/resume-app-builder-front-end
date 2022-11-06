import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  const {width, height} = windowSize

  useEffect(() => {
    const onWindowChange = () => {
      setWindowSize({
         width: window.screenX,
         height: window.screenY
      })
   }
   window.addEventListener('resize', onWindowChange)
   
   return () => window.removeEventListener('resize', onWindowChange)
  }, [windowSize])

  return width
}

export default useWindowSize