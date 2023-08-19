import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface LedgerValidator {
  onProof: (data: { proof: string | null, error: string | null }) => void;
}

function LedgerValidator({ onProof }: LedgerValidator) {
  const [open, setOpen] = useState(false);
  
  return (
    <>
    <button onClick={() => setOpen(true)} type="button" className="text-gray-700 bg-[#DBDBDB]/95 hover:bg-[#DBDBDB] focus:ring-4 focus:outline-none focus:ring-[#9152FF]/70 font-medium rounded-lg text-sm px-[2.4rem] py-2.5 text-center inline-flex items-center shadow-sm shadow-[#202020]/40 transition-all duration-100 dark:focus:ring-[#9152FF]/70">
      <svg className="w-5 h-5 mr-2" aria-hidden="true" width="147" height="128" viewBox="0 0 147 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 91.6548V128H55.293V119.94H8.05631V91.6548H0ZM138.944 91.6548V119.94H91.707V127.998H147V91.6548H138.944ZM55.3733 36.3452V91.6529H91.707V84.3842H63.4296V36.3452H55.3733ZM0 0V36.3452H8.05631V8.05844H55.293V0H0ZM91.707 0V8.05844H138.944V36.3452H147V0H91.707Z" fill="black"/>
      </svg>
      Verify With Ledger
    </button>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9152FF]/70 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div>
                  <div className="mx-auto py-3 flex items-center justify-center bg-transparent">
                  <svg className='h-12 opacity-80' aria-hidden="true" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="383" height="128" viewBox="0 0 383 128" fill="none">
                  <path d="M327.262 119.94V127.998H382.57V91.6548H374.511V119.94H327.262ZM327.262 0V8.05844H374.511V36.3452H382.57V0H327.262ZM298.74 62.3411V43.6158H311.382C317.546 43.6158 319.758 45.6696 319.758 51.2803V54.5982C319.758 60.3657 317.624 62.3411 311.382 62.3411H298.74ZM318.808 65.6589C324.575 64.1578 328.604 58.7842 328.604 52.3856C328.604 48.3564 327.025 44.7211 324.023 41.7972C320.23 38.1619 315.172 36.3452 308.615 36.3452H290.838V91.6529H298.74V69.6097H310.592C316.675 69.6097 319.125 72.1378 319.125 78.4599V91.6548H327.184V79.7239C327.184 71.0325 325.13 67.7147 318.808 66.7662V65.6589ZM252.282 67.4756H276.618V60.207H252.282V43.6139H278.988V36.3452H244.222V91.6529H280.173V84.3842H252.282V67.4756ZM225.812 70.3995V74.1916C225.812 82.1717 222.888 84.78 215.541 84.78H213.803C206.454 84.78 202.899 82.4088 202.899 71.4264V56.5717C202.899 45.5109 206.613 43.2181 213.96 43.2181H215.539C222.73 43.2181 225.021 45.9048 225.099 53.3322H233.791C233.001 42.4283 225.732 35.5555 214.828 35.5555C209.535 35.5555 205.11 37.2153 201.792 40.3745C196.814 45.0367 194.049 52.9383 194.049 63.9991C194.049 74.6659 196.42 82.5675 201.318 87.4649C204.636 90.7044 209.219 92.4426 213.723 92.4426C218.463 92.4426 222.81 90.5456 225.021 86.438H226.126V91.6529H233.395V63.1309H211.983V70.3995H225.812ZM156.126 43.6139H164.739C172.878 43.6139 177.303 45.6677 177.303 56.7304V71.2677C177.303 82.3285 172.878 84.3842 164.739 84.3842H156.126V43.6139ZM165.449 91.6548C180.541 91.6548 186.149 80.1982 186.149 64.001C186.149 47.5666 180.145 36.3471 165.29 36.3471H148.223V91.6548H165.449ZM110.063 67.4756H134.399V60.207H110.063V43.6139H136.768V36.3452H102.002V91.6529H137.954V84.3842H110.063V67.4756ZM63.4464 36.3452H55.3879V91.6529H91.7332V84.3842H63.4464V36.3452ZM0 91.6548V128H55.3076V119.94H8.05844V91.6548H0ZM0 0V36.3452H8.05844V8.05844H55.3076V0H0Z" fill="black"></path>
                  </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-700">
                      Human Ledger Signer
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Human Ledger Verification is on the way!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <div
                    className={`inline-flex h-48 w-full items-center justify-center rounded-md bg-cover bg-no-repeat bg-[#29A9EA] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#95c9df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9152FF]/70`}
                    style={{ backgroundImage: 'url(../../src/assets/ledger.gif)', backgroundPosition: 'center top -10px' }}
                  >        
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}``

export default LedgerValidator