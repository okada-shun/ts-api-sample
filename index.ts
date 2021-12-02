import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { ulid } from "ulid";

const server = fastify()
const prisma = new PrismaClient()

server.get('/ping', async (req, res) => {
  return 'pong\n'
})

server.get('/pong', async (req, res) => {
  return 'ping\n'
})

server.get('/user/get', async (req, res) => {
  const userId = ulid();
  return userId
})

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
