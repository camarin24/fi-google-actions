const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow, SimpleResponse } = require('actions-on-google');

const app = dialogflow();

app.intent('ebitda', async conv => {
    conv.ask(new SimpleResponse({
        text: "Margen Ebitda: 13%",
        speech: "Hola este es el ebitda!!"
    }));
});

app.intent('Default Welcome Intent', async conv => {
    conv.ask(new SimpleResponse({
        text: "Bienvenido a Finanzas Corporativas Premex",
        speech: "Bienvenido a Finanzas Corporativas Premex. ¿En qué puedo ayudarte?"
    }));
});
//http://www.mocky.io/v2/5c02cf6f3000002900bb93b1

const expressApp = express().use(bodyParser.json());
expressApp.post('/fulfillment', app);
expressApp.listen(3000);
