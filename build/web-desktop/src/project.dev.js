require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"CellData":[function(require,module,exports){
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
},{}],"Cell":[function(require,module,exports){
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
},{"CellData":"CellData"}],"GameLogic":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'd8c1eUzR+RCHbqvoeNFeg5E', 'GameLogic');
// Script/MainScene/GameLogic.js

"use strict";

cc.Class({
    ctor: function ctor() {
        cc.log("GameLogic ctor");
    }

});

cc._RF.pop();
},{}],"MainScene":[function(require,module,exports){
"use strict";
cc._RF.push(module, '5d3cc9uEFxN8btLrEuxkOEe', 'MainScene');
// Script/MainScene/MainScene.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame
    update: function update(dt) {
        //记载gamelogic
        cc.neween = {};
        var gamelogic = require('GameLogic');
        cc.neween.gameLogin = new gamelogic();
    },

    //点击拖动模式
    onStartGame: function onStartGame(event, customEventData) {
        switch (parseInt(customEventData)) {
            case 1:
                {
                    //拖动模式
                    cc.log("点击了拖动模式");
                    cc.director.loadScene("MoveGameScene");
                }
                break;
        }
    }
});

cc._RF.pop();
},{"GameLogic":"GameLogic"}],"MoveGameScene":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'a52e31bGDpDwYPygOOHqaub', 'MoveGameScene');
// Script/MainScene/MoveGameScene.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {}

});

cc._RF.pop();
},{}]},{},["Cell","CellData","GameLogic","MainScene","MoveGameScene"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9