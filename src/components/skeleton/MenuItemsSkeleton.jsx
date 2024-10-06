import React from 'react'

const MenuItemsSkeleton = () => {
  return (
    <div>
        {
            Array.from({length: 4}).map((_, index) => (
                <div class="h-10 mt-3 bg-gray-300 rounded-md light:bg-gray-700 max-w-[840px]  mx-auto" key={index}></div>
            ))
        }
       
    </div>
  )
}

export default MenuItemsSkeleton