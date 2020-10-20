import { FsCollections } from '../Collections';
import FirestoreRepository from '../FirebaseRepository';

export default class UserRepository extends FirestoreRepository {
  constructor() {
    super(FsCollections.USERS);
  }

  async getUserByLogin(mail: string, password: string): Promise<any> {
    const collection = this.getConnection();
    const query = await collection
      .where('mail', '==', mail)
      .where('password', '==', password)
      .get();
    const data = query.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
    const user = data[0];
    return user;
  }

  async findByMail(mail: string): Promise<any[]> {
    const collection = this.getConnection();
    const query = await collection.where('mail', '==', mail).get();
    const data = query.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
    return data;
  }
}
