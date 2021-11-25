import Dexie from "dexie";
const db = new Dexie("contactDB");
db.version(1).stores({
  contacts: "++id, name, email, company, description",
});

export default db;
