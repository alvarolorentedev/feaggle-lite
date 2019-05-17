const faker =require('faker')

const request = require('./route-initializer')('../../../src/routes/toggles','/toggles')

describe('toggles get should', () => {

    test('return valid toggle', async () => {
        let requestBody = {}
        let result = await request.get('/toggles').send(requestBody)
        expect(result.status).toEqual(200)
        expect(result.text).toEqual(JSON.stringify(requestBody))
    })

})
