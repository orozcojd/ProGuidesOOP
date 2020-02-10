/* models */
const Character = require('./models/Character');
const Item = require('./models/Item');

const axios = require('axios');
const { api } = require('./services/Api');



async function loadCharacter(id) {
  const { data } = await api().get(`/characters/${id}`)
  .catch(e => console.log(e.message))
  return data
}

async function get(endpoint) {
  const { data } = await api().get(endpoint)
  .catch(e => new Error(e))
  return data
}



function mapItemClass(items, detailedItems) {
  const mappedI = []
  items.forEach(i => {
    const item = {
      id: i.id,
      name: i.name,
      stats: [],
      slotType: null
    }
    detailedItems.forEach(d => {
      if(i.id === d.itemStat.Item.id) {

        // map slotType to item attribute
        if(!item.slotType) item.slotType = {
          id: d.slotType.id,
          name: d.slotType.name,
          slotNums: d.slotType.slotNums
        }
        
        // push stats to stats array for item
        item.stats.push({
          id: d.itemStat.StatType.id,
          name: d.itemStat.StatType.name,
          value: d.itemStat.value,
          baseAttr: d.itemStat.baseAttr
        })
      }
    })
    mappedI.push(new Item({...item}))
  })
  return mappedI
}

async function init() {
  const player = await loadCharacter(id=3)

  // make api calls
  const items = await get('/items')
  const detailedItems = await get('/itemsDetailed')
  const slots = await get('/slots')
  const stats = await get('/stat')

  const mappedItems = mapItemClass(items, detailedItems)
  console.log(stats)

  const itemId = 24;

  // find item stats by ID
  // const filteredItems = items.filter(i => i.Item.id === itemId);

  let character = new Character({slots, player, stats})
  console.log(character)
  // character.equipItem(filteredItems) // equip Seal of Dath'Remar
  // console.log(items)
}


init();