"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT || 9000;
const porta = parseInt(port);
app.use(express_1.default.json());
app.use(routes_1.default);
app.get('/', (req, res) => {
    return res.status(200).send('Seja Bem-vindo(a)');
});
app.listen(porta, () => {
    console.log('Servidor funcionando na porta ', porta);
});
exports.default = app;
