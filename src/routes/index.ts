import { Router } from 'express';
import AddressBookRouter from './address-book.route';

const router = Router();

router.use('/address-book', AddressBookRouter);

export default router;