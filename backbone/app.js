/*model defined*/
var Player = Backbone.Model.extend();

var player1 = new Player({ //model objects
    name: "suresh",
    age: '35',
});

var player2 = new Player({  // model objects
    name: "ramesh",
    age: '36',
});

var MyCollection = Backbone.Collection.extend({
    model: Player,
});

var myCollectionObj = new MyCollection([player1, player2]);

var FirstView = Backbone.View.extend({
    el:"#content",
    template:_.template($('#templ-first').html()),
    collection:myCollectionObj,
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log("model view craeted");
        console.log(this.collection);
        this.$el.html(this.template({collection:this.collection.toJSON()}));
        // _.each(this.collection.toJSON(),function(model){
        //     console.log("Name:"+model.name+"age:"+model.age+"course:"+model.course)
        // })
    }
   
});
var fView=new FirstView();