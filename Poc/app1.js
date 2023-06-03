var ModelUser = Backbone.Model.extend();
var Collection = Backbone.Collection.extend({
    model: ModelUser,
    url: 'data.json',

});

var View = Backbone.View.extend({
    el: $('#content'),
    initialize: function () {
        this.render();
    },
    render: function () {
        var that=this
        var collection = new Collection()
        
        collection.fetch({
            success: function (collection) {
                var data = {collection: collection.models }
                console.log(data)
                var template = _.template($('#templ-first').html())
                that.$el.html( template(data))
            }
        });
    }

});

var viewObj=new View();