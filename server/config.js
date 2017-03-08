'use strict';

function get(name, fallback) {
    if (process.env[name]) {
        return process.env[name];
    }
    if (fallback) {
        return fallback;
    }
    throw new Error('Missing env var ' + name);
}

module.exports = {
    db: {
        username: get('DB_USER', 'iis-admin@iis-sandbox'),
        password: get('DB_PASS', 'pass'),
        server: get('DB_SERVER', 'server'),
        database: get('DB_NAME', 'iis-sandbox')
    }
};
