import { createClient } from 'redis';

const client = createClient({
    url: String(process.env.REDIS_URL),
    username:String(process.env.REDIS_USER),
    password:String(process.env.REDIS_PASSWORD)
  });

client.on('error', err => console.log('Redis Client Error', err));

async function start(){

    await client.connect();
    
    client.set('key',30000,{EX:30000})
    
    return client

}

start()
export default client

