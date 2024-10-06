import React from 'react'

const FilterSkeleton = () => {
  return (
    <div>
         <div className="flex gap-2">
             {Array.from({length: 4}).map((filter) => (
                 <div className={`flex px-1 py-1 rounded-3xl `} >
                     <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
                 </div>
             ))}
        </div>
    </div>
  )
}

export default FilterSkeleton