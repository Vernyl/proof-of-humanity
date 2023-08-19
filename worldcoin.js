import ProofBuilder from "./proof.js";

/**
 * Generates a signed humanity proof after a user has been validated by Worldcoin.
 *
 * @param {object} data - The random data to be used for unique proof generation.
 * @param {string} worldcoinProof - The Worldcoin proof that verifies the success of human verification.
 * @returns {Promise<object|null>} - The generated validator signed proof object, or null if the human verification fails.
 */
async function generateProof(data, worldcoinProof) {
  // Worldcoin humanity verification logic
  
  let humanHasBeenVerified = false;
  
  // const reqBody = { action: process.env.WORLDCOIN_ACTION_NAME, signal: "", ...worldcoinProof }
  const reqBody = {
    merkle_root: worldcoinProof.merkle_root,
    nullifier_hash: worldcoinProof.nullifier_hash,
    proof: worldcoinProof.proof,
    credential_type: worldcoinProof.credential_type,
    action: process.env.WORLDCOIN_ACTION_NAME, 
    signal: worldcoinProof.signal ?? "", // if we don't have a signal, use the empty string
  };
  
  console.log("reqBody - " + JSON.stringify(reqBody))
  const verifyRes = await fetch(`https://developer.worldcoin.org/api/v1/verify/${process.env.WORLDCOIN_APP_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody), 
  });

  const wldResponse = await verifyRes.json();
  console.log(verifyRes)
  if (verifyRes.status === 200) {
  console.log(verifyRes.status)
    humanHasBeenVerified = true;
  }

  if (!humanHasBeenVerified) {
    return null;
  }

  // If the verification process is successful, a signed proof will be generated.
  // See ./proof.js for the implementation details.
  const proof = await ProofBuilder(data);

  return proof;
}

export default {
  generateProof,
};
