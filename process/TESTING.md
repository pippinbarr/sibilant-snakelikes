# Jonathan Lessard

__Jonathan__

Salut!

This is fun and clever (as usual!) but it's hard! but that's also because I ssssssuck at this ;)

Some comments:

In missilie command, the 2nd bomb seems always long to come. Also, perhaps this game is far away in my memory but should I be eating the red dots down there? when I do I get points, but the last one is game over... I don't get it.

Msss pac man.... i love when the ghost/snakes trap each other.

Minesweeper : ha ha ha! but it's soo hard. Although the original game too, but transfering it to a real-time regime is just brutal. Perhaps a bit slower? But then perhaps it wouldn't be as funny

Shadow of the colossus: I love that one.

ssuper mario: is it the joke that you just can't "jump" and always die on the first vertical obstacle? If so it's not obvious as the other games set up that the snake can always go vertically (even in missile command in which I assume that I'm flying in the sky)

Pippinbarr... it seems your site is down!

Au plaisir!

---

__Pippin__

Thanks for this!

Made some fixed based on these things - missile gets going much faster, and I've added a "DEFEND APPLES" instruction to make it clearer that you shouldn't eat all the apples as they represent the cities in the original Missile Command.

Minesweeper could be slower, that would be fair... I'll do it.

And Mario... yeah, it's true... I always think of Snake as top-down, so part of the joke with Mario is that as a side-on game you're stuck on the ground. But it is in weird conflict with the "flying snake" of Missile Command... hmmm! These weird little decisions are at the heart of the games - it's been interesting and has forced some pretty detailed writing about design...

---

__Jonathan__

Looking forward to read about that.

Thinking again about that mario level in the weekend made me laugh. It's so ridiculously abrupt. I think I was irritated first because I genuinely wanted to try going through that level as a snake!

---

__Pippin__

Hehe. Oh dear. It's such a weird version of a game. I still have ontological doubts about whether it 'works', but I suspect I'll leave it in there for the comedy. I put "SNAKES CAN'T JUMP" in the instructions, but fear that's too clunky so will probably take it out again and leave people to suffer... unless you have a genius idea for it?

---

__Jonathan__

Tough one! I suppose you considered the option of just letting the snake fly and then the joke could be that you can just fly through the level with no difficulty... but the original one is probably better. I just took a look at Missile Command and I guess there is the esoteric justification that in that game the snake is actually a target, not a physical entity flying... So it's fine ;) Though you're also kind of flying in Shadow of the Colossus too!


---

__Pippin__

Hah! Oh god. I hadn't even thought of Shadow. Yes my "rigour" is in tatters anyway at this point. So interesting. I'll have to write about this now I think...

---

__Pippin__

Hey Jonathan - a short email to say thanks for noticing and pushing on and helping with the Mario thing. Tonight in a surge of energy I completely reimplemented it as the "flying" version because it felt truer to the spirit of the game and it's "ontology". The build has been pushed if you want to take a look :)



# Jess Marcotte

__Jess__

Thanks for sharing!

I found a sound bug in the Shadow of the Colossus Level - I died by colliding with myself and the explosion noise looped indefinitely until I hit restart. It's easily reproduceable and doesn't seem to happen for any other form of death. Also, not really a bug but it seems that the Colossus reaaaally likes the right-hand (player perspective) side of the screen, which felt a bit odd. It did eventually make its way up top and to the middle, but didn't go left all that much.

For Missile Command: Maybe I don't understand the rules (not a game I've played), but after I "ate" all four bases, I still get a "game over" with 40 points. Also, it says that the arrows control the Snakes, plural, but I only seem to be able to control one of the snakes -- the snake lower down on the screen at the start of the game.

For Ms. Pacman: the maze is a little hard to read for me -- maybe a slight palette change could be nice -- brighter white for the exes, or something? It's also very, very challenging to turn quickly enough in the maze if you decide to go left right away, and the game feel for when to turn is a bit odd (doesn't feel 100% consistent somehow) - doable, but challenging (maybe I'm just bad at classic arcade games). The scale of the maze is challenging in a way that I enjoyed.

For Papers, Please: I ran into a collision detection error on a red snake -- I went through its tail and didn't die. This is probably my favourite adaptation.

Sensible Soccer: super fun, didn't find any bugs.

Minesweeper: Wow. Wow. It is so difficult to do the mine mapping and control the snake at the same time. Really enjoyed this one, didn't find any bugs.

Super Mario Bros: Think there might be a major bug here - at first, I could only go back and forward (no jumping), and then once I pressed the forward arrow once, I couldn't go backwards either. So, I couldn't get beyond the first apple to try the rest of the level.

PippinBarr.com: not sure what this one is supposed to do, but when I selected it, the snake erased the title and didn't load anything else.

---

__Jess__

Oh, when I reloaded the project, selecting PippinBarr.com now loaded your website, which makes sense.

---

__Pippin__

Thanks so much for this - really helpful!

- Fixed the audio bug in Shadow
- The colossus movement _was_ broken, you're totally right, so thanks for seeing that! Unbalanced probabilities. Fixed it.
- Missile is a tough one... I think it's a pretty good remediation, but it's kind of impossible to understand if you don't already know the original quite well. The apples at the bottom are your cities, so you're technically trying to defend them. You _can_ eat them, but if all of them are gone the game is over. The other snakes (missiles) are trying to eat them.
- Don't _think_ the controls for Missile say "snakes"? Could be wrong...
- Pacman: yeah, it's kind of hard to play, not sure what to do about that. I've sped it up a bit, counterintuitively, which feels like it's easier to get into a rhythm. Will think about the visuals of the maze...
- Papers: good catch on the collision stuff - believe I've fixed it now
- Super Mario: this one's more of a gag game, so you cannot in fact go up or down... it's just kind of fatalistic... heh.

---

__Jess__

I must have misread the snake(s) for Missile Command. Actually, I have played Missile Command, come to think of it, but I thought for some reason that the play was flipped. Maybe this actually has to do with the starting Snake Placement - if I started nearer to one of the apples, I might feel more like I was on their side? But also, since the usual snake game is to eat the apple, that assumption was strong with me, so maybe for people who have Missile Command as a formative play experience will read it as desired.

The Super Mario joke makes sense when you think of perspective - snakes can’t fly, it’s just that all the other games (except Missile Command, where the snake is a
Missile) are top-down view. I was so focused on bug finding that I missed the joke xD.

---

__Pippin__

Anyway, very helpful! I made a couple of changes to Missile Command related to your suggestions - snake starts further down and I've added "DEFEND APPLES" to the instructions at the beginning - hopefully will help. The Mario one is tricky... I'll think about whether there's some way of communicating that lack of movement more clearly...

---

__Jess__

That sounds like it’ll be clear! I’ll let you know if I think of anything for Super Mario Bros — that’s a hard one.

---

__Pippin__

Yeah it really is. I'm feeling kind of ontologically confused about it right now. I added "SNAKES CAN'T JUMP" to the instructions, but that feels off as well... really a bit of a problem. Vaguely wondering if it should be removed from the game even though I like having seven in there...

---

__Jess__

Yeah, that doesn't seem like an instruction as much as an explanation, which doesn't seem to be in line with what the rest of the explanations are like. Maybe if you reframed it as an instruction (press arrow key to not jump, or something like that)? But if you're not happy with where it's at, it seems like a good idea to remove it -- it's not as if there's a stronglyset precedent. Pongs has way more than seven versions of Pong, for example.

---

__Pippin__

Hmmm, yeah. Will continue to think about it. Good to agonise about these things. It's design, after all! :)

---

__Jess__

Definitely!

One thing that occurred to me that might be a pain in the butt compared to how the movement works in the other games in this collection is that maybe the up arrow key could raise the snake’s “head” and the down key could lower it? That way it might clue people in that it’s not that you can only go foreward or that the input is broken, because pushing the other keys does do something. Might open up an interpretive door. I had the impression of being a speeding rocket, hurling towards the next obstacle.

---

__Pippin__

Heh. Interesting idea! God, it's so complicated to make these decisions. Jonathan pointed out that I already break the 'side view' rules in Shadow of the Colossus anwyay, since that has a 'flying snake' so I'm at a loss. I suspect the path of least resistance is going to win. I remove SNAKE'S CAN'T FLY and leave people to be angry with me...

---

__Jess__

That's true about the sideview rules for Shadow of the Colossus, but somehow the acrobatics in that game and how the character jumps around on Colossi and hangs on and falls through the air a lot made this feel totally fine to me. The logic and constraints of this project are fascinating (from the perspective of someone who doesn't have to make any decisions about the design).
