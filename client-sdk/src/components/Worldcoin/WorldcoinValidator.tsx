import React, { useState } from 'react'
import { IDKitWidget, CredentialType, ISuccessResult } from '@worldcoin/idkit'
import axios from 'axios';
import { ethers } from 'ethers';

// Note: There's a problem somewhere, Node is saying Circular dependencies, and this module is adding 16.5mb to our build resulting in the whole npm package being 20mb

interface WorldcoinValidator {
  app_id: string;
  action: string;
  onProof: (data: { proof: string | null, error: string | null }) => void;
  url: string;
}

interface worldcoinProof {
	"merkle_root": string;
	"nullifier_hash": string;
	"proof": string;
	"credential_type": string;
}


function WorldcoinValidator({ app_id, action, onProof, url }: WorldcoinValidator) {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProof = async (worldcoinProof: worldcoinProof) => {
    setIsLoading(true);
    
    const randomChallenge = ethers.utils.hexlify(
      ethers.utils.randomBytes(32)
    );

    try {
      const response = await axios.post(url, {
        data: randomChallenge,
        worldcoinProof: worldcoinProof
      });
  
      if (response.data && response.data.proof) {
        onProof({ proof: response.data.proof, error: null });
        console.log("proof - " + response.data.proof);
      } else {
        onProof({ proof: null, error: 'Failed to fetch proof from the API.' });
        console.log("proof - " + response.data.proof);
      }
    } catch (err) {
      onProof({ proof: null, error: 'An error occurred while fetching the proof.' });
      console.log(err)
    } finally {
      setIsLoading(false);
    }
  }

  // const handleVerify = async (worldcoinProof: ISuccessResult) => {
  //   console.log(worldcoinProof)
  //   try {
  //     const reqBody = { data: data, worldcoinProof: worldcoinProof };
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(reqBody),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to generate proof.');
  //     }

  //     const result = await response.json();
  //     console.log('Proof generated:', result.proof);

  //     // You can perform further actions here based on the proof result
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //     // Handle the error gracefully, e.g., display an error message to the user
  //   }
  // };

  const onSuccess = (result: ISuccessResult) => {
    console.log(result)
    getProof(result);

  }
  return (
    <IDKitWidget
      app_id={app_id} // obtained from the Developer Portal
      action={action} // this is your action name from the Developer Portal
      onSuccess={onSuccess} // callback when the modal is closed
      // handleVerify={handleVerify} // optional callback when the proof is received
      credential_types={[CredentialType.Orb, CredentialType.Phone]} // optional, defaults to ['orb']
      enableTelemetry // optional, defaults to false
    >
      {({ open }) => <button onClick={open} type="button" className="text-zinc-100 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:focus:ring-[#9152FF]/70 font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center shadow-sm shadow-[#202020]/50 transition-all duration-100 dark:focus:ring-[#9152FF]/70 dark:hover:bg-[#050708]/30">
  <svg className="h-4 w-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 33 32"><path fill="currentColor" d="M30.7195 9.77312C29.9097 7.87434 28.7647 6.17103 27.2845 4.6911C25.8044 3.21117 24.1288 2.06632 22.2298 1.25654C20.247 0.418848 18.1525 0 16.0021 0C13.8238 0 11.7293 0.418848 9.7744 1.25654C7.87537 2.06632 6.17184 3.21117 4.69171 4.6911C3.21159 6.17103 2.06659 7.87434 1.25671 9.77312C0.418903 11.7277 0 13.822 0 16C0 18.1501 0.418903 20.2443 1.25671 22.2269C2.06659 24.1257 3.21159 25.829 4.69171 27.3089C6.17184 28.7888 7.87537 29.9337 9.7744 30.7155C11.7572 31.5532 13.8517 31.9721 16.0021 31.9721C18.1525 31.9721 20.247 31.5532 22.2298 30.7155C24.1288 29.9058 25.8323 28.7609 27.3125 27.281C28.7926 25.801 29.9376 24.0977 30.7475 22.1989C31.5853 20.2164 32.0042 18.1222 32.0042 15.9721C32.0042 13.822 31.5574 11.7277 30.7195 9.77312ZM10.696 14.4921C11.3383 11.9232 13.6842 10.0524 16.4489 10.0524H27.5638C28.2899 11.4206 28.7367 12.9284 28.9043 14.4921H10.696ZM28.9043 17.5079C28.7367 19.0716 28.262 20.5794 27.5638 21.9476H16.4489C13.6842 21.9476 11.3662 20.0489 10.696 17.5079H28.9043ZM6.81415 6.81326C9.27172 4.35602 12.5392 3.01571 16.0021 3.01571C19.465 3.01571 22.7325 4.35602 25.19 6.81326C25.2738 6.89703 25.3297 6.95288 25.4134 7.03665H16.4489C14.0472 7.03665 11.8131 7.95811 10.1095 9.66143C8.76903 11.0017 7.9033 12.6771 7.62403 14.4921H3.09988C3.435 11.5881 4.71964 8.9075 6.81415 6.81326ZM16.0021 28.9843C12.5392 28.9843 9.27172 27.644 6.81415 25.1867C4.71964 23.0925 3.435 20.3839 3.09988 17.5079H7.62403C7.93123 19.3229 8.79696 20.9983 10.1095 22.3386C11.8131 24.0419 14.0472 24.9633 16.4489 24.9633H25.4134C25.3297 25.0471 25.2738 25.103 25.19 25.1867C22.7325 27.644 19.465 28.9843 16.0021 28.9843Z"></path></svg>
  Verify with World ID
</button>}
    </IDKitWidget>
  )
}

export default WorldcoinValidator