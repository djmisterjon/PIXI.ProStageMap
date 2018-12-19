
/*:
// PLUGIN □────────────────────────────────□ COMBAT CORE ENGINE □───────────────────────────────┐
* @author □ Jonathan Lepage (dimisterjon),(jonforum) 
* @plugindesc manage combats
* V.0.1a
* License:© M.I.T
└───────────────────────────────────────────────────────────────────────────────────────────────────┘
*/

// ┌-----------------------------------------------------------------------------┐
// GLOBAL $combats CLASS: _combats
//└------------------------------------------------------------------------------┘
class _combats{
    constructor() {
        this._active = false; // in combat mode indicator
        this.monsters = []; // store current reference of monster
    };

    intitialize(dataCase){
        $objs.setInteractive(false);
        TweenLite.to($objs.list_cases, 1, { alpha:0, ease: Expo.easeOut });
        //TODO: delete me, generer monster id, et nombre
        const monstersSetup = [
            {id:1,lv:1}
        ];
        $camera.zoom = 1.5;
        $camera.setZoom(1.5);
        $camera.moveToTarget(1);
        
        for (let i=0, l=3; i<l; i++) {
            this.monsters[i] = new _monsters(1,1);
            $stage.scene.addChild(this.monsters[i].sprite);
        };
        
        // TODO: ADD IN POLYFILL
        function hitCheck(a, b){ // colision
            var ab = a._boundsRect;
            var bb = b._boundsRect;
            return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
        };
        
        const pX = $player.x;
        const pY = $player.y;
        const inDistX = 1920/2*0.5;//0.6: the combat good zoom
        const inDistY = 1080/2*0.5;
        $player.spine.getBounds();
        // map un array list avec les case potentiel pour afficher les ennemy
        const potentialCase = $objs.list_cases.filter(c => Math.abs(c.x-pX)<inDistX && Math.abs(c.y-pY)<inDistY );
        const ran = ~~(Math.random()*potentialCase.lenght);
        let usePotentialCase = [];
        this.monsters.forEach(m => {
                let test = true;
                for (let i=0; test; i++) {
                    const ranID = ~~(Math.random()*potentialCase.length);
                    const c = potentialCase[ranID];
                    m.x = c.x;
                    m.y = c.y+35; // -30 middle case
                    m.sprite.getBounds();
                    if( i<20 && hitCheck(m.sprite, $player.spine) || usePotentialCase.contains(ranID)){
                        continue;
                    }else{
                        if (i<20){m.y+=25}// many try! but can not found a good random palce. Kepp this one but hack position
                        usePotentialCase.push(ranID);
                        test = false;
                    }
                };
                // suceed, leave monster here
                m.z = m.y;
                if(m.x<pX){m.sprite.scale.x*=-1} // need reverse
        });
            
        $huds.combats.setupToScene(); // add child and setup to current scene.
        // filter blur fx
        const kBlur =  new PIXI.filters.KawaseBlurFilter (0, 12, true) //60, 12, false
        $stage.scene.background.d.filters = [kBlur];
        $stage.scene.background.n.filters = [kBlur];
        TweenLite.to(kBlur, 3, { 
            blur:35, ease: Expo.easeOut 
        });
    };

    // le joueur a donner ces coup, il return a sa case initial
    playerEndHit(entry){
        TweenMax.to($player, 1, {
            x:$player.inCase.x, y:$player.inCase.y,
            ease: Expo.easeOut,
        });
    }




};
let $combats = new _combats();
console.log1('$combats', $combats);


