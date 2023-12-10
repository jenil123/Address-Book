import { Router } from 'express';
import { AddressBookService } from '../services';
const router = Router();

router.post('/add', (req, res, next) => {
    const addressBookServiceInstance = new AddressBookService();
    const response = addressBookServiceInstance.addContact(req.body);
    res.send(response);
})

router.get('/search-by-name', (req, res, next) => {
    const addressBookServiceInstance = new AddressBookService();
    const {searchName} = req.query;
    const response = addressBookServiceInstance.searchByName(searchName as string);
    res.send(response);
})

router.get('/search-by-number', (req, res, next) => {
    const addressBookServiceInstance = new AddressBookService();
    const {phoneNumber} = req.query;
    const response = addressBookServiceInstance.searchByPhoneNumber(phoneNumber as string);
    res.send(response);
})

export default router;