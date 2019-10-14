export const DBConfig = {
  name: "MyDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "article",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "id", keypath: "id", options: { unique: true } },
        { name: "fields", keypath: "fields", options: { unique: false } },
        { name: "sys", keypath: "sys", options: { unique: false } }
      ]
    }
  ]
};
