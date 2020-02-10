module.exports = class Character {
  constructor({ slots, player, stats }) {
    this.player = player;
    this.initStats(stats); // health, stamina, ...
    this.initSlotTypes(slots);
  }

  /**
 * takes an array of all slot types and uses it
 * to initialize empty slots for new character
 * @param {Array} slots
 */
  initSlotTypes(slots) {
    this.slots = [];
    for (let i = 0; i < slots.length; i += 1) {
      for (let j = 0; j < slots[i].slotNums; j += 1) {
        this.slots.push({
          id: slots[i].id,
          item: null,
        });
      }
    }
  }

  /**
 * loops through stats array and initializes
 * an empty stats object mapped by statId
 * @param {Array} stats
 */
  initStats(stats) {
    this.stats = {};
    stats.forEach((s) => {
      this.stats[s.id] = {
        id: s.id,
        name: s.name,
        val: 0,
      };
    });
  }

  /**
 * locates and inserts item into slot by slot ID
 * then calls calcStats, all if slot not taken,
 * otherwise throws error
 * @param {Item} item
 * @param {Number} slotId
 */
  equipItem({ item, slotId }) {
    const slot = this.slots.find((s) => s.id === slotId);
    if (slot.item !== null) throw new Error('Slot already taken');
    slot.item = item;
    this.calcStats({ item });
  }

  /**
 * sets the slot associated to slotId in class stats
 * object to null and calls calcStats to dec values
 * @param {Item} param0
 */
  removeItem({ item, slotId }) {
    const slot = this.slots.find((s) => s.id === slotId);
    slot.item = null; // revert back to initial state
    this.calcStats({ item, remove: true });
  }

  /**
 * takes a new item and adds stat values
 * to class stats object values
 * @param {Item} item
 */
  calcStats({ item, remove = false }) {
    item.stats.forEach((s) => {
      if (remove) this.stats[s.id].val -= s.value; // subtract stat item if removed
      else this.stats[s.id].val += s.value;
    });
  }

  /**
* returns class stats object
*/
  getStats() {
    return this.stats;
  }
};
