/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jsisrcau7mt9vp9")

  collection.createRule = "@request.data.owner = @request.auth.id\n"
  collection.updateRule = "author_id = @request.auth.id &&\n@request.data.owner:isset = false\n"
  collection.deleteRule = "author_id = @request.auth.id\n"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jsisrcau7mt9vp9")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
