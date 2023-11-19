'use client'

import { Client, ItemType, CatalogItem } from 'bricklink-api'

const bricklink = new Client({
  consumer_key: '<ConsumerKey>',
  consumer_secret: '<ConsumerSecret>',
  token: '<TokenValue>',
  token_secret: '<TokenSecret>',
})

export const getItem = () => {
  bricklink.getCatalogItem(ItemType.Part, '3001').then((part) => console.log(part))

  // Alternate Usage:

  //   let req = CatalogItem.get(ItemType.Part, '3001');
  // bricklink.send(req)
  //   .then(part => console.log(part));
}
