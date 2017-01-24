import Ember from 'ember';

export default Ember.Component.extend({
  isEmpty: Ember.computed('list', function(){
    let items = this.get('list').hasMany('items');
    return items.ids().length === 0;
  }),
  actions: {
    updateTitle(){
      console.log("am I here, inside listr-list/card?");
      console.log('the list i am in is', this.get('list'));
      this.sendAction('updateTitle', this.get('list'));
    },
    delete(){
      console.log("delete");
      this.sendAction('delete' ,this.get('list'));
    }
  },
});
