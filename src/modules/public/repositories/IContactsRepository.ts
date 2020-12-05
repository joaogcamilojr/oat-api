import ICreateContact from "../interfaces/ICreateContact";
import Contact from '../infra/typeorm/schemas/Contact';

export default interface IContactsRepository {
  create(data: ICreateContact): Promise<Contact>;
};
