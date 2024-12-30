const { expect } = require("chai")

describe('Buscar dispositivos', () => {

    it('Buscar dispositivo especifico', () => {
        cy.visit({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/3'
        
        })
            .then((resultado) => {
                expect(resultado.status).equal(200)
                expect(resultado.body).equal('3')
                expect(resultado.body).not.empty    
                expect(resultado.name).equal('Laptop')


            })
    })
    it('Buscar dispositivo inexistente', () => {
        cy.visit({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/SEP'
        
        })
            .then((resultado) => {
        


            })
    })
})