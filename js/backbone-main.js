var Item = Backbone.Model.extend({

  defaults: function(){
    return {
      name: "Need to buy...",
      price: "$$$"
    };
  }
});

var ItemList = Backbone.Collection.extend({
  model: Item,

  calculateTotal: function(){
    // some code the calculate total price
    var sum = 0;
    for (i = 0; i < this.models.length; i++){
      sum += this.models[i].attributes.price
    };
    return sum
  }


});

var list = new ItemList();

list.add([
  {name: 'Apple', price: 0.69},
  {name: 'Tofu', price: 3.49},
  {name: 'Granola', price: 4.55},
  {name: 'Flatbread', price: 6.21},
  {name: 'Zucchina', price: 1.22},
  {name: 'Organic beef', price: 12.99},
]);

console.log(list);
console.log(list.calculateTotal());


var HomeView = Backbone.View.extend({

  tagName: "tr",

  attributes: {
    "class": "item"
  },

  events: {
    // how to detect just draggin?
    "mouseup ": "updateTotal"
  },

  initialize: function() {
    console.log('view got called')
    this.listenTo(this.model, "change", this.render);
    console.log('new view', this);
  },

  template: _.template($('#list-template').html()),

  render: function() {
    console.log("collection", this.collection);
    console.log("template", this.template);
    this.$el.html(this.template({ item: this.models[0].attributes }));

    return this;
  },

  updateTotal: function() {
    this.collection.caculateTotal;
  }


});

var Router = Backbone.Router.extend({
  routes: {
    "": "home"
  },

  home: function() {

    var view = new HomeView({
      collection: list
    });

    $('#initial-list').html(view.render().$el);
  }
});

var router = new Router();

Backbone.history.start();