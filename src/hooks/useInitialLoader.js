import { useState } from 'react'

export const useInitialLoader = () => {
  const [shouldShowLoader, setShouldShowLoader] = useState(true)

  const handleLoadingComplete = () => {
    setShouldShowLoader(false)
  }

  return {
    shouldShowLoader,
    handleLoadingComplete
  }
}