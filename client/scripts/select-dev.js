require('dotenv').config();
const { execSync } = require('child_process');

const selected_db_method = process.env.DB_METHOD

switch (selected_db_method) {
    case 'supabase':
        execSync('npm run dev:supabase', { stdio: 'inherit' });
        break;
    case 'postgres':
        execSync('npm run dev:postgres', { stdio: 'inherit' });
        break;
}