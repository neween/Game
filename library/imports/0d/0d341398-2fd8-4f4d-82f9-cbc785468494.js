"use strict";
cc._RF.push(module, '0d341OYL9hPTYL5y8eFRoSU', 'CellData');
// Script/MainScene/CellData.js

"use strict";

cc.Class({
    ctor: function ctor() {},

    init: function init(pos, color) {
        this._positon = pos; //方块的位置
        this._color = color == null ? "0.png" : color; //创建颜色
    },

    //设置单个方块的颜色
    setColor: function setColor(color) {
        this._color = color;
    },

    //获取
    getColor: function getColor() {
        return this._color;
    },

    setPosition: function setPosition(vec) {
        this._positon = vec;
    }

});

cc._RF.pop();