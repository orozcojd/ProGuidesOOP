/* models */
const Character = require('./models/Character');
const Item = require('./models/Item');

const { api } = require('./services/Api');


/**
 * makes an ap call to character endpoint
 * given id and returns character data
 * @param {Number} id
 */
async function loadCharacter({ id }) {
  const { data } = await api().get(`/characters/${id}`)
    .catch((e) => console.log(e));
  return data;
}

/**
 * Makes an api call to given endpoint
 * and returns data result
 * @param {String} endpoint
 */
async function get(endpoint) {
  const { data } = await api().get(endpoint)
    .catch((e) => console.log(e));
  return data;
}


/**
 * Loops through items array initializes item
 * object definition, then pushes item stats
 * to stats array if ids match
 * @param {Array} items
 * @param {Array} detailedItems
 */
function mapItemClass(items, detailedItems) {
  const mappedI = [];
  items.forEach((i) => {
    const item = {
      id: i.id,
      name: i.name,
      stats: [],
      slotType: null,
    };
    detailedItems.forEach((d) => {
      if (i.id === d.itemStat.Item.id) {
        // map slotType to item attribute
        if (!item.slotType) {
          item.slotType = {
            id: d.slotType.id,
            name: d.slotType.name,
            slotNums: d.slotType.slotNums,
          };
        }

        // push stats to stats array for item
        item.stats.push({
          id: d.itemStat.StatType.id,
          name: d.itemStat.StatType.name,
          value: d.itemStat.value,
          baseAttr: d.itemStat.baseAttr,
        });
      }
    });
    mappedI.push(new Item({ ...item }));
  });
  return mappedI;
}

/**
 * helper function that loops through items Array
 * and returns first matching item by matching slot id
 * @param {Number} id
 */
function findItem({ slotId, items }) {
  return items.find((i) => i.slotType.id === slotId);
}

/**
 * script to simulate character loading
 * item equip/remove, stats calculation
 */
async function init() {
  const player = await loadCharacter({ id: 3 });

  // make api calls
  const items = await get('/items');
  const detailedItems = await get('/itemsDetailed');
  const slots = await get('/slots');
  const stats = await get('/stat');

  const mappedItems = mapItemClass(items, detailedItems);

  const ringSlot = {
    id: 42,
    name: 'RING',
  };
  const weaponSlot = {
    id: 44,
    name: 'WEAPON',
  };

  // find item objects from items
  const ring = findItem({ slotId: ringSlot.id, items: mappedItems });
  const weapon = findItem({ slotId: weaponSlot.id, items: mappedItems });
  const character = new Character({ slots, player, stats });

  /* simulate user equips item. user would have slot id and item in mind */
  character.equipItem({ item: ring, slotId: ringSlot.id });
  console.log(character.getStats());
  character.equipItem({ item: weapon, slotId: weaponSlot.id });
  console.log(character.getStats());


  /* simuate user removes item. user would have slot id and item in mind */
  character.removeItem({ item: ring, slotId: ringSlot.id });
  console.log(character.getStats());
  character.removeItem({ item: weapon, slotId: weaponSlot.id });
  console.log(character.getStats());
}


init();
