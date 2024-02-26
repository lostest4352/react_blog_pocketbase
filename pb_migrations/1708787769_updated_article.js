/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jsisrcau7mt9vp9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qwask4mi",
    "name": "Image_Link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jsisrcau7mt9vp9")

  // remove
  collection.schema.removeField("qwask4mi")

  return dao.saveCollection(collection)
})
