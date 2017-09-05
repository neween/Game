cc.Class({
    extends: cc.Component,

    properties: {
        sprite:cc.Sprite,
        cellSpriteFrame:cc.SpriteAtlas,
    },

    // use this for initialization
    onLoad: function () {
        var celldata = require("CellData");
        this.cellData = new celldata();
    },

    init:function(pos,color) {
        this.cellData.init(pos,color);
        this.sprite.spriteFrame = this.cellSpriteFrame.getSpriteFrame(color);
    },
    

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
