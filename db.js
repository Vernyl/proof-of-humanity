// const { PrismaClient } = require('@prisma/client');

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (data) => {
  return prisma.user.create({ data });
};

export const createChannel = async (data) => {
  return prisma.channel.create({ data });
};

export const createVouching = async (data) => {
  return prisma.vouching.create({ data });
};

export const createApiToken = async (data) => {
  return prisma.api.create({ data });
};

// Add other CRUD methods as needed
