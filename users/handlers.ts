import { FastifyRequest, FastifyReply } from "fastify";
import { StatusCodes } from "http-status-codes";
import * as schemas from "./schemas";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUser1(
  request: FastifyRequest, 
  reply: FastifyReply
): Promise<FastifyReply> {
  const user = await prisma.user.findUnique({
    where: { id: 1 },
  })
  return reply
    .type("application/json")
    .code(StatusCodes.OK)
    .send(user)
}

export async function getUser2(
  request: FastifyRequest, 
  reply: FastifyReply
): Promise<FastifyReply> {
  const user = await prisma.user.findUnique({
    where: { id: 2 },
  })
  return reply
    .type("application/json")
    .code(StatusCodes.OK)
    .send(user)
}

export async function getUserById(
  request: FastifyRequest<schemas.GetUserByIdRequest>,
  reply: FastifyReply
): Promise<FastifyReply> {
  const userId = request.params.userId
  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
  })
  return reply
    .type("application/json")
    .code(StatusCodes.OK)
    .send(user)
}

export async function createUser(
  request: FastifyRequest<schemas.CreateUserRequest>,
  reply: FastifyReply
): Promise<FastifyReply> {
  const user = await prisma.user.create({
    data: {
      name: request.body.name,
      email: request.body.email,
    },
  })
  return reply
    .type("application/json")
    .code(StatusCodes.CREATED)
    .send(user)
}
