import React, { Fragment, useRef, useState, useEffect } from 'react'
import BiometricsValidator from '../Biometrics/BiometricsValidator'
import HumangramValidator from '../Humangram/HumangramValidator'
import LedgerValidator from '../Ledger/LedgerValidator'
import WorldcoinValidator from '../Worldcoin/WorldcoinValidator'
import { Dialog, Transition } from '@headlessui/react'
import config from '../../poh.config'

interface VerifyHuman {
  start: boolean
  onProof: (data: { proof: string | null, error: string | null }) => void;
}

function VerifyHuman({ start, onProof }: VerifyHuman ) {
  const [open, setOpen] = useState(start)
  const [error, setError] = useState<string | null>(null);

  const cancelButtonRef = useRef(null)

  const { validators } = config

  const onProofInternal = ({ proof, error }: { proof: string | null, error: string | null }) => {
    if (proof) {
      onProof({ proof: proof, error: null });
      console.log(proof)
      setOpen(false)
  } else {
      const message = 'Failed to fetch proof from the server.';
      onProof({ proof: null, error: message });
      console.log(error)
      setError(error)
    }
  }

  const BiometricProps = {
    app_id: validators.biometrics.app_id,
    url: validators.biometrics.url,
    onProof: onProofInternal
  }

  const HumangramProps = {
    websocket: validators.humangram.websocket,
    onProof: onProofInternal
  }

  const WorldcoinProps = {
    app_id: validators.worldcoin.app_id,
    action: validators.worldcoin.action,
    url: validators.worldcoin.url,
    onProof: onProofInternal
  }

  const LedgerProps = {
    onProof: onProofInternal
  }

  useEffect(() => {
    setOpen(start); // Update the open state whenever the start prop changes
  }, [start]);

  const handleClose = () => {
    setOpen(false);
    console.log('User closed modal')
    onProof({ proof: null, error: "Modal closed by user" }); // Notify the parent component that the modal was closed
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleClose}>
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
              {/* <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"> */}
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl border-1 border-gray-400 transition-all sm:my-8 sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white-100">    
                    <svg className="h-11 w-11" aria-hidden="true" xmlnsXlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17" cy="17" r="17" fill="#F2F2FA"></circle>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4158 7.03764C23.505
                      6.98817 23.6133 6.98742 23.7031 7.03565L26.9195 8.76136C26.9375 8.76733 26.955
                      8.77506 26.9719 8.78455C27.0241 8.81389 27.0654 8.85755 27.0918 8.90903C27.1143 
                      8.94999 27.1272 8.9963 27.1286 9.04459C27.1291 9.06341 27.1279 9.08202 27.125
                      9.10023L27.125 12.7742C27.125 12.8797 27.0696 12.9774 26.9792 13.0316L23.7979 
                      14.9379C23.7779 14.9589 23.7547 14.9772 23.7288 14.9919C23.674 15.023 23.6121 
                      15.0355 23.5515 15.0296C23.5039 15.028 23.4565 15.0151 23.4136 14.9908C23.3903
                      14.9775 23.3691 14.9614 23.3505 14.943L20.6302 13.3162L20.5969 13.3373L20.5969 
                      20.5684L23.4158 19.0053C23.505 18.9559 23.6133 18.9551 23.7031 19.0033L26.9195
                      20.729C26.9375 20.735 26.955 20.7427 26.9719 20.7522C27.0241 20.7816 27.0654 
                      20.8252 27.0918 20.8767C27.1142 20.9177 27.1272 20.964 27.1286 21.0123C27.1291 21.0311 
                      27.1279 21.0497 27.125 21.0679L27.125 24.7419C27.125 24.8474 27.0696 24.9451 26.9792 
                      24.9993L23.8 26.9044C23.7796 26.9263 23.7556 26.9454 23.7288 26.9606C23.6695 26.9943 23.6016
                      27.0062 23.5363 26.9964C23.4939 26.9928 23.452 26.9802 23.4136 26.9585C23.3913 26.9458 23.371
                      26.9305 23.3531 26.9132L20.1567 25.0016C20.0661 24.9475 20.0107 24.8497 20.0107 24.7441L20.0107 
                      21.5145L13.5655 25.3768C13.5413 25.4085 13.5108 25.4355 13.475 25.4559C13.4224 25.4857 13.3631 
                      25.4985 13.3048 25.4942C13.2475 25.4978 13.1893 25.485 13.1376 25.4557C13.1021 25.4356 13.0718 
                      25.4089 13.0478 25.3776L6.14727 21.2509C6.05669 21.1967 6.00124 21.099 6.00124 20.9934L6.0013
                      13.1149C6.00101 13.1087 6.00091 13.1025 6.00101 13.0962L6.0013 13.087L6.0013 13.0732C6.0013 
                      12.9653 6.05923 12.8657 6.15301 12.8124C6.18981 12.7914 6.22991 12.7789 6.27065 12.7747L13.1391 
                      8.96607C13.2283 8.9166 13.3366 8.91586 13.4265 8.96408L20.0107 12.4968L20.0107 9.08906C20.0107
                      8.98118 20.0686 8.8816 20.1624 8.82828C20.1882 8.81362 20.2156 8.80308 20.2437 8.79664L23.4158 7.03764ZM23.5674 22.6463L26.2168 21.0329L23.5637 19.6094L21.0011 21.0304L22.3269 21.8424C22.3817 21.8759 22.4232 21.9249 22.4491 21.9809L23.5674 22.6463ZM19.9969 20.4154L19.9969 13.535L17.808 14.8746L17.808 19.0748L19.9969 20.4154ZM17.7033 19.7123L19.7545 20.9686L13.6264 24.6408L13.6244 22.1616L17.6622 19.7419C17.6768 19.7332 17.6906 19.7232 17.7033 19.7123ZM17.208 18.7073L15.813 17.853C15.6717 17.7664 15.4957 17.8157 15.4199 17.963C15.344 18.1104 15.3971 18.2999 15.5384 18.3865L17.1301 19.3613L13.6238 21.4625L13.6205 17.4374L17.208 15.2418L17.208 18.7073ZM20.6107 24.574L20.6107 21.5984L23.2645 23.1823L23.2621 26.1596L20.6107 24.574ZM23.8802 26.1568L23.8778 23.1785L26.525 21.5584L26.525 24.572L23.8802 26.1568ZM9.39177 15.295L12.9919 17.4437L12.9887 21.4652L9.39174 19.3142L9.39177 15.295ZM6.6013 13.6296L8.79177 14.9369L8.79174 19.4843C8.79174 19.5899 8.84719 19.6876 8.93777 19.7418L12.9881 22.164L12.986 24.6416L6.60124 20.8233L6.6013 13.6296ZM19.6865 13.0038L13.287 9.57016L6.92743 13.0966L9.10177 14.3903L13.1462 12.1476C13.2354 12.0982 13.3436 12.0974 13.4335 12.1456L17.5069 14.3312L19.6865 13.0038ZM23.5637 7.64172L26.2168 9.06523L23.5682 10.6782L20.9245 9.10518L23.5637 7.64172ZM26.525 9.5907L23.8778 11.2108L23.8802 14.1891L26.525 12.6043L26.525 9.5907ZM23.2645 11.2146L20.6107 9.63075L20.6107 12.6053L20.6226 12.6125L21.5367 12.0328C21.6766 11.944 21.8532 11.9906 21.9311 12.1368C22.0091 12.283 21.9588 12.4735 21.8189 12.5622L21.1976 12.9563L23.2621 14.191L23.2645 11.2146ZM16.9003 14.6866L13.3025 16.8776L9.70908 14.7396L13.2941 12.7517L16.9003 14.6866Z" fill="#320A8D"></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-4">
                    <Dialog.Title as="h3" className="flex justify-center text-base font-semibold leading-6 text-gray-600 opacity-70 pb-2">
                      <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="101" height="25" viewBox="0 0 101 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_1858_4570" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="25" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.0678711H16.7014V24.0921H0V0.0678711Z" fill="#FFFFFF"></path>
                      </mask>
                      <g mask="url(#mask0_1858_4570)" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.291 0.65976C13.7497 0.479084 13.2084 0.298408 12.6819 0.117732C12.0202 -0.1231 11.3734 0.554383 11.4037 1.44262C11.4638 3.12865 11.5239 4.79954 11.584 6.48557C11.5991 7.04253 11.3283 7.55449 10.9072 7.76524C10.0652 8.1716 9.20794 8.56303 8.35065 8.95446C7.49336 8.57818 6.63627 8.1716 5.79411 7.76524C5.3579 7.55449 5.10239 7.04253 5.11752 6.48557C5.17761 4.79954 5.23771 3.12865 5.2978 1.44262C5.32806 0.539239 4.68131 -0.1231 4.01964 0.117732C3.47816 0.298408 2.9518 0.494228 2.41053 0.65976C1.97432 0.810359 1.64359 1.29202 1.59842 1.87906C1.44797 3.86629 1.28261 5.85331 1.13216 7.8254C1.08698 8.38236 1.3427 8.89431 1.76378 9.12C2.71122 9.6168 2.62107 11.2427 1.58329 11.619C1.11724 11.7847 0.771171 12.2512 0.725995 12.8082C0.485617 15.834 0.244818 18.875 0.00423006 21.9009C-0.0409459 22.4879 0.274866 23.03 0.816347 23.2407C1.46289 23.4965 2.12477 23.7525 2.78644 24.0084C3.61369 24.3246 4.50082 23.7072 4.53086 22.8041C4.621 20.0794 4.72628 17.3545 4.81663 14.6147C4.83155 14.0578 5.1627 13.5761 5.62874 13.3954C6.54613 13.0341 7.4486 12.6727 8.35065 12.2813C9.25291 12.6578 10.1554 13.0341 11.0728 13.3954C11.5388 13.5761 11.87 14.0578 11.8849 14.6147C11.9752 17.3396 12.0803 20.0643 12.1706 22.8041C12.2007 23.7072 13.0878 24.3094 13.9151 24.0084C14.5767 23.7525 15.2386 23.4965 15.8852 23.2407C16.4115 23.03 16.7425 22.4879 16.6973 21.9009C16.4567 18.875 16.2159 15.834 15.9755 12.8082C15.9303 12.2512 15.5996 11.7847 15.1182 11.619C14.0804 11.2578 13.9903 9.6168 14.9377 9.12C15.3737 8.89431 15.6145 8.36742 15.5693 7.8254C15.4189 5.83838 15.2535 3.85115 15.1031 1.87906C15.0579 1.29202 14.7272 0.795215 14.291 0.65976Z" fill="#6309FF"></path>
                      </g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7332 4.87549H31.8047V9.59642H36.7381V4.87549H39.8099V16.8952H36.7381V12.0035H31.8047V16.8952H28.7332V4.87549Z" fill="#6309FF"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M44.069 4.87549H47.1252V12.0655C47.1252 12.7798 47.3269 13.3389 47.7148 13.7427C48.1024 14.1466 48.6609 14.3483 49.3745 14.3483C50.0725 14.3483 50.631 14.1466 51.0345 13.7583C51.4379 13.37 51.6394 12.7954 51.6394 12.0655V4.87549H54.7112V12.2519C54.7112 13.7583 54.2302 14.9385 53.2529 15.7926C52.2756 16.6466 50.988 17.066 49.3592 17.066C48.4594 17.066 47.6681 16.9572 47.001 16.7242C46.3183 16.4914 45.76 16.1653 45.341 15.7304C44.9223 15.2956 44.5964 14.7986 44.3949 14.2242C44.1932 13.6495 44.0843 12.9817 44.0843 12.2519V4.87549H44.069Z" fill="#6309FF"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M58.9631 4.87549H62.7329L65.3548 10.8698H65.4789L68.0542 4.87549H71.8393V16.8952H68.8606V12.3606L69.0315 9.11497H68.9073L65.4167 16.7242L61.9264 9.11497H61.7867L61.9573 12.3915V16.8952H58.9631V4.87549Z" fill="#6309FF"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M82.3282 12.7185L81.9714 11.6004L81.0094 8.10632H80.9008L79.8615 11.6004L79.5045 12.7185H82.3282ZM79.1005 4.87549H82.6839L87.0277 16.8952H83.6458L83.072 15.0781H78.7435L78.1541 16.8952H74.9737L79.1005 4.87549Z" fill="#6309FF"></path>
                      <mask id="mask1_1858_4570" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="89" y="4" width="12" height="13" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M89.9588 4.87549H100.772V16.8952H89.9588V4.87549Z" fill="#FFFFFF"></path>
                      </mask>
                      <g mask="url(#mask1_1858_4570)" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M89.9588 4.87549H93.4804L97.7623 12.5159H97.8864L97.7156 9.13053V4.87549H100.772V16.8952H97.2657L93.015 9.33245H92.8908L93.0459 12.609V16.8952H89.9743V4.87549H89.9588Z" fill="#6309FF"></path>
                      </g>
                      </svg>
                    </Dialog.Title>
                    <div className="mt-3">
                      <BiometricsValidator {...BiometricProps} />
                    </div>
                    <div className="mt-3">
                      <HumangramValidator {...HumangramProps} />
                    </div>
                    <div className="mt-3">
                      <WorldcoinValidator {...WorldcoinProps} />
                    </div>
                    <div className="mt-3">
                      <LedgerValidator {...LedgerProps} />
                    </div>
                  </div>
                </div>
                <div className='mt-3'></div>                
                <a href='https://www.npmjs.com/package/poh-validators-react' target='_blank' rel='noopener noreferrer' className="flex items-center absolute bottom-[0.4rem] left-1/2 transform -translate-x-1/2 text-xs font-light text-gray-400 opactiy-35 transition-all duration-100 group hover:underline hover:underline-offset-1 hover:text-[#9152FF]/50">
                  <span className='px-1'>Beta v0.0.6</span>
                </a>                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}


export default VerifyHuman