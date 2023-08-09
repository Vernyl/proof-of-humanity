import React from 'react';
import { WorldIDWidget } from "@worldcoin/id";
import { IDKitWidget } from '@worldcoin/idkit';


function WorldcoinValidator({
  data,
  onVerify,
  validatorApiUrl,
  signal,
  actionId,
  ...rest
}) {
  const handleVerification = async (worldcoinProof) => {
    try {
      const proof={signal,...worldcoinProof}
      const response = await fetch(validatorApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data,
          worldcoinProof:proof
        })
      });
      if (response.ok) {
        const { proof } = await response.json();
        onVerify({ error: false, errorMessage: null, proof });
      } else {
        const err=await response.text();
        const errorMessage = `${response.status} ${err}`;
        onVerify({ error: true, errorMessage, proof: null });
      }
    } catch (error) {
      onVerify({ error: true, errrorMessage: String(error), proof: null });
    }
  };

  // Main validator component
  return (
    <>
    <IDKitWidget
	app_id="app_GBkZ1KlVUdFTjeMXKlVUdFT" // obtained from the Developer Portal
	action="vote_1" // this is your action name from the Developer Portal
	onSuccess={onSuccess} // callback when the modal is closed
	handleVerify={handleVerify} // optional callback when the proof is received
	credential_types={['orb', 'phone']} // optional, defaults to ['orb']
	enableTelemetry // optional, defaults to false
>
	{({ open }) => <button onClick={open}>Verify with World ID</button>}
</IDKitWidget>
    <WorldIDWidget
  actionId={actionId} // obtain this from developer.worldcoin.org
  signal={signal}
  enableTelemetry
  onSuccess={(verificationResponse) => {
    handleVerification(verificationResponse)
  }} // you'll actually want to pass the proof to the API or your smart contract
  onError={(error) => console.error(error)}
{...rest}
/>
</>
  );
}

export default WorldcoinValidator;