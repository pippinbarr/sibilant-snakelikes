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

---

# Gersande La Fleche

__Gersande__

Hey Pippin! (Sorry for the delay: I had this email sitting in my drafts folder last night and somehow didn’t realise I didn’t actually send it)

0. Controls aren’t very smooth on my computer. One of my go to moves in Snake is the very sharp 1x1 turn (turn right, immediately turn right again, or the same sharp turns to the left) and I seem incapable of doing that in my browser…
Not sure how much that can be optimised that can be optimised on your end.
0. Because I had a hard time doing sharp turns, MSSS PACMAN was devilishly hard and I don’t think I ever survived more than 15 seconds in it, even after quite a bit of trying.
0. SSSUPER MARIO BROSSS seems broken to me. Unless the snake can’t “jump” or go up?
0. Papersss Pleassse is the one that I find most interesting. I like the three rules, I like the floating box with two little holes. What does the -10, -20, -30 counter in the top right hand corner mean? But of all the games, it’s the one I was most successful at!
0. I found Sssensssible Sssoccer to be very cute but difficult to control with two hands
0. I’d never been very good at Minesssweeper, and it was very difficult to do Minesweeper and Snakes at the same time. But the concept was interesting.

Hope this feedback is useful?

---

__Pippin__

All very helpful!

Weird about the controls... I find they work alright, but I'll look into whether there are some possibilities there... maybe I can set up a queue of commands so that you can execute things faster... right now you have to move with the rhythm of the snake.

Pacman is super hard. Not totally sure what to do about it really... slower doesn't really seem to help because it starts feeling unnatural. Maybe I could make it reeeeally slow...

Mario - yeah, can't jump, so doomed to slither along the ground. I'll think about whether there's a way to clarify that in the instructions or something, or a 'no' sound when you press up...

In papers the number is still the score - you get points for following the rules and lose points for messing up... e.g. if you let through a green snake but green snakes are banned, you lose 10 points, but if you block it you gain 10 points...

The soccer game is definitely for two players - pretty hard solo I agree :)

---

# Sebastian Salvagno

__Sebastian__

Hi Pippin, I tried your game and I'm familiar with the oner one that you made in the same vain. These are really cool. Some doubts / issues I came across :

I am not sure I understand the Missile Command one. Am I supposed to get the 4 "apples" at the bottom and the game ends?

In the paper's please one, if you restart, there is a snake that can pass by without you being able to move, which starts you at a negative score.

In the soccer one, crashing while flashing felt a bit unfair, specially since the flashing is so long.

In the Mario one, I suppose it's intentional to not be able to jump or navigate besides going left - right and dying?

Besides these things everything looks great to me. Looking forward to seeing more of your work! Thanks for letting me try it out.

---

__Pippin__

Thanks a lot for this!

- The missile command one is tricky. If you aren't already familiar with Missile Command it won't make much sense. The apples at the bottom represent your "cities" that you're defending. You _can_ eat them, but if you eat all of them the game ends. The other snakes are trying to eat them.

- In paper's please - I think I've fixed that now.

- In soccer - not totally sure about crashing while flashing? How do you mean? Sounds like something I need to fix - do you know how I can reproduce it?

- Mario is just a gag, that's right - a joke about the fact snakes can't jump :)

---

__Sebastian__

I think what I didn't initially get about the missile command one is that you have to use the snake's body to block.
In soccer, what I mean by crashing is the two snakes colliding with each other. The blinking reminds me of that invisible frames that characters get in other games, so I didn't expect them to collide when that was happening.

And yeah, for Mario I thought it was a gag. Just making sure.

Hope this helps.

---

__Pippin__

Definitely helps - I've changed the instructions a bit for Missile Command - now says "DEFEND APPLES" as well.

Hm, you're right that snakes shouldn't collide when flashing - I'll look into that...

---

# Stephan Reilly

__Stephan__

Played through the game today.

Here’s what I got:

In the Shadow of the Colossus Level, I hit the red head block and the animation of it disssapearing played but I still got the game over screen. I’m assuming the colossus still moved during the animation or something but that felt bad and unfair after trying to beat it for a while...

Papersss Pleassse was the most challenging of any of the games. I couldn’t catch the fastest ones when I needed to. But I loved the idea, and got it almost instantly what the references were.

I don’t understand how basic Minesweeper works so Minesssweeper was a mystery to me. But one time I spawned directly into a mine so maybe starting them 4 or 5 blocks away just to give the player a fair start.

After restarting the Missssssile Command nothing spawned and I had to back out to the menu and load it again. I couldn’t get anything to spawn after the first retry. But I did enjoy the side to side trying to stop other snakes.

Msss Pacman was waaaay too hard for me. I felt like the snake I was controlling should just stop at the wall and wait for an input to move again, not just instantly die. In my opinion that would be much more enjoyable and make it feel way more like Pacman, and the challenge of attacking snakes is still there.

I couldn’t for the life of me figure out how to jump in Sssuper Mario Brosss... just kept dying.

And just general thoughts:

I loved the idea I’m a huge Snake fan and really enjoyed the clever ways you mashed it with other popular games.

I had to zoom out my browser to make it fit, I’m not sure if there’s a way for you to scale it to the screen size automatically. The instructions for Retry and Menu were at the bottom and I couldn’t see them without zooming out, seems like important info.

---

__Pippin__

This is very helpful!

- The colossus game ends when you eat the final apple, so that was 'correct' behaviour, but you raise a good point in terms of whether that should be game over or not... I'll have to consider that...

- Papers: yeah the fast snakes are faaaast! You kind of have to anticipate them by leaving the way blocked before they even spawn (based on the rules of course)

- Spawning directly on a mine kind of sucks, it's true... I'll make it impossible to spawn a mine that close to the snake, good call

- I'll take a look at Missile, sounds buggy...

- Msss. Pacman is a difficult one - totally see your point in terms of it being too hard (I find it super hard myself), but I feel like death-on-wall-hit is so fundamental to Snake that I don't know if it's right to change it...

- No jumping in Mario - snake's can't jump :) (But I need to find a way to communicate this intentionality better...)

- Weird about the scale... I'll look into that... what resolution is your display?

---

# David Clarke

__David__

Oh man, the weekend just took off and I'm just realizing now I didn't give you any feedback!

Games were fun, no major confusions except for the system of scoring... I found it a difficult to figure out, but I'm not an experienced gamer. With 'papersss pleassse' it seemed like i could intersect any snake in spite of the rules... not totally sure about this...

Minesssweeper slows to a crawl, but maybe this is supposed to happen...

missssssile command, not sure how to play this one

Sssuper mario brosss didn't seem to respond to the arrow keys the first time I played it, but it's working now!

---

__Pippin__

Hey no problem - this is still helpful! Totally understand things not making so much sense - it's pretty "inside baseball" in terms of the mechanics involved. A bit concerned about Minesweeper slowing down... can't seem to reproduce that one (is it perhaps fixed now somehow? I did speed up the snake a bit).

The Mario version is interesting (to me) because so many testers felt like it was broken without being able to go up - I had intended it that way, but it didn't make sense so I had to actually remake it! :)

---

# Alex

__Alex__

I only experienced something game-breaking on Mario. The up button doesn't seem to work, so I die on the first jump, Pressing the up key at the start screen does begin the game, so I know that it registers the keystroke both with the hardware and in the game, but it doesn't translate to movement. I don't know how much of the map you replicated, so this might by design (especially since having a snake flying around the map wouldn't seem quite right). If that's the case, having a game where your only option is to inevitably fail doesn't seem like it works as well here as it does in games like Snakisms or even Save the Date! because in those games the act of failure communicated meaning. Here, it feels more like a bug or an oversight. Maybe instead of dying to a wall, you have a one-dot snake representing a Goomba kill the player? It's possible that there's no way to end this section that doesn't feel either bad (unavoidable death) or unearned (replacing the wall with the end-of-level flag). And again, this is all assuming that this is the intended outcome.

Two other, much shorter pieces of feedback: With the Shadow of the Colossus level, it seems weird to me that the end message you get for successfully completing the level (GAME OVER 0 POINTS) is the same as the one you get if you fail. There isn't anything that communicates to the player a feeling of success or winning. Maybe that's by design, in which case feel free to ignore me, but maybe each of the red contact points on the Colossus could be worth a certain point value so that the player gets more feedback on how successful they were? I also only knew to touch the red points because I played Snakisms, so adding a point value could help clarify for the player what their goal is. As for the Ms. Pacman level, the enemies have a habit of killing each other. The movement restrictions of not touching the snakes imposed on such a relatively small map size probably makes this balanced, but it does feel weird as a player. If you want to put the game out soon, though, it's only mildly strange and might take more effort to correct than it's worth (since you would have to change AI pathing and then make sure that it remains fair to the player), so it's okay to leave as-is.

---

__Pippin__

Thanks so much for playing the game and paying such close attention.

- The Mario game is actually more of a gag than a game. It's intentional that you can't move up (jump) or down. The idea is that the physics of the snake, transported to the platformer world, lead to a kind of fatalistic crash into a wall. The goomba's tricky... I decided to make it an apple and have the snake eat it so you at least go that satisfaction, though to be honest it doesn't make a lot of sense. Maybe it should be another snake and you just collide with it unavoidably?

- In Shadow with the 0 points I was trying to find a way to reference the moral ambiguity of that game in the end - the idea that it wasn't valuable or good to have killed the colossi after all. It's possible I should give the points initially and then take them away? But there's something I like about the emptiness of just having no points ever...

- In Pacman... yeah, it's true they crash into each other a lot. They're pretty dumb. It's tricky because I felt like if I made them 'ghosts' that couldn't hit each other it troubled the physics of why they _could_ hit the snake. But maybe they should be semi-transparent and not self-collide? It'd make the game a lot harder... as you say, it's possibly their constant colliding with each other makes it a bit easier to play...

---

__Alex__

- The Mario game is basically just a replication of World 1:1, right? What if you did replace the apple that takes the place of the Goomba and make it a snake? I think it might reduce some of the frustration, since it's more intuitive that you would die to an enemy than to parts of the environment that hold no risk in the original game.

- The idea of Shadow was to make you think you were doing something valuable and good and then to shatter that illusion at the end, right? So maybe initially giving the player points and then watching as they slowly go away after beating the Colossus replicates the arc of the game more closely. Though you also get the warning right away from Dormin itself that there will be a price to pay for Momo's revival, is it too cheesy to put question marks for the points instead of 0? Though I do see what you mean, 0 has a really strong feeling in terms of not having worth or value. It's possible that this version is the best way to communicate that ambiguity.

- The Pacman game is honestly already pretty hard. I probably played 30+ times and never won, in part due to that touching the walls means death rather than no movement. Even though it's funny to watch, it's probably the best balance state for the game's difficulty.

---

__Pippin__

Yeah, I did replace the apple with a snake, I think that's a good change. It's a shame because you see less of the level now, but the whole thing's just a gag anyway, so it's fine I guess.

The shadow one is tricky... a lot of the fun of this project has come in thinking through those sorts of minute details about representation!

And pacman... hmmmm, yeah. Again it's tough. In Snake's world hitting a wall means you die, so it feels like it'd be weird if in the Pacman version you don't... on the other hand it makes it incredibly tough, it's true. On the other hand, maybe that's okay... hard to say!

---
