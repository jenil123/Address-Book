import { addressBookStore } from "./store";
import Trie from "./trie";
import { Contact } from "./types";

class AddressBook {

    private addressBookStore = addressBookStore;

    private nameTrie: Trie;

    private phoneNumberTrie: Trie;

    constructor() {
        this.nameTrie = new Trie();
        this.phoneNumberTrie = new Trie();
    }

    addContact(contact: Contact) {
        this.addressBookStore.addContact(contact);
        const fullName = contact.firstName + contact.lastName;
        this.nameTrie.insert(fullName);
        this.phoneNumberTrie.insert(contact.phoneNumber);
    }

    searchByName(searchName: string): Contact[] {
        const matchedNames = this.nameTrie.searchPartial(searchName);
        const matchedContacts: Contact[] = [];
        for(const names of matchedNames) {
            const matchedContact = this.addressBookStore.getContactByName(names);
            matchedContacts.push(matchedContact);
        }
        return matchedContacts;
    }

    searchByPhoneNumber(phoneNumber: string): Contact[] {
        const matchedPhoneNumbers = this.phoneNumberTrie.searchPartial(phoneNumber);
        const matchedContacts: Contact[] = [];
        console.log('matched phone', matchedPhoneNumbers);
        for(const phoneNumber of matchedPhoneNumbers) {
            const matchedContact = this.addressBookStore.getContactByPhone(phoneNumber);
            matchedContacts.push(matchedContact);
        }
        return matchedContacts;
    }
}

export default new AddressBook();