import React from 'react'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { io, Socket } from 'socket.io-client';
import { ethers } from 'ethers';


// Note: Debugging our package size and it seems like the headlessui dependency here is adding almost 7mb to our build resulting in the whole npm package being 20mb

interface HumangramValidator {
  onProof: (data: { proof: string | null, error: string | null }) => void;
  websocket: string;
}

function HumangramValidator({onProof, websocket}: HumangramValidator) {
  const [open, setOpen] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [magicCode, setMagicCode] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendChallengeToServer = async () => {
    const randomChallenge = ethers.utils.hexlify(
        ethers.utils.randomBytes(32)
    );

    // Emit challenge to the server
    if (socket) {
      socket.emit('sendChallenge', randomChallenge);
    }
  };

  useEffect(() => {
    if (open) {        
        const initializeSocket = async () => {
            const newSocket = io(websocket);
            setSocket(newSocket);

            // Iintroducing a slight delay to ensure socket initialization
            // Not a recommended practice but can be a temporary fix -- sometimes client is not able to send random challenge to server
            await new Promise(res => setTimeout(res, 100));

            socket?.on('magicCode', (code) => {
              console.log(code)
              setMagicCode(code);
            })

            // Explicitly request the magicCode
            socket?.emit('requestMagicCode');

            sendChallengeToServer();
        };
        
        initializeSocket();

        return () => {
            socket?.close();
        };
    }
}, [open]);


  // Add socket listeners once socket instance is set
  useEffect(() => {
      if (socket) {
        const eventHandler = (proof: string) => {
          setError(null);
          console.log('Received phone number:', proof);
          if (proof) {
              onProof({ proof: proof, error: null });
              setVerified(true)
              setOpen(false)
          } else {
              const message = 'Failed to fetch proof from the server.';
              onProof({ proof: null, error: message });
              setError(message);
          }

          setIsLoading(false);
      };

      socket.on('userPhoneNumber', eventHandler)

      return () => {
        socket.off('userPhoneNumber', eventHandler)
      }
    }
  }, [socket]);

  return (
    <>
    <button onClick={() => setOpen(true)} type="button" className="text-white bg-[#29A9EA] hover:bg-[#29A9EA]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
      <svg className="w-5 h-5 mr-2" aria-hidden="true" id="Livello_1" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 240 240"><defs><linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d93d2"/><stop offset="1" stop-color="#38b0e3"/></linearGradient></defs><title>Telegram_logo</title><circle cx="120" cy="120" r="120" fill="url(#linear-gradient)"/><path d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z" fill="#c8daea"/><path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763" fill="#a9c6d8"/><path d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z" fill="#fff"/></svg>

      Verify With Humangram
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
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#29A9EA]">
                    <svg className="h-10 w-10" aria-hidden="true" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17" cy="17" r="17" fill="#F2F2FA"></circle>
                      <g clip-path="url(#clip0_4696_10105)" fill="none">
                      <path d="M16.9994 8.26946L17.0216 8.27622L23.7392 10.4805L23.5049 16.2844L22.95 16.9646L22.5643 23.46L16.9751 26.7032L11.4313 23.46L11.0456 16.9646L10.4907 16.2844L10.2597 10.4816L16.9773 8.27735L16.9994 8.27058M16.9994 8.00098L16.9221 8.02579L16.9 8.03256L10.1824 10.2368L10 10.2966L10.0077 10.4917L10.242 16.2956L10.2454 16.3825L10.2995 16.4491L10.8013 17.065L11.1815 23.4769L11.1892 23.6157L11.3075 23.6845L16.8513 26.9277L16.9762 27.001L17.1011 26.9288L22.6903 23.6856L22.8086 23.6168L22.8163 23.478L23.1965 17.0661L23.6983 16.4502L23.7524 16.3836L23.7557 16.2968L23.9901 10.4929L23.9978 10.2977L23.8154 10.2379L17.0989 8.03256L17.0768 8.02579L16.9994 8.00098Z" fill="#320A8D"></path>
                      <path d="M16.9994 8.26946L17.0216 8.27622L23.7392 10.4805L23.5049 16.2844L22.95 16.9646L22.5643 23.46L16.9751 26.7032L11.4313 23.46L11.0456 16.9646L10.4907 16.2844L10.2597 10.4816L16.9773 8.27735L16.9994 8.27058M16.9994 8.00098L16.9221 8.02579L16.9 8.03256L10.1824 10.2368L10 10.2966L10.0077 10.4917L10.242 16.2956L10.2454 16.3825L10.2995 16.4491L10.8013 17.065L11.1815 23.4769L11.1892 23.6157L11.3075 23.6845L16.8513 26.9277L16.9762 27.001L17.1011 26.9288L22.6903 23.6856L22.8086 23.6168L22.8163 23.478L23.1965 17.0661L23.6983 16.4502L23.7524 16.3836L23.7557 16.2968L23.9901 10.4929L23.9978 10.2977L23.8154 10.2379L17.0989 8.03256L17.0768 8.02579L16.9994 8.00098V8.00098Z" stroke="#320A8D" stroke-width="0.3px" fill="none"></path>
                      <path d="M19.0382 13.4907C18.8525 13.4276 18.6668 13.3644 18.4856 13.3012C18.2579 13.2166 18.0369 13.4535 18.0468 13.7649C18.0678 14.3492 18.0877 14.9403 18.1087 15.5246C18.1142 15.7198 18.0214 15.8992 17.8766 15.9668C17.587 16.109 17.293 16.2466 16.999 16.3831C16.705 16.2511 16.4111 16.109 16.1215 15.9668C15.9723 15.8935 15.8839 15.7142 15.8894 15.5246C15.9104 14.9403 15.9303 14.3492 15.9513 13.7649C15.9612 13.449 15.7391 13.2166 15.5125 13.3012C15.3268 13.3644 15.1456 13.4332 14.9599 13.4907C14.8107 13.5438 14.6968 13.7118 14.6814 13.9172C14.6294 14.6132 14.5731 15.3024 14.5211 15.9984C14.5056 16.1936 14.5929 16.3729 14.7377 16.4519C15.0627 16.6256 15.0317 17.1953 14.6758 17.3262C14.5156 17.3837 14.3973 17.5473 14.3818 17.7424C14.299 18.8017 14.2172 19.8609 14.1343 20.9247C14.1188 21.13 14.2271 21.3195 14.4128 21.394C14.6349 21.4831 14.8615 21.5733 15.0892 21.6624C15.3732 21.773 15.6772 21.5575 15.6882 21.2406C15.7192 20.2873 15.7557 19.333 15.7866 18.3798C15.7921 18.1846 15.9049 18.0165 16.0651 17.9534C16.3801 17.827 16.6896 17.7007 16.999 17.5631C17.3041 17.695 17.6191 17.827 17.933 17.9534C18.0932 18.0165 18.2015 18.1858 18.2115 18.3798C18.2424 19.333 18.2789 20.2873 18.3098 21.2406C18.3198 21.5564 18.6248 21.7674 18.9089 21.6624C19.1366 21.5733 19.3631 21.4831 19.5853 21.394C19.7654 21.3206 19.8793 21.13 19.8638 20.9247C19.7809 19.8654 19.6991 18.8062 19.6162 17.7424C19.6008 17.5473 19.4869 17.3837 19.3222 17.3262C18.9664 17.1998 18.9354 16.6256 19.2604 16.4519C19.4096 16.3729 19.4924 16.1879 19.477 15.9984C19.425 15.3024 19.3687 14.6132 19.3167 13.9172C19.3012 13.7118 19.1874 13.5426 19.0382 13.4907Z" fill="#320A8D"></path>
                      </g>
                      <defs>
                      <clipPath id="clip0_4696_10105">
                      <rect width="14" height="19" fill="white" transform="translate(10 8)"></rect>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Humangram Bot
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Proof of Humanity verification bot. Your magic code is <strong>{magicCode}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className={`${isLoading && 'animate-pulse hover:bg-[#29A9EA] cursor-not-allowed'} inline-flex w-full items-center justify-center rounded-md bg-[#29A9EA] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#95c9df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                    onClick={() => {
                      setIsLoading(true);
                      window.open('https://t.me/HumanityGuardBot', '_blank');
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? <><svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>Verifying...</> : 'Verify Humanity'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}

export default HumangramValidator