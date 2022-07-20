## The list of games

- ~~Tetrisss~~
- ... Sssensssible Sssoccer
- ... Ssshadow of the Colossssssusss
- ~~? Sssteven'sss Sssausssage Roll~~
- ... Papersss, Pleassse
- ~~SSSSSS (Sssuper Gravitron)~~
- ~~The Witnessssss~~
- ... Sssuper Mario Brosss.
- ... Minesssweeper
- ... Missssssile Command
- ~~? Asssteroidsss~~
- ... Msss. Pacman

## TO-DO

### PRESS

- ~~Send to press~~

### AUDIO

- ~~FIX the hideous popping sound of movement at fast ticks~~

### TOUCH/MOBILE

- ~~Test what it looks like~~
- ~~Test swipe controls in different games~~
- ~~Add two player swipe controls to Sssensssible~~

### Menu

- ~~Need to think about nicer timings (it's very abrupt!)~~
- ~~Make it~~

### Base

- ~~__TRIED SOME WAYS AND EVENTUALLY FELT LIKE IT'S FINE THE WAY IT IS__ Queue inputs?~~
- ~~Self collision loops collision sound~~

### Msss. Pacman

- ~~Brighten visuals to make walls clearer?~~
- ~~Still need a game over~~
- ~~Only start adding ghosts when the snake starts moving~~
- ~~Handle win state on all pellets eaten (just reset the game but keep the score right?)~~
- ~~Handle ghost death (delete the dead one and add one to the ghosts to add)~~
- ~~__ACTUALLY JUST THE LOCATION I CREATED THE GHOSTS GROUP IN__ BUG: Ghosts end up under the pellets after dying (depth stuff, sad!)~~
- ~~__FIXED WHEN I REWORKED ALL THE COLLISION CODE__ BUG: snakes often seem to move one extra space post collision?~~
- ~~BUG: some pretty messed-up ghost colors~~

### Sssuper Mario Brosss.

- ~~Some way of clarifying that you can't jump?~~
- ~~Goomba as snake (killing you) instead of apple? Doesn't really make sense as an 'object of desire' - that would be a coin.~~

### Papersss, Pleassse

- ~~Move target apple closer to edge and have immigrant continue after eating it?~~
- ~~BUG: Can pass through some snake tails (in some directions??)~~
- ~~ADD: Play apple sound on successful immigration (they eat it!)~~
- ~~BUG: Audio dies?~~
- ~~__NOT REALLY__ BUG: Immigrant too fast on start?~~
- ~~BUG: Immigrants in foreground of snake~~
- ~~__LEANING TO NO__ Add other outside snakes?~~
- ~~Add 'difficulty' < This can be implemented by changing the rate at which the rules change~~
- ~~Add actual game overs~~
- ~~Kill snake if it tries to leave the screen~~
- ~~Add points for successful/unsuccessful blocks and let-throughs (lose points for bad work)~~
- ~~__NOT DOING THIS ANYMORE__ And the 'being paid' screen~~
- ~~Need to actually implement the idea of different snakes~~
- ~~And instructions~~
- ~~And generating combinations~~

### Missssssile Command

- ~~BUG: Restarting missile led to no missiles~~
- ~~There's an annoying pause before missile eat apple, plus it's in background? Or is it just that it's in background?~~
- ~~Increase frequency of missiles so it's not boring~~
- ~~Move snake and instructions down screen to associate with apples~~
- ~~Add "DEFEND APPLES" to instructions since that is legitimately in the game's instructions
- ~~Add difficulty increase over time = more missiles per tick~~
- ~~__ACTUALLY, NO, SINCE WE DON'T WANT THE SNAKE TO GET ARBITRARILY LONGER OR THE GAME WILL BECOME TRIVIAL__ Add those other objects that can move across the screen (oh shit, THOSE can make you longer obviously ha ha ha design in the todos sorry)~~
- ~~Add proper game over for end of apples or snake death~~
- ~~Add the concept of multiple missiles at the same time (along with delays between missiles etc. so it's not a nightmare initially at least)~~
- ~~Add the concept of differing speed between snake and missiles so it's more plausible you can get to them~~
- ~~__YOU ONLY GET LONGER BY EATING YOUR CITIES__ Decide on whether the player snake can get longer (other than eating cities) - do you get longer for killing missiles?~~
- ~~__NOT NEEDED__ Some kind of pausing effect on killing a missile to add impact sensation?~~
- ~~Add eating your own cities~~
- ~~Add missile death on collision~~
- ~~__IT SHRINKS DOWN TO NOTHING__ What happens after a missile eats a city? It's weird if it "dies" because technically it would get longer (if it's really a snake - but maybe it's not a snake after all)~~
- ~~Need a score~~

### Minesssweeper

- ~~Slower?~~
- ~~No mines spawning within 2 or 3 tiles of the snake start~~
- ~~Need to fix up text display in all scenarios (another text grid?)~~
- ~~Work out the horrible algorithm for auto-clearing tiles and marking with the number of bombs they are next to~~
- ~~Get the basic tile-eating stuff set up~~
- ~~__IT'S IMPURE__ Bomb walls as a red-tinted version of a wall, or is that impure?~~
- ~~Add animation effect to clearing rather than insta-clear~~

### Sssensssible Sssoccer

- ~~__YES, WHEN THEY ARE DRIBBLING THEY DO__ Are snakes still colliding when dead?~~
- ~~BUG: Need to cancel looping apple sound (or just eliminate that with a single apple...)~~
- ~~OOPS: Was displaying an upside down half-time and full-time in desktop~~
- ~~BUG: Half time isn't ending~~
- ~~BUG: On each restart the snakes move a unit closer to the center???~~
- ~~"BUG": Snakes collided with one another and the game didn't reset, may not have implemented resets??? Idiot?~~
- ~~__ENDED UP WITH SCORE ON LEFT, TIME ON BOTTOM, AND INDIVIDUAL RESTART/MENU BUTTONS FOR EACH PLAYER, ORIENTED APPROPRIATELY__ It would be nice to display the score on the side? And reset/menu on the other side?~~
- ~~The instructions for the top snake should be upside down to imply orientation? Just how painful might this turn out to be? (Probably not so bad? Maybe move the gooooooal to occur near the goal in question - and also flipped/oriented appropriately... hacky but it'll work I think?)~~
- ~~Implement razmatazz around goal scoring (flashing "GOAL!"?)~~
- ~~Game over: Implement end of game through time~~
- ~~Implement half-time?~~
- ~~Consider the problem of the ball pushed against the wall! Oopsie. (One solution would be goals the width of the thing, but that won't look at cool)~~
- ~~Handle the issue of the ball going _into_ a snake. I guess this can be checked easily enough? You die if you're currently trying to push the ball into another snake?~~
- ~~Mock up a visual of different version of the 'out of bounds' problem~~
- Consider handling single snake death. Options include
  - ~~__I THINK IT'S OKAY AND ULTIMATELY FOR THE BEST?__ Leave it (kind of gliding, not very powerful)
  - ~~__NO__ Hit snake pauses for long enough for the dead snake to flash and respawn~~
  - ~~__NO__ Hit snake pauses for dead snake to flash and vanish, then has a clear run at the goal before reset - if both die it's a full reset~~
- ~~__FOR NOW IT'S BOTH GET BIGGER PER GOAL__ Decide on how snakes get longer (bonus apples? scoring a goal? after every goal regardless of who scored?) and implement it~~
- ~~Get the game to recognise goal scoring (and the reset - I guess Snakes should reset to their positions)~~
- ~~Display the score at the top~~
- ~~Presumably have a timer that records how long the game has gone on~~
- ~~Figure out what happens if you kick the ball inside a snake (~~this is especially a real thing if we have the ball move two squares per kick - might be a reason not to do that~~ - if not that you could just die if you kick the ball into another snake, which is a simple response - but if you do single moves then how can you steal the ball? Maybe, again, you just can't)~~
- ~~Self-Body collision is broken? Something to do with coordinate systems?~~
- ~~Do a bunch of things that get the game partially working (but make sure you forget to list them in your to-dos, because I guess that wasn't necessary)~~

### Ssshadow of the Colossssssusss

- ~~__NO I DON'T THINK SO - THE ORIGINAL IS COMPLEX AND YOU DON'T STAY A COLOSSUS, BETTER TO KEEP THE METAPHOR NICE AND SIMPLE__ Should you get a 'you are the colossus' at the end? (e.g. turn into a colossus that you control?)
- ~~Colossus "favours" bottom right (should probably always move every tick if possible)~~
- ~~Add win condition (what will this be like? "BUT AT WHAT COST?!?!?!")~~
  - ~~In Shadow there's that swirling soul thing... something like that... black smoke... vanishes into black (change alpha?)... tendrils hit the avatar... he collapses...~~
- ~~Make winning actually register~~
- ~~__PROBABLY TOO SLOW NOW__ Slow down the colossus~~
- ~~Make colossus move better (in more than one direction, for instance)~~
- ~~Make snake die on impact~~
- ~~Make apple appear at different colossus locations~~
- ~~Make colossus move~~
- ~~Get the colossus displaying~~
- ~~Get basic Snake working~~
- ~~BUG: It is possible to pass through the colossus if it moves in the opposite direction to you (e.g. up as you come down) at least for one tile amounts~~
