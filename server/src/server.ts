import Fastify, { fastify } from 'fastify';
import { PrismaClient } from '@prisma/client';
import cors from '@fastify/cors'

const app = Fastify();
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async (request, reply) => {
    const habits = await prisma.habit.findMany(
    //     {
    //     where:{
    //         title:{
    //             startsWith: 'beber'
    //         }
    //     }
    // }
    )
  return habits
});

app.listen({
    port: 3000,
}).then(()=>{
    console.log('Server started on port 3000');
})