
// $.fn.serializeObject = function()
// {
//     var o = {};
//     var a = this.serializeArray();
//     $.each(a, function() {
//         if (o[this.name] !== undefined) {
//             if (!o[this.name].push) {
//                 o[this.name] = [o[this.name]];
//             }
//             o[this.name].push(this.value || '');
//         } else {
//             o[this.name] = this.value || '';
//         }
//     });
//     return o;
// };

/*model defined*/
var Player = Backbone.Model.extend({
    url:"/poc"
});
var player1 = new Player({ 
    //id: 1,
    name: "suresh",
    email: 'vineets081@gmail.com',
    phone: '7827959074',
    address: 'hfhfhfhf'

});

var player2 = new Player({  
   // id: 2,
    name: "ramesh",
    email: 'shuklavineet@gmail.com',
    phone: '7827959074',
    address: 'hfhfhfhf'
});

var MyCollection = Backbone.Collection.extend({
    model: Player,
});

var myCollectionObj = new MyCollection([player1, player2]);
var View1 = Backbone.View.extend({
    el: "#content",
    template: _.template($('#templ-first').html()),
    collection: myCollectionObj,
    events: {
        'click #del': 'delItem'
    },

    delItem: function () {
        console.log(this.collection);
        myCollectionObj.remove(player1)
        console.log(this.collection);
        this.$el.html(this.template({ collection: this.collection.toJSON() }));
    },
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log("model view craeted");
        console.log(this.collection);
        this.$el.html(this.template({ collection: this.collection.toJSON() }));
    }

});


var View2 = Backbone.View.extend({
    template: _.template($('#add-user').html()),
    events: {
        'submit form': 'addItem'
    },
    addItem:function(ev){

        ev.preventDefault();
        var userDeatils=$(ev.currentTarget).serializeObject();
        console.log(userDeatils);
        var playerObj=new Player();
        
        playerObj.save(userDeatils,{
           
            success:function(playerObj,response){
                
                alert('hghgghhg');
                Router.navigate('',{trigger:true})
            },
            error: function(error){
               // alert("error"+response);
                console.log("res"+error);
                //console.log("pObj"+playerObj);
            }
        })
    },
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log("model view2 craeted");
        this.$el.html(this.template());
    }
});


var View3 = Backbone.View.extend({
    template: _.template($('#edit-user').html()),
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log("model view craeted");
        this.$el.html(this.template());
    }
});

var ProjectRouter = Backbone.Router.extend({
    routes: {
        "": "showList",
        "add": "add",
        "edit": "edit",
    },
    showList: function () {
        console.log("we are step1")
        var fView = new View1();
    },
    add: function () {
        console.log("we are step2");
        var fView2 = new View2();
        $("#content").html(fView2.el);
    },
    edit: function () {
        console.log("we are step3")
        var fView3 = new View3();
        $("#content").html(fView3.el);
    }
});

var projRouter = new ProjectRouter();
Backbone.history.start();

