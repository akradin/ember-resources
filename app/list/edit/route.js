import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log("params is", params);
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    saveTitle(list){
      console.log("now i am in the list/edit and title is", list);
      list.save();
    },
    cancel(list){
      list.rollbackAttributes();
      this.transitionTo('lists');
    }
  }
});
