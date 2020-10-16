
import { firebase } from "./FirebaseConfig";

export default class FirestoreRepository {
  // Connection
  collection: any;

  constructor(collection: string) {
    this.collection = firebase.firestore().collection(collection);
  }

  // Methods
  /**
   * @method getConnection() - Devuelve la conección a la collection de firestore, normalmente se usará para acceder al snapshot
   */
  getConnection() {
    return this.collection;
  }

  /**
   * @method onCreate(task): Crear un documento en la collection
   * @param task: Objeto con los datos a guardar
   */
  onCreate(task: any) {
    this.collection.add(task);
  }

  /**
   * @method onCreate(task): Obtiene todos los documentos
   * @async
   */
  async findAll() {
    const a = await this.collection.get();
    const b = await a.docs.map((doc: any) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return b;
  }

  /**
   * @method onDelete(): Borrar un documento en la collection
   * @param id: ID del documento a elimindar
   */
  onDelete(id: string) {
    this.collection.doc(id).delete();
  }

  /**
   * @onUpdate (): Actualizar un documento en la collection
   * @param id: ID del Documento
   * @param task: Objeto con los datos a guardar
   */
  onUpdate(id: string, task: any) {
    this.collection.doc(id).update(task);
  }
}
