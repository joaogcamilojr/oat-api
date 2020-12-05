import { injectable, inject } from 'tsyringe';

import Contact from '../infra/typeorm/schemas/Contact';
import IContactsRepository from '../repositories/IContactsRepository';

interface IRequest {
  name: string
  email: string
  message: string
};

@injectable()
class CreateContactService {
  constructor(
    @inject('ContactsRepository')
    private contactsRepository: IContactsRepository
  ) {};

  public async execute(data: IRequest): Promise<Contact> {

    const contact = await this.contactsRepository.create(data);

    return contact;
  }
};

export default CreateContactService;
