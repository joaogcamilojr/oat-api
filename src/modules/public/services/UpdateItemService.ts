import { injectable, inject } from 'tsyringe';

import Item from '../infra/typeorm/schemas/Item';
import IItemsRepository from '../repositories/IItemsRepository';

interface IRequest {
  id: string
  name: string
  description: number
  image_url: string
};

@injectable()
class UpdateItemService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository
  ) {};

  public async execute(data: IRequest): Promise<Item> {

    const item = await this.itemsRepository.update(data);

    return item;
  }
};

export default UpdateItemService;
