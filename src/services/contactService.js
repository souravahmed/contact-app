import db from "./dbConfig";

const contactService = {
  getAllContacts: async () => {
    try {
      return await db.contacts.toArray();
    } catch (error) {
      throw error;
    }
  },

  addContact: async (contact) => {
    try {
      await db.contacts.add(contact);
    } catch (error) {
      throw error;
    }
  },
};

export default contactService;
