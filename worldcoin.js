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

  const verify = await axios.post('https://developer.worldcoin.org/api/v1/verify', { action_id: process.env.WORLDCOIN_ACTION_ID, ...worldcoinProof })
  const result = verify.data

  const { success } = result;
  if (success) {
    // User is now authenticated
    humanHasBeenVerified = true;
  }

  if (!humanHasBeenVerified) {
    return null;
  }

  // If the verification process is successful, a signed proof will be generated.
  // See ./proof.js for the implementation details.
  const proof = ProofBuilder(data);

  return proof;
}

export default {
  generateProof,
};
