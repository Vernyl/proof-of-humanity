import ProofBuilder from "./proof.js";

/**
 * Generates a signed proof after a user has been validated by biometrics.
 *
 * @param {object} data - The random data to be used for unique proof generation.
 * @param {string} authToken - The Biometrics proof that verifies the success of the human verification.
 * @returns {Promise<object|null>} - The generated validator signed proof object, or null if the human verification fails.
 */
async function generateProof(data, authToken) {
  // Biometrics humanity verification logic
  // The parameters required to be passed into the generateProof() function to validate the humanity might
  // be different for each validator. These parameters are deduced from the verification process.

  // For the Biometrics validator, we assume that human verification is successful (set to true as a placeholder).
  // In a real-world implementation, this should be replaced with the actual verification logic.
  let humanHasBeenVerified = false; 
  const user = await passage.validAuthToken(authToken);

        console.log(user);

        if (user) {
            // User is now authenticated 
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
