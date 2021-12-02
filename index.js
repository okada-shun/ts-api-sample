"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const client_1 = require("@prisma/client");
const ulid_1 = require("ulid");
const server = (0, fastify_1.default)();
const prisma = new client_1.PrismaClient();
server.get('/ping', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return 'pong\n';
}));
server.get('/pong', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return 'ping\n';
}));
server.get('/user/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = (0, ulid_1.ulid)();
    return userId;
}));
server.listen(8080, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
