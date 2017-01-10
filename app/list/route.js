import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    toggleItemDone(item){
      console.log("inside list route and item is", item.get('done'));
      item.toggleProperty('done');
      console.log("after the list route :D");
      item.save();
    },
    deleteItem(item){
      item.destroyRecord();
    }
  },
});
