import { useEffect } from 'react'

function useColorBody() {
  useEffect(() => {
    document.body.style.backgroundImage = 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'


    return () => {
      document.body.style.backgroundColor = 'none'
    }
  })
}

export default useColorBody