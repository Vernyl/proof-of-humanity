import { ethers } from "ethers";
import 'dotenv/config'

const validatorKey = process.env.VALIDATOR_PRIVATE_KEY
const wallet = new ethers.Wallet(validatorKey);

async function ProofBuilder(data) {

    const authenticated_date = new Date();

    const timestamp = ethers.utils.hexZeroPad(
      ethers.utils.hexlify(Math.floor(authenticated_date.getTime() / 1000)),
      4
    );

    const hash = ethers.utils.keccak256(
      ethers.utils.hexConcat([data, timestamp])
    );
    const validatorSignature = await wallet.signMessage(
      ethers.utils.arrayify(hash)
    );

    const proof = ethers.utils.hexConcat([
      data,
      timestamp,
      validatorSignature
    ]);

    return proof;
}

export default ProofBuilder;
