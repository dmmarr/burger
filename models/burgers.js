var orm = require ("../config/orm");

var burgers ={
    all: function(cb){
        orm.all("burgers",cols,val,function(res){
            cb(res);
        });
    },
    create : function(cols,val,cb){
        orm.create("burgers",cols,val,function(res){
            cb(res);
        });
    },
    update : function(objColVal,condition,cb){
        orm.update("burgers",objColVal,condition,function(res){
            cb(res);
        });
    }
};