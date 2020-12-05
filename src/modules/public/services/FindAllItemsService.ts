import { injectable, inject } from 'tsyringe';

import Item from '../infra/typeorm/schemas/Item';
import IItemsRepository from '../repositories/IItemsRepository';

@injectable()
class FindAllItemsService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository
  ) {};

  public async execute(): Promise<Item[]> {

    const items = await this.itemsRepository.findAllItems();

    return items;
  }
};

export default FindAllItemsService;
