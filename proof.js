import { ethers } from "ethers";
import 'dotenv/config'

const validatorKey = process.env.VALIDATOR_PRIVATE_KEY
const wallet = new ethers.Wallet(validatorKey);

async function ProofBuilder(data, timestamp) {
    const proofTimestamp = ethers.utils.hexZeroPad(
      ethers.utils.hexlify(Math.floor(timestamp.getTime() / 1000)),
      4
    );

    const hash = ethers.utils.keccak256(
      ethers.utils.hexConcat([data, proofTimestamp])
    );
    const validatorSignature = await this.wallet.signMessage(
      ethers.utils.arrayify(hash)
    );

    const proof = ethers.utils.hexConcat([
      data,
      proofTimestamp,
      validatorSignature
    ]);

    return proof;
}

export default ProofBuilder;
