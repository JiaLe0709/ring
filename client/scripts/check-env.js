require('dotenv').config();

//Ref : https://github.com/umami-software/umami/blob/master/scripts/check-env.js

function checkMissing(vars) {
    const missing = vars.reduce((arr, key) => {
        if (!process.env[key]) {
            arr.push(key);
        }
        return arr;
    }, []);

    if (missing.length) {
        console.log(`\x1b[31mThe following environment variables are not defined:\x1b[0m`);
        for (const item of missing) {
            console.log(' - ', item);
        }
        process.exit(1);
    }
}

checkMissing(['DB_METHOD', 'NEXT_PUBLIC_SOURCES_URL'])

if (process.env.DB_METHOD === 'supabase') {
    checkMissing(['SUPABASE_URL', 'SUPABASE_ANON_KEY'])
    console.log('\x1b[32m%s\x1b[0m','DB_METHOD check passed.')
} else if (process.env.DB_METHOD === 'postgres') {
    checkMissing(['DATABASE_URL'])
    console.log('\x1b[32m%s\x1b[0m','DB_METHOD check passed.')
} else {
    console.error('\x1b[31mDB_METHOD is not in the support option.\x1b[0m')
    process.exit(1)
}
