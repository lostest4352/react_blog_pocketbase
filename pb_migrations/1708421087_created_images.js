/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "oibtti2na1fhak2",
    "created": "2024-02-20 09:24:47.336Z",
    "updated": "2024-02-20 09:24:47.336Z",
    "name": "images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lmvldsyc",
        "name": "field",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oibtti2na1fhak2");

  return dao.deleteCollection(collection);
})
