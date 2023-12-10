import addressBook from "../toolbox/address-book";
import { Contact } from "../toolbox/types";

export default class AddressBookService {

    addContact(contact: Contact) {
        addressBook.addContact(contact);
        return "contact added";
    }

    searchByName(searchString: string) {
        const matchedContacts = addressBook.searchByName(searchString);
        return {
            matchedContacts
        }
    }

    searchByPhoneNumber(searchString: string) {
        const matchedContact = addressBook.searchByPhoneNumber(searchString);
        return {
            matchedContact
        }
    }
}