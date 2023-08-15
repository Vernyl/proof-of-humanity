import React, { useState } from 'react'
import { Passage } from "@passageidentity/passage-js";
import axios from 'axios';
import { ethers } from 'ethers';

interface BiometricsValidator {
  app_id: string;
  onProof: (data: { proof: string | null, error: string | null }) => void;
  url: string;
}

function BiometricsValidator({ app_id, onProof, url }: BiometricsValidator) {
  // Note: biometrics verification does not seem to initialize on mobile phones

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProof = async (authToken: string) => {
    setIsLoading(true);
    
    const randomChallenge = ethers.utils.hexlify(
      ethers.utils.randomBytes(32)
    );

    try {
      const response = await axios.post(url, {
        data: randomChallenge,
        token: authToken 
      });
  
      if (response.data && response.data.proof) {
        onProof({ proof: response.data.proof, error: null });
        console.log(response.data.proof);
      } else {
        onProof({ proof: null, error: 'Failed to fetch proof from the API.' });
      }
    } catch (err) {
      onProof({ proof: null, error: 'An error occurred while fetching the proof.' });
    } finally {
      setIsLoading(false);
    }
  }

  const handleVerify = async () => {
    //do passage js things
    const passage = new Passage(app_id)
    //generate random user name
    const username = "random+" + Date.now() + "@passage.id"
    //register the user
    const authResult = await passage.register(username)
    console.log("doHumanityCheck - Auth Result: ", authResult.auth_token);
    getProof(authResult.auth_token);
    
  }

  return (
  <button onClick={handleVerify} type="button" disabled={isLoading} className="text-[#222222] bg-[#E9EFFF] hover:bg-[#B1B7C6]/30 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/10 mr-2 mb-2">
  {!isLoading ? (<><svg className="h-4 w-4 mr-2" aria-hidden="true" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 251" fill="none">
  <path opacity="0.8" d="M37.8419 71.6921L65.1425 87.4541C86.2537 99.6426 93.4921 126.639 81.3036 147.75C80.2315 149.607 79.045 151.353 77.7583 152.989L12.6182 115.381C8.67588 113.105 5.58417 109.922 3.44179 106.254C-0.964934 98.6912 -1.30613 89.0446 3.38448 80.9202C10.348 68.8591 25.7752 64.7254 37.8419 71.6921Z" fill="#3D53F6"></path>
  <path opacity="0.5" d="M37.8419 180.052L65.1425 164.29C86.2537 152.101 93.4921 125.105 81.3036 103.994C80.2315 102.137 79.045 100.391 77.7583 98.7544L12.6182 136.363C8.67588 138.639 5.58417 141.822 3.44179 145.49C-0.964934 153.053 -1.30613 162.699 3.38448 170.824C10.348 182.885 25.7752 187.019 37.8419 180.052Z" fill="#3D53F6"></path>
  <path opacity="0.5" d="M212.753 71.6921L185.452 87.4541C164.341 99.6426 157.103 126.639 169.291 147.75C170.363 149.607 171.55 151.353 172.836 152.989L237.976 115.381C241.919 113.105 245.01 109.922 247.153 106.254C251.56 98.6912 251.901 89.0446 247.21 80.9202C240.247 68.8591 224.819 64.7254 212.753 71.6921Z" fill="#3D53F6"></path>
  <path opacity="0.8" d="M212.753 180.052L185.452 164.29C164.341 152.101 157.103 125.105 169.291 103.994C170.363 102.137 171.55 100.391 172.836 98.7544L237.976 136.363C241.919 138.639 245.01 141.822 247.153 145.49C251.56 153.053 251.901 162.699 247.21 170.824C240.247 182.885 224.819 187.019 212.753 180.052Z" fill="#3D53F6"></path>
  <path d="M125.297 150.525C139.228 150.525 150.52 139.232 150.52 125.302C150.52 111.372 139.228 100.079 125.297 100.079C111.367 100.079 100.075 111.372 100.075 125.302C100.075 139.232 111.367 150.525 125.297 150.525Z" fill="#FF2F1D"></path>
  <path opacity="0.8" d="M71.1172 212.753L86.8793 185.452C99.0678 164.341 126.064 157.102 147.175 169.291C149.032 170.363 150.778 171.55 152.415 172.836L114.806 237.976C112.53 241.919 109.347 245.01 105.679 247.153C98.1164 251.559 88.4698 251.901 80.3454 247.21C68.2842 240.247 64.1505 224.819 71.1172 212.753Z" fill="#FF2F1D"></path>
  <path opacity="0.5" d="M179.477 212.752L163.715 185.452C151.526 164.341 124.53 157.102 103.419 169.291C101.562 170.363 99.8157 171.549 98.1794 172.836L135.788 237.976C138.064 241.919 141.247 245.01 144.915 247.153C152.478 251.559 162.124 251.901 170.249 247.21C182.31 240.246 186.444 224.819 179.477 212.752Z" fill="#FF2F1D"></path>
  <path opacity="0.5" d="M71.1172 37.8419L86.8793 65.1425C99.0678 86.2537 126.064 93.4921 147.175 81.3036C149.032 80.2315 150.778 79.045 152.415 77.7583L114.806 12.6182C112.53 8.67589 109.347 5.58416 105.679 3.44179C98.1164 -0.964936 88.4698 -1.30613 80.3454 3.38449C68.2842 10.348 64.1505 25.7752 71.1172 37.8419Z" fill="#3D53F6"></path>
  <path opacity="0.8" d="M179.477 37.8419L163.715 65.1425C151.526 86.2537 124.53 93.4921 103.419 81.3036C101.562 80.2315 99.8157 79.045 98.1794 77.7583L135.788 12.6182C138.064 8.67589 141.247 5.58416 144.915 3.44179C152.478 -0.964936 162.124 -1.30613 170.249 3.38449C182.31 10.348 186.444 25.7752 179.477 37.8419Z" fill="#3D53F6"></path>
  </svg>Verify with Passage ID</>) : (<><svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...</>)}
</button>
  )
}

export default BiometricsValidator