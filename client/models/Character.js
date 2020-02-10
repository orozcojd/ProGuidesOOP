module.exports =  class Character {
	constructor({slots, player, stats}) {
		this.player = player;
		this.initStats(stats); // health, stamina, ...
		this.initSlotTypes(slots);
	}
	initSlotTypes(slots) {
		this.slots = [];
		for(let i = 0; i < slots.length; i++) {
			for(let j = 0; j < slots[i].slotNums; j++) {
				this.slots.push({
					id: slots[i].id,
					item: null
				});
			}
		}
	}
	initStats(stats) {
		this.stats = {};
		stats.forEach(s => {
			this.stats[s.id] = {
				id: s.id,
				name: s.name,
				val: 0
			};
		});
	}
	equipItem(item, slotId) {
		const slot = this.slots.find(s => s.id === slotId);
		if(slot.item !== null)
			return new Error('Slot already taken');
		slot.item = item;
	}

	calcStats() {
		
	}
};
