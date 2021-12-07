import { FastifySchema, RequestGenericInterface } from "fastify";

export const getUser1: FastifySchema = {
  querystring: {
    name: { type: 'string' },
    excitement: { type: 'integer' }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string' }
      }
    }
  }
}

export const getUser2: FastifySchema = {
  querystring: {
    name: { type: 'string' },
    excitement: { type: 'integer' }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string' }
      }
    }
  }
}

export const getUserById: FastifySchema = {
  params: {
    type: "object",
    properties: {
      userId: {
        type: "number",
      },
    },
    required: ["userId"],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string' }
      }
    }
  }
}

export interface GetUserByIdRequest extends RequestGenericInterface {
  Params: {
    userId: string;
  };
}

export const createUser: FastifySchema = {
  body: {
    type: "object",
    properties: {
      name: { type: "string" },
      email: { type: "string" }
    },
    required: ["name", "email"],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string' }
      }
    }
  }
}

export interface CreateUserRequest extends RequestGenericInterface {
  Body: {
    name: string;
    email: string;
  };
}