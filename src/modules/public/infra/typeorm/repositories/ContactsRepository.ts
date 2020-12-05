import { getMongoRepository, MongoRepository } from 'typeorm';

import IContactsRepository from '@modules/public/repositories/IContactsRepository';
import ICreateContact from '@modules/public/interfaces/ICreateContact';

import Contact from '../schemas/Contact';

class ContactsRepository  implements IContactsRepository {
  private ormRepository: MongoRepository<Contact>;

  constructor() {
    this.ormRepository = getMongoRepository(Contact, 'default');
  }

  public async create(data: ICreateContact): Promise<Contact> {
    const contact = this.ormRepository.create(data);
    await this.ormRepository.save(contact);
    return contact;
  };
};

export default ContactsRepository;
