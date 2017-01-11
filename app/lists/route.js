import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('list');
  },
  actions: {
    updateTitle(list){
      console.log("is list ", list);
      this.transitionTo('list/edit', list);
    }
  }

});
