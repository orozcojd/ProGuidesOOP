// routes are used for declaring routes to all the controllers

const ItemController = require('./controllers/ItemController');
const StatController = require('./controllers/StatController');
const SlotTypeController = require('./controllers/SlotTypeController');
const CharacterController = require('./controllers/CharacterController');
const ItemStatsSlotsController = require('./controllers/ItemStatsSlotsController');


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'API endpoint succesfully hit!',
  }));
  /* statType routes */
  app.post('/api/stat',
    StatController.create);
  app.get('/api/stat/:statId',
    StatController.getById);
  app.get('/api/stat',
    StatController.get);


  /* slotType routes */
  app.post('/api/slots',
    SlotTypeController.create);
  app.get('/api/slots',
    SlotTypeController.get);
  app.get('/api/slots/:slotId',
    SlotTypeController.getById);

  /* items routes */
  app.post('/api/items',
    ItemController.create);
  app.get('/api/items',
    ItemController.getAll);
  app.get('/api/items/:itemId',
    ItemController.getById);

  /* character routes */
  app.post('/api/characters',
    CharacterController.create);
  app.get('/api/characters',
    CharacterController.getAll);
  app.get('/api/characters/:characterId',
    CharacterController.getById);


  app.get('/api/itemsDetailed',
    ItemStatsSlotsController.getFullItems);
};
