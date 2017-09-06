"use strict";
cc._RF.push(module, '02fc1zC69hGc6Ug30h9kT6S', 'Cell');
// Script/MainScene/Cell.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        cellSpriteFrame: cc.SpriteAtlas
    },

    // use this for initialization
    onLoad: function onLoad() {
        var celldata = require("CellData");
        this.cellData = new celldata();
    },

    init: function init(pos, color) {
        this.cellData.init(pos, color);
        this.sprite.spriteFrame = this.cellSpriteFrame.getSpriteFrame(color);
    }

});

cc._RF.pop();