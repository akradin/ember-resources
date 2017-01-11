import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateTitle(){
      this.sendAction('updateTitle', this.get('list'));
    },
    cancel(){
      this.sendAction('cancel', this.get('list'));
    }
  }
});
