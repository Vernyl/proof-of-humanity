# `poh-validators-react`

`poh-validators-react` is a library providing React components for integrating Proof of Humanity's validation mechanisms. This package is in beta.

## Quickstart

To install the package:

```bash
npm install poh-validators-react --save
```
<center>or</center>

```bash
yarn add poh-validators-react
```

## Validators

Currently, the library offers the following validators:

- `HumangramValidator` - Leverages the Humangram Telegram bot to authenticate the humanity of users using their social media history.
  
- `BiometricsValidator` - Designed for on-device biometrics, and offers advanced human verification. However, certain mobile devices might face challenges during initialization.
  
- `WorldcoinValidator` - Utilizes the precision of iris scanning to deliver a distinct and secure method for verifying human users.

Future versions will introduce:
- `LedgerValidator`

> **Note**: This package is still in its beta phase. Users might encounter unexpected errors. We appreciate your patience and feedback during this development stage.

## Usage

### 1. VerifyHuman Component (Recommended)

We've introduced a new component, `<VerifyHuman />`, which acts as a plug-and-play solution for all the current methods of validation we support. This component simplifies the process of integrating multiple validators into your application. 

<div align="center">
<img src="https://raw.githubusercontent.com/Vernyl/proof-of-humanity/main/client-sdk/src/assets/human-2.png" alt="human" width="75%" height="75%" />
</div>

- **Configuration**: Before using the `<VerifyHuman />` component, ensure you have a `poh.config.js` file set up in your project. This configuration file will contain details about the validators you want to use.

    ```javascript
    // Sample poh.config.js
    const config = {
        validators: {
          biometrics: {
            app_id: 'YOUR_APP_ID',
            url: 'YOUR_URL'
          },
          humangram: {
            websocket: 'YOUR_WEBSOCKET_URL'
          },
          worldcoin: {
            app_id: 'YOUR_APP_ID',
            action: 'YOUR_ACTION',
            url: 'YOUR_URL'
          },
          ledger: {
            // any necessary configurations for ledger
          }
          // ... add other validators as needed
        }
    };
    export default config;
    ```

- **Integration**: Import and use the `<VerifyHuman />` component in your React application.

    ```javascript
    import VerifyHuman from 'poh-validators-react';
    
    function App() {
      const handleProof = ({ proof, error }) => {
        // Handle the proof or error returned from the validators
      };
    
      return (
        <div className="App">
          <VerifyHuman start={true} onProof={handleProof} />
        </div>
      );
    }
    
    export default App;
    ```

### 2. Making use of a specific Validator

If you want to use a specific validator, follow this pattern:

```javascript
import { Validator } from 'poh-validators-react';

function MyApp() {
    const handleProof = {}

    return (
        <Validator {...ValidatorProps} />
    );
}
```

See [Props](#props) and replace `Validator` with the actual validator you wish to use.

### 3. Finally, use the validator signed proof to access contract functions

Pass in a custom callback function `handleProof`, which will be called immediately the proof is received:

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
See [poh-contracts](https://www.npmjs.com/package/poh-contracts) on how to use proof in your smart contracts.

## Validator Backend

All validators leverage a unified open-source backend project to ensure seamless human verification.

You can integrate the validator backend into your projects and tailor it to your specific needs. Supported programming language: `Node.js`

- [Proof Of Humanity](https://github.com/Vernyl/proof-of-humanity) validator backend

Please ensure you follow the setup guidelines carefully to guarantee proper functionality and security.

We are actively exploring the possibility of offering Verification as a Service (VaaS) in the future, further simplifying the integration process.

## Props

For the `VerifyHuman` component:

| Prop     | Required/Optional | Description                                                        | Default Value  |
|----------|-------------------|--------------------------------------------------------------------|----------------|
| `start`  | Optional          | If set to `true`, it opens the modal and initiates the validation process. | `false`        |
| `onProof`| Required          | Callback function when a proof is received or an error occurs.     | N/A            |

For the `BiometricsValidator` component:

| Prop     | Required/Optional | Description                                                        | Default Value  |
|----------|-------------------|--------------------------------------------------------------------|----------------|
| `app_id` | Required          | The ID of your application.                                        | N/A            |
| `onProof`| Required          | Callback function when a proof is received or an error occurs.     | N/A            |
| `url`    | Required          | The API URL for the validator.                                     | N/A     |

For the `HumangramValidator` component:

| Prop        | Required/Optional | Description                                                        | Default Value  |
|-------------|-------------------|--------------------------------------------------------------------|----------------|
| `onProof`   | Required          | Callback function when a proof is received or an error occurs.     | N/A            |
| `websocket` | Required          | The websocket URL for the validator.                               | N/A            |

## Notes

- This package is still in beta. Ensure thorough testing in a safe environment before deploying to production.
- Always handle errors gracefully in your application, as demonstrated in the `handleProof` function.
- The current package size is approximately 20mb, and we are actively troubleshooting related issues. This is due to the inclusion of certain modules:
  - Biometrics validator adds 2.64mb
  - Worldcoin validator adds 16.5mb (circular dependency issue)
  - Humangram validator adds 7mb (might be due to @headlessui/react)

## Resources

- [Worldcoin ID](https://github.com/spiritbroski/worldcoin-human-protocol) – Details about the Worldcoin Human Protocol.
- [Humangram](https://github.com/h-sameri/Humangram) – Provides a method for human verification using social media history via Humangram.
- [Human Ledger Signer](https://github.com/Charlie85270/human-ledger-signer) – Usage of the Human Ledger Signer.
- [Proof of HUMANity Biometrics DApp](https://github.com/myweb3journey/poh-biometrics-dapp) – A decentralized application for Proof of HUMANity biometric validation.

## License
MIT

## Author
The Web3 Community
