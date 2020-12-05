import { container } from 'tsyringe';

import IItemsRepository from '@modules/public/repositories/IItemsRepository';
import ItemsRepository from '@modules/public/infra/typeorm/repositories/ItemsRepository';
import IContactsRepository from '@modules/public/repositories/IContactsRepository';
import ContactsRepository from '@modules/public/infra/typeorm/repositories/ContactsRepository';

container.registerSingleton<IItemsRepository>('ItemsRepository', ItemsRepository);
container.registerSingleton<IContactsRepository>('ContactsRepository', ContactsRepository);
