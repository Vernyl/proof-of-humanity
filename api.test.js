import request from 'supertest';
import app from './api.js'; // Assuming the API module is exported as 'app'

// Endpoint for Proof of Humanity
describe('Root API Endpoints', () => {
    it('GET / should respond with 200 and a message', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'Proof of Humanity' });
    });
});
  
// Endpoint for generating a proof using Worldcoin validator
describe('Worldcoin API Endpoints', () => {
  it('POST /worldcoin/proof should respond with a valid proof on successful validation', async () => {
    const data = "0x1234567890abcdef";
    const worldcoinProof = "This is a test Worldcoin proof";

    const response = await request(app)
      .post('/worldcoin/proof')
      .send({ data, worldcoinProof });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('proof');
  });

  it('POST /worldcoin/proof should respond with an error on failed validation', async () => {
    const data = "This is an invalid data should cause an error";
    const worldcoinProof = "This is a test Worldcoin proof";

    const response = await request(app)
      .post('/worldcoin/proof')
      .send({ data, worldcoinProof });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error');
  });
});

// Endpoint for generating a proof using Humangram validator
describe('Humangram API Endpoints', () => {
  it('POST /humangram/proof should respond with a valid proof on successful validation', async () => {
    const data = "0x1234567890abcdef";
    const worldcoinProof = "This is a test Worldcoin proof";

    const response = await request(app)
      .post('/humangram/proof')
      .send({ data, worldcoinProof });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('proof');
  });

  it('POST /humangram/proof should respond with an error on failed validation', async () => {
    const data = "This is an invalid data should cause an error";
    const worldcoinProof = "This is a test Worldcoin proof";

    const response = await request(app)
      .post('/humangram/proof')
      .send({ data, worldcoinProof });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error');
  });

});

// Endpoint for generating a proof using Biometrics validator
describe('Biometrics API Endpoints', () => {
    it('POST /biometrics/proof should respond with a valid proof on successful validation', async () => {
        const data = "0x1234567890abcdef";
        const token = "This is a test Worldcoin proof";

        const response = await request(app)
        .post('/biometrics/proof')
        .send({ data, token });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('proof');
    });

    it('POST /biometrics/proof should respond with an error on failed validation', async () => {
        const data = "This is an invalid data should cause an error";
        const token = "This is a test Worldcoin proof";

        const response = await request(app)
        .post('/biometrics/proof')
        .send({ data, token });

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error');
    });
});

// Endpoint for generating a proof using Ledger validator
describe('Ledger API Endpoints', () => {
  it('POST /ledger/proof should respond with a valid proof on successful validation', async () => {
    const data = "0x1234567890abcdef";
    const worldcoinProof = "This is a test Worldcoin proof";

    const response = await request(app)
      .post('/ledger/proof')
      .send({ data, worldcoinProof });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('proof');
  });

  it('POST /ledger/proof should respond with an error on failed validation', async () => {
    const data = "This is an invalid data should cause an error";
    const worldcoinProof = "This is a test Worldcoin proof";

    const response = await request(app)
      .post('/ledger/proof')
      .send({ data, worldcoinProof });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error');
  });
});
