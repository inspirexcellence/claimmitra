const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://neondb_owner:npg_nQV1s4tiUezh@ep-mute-block-aoiv5ycv.c-2.ap-southeast-1.aws.neon.tech/claimMitra?sslmode=require&channel_binding=require'
    }
  }
});
async function test() {
  try {
    await prisma.$connect();
    console.log('success');
  } catch(e) {
    console.error('failed:', e.message);
  }
}
test();
