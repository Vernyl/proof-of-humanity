// biometrics.js
// This is a placeholder file for the biometrics module.
// The biometrics module will provide an interface for interacting with the Biometrics API.
// It will wrap the functionality included here https://github.com/myweb3journey/poh-biometrics-dapp

const passageConfig = {
    appID: process.env.PASSAGE_APP_ID,
    apiKey: process.env.PASSAGE_API_KEY
};

let passage = new Passage(passageConfig);

app
    .post("/verifyProof", async (request, response) => {

        const { authToken, data } = request.body;
        // token = request.body["token"];  
        // data = request.body["data"];

        console.log("Received Token: ", request.body["authToken"]);
        console.log("Received Data:", request.body["data"]);

        const user = await passage.validAuthToken(authToken);

        console.log(user);

        if (user) {
            // User is now authenticated 

            // Generate timestamp: 
            let authenticated_date = new Date();
            let authenticated_dateInISO = authenticated_date.toISOString();

            // Generate hexlified timestamp:
            const timestamp = ethers.utils.hexZeroPad(
                ethers.utils.hexlify(
                    Math.floor(authenticated_date.getTime() / 1000)
                ),
                4
            );

            // Generate hash:
            const hash = ethers.utils.keccak256(
                ethers.utils.hexConcat([data, timestamp])
            );

            // Generate validator Signature:
            const validatorSignature = await wallet.signMessage(
                ethers.utils.arrayify(hash)
            );

            // Generate proof:
            const proof = ethers.utils.hexConcat([
                data,
                timestamp,
                validatorSignature
            ]);

            console.log({ proof, authenticated_dateInISO });
            response.json({
                proof, timestamp: authenticated_dateInISO
            });
        } else {
            response.json({
                status: "failure",
            });
        }
    });