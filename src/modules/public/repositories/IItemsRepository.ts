import ICreateItem from "../interfaces/ICreateItem";
import IUpdateItem from "../interfaces/IUpdateItem";
import IDeleteItem from "../interfaces/IDeleteItem";
import Item from '../infra/typeorm/schemas/Item';

export default interface IItemsRepository {
  create(data: ICreateItem): Promise<Item>;
  delete(data: IDeleteItem): Promise<void>;
  update(data: IUpdateItem): Promise<Item>;
  findAllItems(): Promise<Item[]>;
};
