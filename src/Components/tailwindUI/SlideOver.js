import React from "react";
import { Transition } from '@headlessui/react'

export default React.memo(function SlideOver(props) {
  console.log('props.isOpen', props.isOpen);
  return (
    <section style={{ maxHeight: 'max-content' }} className="absolute overflow-auto inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">

      <Transition
        show={props.isOpen}
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="w-screen max-w-md">
          <div className="h-screen flex flex-col py-6 bg-white shadow-xl">
            <div className="px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
                  Menu
                </h2>
                <div className="ml-3 h-7 flex items-center">
                  <button className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Close panel</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <svg onClick={() => props.onClose()} className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 relative flex-1 px-4 sm:px-6">
              {/* <!-- Replace with your content --> */}
              <div className="absolute inset-0 px-4 sm:px-6">
                <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
                  Content
                  </div>
              </div>
              {/* <!-- /End replace --> */}
            </div>
          </div>
        </div>
      </Transition>
    </section>
  )
})