import React from 'react'

const ResDetailsSkeleton = () => {
  return (
    <div role="status" class="max-w-3xl my-5 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
        <div className=" font-bold text-md my-2">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-56 mb-1"></div>
        </div>
        <h3 className="flex gap-1 font-bold text-sm text-orange mb-4">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </h3>
        <div className="font-bold text-sm my-2 flex ">
            <div className="text-lightBlue flex-col mr-3 space-y-1">
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2 mb-4"></div>
            </div>
            <div className="">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </div>
        </div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
    </div>
  )
}

export default ResDetailsSkeleton