import { getMongoRepository, MongoRepository } from 'typeorm';

import IItemsRepository from '@modules/public/repositories/IItemsRepository';
import ICreateItem from '@modules/public/interfaces/ICreateItem';
import IUpdateItem from '@modules/public/interfaces/IUpdateItem';
import IDeleteItem from '@modules/public/interfaces/IDeleteItem';

import Item from '../schemas/Item';
import { ObjectID } from 'mongodb';

class ItemsRepository  implements IItemsRepository {
  private ormRepository: MongoRepository<Item>;

  constructor() {
    this.ormRepository = getMongoRepository(Item, 'default');
  }

  public async create(data: ICreateItem): Promise<Item> {
    const item = this.ormRepository.create(data);
    await this.ormRepository.save(item);
    return item;
  };

  public async update(data: IUpdateItem): Promise<Item> {
    const updatedItem = await this.ormRepository.findOneAndUpdate({ id: data.id }, { $set: { ...data } }, {
      returnOriginal: false
    });
    return updatedItem.value;
  };

  public async delete(data: IDeleteItem): Promise<void> {
    await this.ormRepository.findOneAndDelete({ _id: new ObjectID(data.id) });
  };

  public async findAllItems(): Promise<Item[]> {
    const items = this.ormRepository.find();
    return items;
  };
};

export default ItemsRepository;
