import db from "./dbConfig";

const data = [
  {
    name: "sourav ahmed",
    email: "souravahmeddiu@gmail.com",
    company: "STC-Bangla",
    description: "initial data",
  },
  {
    name: "kamal",
    email: "kamal@gmail.com",
    company: "STC-Bangla",
    description: "initial data",
  },
  {
    name: "Fahad",
    email: "fahad@gmail.com",
    company: "STC-Bangla",
    description: "initial data",
  },
];

const dbSeeder = () => {
  db.contacts.clear();
  data.map((eachData) => {
    return db.contacts.add({
      name: eachData.name,
      email: eachData.email,
      company: eachData.company,
      description: eachData.description,
    });
  });
};

export default dbSeeder;
