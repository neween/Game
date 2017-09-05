cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        
    },

    // called every frame
    update: function (dt) {
        //记载gamelogic
        cc.neween = {};
        var gamelogic = require('GameLogic');
        cc.neween.gameLogin = new gamelogic();
    },

    //点击拖动模式
    onStartGame: function(event, customEventData){
        switch(parseInt(customEventData)){
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
