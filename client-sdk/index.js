// index.js
// This file integrates the 4 modules: humangram, worldcoin, ledger, and biometrics.
// It provides the core abstraction for all the four methods of human verification within the Poh SDK.

// Import the modules.
const humangram = require('./humangram');
const worldcoin = require('./worldcoin');
const ledger = require('./ledger');
const biometrics = require('./biometrics');

class POH {
    constructor(humangram, worldcoin, ledger, biometrics) {
      this.humangram = humangram;
      this.worldcoin = worldcoin;
      this.ledger = ledger;
      this.biometrics = biometrics;
    }
}
  

// Create a new Poh object.
const poh = new POH(humangram, worldcoin, ledger, biometrics);

// Export the Poh object.
module.exports = poh;
