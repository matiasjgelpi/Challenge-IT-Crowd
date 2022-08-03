"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
// import { connectDb } from './database/dbConnection'
// import blogPostRoutes from './routes/BlogPostRoutes'
const cors = require('cors');
// connectDb()
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
// app.use('/', blogPostRoutes)
app.use('/', (_, res) => {
    return res.status(404).send({ msg: 'resource not found' });
});
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
