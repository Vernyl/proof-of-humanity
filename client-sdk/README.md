# poh-validators-react

 

`poh-validators-react` is a library providing React components for integrating Proof of Humanity's validation mechanisms. This package is in beta.

 

 

## Quickstart

 

To install the package:

 

```bash
npm install poh-validators-react --save
```
or
```bash
yarn add poh-validators-react
```
## Validators

 

Currently, the only available validator is:

 

- `BiometricsValidator` - a biometrics verification tool that provides a seamless user experience. It's currently facing issues initializing on mobile devices.

 

Future versions will introduce.
- `WorldcoinValidator`
- `HumangramValidator`
- `LedgerValidator`

 

## Usage

 

### 1. Integrating the Biometrics Validator

 

To use the `BiometricsValidator`, follow this pattern:

 

```javascript
import { BiometricsValidator } from 'poh-validators-react';

 

function MyApp() {
    const handleProof = {}

    return (
<div>
<BiometricsValidator 
        app_id="YOUR_APP_ID"
        onProof={handleProof}
        url="VALIDATOR_API_URL"
      />
</div>
    );
}
```

 

### 2. Using a validator signed proof to access contract function

 

Pass in a custom callback function to `handleProof`, follow this pattern:

 

```javascript
const handleProof = async ({ proof, error }) => {
    if (proof && contract) {
      console.log("Received proof:", proof);
      try {
        const tx = await contract.sampleFunction(proof);
        const receipt = await tx.wait();
        console.log("Transaction receipt:", receipt);
      } catch (err) {
        console.error("Error during contract interaction:", err);
      }
    }

 

    if (error) {
      console.error("Error:", error);
    }
  }
```
See [poh-contracts](https://www.npmjs.com/package/poh-contracts) on how to use proof in your smart contract

 

### Support for more validators is coming soon!
Easily enable more that one method to verify humans in your dapp

 

```javascript
import { BiometricsValidator, WorldcoinValidator, HumangramValidator} from 'poh-validators-react';

 

function MyApp() {
    const handleProof = {}

    return (
<div>
<BiometricsValidator app_id="[Your_APP_ID]" onProof={handleProof} url="[Your_URL]" />
<WorldcoinValidator data={[Your_Data]} app_id="[Your_APP_ID]" action="[Your_Action]" onVerify={handleVerify} />
<HumangramValidator />
</div>
    );
}
```

 

## Props

 

For the `BiometricsValidator` component:

 

| Prop     | Required/Optional | Description                                                        | Default Value  |
|----------|-------------------|--------------------------------------------------------------------|----------------|
| `app_id` | Required          | The ID of your application.                                        | N/A            |
| `onProof`| Required          | Callback function when a proof is received or an error occurs.     | N/A            |
| `url`    | Required          | The API URL for the validator.                                     | N/A     |

 

## Notes

 

- This package is still in beta. Ensure thorough testing in a safe environment before deploying to production.
- Always handle errors gracefully in your application, as demonstrated in the `handleProof` function.
- The current package size is approximately 20mb and is currently being debugged. This is due to the inclusion of certain modules:
  - Biometrics validator adds 2.64mb
  - Worldcoin validator adds 16.5mb (circular dependency issue)
  - Humangram validator adds 7mb (might be due to @headlessui/react)

 

 

## Resources

 

- [Worldcoin Human Protocol](https://github.com/spiritbroski/worldcoin-human-protocol) – Details about the Worldcoin Human Protocol.
- [Humangram](https://github.com/h-sameri/Humangram) – Information regarding Humangram.
- [Human Ledger Signer](https://github.com/Charlie85270/human-ledger-signer) – Documentation and usage of the Human Ledger Signer.
- [Proof of HUMANity Biometrics DApp](https://github.com/myweb3journey/poh-biometrics-dapp) – A decentralized application for Proof of HUMANity biometric validation.

 

## License
MIT

 

## Author
The Web3 Community
