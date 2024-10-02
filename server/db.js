const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

async function openDatabase() {
	const db = await open({
		filename: "./database.db",
		driver: sqlite3.Database,
	});

	return db;
}

module.exports = openDatabase;
