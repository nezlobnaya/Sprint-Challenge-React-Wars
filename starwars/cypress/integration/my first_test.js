import { ExpansionPanelActions } from "@material-ui/core";
import { cyan } from "@material-ui/core/colors";

describe('My First Test', function() {
    it ('Finds an element', function (){
        cy.visit('http://localhost:3000/')

        cy.pause()

        cy.contains('Luke')
    })
})