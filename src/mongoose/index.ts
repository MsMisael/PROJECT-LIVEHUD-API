import { connect } from 'mongoose';

async function run() {
    // 4. Connect to MongoDB
    await connect(String(process.env.MONGODB_URL).replace('<password>', String(process.env.MONGODB_PASSWORD)));

}

run()