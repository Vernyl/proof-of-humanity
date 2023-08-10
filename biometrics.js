import Passage from "@passageidentity/passage-node";
import ProofBuilder from "./proof.js";

/**
 * Generates a signed proof after a user has been validated by biometrics.
 *
 * @param {object} data - The random data to be used for unique proof generation.
 * @param {string} token - The Biometrics proof that verifies the success of the human verification.
 * @returns {Promise<object|null>} - The generated validator signed proof object, or null if the human verification fails.
 */
async function generateProof(data, token) {
  // Biometrics humanity verification logic

  let humanHasBeenVerified = false; 

  // Passage requires an App ID and, optionally, an API Key
const passageConfig = {
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
};

// Authentication using Passage class instance
let passage = new Passage(passageConfig);

  try {
    // Validate token using Passage class instance
    const userID = await passage.validAuthToken(token);
    if (userID) {
      //authenticated
      humanHasBeenVerified = true;
    }
  } catch (e) {
    // Authentication failed
    console.log(e);
    res.send("User could not be validated!");
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
