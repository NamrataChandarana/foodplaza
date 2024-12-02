import React from 'react'

const ScrollToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

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