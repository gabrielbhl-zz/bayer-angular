const supertest = require("supertest");

const request = require('supertest');
const server = require('../server');

beforeAll(async () => {
    console.log('Initializing farmers route tests!');
});

afterAll(() => {
    console.log('Farmers route tests done!');
});

describe('test routes', () => {

    test('search farmers by filter route', (done) => {
        request(server).get('/farmers?filter=Mar').expect(200, done);
    });

    test('search farmers by filter route without body', (done) => {
        request(server).get('/farmers?filter=Marley').expect(204, done);
    });

});
