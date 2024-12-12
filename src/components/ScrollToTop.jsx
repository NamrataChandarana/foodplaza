import React from 'react'
import { scrollToTop } from '../utils/functions'

const ScrollToTop = () => {
  
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-orange text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 transition "
    >
      ↑ 
    </button>
  )
}

export default ScrollToTop