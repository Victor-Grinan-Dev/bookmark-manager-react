import React from 'react'

const Tab = () => {
  return (

        <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-1"
          >
            <div class="py-5 border-b-4 border-softRed" data-target="panel-1">
              Simple Bookmarking
            </div>
          </div>

  )
}

export default Tab