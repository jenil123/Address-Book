import { Contact } from "../types";
import { v4 as uuidv4 } from 'uuid';


class AddressBookStorage {

    private contacts: Contact[] = [];

    private idToContactMap: Map<string, Contact> = new Map();

    private nameToContactIdMap: Map<string, string> = new Map();

    private phoneNumberToContactIdMap: Map<string, string> = new Map();

    private mapIdAndName(id: string, firstName: string, lastName: string): void {
        const fullName = firstName + lastName;
        this.nameToContactIdMap.set(fullName, id);
    }

    private mapIdToPhoneNumber(id: string, phoneNumber: string): void {
        this.phoneNumberToContactIdMap.set(phoneNumber,id);
    }

    addContact(contact: Contact) {
        const id = uuidv4();
        this.contacts.push(contact);
        this.idToContactMap.set(id, contact);
        this.mapIdAndName(id, contact.firstName, contact.lastName);
        this.mapIdToPhoneNumber(id, contact.phoneNumber);
    }

    getContactById(id: string): Contact {
        return this.idToContactMap.get(id);
    }

    getContactByName(name: string): Contact {
        const contactId =  this.nameToContactIdMap.get(name);
        return this.getContactById(contactId);
    }

    getContactByPhone(phoneNumber: string): Contact {
        const contactId =  this.phoneNumberToContactIdMap.get(phoneNumber);
        return this.getContactById(contactId);
    }
}

export default new AddressBookStorage();