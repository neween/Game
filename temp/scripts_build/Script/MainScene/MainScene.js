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