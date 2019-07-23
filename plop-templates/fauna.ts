import faunadb, { query as q } from "faunadb";

// See file .env-fauna in root and follow instructions
const client = new faunadb.Client({ secret: process.env.REACT_APP_FAUNA_KEY });

const addNewCollection = async (newCollection: string) => {
  try {
    const ret = await client.query(q.CreateCollection({ name: newCollection }));
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

const addSingleRecord = async (collectionName: string, itemObj: object) => {
  try {
    const ret = await client.query(
      q.Create(q.Collection(collectionName), { data: { itemObj } })
    );
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

const getSingleRecordByRef = async (
  collectionName: string,
  itemRef: string
) => {
  try {
    const ret = await client.query(
      q.Get(q.Ref(q.Collection(collectionName), itemRef))
    );
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

const deleteSingleRecordByRef = async (
  collectionName: string,
  itemRef: string
) => {
  try {
    const ret = await client.query(
      q.Delete(q.Ref(q.Collection(collectionName), itemRef))
    );
    console.log("Deleted: " + itemRef);
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

export {
  addNewCollection,
  addSingleRecord,
  deleteSingleRecordByRef,
  getSingleRecordByRef,
  q
};

export default client;
