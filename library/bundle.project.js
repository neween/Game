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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpblNjZW5lL0NlbGxEYXRhLmpzIiwiYXNzZXRzL1NjcmlwdC9NYWluU2NlbmUvQ2VsbC5qcyIsImFzc2V0cy9TY3JpcHQvTWFpblNjZW5lL0dhbWVMb2dpYy5qcyIsImFzc2V0cy9TY3JpcHQvTWFpblNjZW5lL01haW5TY2VuZS5qcyIsImFzc2V0cy9TY3JpcHQvTWFpblNjZW5lL01vdmVHYW1lU2NlbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0k7O0FBR0E7QUFDSTtBQUNBO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0g7O0FBRUQ7QUFDQTtBQUNJO0FBQ0g7O0FBRUQ7QUFDSTtBQUNIOztBQXJCSTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBRlE7O0FBS1o7QUFDQTtBQUNJO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0E7QUFDSDs7QUFqQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJO0FBQ0k7QUFDSDs7QUFISTs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7O0FBSUE7QUFDQTs7QUFJQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBO0FBQ0k7QUFDSTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0g7QUFDRDtBQVBKO0FBU0g7QUEvQkk7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBOztBQUlBOztBQVBLIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgY3RvcjogZnVuY3Rpb24oKXtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDpmdW5jdGlvbihwb3MsY29sb3Ipe1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0b24gPSBwb3M7ICAvL+aWueWdl+eahOS9jee9rlxyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gKGNvbG9yID09IG51bGwpP1wiMC5wbmdcIjpjb2xvcjsgICAgICAvL+WIm+W7uuminOiJslxyXG4gICAgfSxcclxuXHJcbiAgICAvL+iuvue9ruWNleS4quaWueWdl+eahOminOiJslxyXG4gICAgc2V0Q29sb3I6ZnVuY3Rpb24oY29sb3Ipe1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v6I635Y+WXHJcbiAgICBnZXRDb2xvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0UG9zaXRpb246ZnVuY3Rpb24odmVjKXtcclxuICAgICAgICB0aGlzLl9wb3NpdG9uID0gdmVjXHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3ByaXRlOmNjLlNwcml0ZSxcclxuICAgICAgICBjZWxsU3ByaXRlRnJhbWU6Y2MuU3ByaXRlQXRsYXMsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNlbGxkYXRhID0gcmVxdWlyZShcIkNlbGxEYXRhXCIpO1xyXG4gICAgICAgIHRoaXMuY2VsbERhdGEgPSBuZXcgY2VsbGRhdGEoKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDpmdW5jdGlvbihwb3MsY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNlbGxEYXRhLmluaXQocG9zLGNvbG9yKTtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuY2VsbFNwcml0ZUZyYW1lLmdldFNwcml0ZUZyYW1lKGNvbG9yKTtcclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgY3RvcjogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5sb2coXCJHYW1lTG9naWMgY3RvclwiKTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgLy/orrDovb1nYW1lbG9naWNcbiAgICAgICAgY2MubmV3ZWVuID0ge307XG4gICAgICAgIHZhciBnYW1lbG9naWMgPSByZXF1aXJlKCdHYW1lTG9naWMnKTtcbiAgICAgICAgY2MubmV3ZWVuLmdhbWVMb2dpbiA9IG5ldyBnYW1lbG9naWMoKTtcbiAgICB9LFxuXG4gICAgLy/ngrnlh7vmi5bliqjmqKHlvI9cbiAgICBvblN0YXJ0R2FtZTogZnVuY3Rpb24oZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSl7XG4gICAgICAgIHN3aXRjaChwYXJzZUludChjdXN0b21FdmVudERhdGEpKXtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+aLluWKqOaooeW8j1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIueCueWHu+S6huaLluWKqOaooeW8j1wiKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNb3ZlR2FtZVNjZW5lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==