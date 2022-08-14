import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./database.db');

process.on('SIGINT', () =>
    db.close(() => {
        console.log('Database closed');
        process.exit(0);
    })
);

export default db;