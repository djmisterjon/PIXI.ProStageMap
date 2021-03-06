/*:
// PLUGIN □──────────────────────────────□HUBS CORE ENGINE□───────────────────────────────┐
* @author □ Jonathan Lepage (dimisterjon),(jonforum) 
* V.0.1a
* License:© M.I.T
└─────────────────────────────────────────────────────────────────────────────────────────┘
*/
/*#region [rgba(255, 255, 255, 0.07)]
┌------------------------------------------------------------------------------┐
  GLOBAL $huds.stats CLASS: _huds_stats
  huds qui affiche les states general
└------------------------------------------------------------------------------┘
*/
class _huds_stats extends PIXI.Container{
  constructor() {
      super();
      this.initializeProprety();
      this.initialize();
      this.setupTweens();
      this.setupInteractions();
  };
  // getters,setters
  get d() { return this.Sprites.d };
  get n() { return this.Sprites.n };
};

// add basic proprety
_huds_stats.prototype.initializeProprety = function() {
  this.tweens = {};
  this.Sprites = {};
  this.icons = []; // access icons lists
  //[hp:heath point], [mp:magic point], [hg:hunger], [hy:hydratation], [miw:max items weight], [mic:max item capacity]
  this.statsList_L = ['hp','mp','hg','hy','miw','mic'];
  //[atk:attack], [def:defense], [sta:stamina], [lck:luck], [exp:exploration], [int:intelligence]
  this.statsList_S = ['atk','def','sta','lck','exp','int'];
};

// create states hud
_huds_stats.prototype.initialize = function() {
  const dataBase = $Loader.Data2.hudStats;
  // scope method
  function assignGroups(d,n){
      d.parentGroup = PIXI.lights.diffuseGroup;
      n.parentGroup = PIXI.lights.normalGroup;
  }
  let x = 0, y = 0;
  let tint_L = [0xff0000,0x8c00ff,0x00ff08,0x00d4ff,0xffb600,0x684810];
  this.statsList_L.forEach(state => {
      console.log2('state: ', state);
      // create master_L
      const master_L = new PIXI.Container();
      var d = new PIXI.Sprite(dataBase.textures.masterBar_L);
      var n = new PIXI.Sprite(dataBase.textures_n.masterBar_L_n);
      assignGroups(d,n);
      master_L.addChild(d,n);
      // create BG for barColor
      const bgBar = new PIXI.Container();
      var d = new PIXI.Sprite(dataBase.textures.barBG_L);
      var n = new PIXI.Sprite(dataBase.textures_n.barBG_L_n);
      d.position.set(45,2);
      n.position.copy(d.position);
      assignGroups(d,n);
      bgBar.addChild(d,n);
      // create barColor large
      const barColorL = new PIXI.Container();
      var d = new PIXI.Sprite(dataBase.textures.barColor_L);
      var n = new PIXI.Sprite(dataBase.textures_n.barColor_L_n);
      d.position.set(45+4,2+3);
      n.position.copy(d.position);
      d.tint = tint_L.shift();
      d.blendMode = 1;
      assignGroups(d,n);
      barColorL.addChild(d,n);
      // create icon TODO: make spine icon animated
      const icon = new PIXI.Container();
      var d = new PIXI.Sprite(dataBase.textures[`${state}_icon`]);
      var n = new PIXI.Sprite(dataBase.textures_n[`${state}_icon_n`]);
      assignGroups(d,n);
      icon.addChild(d,n);
      this.icons.push(icon);
      master_L.addChild(bgBar, barColorL, icon);
      this.addChild(master_L);
      // master states position
      master_L.position.set(x,y);
      y===45? (y=0, x+=220) : y=45;
  });
  // create small states
  this.statsList_S.forEach(state => {
      console.log2('state: ', state);
      // create master_S
      const master_S = new PIXI.Container();
      var d = new PIXI.Sprite(dataBase.textures.barMaster_S);
      var n = new PIXI.Sprite(dataBase.textures_n.barMaster_S_n);
      assignGroups(d,n);
      master_S.addChild(d,n);
      // create barColor small
      const barColorS = new PIXI.Container();
      var d = new PIXI.Sprite(dataBase.textures.barColor_S);
      var n = new PIXI.Sprite(dataBase.textures_n.barColor_S_n);
      d.position.set(50,4);
      n.position.copy(d.position);
      assignGroups(d,n);
      barColorS.addChild(d,n);
      // create icon TODO: make spine icon animated
      const icon = new PIXI.Container();
      var d = new PIXI.Sprite(dataBase.textures[`${state}_icon`]);
      var n = new PIXI.Sprite(dataBase.textures_n[`${state}_icon_n`]);
      assignGroups(d,n);
      icon.addChild(d,n);
      this.icons.push(icon);
      master_S.addChild(barColorS, icon);
      this.addChild(master_S);
      // master states position
      master_S.position.set(x,y);
      y===45? (y=0, x+=145) : y=45;
  });
  this.parentGroup = $displayGroup.group[4]; //FIXME:
  this.position.set(1920/4,6);
};
//#endregion

/*#region [rgba(0, 200, 0, 0.04)]
┌------------------------------------------------------------------------------┐
TWEENS EASINGS DISPLACEMENTS
https://greensock.com/docs/Core/Animation
└------------------------------------------------------------------------------┘
*/
_huds_stats.prototype.setupTweens = function() {
  this.tweens.position = new TweenLite(this.position, 0, {
      x:this.position.x,
      y:this.position.y,
      ease:Elastic.easeOut.config(1.2, 0.4),
  });
  this.tweens.position_statesIcons = new TweenLite(this.icons, 0, {
      //x:this.position.x,
      y:this.position.y,
      ease:Bounce.easeOut,
  });
};

_huds_stats.prototype.renderabled = function(a,b,c) {
  console.log('a,b,c: ', a,b,c);
  this.renderabled = false;
};

_huds_stats.prototype.show = function(duration) {
  this.move(1920/4,10,duration);
  duration && this.moveIcons(0,0,duration);
};

_huds_stats.prototype.hide = function(duration) {
  this.move(1920/4,-120,duration);
  duration && this.moveIcons(null,-35,duration);
};

_huds_stats.prototype.move = function(x,y,duration) {
  if(duration){
      const t = this.tweens.position;
      t.vars.x = x;
      t.vars.y = y;
      t._duration = duration;
      t.invalidate();
      t.play(0);
  }else{ this.position.set(x,y) };
};
_huds_stats.prototype.moveIcons = function(x,y,duration) {
      const t = this.tweens.position_statesIcons;
      // t.vars.x = x;
      t.vars.y = y;
      t._duration = duration*1.2;
      t.invalidate();
      t.play(0);
};
//#endregion

/*#region [rgba(0, 0, 0, 0.4)]
┌------------------------------------------------------------------------------┐
INTERACTIONs EVENTS LISTENERS
pointerIN, pointerOUT, pointerUP
└------------------------------------------------------------------------------┘
*/
_huds_stats.prototype.setupInteractions = function() {
  $player.interactive = true;
  // TODO: $player faire un sytem global event manager et interaction dans mouse
  $player.on('pointerover', this.pointerIN, this);
  $player.on('pointerout', this.pointerOUT, this);
  //$player.on('pointerup', this.pointerUP, this);
};

_huds_stats.prototype.pointerIN = function(e) {
  this.show(1);
};

_huds_stats.prototype.pointerOUT = function(e) {
  this.hide(1);
};

_huds_stats.prototype.pointerUP = function(e) {
  
};
//#endregion

/*#region [rgba(0, 0, 0, 0.05)]
┌------------------------------------------------------------------------------┐
METHODS
└------------------------------------------------------------------------------┘
*/

//#endregion