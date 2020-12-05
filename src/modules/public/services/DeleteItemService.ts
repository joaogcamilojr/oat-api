import { injectable, inject } from 'tsyringe';

import IItemsRepository from '../repositories/IItemsRepository';

interface IRequest {
  id: string
};

@injectable()
class DeleteItemService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository
  ) {};

  public async execute(data: IRequest): Promise<void> {

    const item = await this.itemsRepository.delete(data);
  }
};

export default DeleteItemService;
