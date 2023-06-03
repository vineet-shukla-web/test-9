
/*=====Model ========*/
var Player = Backbone.Model.extend();

/*=====Collection ========*/
var MyCollection = Backbone.Collection.extend({
    model: Player,
    url: 'http://localhost:3000/users/fetchAll',
});

/*=====View ========*/
var View1 = Backbone.View.extend({
    el: "#content",
    events: {
        'click .del': 'delItem'
    },

    delItem: function (e) {
        e.preventDefault();
        var checkstr = confirm('are you sure you want to delete this?');
        if (checkstr == true) {
            var id = $(e.currentTarget).attr("href");
            var myCollectionObj = new MyCollection();
            var that = this
            myCollectionObj.fetch({
                url: 'http://localhost:3000/users/deleteuser',
                type: 'DELETE',
                data: 'id=' + id,
                success: function () {
                    location.reload();
                },
                error: function (myCollectionObj) {
                    alert('error');
                }
            });
        } else {
            return false;
        }
    },
    initialize: function () {
        this.render();
    },
    render: function () {
        var myCollectionObj = new MyCollection();
        var that = this
        myCollectionObj.fetch({
            url: myCollectionObj.url,
            type: 'GET',
            contentType: 'application/json',
            success: function () {
                var data = { collection: myCollectionObj.models };
                console.log(data);
                var template = _.template($('#templ-first').html())
                that.$el.html(template({ collection: myCollectionObj.toJSON() }))
                $(document).ready(function () {
                    $('#tablelist').DataTable();
                });
            },
            error: function () {
                alert("error")
            }
        });
    }

});

/*=====View ========*/
var View2 = Backbone.View.extend({
    template: _.template($('#add-user').html()),
    events: {
        'submit form': 'addItem'
    },
    addItem: function (e) {
        e.preventDefault();
        console.log(this);
        username = $('#name').val();
        email = $('#email').val();
        phone = $('#phone').val();
        address = $('#address').val();
        password = '';

        /*validate*/
        var msg = '';
        if (username == '') {
            msg = "Name can not be blank.";
            alert(msg);
            return false;
        }
        if (email == '') {
            msg = "Email can not be blank";
            alert(msg);
            return false;
        }

        if (email != '') {

            if (validateEmail(email)) {
                $msg = '';

            } else {
                msg = "invalid email";
                alert(msg);
                return false;
            }
        }
        if (address == '') {
            msg = "Address can not be blank";
            alert(msg);
            return false;
        }
        if (phone == '') {
            msg = "Phone can not be blank.";
            alert(msg);
            return false;
        }
        if (phone != '') {
            if (!phonenumber(phone)) {
                alert('Phone no is not valid.');
                return false;
            }
        }

        var myCollectionObj = new MyCollection();
        var that = this
        myCollectionObj.fetch({
            url: 'http://localhost:3000/users/saveuser',
            type: 'POST',
            data: { name: username, email: email, phone: phone, address: address, password: password },
            success: function () {
                alert('Record has been saved successfully!');
                location.href = '/poc';
            },
            error: function () {
                alert('error')
            }
        });
    },
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log("model view2 craeted");
        this.$el.html(this.template());
    }
});

/*=====View ========*/
var View3 = Backbone.View.extend({
    template: _.template($('#edit-user').html()),
    events: {
        'submit form': 'updateItem'
    },
    updateItem: function (e) {
        e.preventDefault();
        console.log(this);
        username = $('#name').val();
        email = $('#email').val();
        phone = $('#phone').val();
        address = $('#address').val();
        id = $('#editid').val();
        password = '';
        /*validate*/
        var msg = '';
        if (username == '') {
            msg = "Name can not be blank.";
            alert(msg);
            return false;
        }
        if (email == '') {
            msg = "Email can not be blank";
            alert(msg);
            return false;
        }

        if (email != '') {
            if (validateEmail(email)) {
                $msg = '';

            } else {
                msg = "invalid email";
                alert(msg);
                return false;
            }
        }
        if (address == '') {
            msg = "Address can not be blank";
            alert(msg);
            return false;
        }
        if (phone == '') {
            msg = "Phone can not be blank.";
            alert(msg);
            return false;
        }
        if (phone != '') {
            if (!phonenumber(phone)) {
                alert('Phone no is not valid.');
                return false;
            }
        }

        var myCollectionObj = new MyCollection();
        var that = this
        myCollectionObj.fetch({
            url: 'http://localhost:3000/users/updateusers',
            type: 'PUT',
            data: { name: username, email: email, phone: phone, address: address, password: password, user_id: id },
            success: function () {
                alert("Record updated successfully!");
                location.href = '/poc';
            },
            error: function () {
                alert('error')

            }
        });
    },
    initialize: function (id) {
        this.render(id);
    },

    render: function (id) {
        console.log("testing" + id);
        var myCollectionObj = new MyCollection();
        var that = this
        myCollectionObj.fetch({
            url: 'http://localhost:3000/users/usersingle/' + id,
            type: 'GET',
            contentType: 'application/json',
            success: function () {
                var data = { collection: myCollectionObj.models };
                console.log(data);
                var template = _.template($('#edit-user').html())
                that.$el.html(template({ collection: myCollectionObj.toJSON() }))
            },
            error: function () {
                alert('error')
            }
        });

    }
});

/*=====Routes ========*/
var ProjectRouter = Backbone.Router.extend({
    routes: {
        "": "showList",
        "add": "add",
        "edit/:id": "edit",
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
    edit: function (id) {
        console.log("we are step3");
        var fView3 = new View3(id);
        console.log(fView3.el)
        $("#content").html(fView3.el);
    }
});
function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
        return true;
    }
    else {
        return false;
    }
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
var projRouter = new ProjectRouter();
Backbone.history.start();