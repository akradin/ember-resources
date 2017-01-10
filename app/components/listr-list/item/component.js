import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    toggleDone () {
      console.log("You're inside toggleDone inside listr-list/item",  this.get('item'));
      this.sendAction('toggleDone', this.get('item'));
      // return this.toggleProperty('listItemCompleted');
    },
      delete(){
        console.log("delete me bbaby");
        this.sendAction('delete', this.get('item'));
      },
    },
});


// sendAction sends the action up a level to components/list-list/template.hbs
// but nothing has really happened yet because we aren't at the route
