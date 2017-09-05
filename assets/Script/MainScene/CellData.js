cc.Class({
    ctor: function(){
    },

    init:function(pos,color){
        this._positon = pos;  //方块的位置
        this._color = (color == null)?"0.png":color;      //创建颜色
    },

    //设置单个方块的颜色
    setColor:function(color){
        this._color = color;
    },

    //获取
    getColor:function(){
        return this._color;
    },

    setPosition:function(vec){
        this._positon = vec
    },

});
