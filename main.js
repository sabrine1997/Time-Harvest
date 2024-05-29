kaboom({
    backgroundAudio: true,
    background : [0,10,50],
    width : 1400,
    height : 800
 })

loadSound('welcome',"music/welcome.wav");
loadSound('intro',"music/intro.wav");
loadSound('pregame',"music/pregame.wav");
loadSound('gameplay',"music/gameplay.wav");
loadSound('finish',"music/finish.wav");
loadSound('end', "music/end.wav");

loadSprite('pinky',"characters/Pinky.png");
loadSprite('ghosty',"characters/Ghosty.png");
loadSprite('dude',"characters/Dude.png");
loadSprite('leafs',"characters/leafs.png");

loadSprite('background1',"backgrounds/origbig.png");
loadSprite('background2',"backgrounds/forest.png");
loadSprite('background3',"backgrounds/field.png");
loadSprite('background4',"backgrounds/walls.png");
loadSprite('background5',"backgrounds/blue.png");
loadSprite('background6',"backgrounds/mountain.png");

loadSprite('wb',"trash/wb.png");
loadSprite('swb',"trash/swb.png");
loadSprite('wbc',"trash/wbc.png");
loadSprite('db',"trash/db.png");
loadSprite('ab',"trash/ab.png");
loadSprite('ob',"trash/ob.png");
loadSprite('garbage',"trash/garbage.png");
loadSprite('dsb',"trash/dsb.png");
loadSprite('sb',"trash/sb.png");

loadSprite('recycle',"plateforms/recyclingbin.png");
loadSprite('passage',"plateforms/passage.png");

loadSprite('bar',"plateforms/bar.png");
loadSprite('chain',"plateforms/chain.png");
loadSprite('starttile',"plateforms/starttile.png");
loadSprite('maintile',"plateforms/maintile.png");
loadSprite('endtile',"plateforms/endtile.png");
loadSprite('floattile',"plateforms/floattile.png");
loadSprite('bigfloattile',"plateforms/bigfloattile.png");
loadSprite('tree',"plateforms/tree.png");


loadSprite('no star',"achievements/no star.png");
loadSprite('half star',"achievements/half star.png");
loadSprite('fullstar',"achievements/fullstar.png");

let temps = 0;

scene("accueil", () => {



   const music = play("welcome",{
      loop : true,
      volume : 0.8
   });

   const background = add ([
      sprite("background1",{
         width: width(),
         height:height(),
         fixed: true,
      }),

      fixed(),
   ]);


   add([
      text("Bienvenue à Time Harvest!",{
         width : 400
      
      }),
      
      anchor("center"),
      pos(700,300) 
   ]);

   add([
      text("Appuie sur enter pour commencer!",{
         width : 400
      
      }),
      
      anchor("center"),
      pos(700,500) 
   ]);
   
   onKeyPress ("enter", () =>{
      music.paused = true;
      go ("intro");
   })

});

go("accueil");


scene("intro", () => {

   const music = play("intro",{
      loop : true,
      volume : 0.8
   });

   const background = add ([
      sprite("background2",{
         width: width(),
         height:height(),
         fixed: true,
      
      }),

      fixed(),
   ]);

   add([
      text(" Appuie sur enter pour sauter le dialogue, appuie sur la spacebar pour le défiler",{
         width : 700,
      
         
      }),
      
      anchor("center"),
      pos(950,150) 
      
   ]);
   

   const dialogs = [
      [ "pinky", "Oh salut toi!" ],
      [ "pinky", "Tu arrives pile au bon moment!" ],
      [ "pinky", "Si si, crois-moi, on avait juste besoin de toi!" ],
      [ "pinky", "Vois-tu, notre noble forêt est sous attaque!" ],
      [ "ghosty", "Quoi?! Des monstres?!" ],
      [ "pinky", "Mais non, Ghosty.. ENCORE PIRE!" ],
      [ "ghosty", "Oh non! Quoi donc?!" ],
      [ "pinky", "Les déchets.. Ghosty. Les déchets!" ],
      [ "ghosty", "Oh non! Pas ça!" ],
      [ "pinky", "Si si.. Mais tu vois, tout espoir n'est pas perdu!" ],
      [ "pinky", "Notre cher voyageur ici possède le pouvoir de tout changer!"],
      [ "ghosty", "Iel va nous sauver?!" ],
      [ "pinky", "Ça.. Seul iel peut en décider.." ],
      [ "leafs", "Appuie sur enter pour continuer" ],
   
   ];
   
   let curDialog = 0
   
// Character avatar
const avatar = add([
   sprite("pinky"),
   scale(12),
   anchor("center"),
   pos()
])

   // Text bubble
   const textbox = add([
      rect(width() - 150, 100, { radius: 32 }),
      anchor("center"),
      pos(center().x, height() - 80),
      outline(4),
   ])
   


   // Text
   const txt = add([
      text("", { size: 32, width: width() - 230, align: "center" }),
      pos(textbox.pos),
      anchor("center"),
      color(0, 0, 0),
   ])
   
   
   onKeyPress("space", () => {
      // Cycle through the dialogs
      curDialog = (curDialog + 1) % dialogs.length
      updateDialog()
   })
   
   // Update the on screen sprite & text
   function updateDialog() {
   
      const [ char, dialog ] = dialogs[curDialog]
   
      // Use a new sprite component to replace the old one

      if(char == 'pinky') {
         avatar.pos = (280,550);
      } else if( char == 'ghosty') {
         avatar.pos = (280,550);
         avatar.flipX = true;
      }

      avatar.use(sprite(char))
      // Update the dialog text
      txt.text = dialog
   
   }
   
   updateDialog()
   

   onKeyPress ("enter", () =>{
      music.paused = true;
      go ("tutoriel");
   })
});


scene("tutoriel", () => {

   const music = play("pregame",{
      loop : true,
      volume : 0.8
   });

   const background = add ([
      sprite("background3",{
         width: width(),
         height:height(),
         fixed: true,
      
      }),

      fixed(),
   ]);

   add([
      text(" Appuie sur enter pour sauter le tutoriel,la spacebar pour le défiler",{
         width : 600,
      
         
      }),
      
      anchor("center"),
      pos(1150,180) 
      
   ]);
   

   const dialogs = [
      [ "pinky", "Écoute, je ne voulais pas te brusquer, mais-" ],
      [ "dude", "Oh hey Pinky! Ghosty! On a un nouveau voyageur?" ],
      [ "pinky", "Oui!" ],
      [ "ghosty", "Notre sauveur!" ],
      [ "dude", "Oho! merci de me l'avoir amené Pinky!" ],
      [ "dude", "Et du calme Ghosty, du calme.. Ne l'effraie pas-" ],
      [ "dude", "Vous avez fait du bon boulot, je vais m'occuper des explications." ],
      [ "ghosty", "O-Oui, désolé-" ],
      [ "pinky", "Merci Bluey!" ],
      [ "dude", "Ecoute cher voyageur, je sais que tu étais là pour visiter-" ],
      [ "dude", "Mais il se trouve que les tiens ont créé une sacrée pagraille!" ],
      [ "dude", "Ils laissent toujours des déchets derrière eux!" ],
      [ "dude", "Et on avait un accord, qu'ils emportent avec eux tout ce qu'ils amènent!" ],
      [ "dude", "Car vois-tu, chaque déchet, c'est du temps qu'on perd.. " ],
      [ "dude", "Du temps précieux qu'il nous faut récupérer" ],
      [ "dude", "Peux-tu nous aider à attraper les déchets, et nous sauver?"],
      [ "leafs", "Appuie sur enter pour continuer" ],

   
   ];
   
   let curDialog = 0
   
 // Character avatar
 const avatar = add([
   sprite("pinky"),
   scale(12),
   anchor("center"),
   pos(400,550)
])

   // Text bubble
   const textbox = add([
      rect(width() - 150, 100, { radius: 32 }),
      anchor("center"),
      pos(center().x, height() - 80),
      outline(4),
   ])
   
   // Text
   const txt = add([
      text("", { size: 32, width: width() - 230, align: "center" }),
      pos(textbox.pos),
      anchor("center"),
      color(0, 0, 0),
   ])
   

   
   onKeyPress("space", () => {
      
      curDialog = (curDialog + 1) % dialogs.length
      updateDialog()
   })
   
  
   function updateDialog() {
   
      const [ char, dialog ] = dialogs[curDialog]
   
      
      avatar.use(sprite(char))
      
      txt.text = dialog
   
   }
   
   updateDialog()
   

   onKeyPress ("enter", () =>{
      music.paused = true;
      go ("game");
   })
});


scene("game", ({ levelId, temps } = { levelId: 0, temps: 0 }) => {

   const game = add([
      time()
   ])

   const music = play("gameplay", {
       loop: true,
       volume: 0.8
   });

   const background = game.add([
       sprite("background4", {
           width: width(),
           height: height(),
           fixed: true,
       }),
       fixed(),
   ]);

   loadSprite("pinky", "characters/PinkyRun.png", {
      sliceX: 6,
      
      anims: {
         "idle": {
           
            from: 0,
            to: 1,
            
            speed: 5,
            loop: true,
         },
         "run": {
            from: 1,
            to: 5,
            speed: 10,
            loop: true,
         },
         
         "jump": {
            from: 2,
            to: 3,
            speed: 5,
            loop: true,
         },
      },
   })
   

   setGravity(3200)

   ////
   const SPEED = 480
   const JUMP_FORCE = 1520
   const MOVE_SPEED = 480

   const LEVELS = [
       [   
                  
           ".                   .",
           ".                   .",
           ".                   .",
           ".                   .",
           ".       *           .",
           ".       /           .",
           ".           # $     .",
           ".   |       /|/     .",
           ".      L        /   .",
           ".                  @.",
           "-=====================",
       ],
       [

   
           ".                            .",
           ".                            .",
           ".                            .",
           ".                            .",
           ".                  !         .",
           ".              M   /         .",
           ".              |            $.",
           ".                      *    $.",
           ".         *  $         /    $.",
           ".         | //              $.",
           ".      1               #    $.",
           ".      |           ^         .",
           ".     /            /        @.",
           "-=============================",
       ],

       [   ".                                                 .",
           ".                                                 .",
           ".                                                 .",
           ".                                                 .",
           ".                                                 .",
           ".               $                      !          .",
           ".         *     /                      |/     #   .",
           ".     ^   |/        %                         /   .",
           ".     |             /                    ^        .",
           ".                                        |        .",
           ".                     |         0                 .",
           ".     $                       //|          |      .",
           ".          *                      /         /    @.",
           ".          /|            !                       |/.",
           ".    /                  /|                         .",
           ".          0                            !          .",
           "-===================================================",
       ],

       [   ".                                                                    .",
           ".                                                                    .",
           ".                                                                    .",
           ".                                                                    .",
           ".                                                                    .",
           ".                                      !                             .",
           ".         ^     |/                     |/                            .",
           ".        /|                                                          .",
           ".                  /                                    ^            .",
           ".                        *                       $      |            .",
           ".                      / |              %       /|           0       .",
           ".                          /            |                   /|       .",
           ".          $                      /         /              |      ,  .",
           ".          /|                                                     |/ .",
           ".                             /                                      .",
           ".                                                        !           .",
           "-=====================================================================",
       ],
   ]

   // define what each symbol means in the level graph
   const levelConf = {
       tileWidth: 64,
       tileHeight: 64,

       tiles: {
           "?": () => [
               sprite("pinky"),
               area(),
               body(),
               scale(),
               anchor("bot"),
               "player",
           ],
           "-": () => [
            sprite("starttile"),
            area(),
            scale(1),
            body({ isStatic: true }),
            anchor("bot"),
            "starttile",

        ],
           "=": () => [
               sprite("maintile"),
               area(),
               scale(1),
               body({ isStatic: true }),
               anchor("bot"),
               "maintile",

           ],
           "_": () => [
            sprite("endtile"),
            area(),
            scale(1),
            body({ isStatic: true }),
            anchor("bot"),
            "endtile",

        ],
        "/": () => [
         sprite("floattile"),
         area(),
         scale(1),
         body({ isStatic: true }),
         anchor("bot"),
         "floattile",

     ],

     "|": () => [
      sprite("bigfloattile"),
      area(),
      scale(1),
      body({ isStatic: true }),
      anchor("bot"),
      "bigfloattile",

  ],

           ".": () => [
            sprite("chain"),
            area(),
            scale(2),
            body({ isStatic: true }),
            anchor("bot"),
            "limit",

        ],

           "*": () => [
               sprite("db"),
               area(),
               scale(4),
               anchor("bot"),
               "dirty bottle",
               
           ],

         "L": () => [
             sprite("wb"),
             area(),
             scale(4),
             anchor("bot"),
             "water bottle one",
              
         ],

           "^": () => [
               sprite("wb"),
               area(),
               scale(4),
               anchor("bot"),
               "water bottle",
                
           ],

   
        

           "!": () => [
            sprite("swb"),
            area(),
            scale(4),
            anchor("bot"),
            "small water bottle",
            "400",
            
        ],
        "1": () => [
         sprite("garbage"),
         area(),
         scale(5),
         body({ isStatic: true }),
         offscreen({ hide: true }),
         anchor("bot"),
         "garbage one",
         
     ],

           "0": () => [
               sprite("garbage"),
               area(),
               scale(5),
               body({ isStatic: true }),
               offscreen({ hide: true }),
               anchor("bot"),
               "garbage",
               
           ],
           "$": () => [
               sprite("dsb"),
               area(),
               scale(5),
               pos(0, -9),
               anchor("bot"),
               offscreen({ hide: true }),
               "dsb",
               
           ],

           "M": () => [
            sprite("ob"),
            area(),
            scale(5),
            body({ isStatic: true }),
            anchor("bot"),
            offscreen({ hide: true }),
            "glass ob",
            
        ],
           "%": () => [
               sprite("ob"),
               area(),
               scale(5),
               body({ isStatic: true }),
               anchor("bot"),
               offscreen({ hide: true }),
               "ob",
               
           ],

           "#": () => [
               sprite("sb"),
               area(),
               scale(5),
               anchor("bot"),
               body(),
               offscreen({ hide: true }),
               "sb",
               
           ],

           "@": () => [
               sprite("recycle"),
               area({ scale: 0.5 }),
               scale(3.5),
               anchor("bot"),
               pos(0, -12),
               offscreen({ hide: true }),
               "recycle",
           ],

           ",": () => [
            sprite("recycle"),
            area({ scale: 0.5 }),
            scale(3.5),
            anchor("bot"),
            pos(0, -12),
            offscreen({ hide: true }),
            "final",
        ],
       },
   }

   // add level to scene
   const level = addLevel(LEVELS[levelId ?? 0], levelConf);

   //{offset:Vec2(-10,0)}//
   //{shape:rect(10,10)}

   // define player object
   const player = add([
       sprite("pinky"),
       pos(0, 0),
       area(),
       scale(4),
       body(),
       anchor("bot"),
   ])


player.play("idle")

player.onGround(() => {
	if (!isKeyDown("left") && !isKeyDown("right")) {
		player.play("run")
	} else {
		player.play("idle")
	}
})

player.onAnimEnd((anim) => {
	if (anim === "idle") {
		
	}
})

onKeyPress("space", () => {
	if (player.isGrounded()) {
		player.jump(JUMP_FORCE)
		player.play("jump")
	}
})

onKeyDown("left", () => {
	player.move(-SPEED, 0)
	player.flipX = true

	if (player.isGrounded() && player.curAnim() !== "run") {
		player.play("run")
	}
})

onKeyDown("right", () => {
	player.move(SPEED, 0)
	player.flipX = false
	if (player.isGrounded() && player.curAnim() !== "run") {
		player.play("run")
	}
})

;["left", "right"].forEach((key) => {
	onKeyRelease(key, () => {
	
		if (player.isGrounded() && !isKeyDown("left") && !isKeyDown("right")) {
			player.play("idle")
		}
	})
})


 
   player.onUpdate(() => {
       
       camPos(player.pos)
       
   })


   player.onPhysicsResolve(() => {
       
       camPos(player.pos)
   })


   player.onCollide("recycle", () => {
       
       if (levelId + 1 < LEVELS.length) {
            music.paused = true
           go("game", {
               levelId: levelId + 1,
               temps: temps,
           })
       } else {
            music.paused = true
           go("finish")
      }
   })

   player.onCollide("final", () => {
      if (temps>20000){
         music.paused = true
         go('finish')
      }
   })


   function jump() {
       
       if (player.isGrounded()) {
           player.jump(JUMP_FORCE)
       }
   }


   let tempsPitch = 0

	onUpdate(() => {
		if (tempsPitch > 0) {
			tempsPitch = Math.max(0, tempsPitch - dt() * 100)
		}
	})


	const tempsLabel = add([
		text(temps),
		pos(24, 24),
		fixed(),
	])



   player.onCollide("water bottle", (wb) => {
      destroy(wb)
      temps += 400
		tempsLabel.text = temps
  })

  player.onCollide("water bottle one", (wb) => {
   destroy(wb)
   temps += 400
   tempsLabel.text = temps
})

  player.onCollide("small water bottle", (swb) => {
      destroy(swb)
      temps += 200
		tempsLabel.text = temps
  })
   player.onCollide("dirty bottle", (db) => {
       destroy(db)
       temps += 600
       tempsLabel.text = temps
   })

   player.onCollide("garbage one", (garbage) => {
      destroy(garbage)
      temps += 5000
      tempsLabel.text = temps
  })

   player.onCollide("garbage", (garbage) => {
       destroy(garbage)
       temps += 5000
       tempsLabel.text = temps
   })

   player.onCollide("dsb", (dsb) => {
       destroy(dsb)
       temps += 600
       tempsLabel.text = temps
   })


   player.onCollide("glass ob", (ob) => {
      destroy(ob)
      temps += 4000
      tempsLabel.text = temps
  })

   player.onCollide("ob", (ob) => {
       destroy(ob)
       temps += 4000
       tempsLabel.text = temps
   })

   player.onCollide("sb", (sb) => {
       destroy(sb)
       temps += 2000
       tempsLabel.text = temps
   })


   let curTween = null;

player.onCollide("water bottle one", () => {
    game.paused = !game.paused;
    if (curTween) curTween.cancel();
    curTween = tween(
        pauseMenu.pos,
        game.paused ? center() : center().add(0, 4000),
        1,
        (p) => pauseMenu.pos = p,
        easings.easeOutElastic,
    );
    if (game.paused) {
        pauseMenu.hidden = false;
        pauseMenu.paused = false;
    } else {
        curTween.onEnd(() => {
            pauseMenu.hidden = true;
            pauseMenu.paused = true;
        });
    }
});


player.onCollide("glass ob", () => {
    game.paused = !game.paused;
    if (curTween) curTween.cancel();
    curTween = tween(
        pauseMenuTwo.pos,
        game.paused ? center() : center().add(0, 4000),
        1,
        (p) => pauseMenuTwo.pos = p,
        easings.easeOutElastic,
    );
    if (game.paused) {
        pauseMenuTwo.hidden = false;
        pauseMenuTwo.paused = false;
    } else {
        curTween.onEnd(() => {
            pauseMenuTwo.hidden = true;
            pauseMenuTwo.paused = true;
        });
    }
});


const pauseMenu = add([
    rect(300, 400),
    color(255, 255, 255),
    outline(4),
    anchor("center"),
    pos(center().add(0, 700)),
]);

pauseMenu.add([
    text("Une bouteille d'eau mets 400 ans à se décomposer!  Fais bien attention à toutes les ramasser!  Appuie sur la spacebar pour continuer!", {
        width: 180,
        size: 20,
        align: "center",
    }),
    pos(0, 10),
    anchor("center"),
    color(35, 135, 35),
]);

pauseMenu.hidden = true;
pauseMenu.paused = true;


const pauseMenuTwo = add([
    rect(300, 400),
    color(255, 255, 255),
    outline(4),
    anchor("center"),
    pos(center().add(0, 700)),
]);

pauseMenuTwo.add([
    text("Une bouteille en verre peut mettre 4000 ans à se dégrader! Appuie sur la spacebar pour continuer!", {
        width: 180,
        size: 20,
        align: "center",
    }),
    pos(0, 10),
    anchor("center"),
    color(35, 135, 35),
]);

pauseMenuTwo.hidden = true;
pauseMenuTwo.paused = true;


player.onCollide("garbage one", () => {
   game.paused = !game.paused;
   if (curTween) curTween.cancel();
   curTween = tween(
       pauseMenuThree.pos,
       game.paused ? center() : center().add(0, 4000),
       1,
       (p) => pauseMenuThree.pos = p,
       easings.easeOutElastic,
   );
   if (game.paused) {
       pauseMenuThree.hidden = false;
       pauseMenuThree.paused = false;
   } else {
       curTween.onEnd(() => {
           pauseMenuThree.hidden = true;
           pauseMenuThree.paused = true;
       });
   }
});

onKeyPress("space", () => {
   if (game.paused) {
       game.paused = false;
       if (curTween) curTween.cancel();
       if (!pauseMenu.hidden) {
           curTween = tween(
               pauseMenu.pos,
               center().add(0, 4000),
               1,
               (p) => pauseMenu.pos = p,
               easings.easeOutElastic,
           );
           curTween.onEnd(() => {
               pauseMenu.hidden = true;
               pauseMenu.paused = true;
           });
       }
       if (!pauseMenuTwo.hidden) {
           curTween = tween(
               pauseMenuTwo.pos,
               center().add(0, 4000),
               1,
               (p) => pauseMenuTwo.pos = p,
               easings.easeOutElastic,
           );
           curTween.onEnd(() => {
               pauseMenuTwo.hidden = true;
               pauseMenuTwo.paused = true;
           });
       }
       if (!pauseMenuThree.hidden) {
           curTween = tween(
               pauseMenuThree.pos,
               center().add(0, 4000),
               1,
               (p) => pauseMenuThree.pos = p,
               easings.easeOutElastic,
           );
           curTween.onEnd(() => {
               pauseMenuThree.hidden = true;
               pauseMenuThree.paused = true;
           });
       }
   }
});

const pauseMenuThree = add([
   rect(300, 400),
   color(255, 255, 255),
   outline(4),
   anchor("center"),
   pos(center().add(0, 700)),
]);

pauseMenuThree.add([
   text("Le contenu d'une poubelle non triée peut mettre jusqu'à 5000 ans à se décomposer! Il faut donc faire attention de bien trier et recycler! Appuie sur la spacebar pour continuer!", {
       width: 180,
       size: 20,
       align: "center",
   }),
   pos(0, 10),
   anchor("center"),
   color(35, 135, 35),
]);

pauseMenuThree.hidden = true;
pauseMenuThree.paused = true;



   // jump with space
   onKeyPress("space", jump)

   onKeyDown("left", () => {
       player.move(-MOVE_SPEED, 0)
   })

   onKeyDown("right", () => {
       player.move(MOVE_SPEED, 0)
   })

   onKeyPress("down", () => {
       player.weight = 3
   })

   onKeyRelease("down", () => {
       player.weight = 1
   })


});

scene("finish", () => {

  
   const music = play("finish",{
      loop : true,
      volume : 0.8
   });

   const background = add ([
      sprite("background6",{
         width: width(),
         height:height(),
         fixed: true,
      }),

      fixed(),
   ]);


   const dialogs = [
      [ "pinky", "Waah! C'est tout propre!" ],
      [ "dude", "Mais oui! Bien joué, vous avez fait un sacré travail ensemble!" ],
      [ "pinky", "Tout ça avec l'aide de notre gentil voyageur!" ],
      [ "ghosty", "Notre sauveur!" ],
      [ "dude", "Non, Ghosty, le voyageur n'est pas notre sauveur-" ],
      [ "dude", "Iel a simplement pris responsabilité pour les déchats que les siens ont laissés-" ],
      [ "dude", "Tout serait plus simple s'il y en avait moins pour commencer!" ],
      [ "ghosty", "O-Oui, c'est vrai-" ],
      [ "pinky", "Allons Bluey, ne soyons pas dur-" ],
      [ "pinky", "Merci cher voyageur! Nous sommes reconnaissants.." ],
      [ "pinky", "Néanmoins ce que Bluey dit est vrai, s'il y avait moins de déchets dès le départ notre vie serait plus facile-" ],
      [ "pinky", "Peux-tu promettre de nous aider en réduisant ton empreinte sur l'environement?" ],
      [ "ghosty", "O-Oui, ça serait trop top!" ],
      [ "dude", "La moindre des choses ouais-" ],
      [ "pinky", "sshh.. Allez, iel n'est pas responsable pour toute sa communauté." ],
      [ "pinky", "Je suis sûre qu'iel va faire de son mieux de son côté- " ],
      [ "pinky", "Pas vrai?" ],
      [ "leafs", "Les trois mignonnes créatures sont reparties vers leur contrée. Appuie sur enter pour continuer!" ],

   
   ];
   
   let curDialog = 0
   
 
 const avatar = add([
   sprite("pinky"),
   scale(12),
   anchor("center"),
   pos(700,550)
])

   const textbox = add([
      rect(width() - 150, 100, { radius: 32 }),
      anchor("center"),
      pos(center().x, height() - 80),
      outline(4),
   ])
   
   const txt = add([
      text("", { size: 32, width: width() - 230, align: "center" }),
      pos(textbox.pos),
      anchor("center"),
      color(0, 0, 0),
   ])
   

   
   onKeyPress("space", () => {
      
      curDialog = (curDialog + 1) % dialogs.length
      updateDialog()
   })
   
   
   function updateDialog() {
   
      const [ char, dialog ] = dialogs[curDialog]
   
      
      avatar.use(sprite(char))
      
      txt.text = dialog
   
   }
   
   updateDialog()

   
   onKeyPress ("enter", () =>{
      music.paused = true;
      go ("end");
   })
});


scene("end", () => {

  
   const music = play("end",{
      loop : true,
      volume : 0.8
   });

   const background = add ([
      sprite("background5",{
         width: width(),
         height:height(),
         fixed: true,
      }),

      fixed(),
   ]);

   add([
      text("Merci d'avoir joué à Time Harvest! Press enter pour recommencer!", {
         size: 26,
         
      }),
      anchor("center"),
      pos(700,100),
  ]);

  
  add([
      text(`Temps gagné: ${temps}`),
      anchor("center"),
      pos(350,200), 
  ]);

  
  if (temps >= 40000) {
      
      add([
          text("Tu as économisé à la terre 20'000 ans de pollution!"),
          anchor("center"),
          pos(700,300), 
      ]);

      
      add([
          sprite("fullstar"),
          anchor("center"),
          pos(700, 400), 
          scale(5), 
      ]);
  } else {
     
      add([
          text("Retente ta chance! Tu peux faire mieux!"),
          anchor("center"),
          pos(700,300), 
      ]);

      
      add([
          sprite("half star"),
          anchor("center"),
          pos(700, 400), 
          scale(5), 
      ]);
  }


   onKeyPress ("enter", () =>{
      music.paused = true;
      go ("accueil");
   })
});
