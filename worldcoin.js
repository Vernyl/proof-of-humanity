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
  
  const reqBody = { action: process.env.WORLDCOIN_ACTION_NAME, signal: "", ...worldcoinProof }
  fetch(`https://developer.worldcoin.org/api/v1/verify/${process.env.WORLDCOIN_APP_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody), 
  }).then((verifyRes) => {
    verifyRes.json().then((wldResponse) => {
      if (verifyRes.status == 200) {
        humanHasBeenVerified = true;
        res.status(verifyRes.status).send({ code: "success" });
      } else {
        // return the error code and detail from the World ID /verify endpoint to our frontend
        res.status(verifyRes.status).send({ 
          code: wldResponse.code, 
          detail: wldResponse.detail 
        });
      }
    });
  });


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
