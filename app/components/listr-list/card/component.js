import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateTitle(){
      console.log("am I here, inside listr-list/card?");
      console.log('the list i am in is', this.get('list'));
      this.sendAction('updateTitle', this.get('list'));
    },
  },
});
