module.exports =  class Item {
	constructor({id, name, stats, slotType }) {
		this.id = id;
		this.name = name;
		this.stats = stats;
		this.slotType=slotType;
	}
};
