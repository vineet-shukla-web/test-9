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

var View1 = Backbone.View.extend({
    el:"#content",
    template:_.template($('#templ-first').html()),
    collection:myCollectionObj,
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log("model view craeted");
        console.log(this.collection);
        // this.$el.html(this.template({collection:this.collection.toJSON()}));
        // // _.each(this.collection.toJSON(),function(model){
        // //     console.log("Name:"+model.name+"age:"+model.age+"course:"+model.course)
        // // })
        this.$el.html("view 1 is running");
    }
   
});
var View2 = Backbone.View.extend({
    el:"#content",
    template:_.template($('#templ-first').html()),
    collection:myCollectionObj,
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log("model view craeted");
        console.log(this.collection);
        // this.$el.html(this.template({collection:this.collection.toJSON()}));
        // // _.each(this.collection.toJSON(),function(model){
        // //     console.log("Name:"+model.name+"age:"+model.age+"course:"+model.course)
        // // })
        this.$el.html("view 2 is running");
    }
   
});
var View3 = Backbone.View.extend({
    el:"#content",
    template:_.template($('#templ-first').html()),
    collection:myCollectionObj,
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log("model view craeted");
        console.log(this.collection);
        this.$el.html("view 3 is running");
        // _.each(this.collection.toJSON(),function(model){
        //     console.log("Name:"+model.name+"age:"+model.age+"course:"+model.course)
        // })
    }
   
});
//var fView=new View1();
var ProjectRouter=Backbone.Router.extend({

    routes:{
        "":"showView1",
        "view2":"showView2",
        "view3":"showView3",
    },
    showView1:function(){
     console.log("we are step1")
     var fView=new View1();
    },
    showView2:function(){
        console.log("we are step2")
        var fView2=new View2();
    },
    showView3:function(){
        console.log("we are step3")
        var fView3=new View3();
    }
});


var projRouter=new ProjectRouter();
Backbone.history.start();