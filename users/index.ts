import { FastifyInstance } from "fastify";
import * as schemas from "./schemas";
import * as handlers from "./handlers";

export default async function (fastify: FastifyInstance): Promise<void> {
  fastify.get("/user/get/1", { schema: schemas.getUser1 }, handlers.getUser1);
  fastify.get("/user/get/2", { schema: schemas.getUser2 }, handlers.getUser2);
  fastify.get("/user/get/:userId", { schema: schemas.getUserById }, handlers.getUserById);
  fastify.post("/user/create", { schema: schemas.createUser }, handlers.createUser);
}
