## 2017-11-16 10:29 in which, very briefly, on the confusions of Msss. Pacman

Last night at some point, probably while in the bath, I had a moment of what felt like lucidity about all the angst of the previous journal entry concerning design decisions in Msss. Pacman.

Specifically I remembered/realised/re-realised that the core of the project is the _translation_ of the source game's spirit/mechanics/ideas into the _mechanics_ of the target game, Snake. Importantly, the _mechanics_ of Snake are held to be the priority in that description (manifesto?). When there's a conflict or something doesn't seem 'snakey', Snake has to win. It's about how _well_ you can express the source games in Snake, not about how far you can pull Snake toward the mechanics of the source games. The _point_ of the design, development and even play of these games is about those tensions and compromises. And each moment of feeling like I really understood the design came when I found a way to express concepts from source games as Snake-centred mechanics.

All that is to say that in resolving the Msss. Pacman thing I have to think about Snake as my expressive form.

Now, both _eating = progress/growth_ and _collision = death_ are concepts from Snake. And they are also concepts from Ms. Pacman. However, in Snake you only ever eat _non-dynamic_ objects, the apples, whereas in Ms. Pacman you eat both non-dynamic and dynamic objects (the pellets and the ghosts respectively). In Snake collision takes place with everything solid except an apple and you die. In Ms. Pacman you only get a collision death with a (non-frightened) ghost. So collision is a more severe and universal concept in Snake.

Importantly, perhaps, Snake doesn't involve different _modes_ of play. There's just the snake moving around always doing the same basic thing - avoiding walls and trying to eat apples. In the versions I've made so far, that's been consistent - no modes.

- In Shadow you are always trying to eat the apples and avoid the walls (and colossus)
- In Missile you are always trying to eat the apples and avoid the walls (and block the missiles with your body, since they behave like snakes trying to eat your apples) - that is, there's a layer of narrative over the elements but you do the same things
- In Super you are eating apples and unable to avoid walls thanks to the restructuring of space - to be fair this is in some ways a poor translation of Snake because it's prioritising the physics of Mario?
- In Sensible you are avoiding walls and the apple has been repurposed as a ball - I'm not 100% sure that this is 'good' since it radically changes the meaning of the apple, but on the other hand it remains the 'object of desire' as a more general concept
- In Minesweeper you are avoiding walls with incomplete information - it occurs to me that it's plausible to have hidden apples on the board in Minesweeper? There would never be any advantage to eating it, but it would pull the game closer to Snake
- In Papers you are avoiding walls (as a matter of course) and blocking/not-blocking other snakes which are themselves pursuing the object of desire (off screen)

Critically, while various of these _reframe the meaning_ of the apple, say, or of movement, etc., none of them have the idea that those meanings would shift during play in such a complex way? (Papers comes the closest, I suppose, in that it changes the meaning of blocking snakes from positive to negative - but given that in the target game that _doesn't have a meaning_ since there aren't other snakes around, I think that's permissible.)

All of this suggests to me that the Snake version of Ms. Pacman should be _non-modal_.

If it's non-modal then the only way you can negatively affect the ghosts is to block them with your body. The way they negatively affect you is to block you with their bodies or head (since they don't care about dying). The meaning of the pellets is the Snake meaning of getting longer. Which we might argue makes it easier for you to kill the ghosts (they're more likely to collide with your longer body and reset), but also makes it easier for you to kill yourself (which is the original Snake meaning/tension of that element).

Further, if the snakes collide with your body and you with theirs it stands to reason that they should probably collide with each other's or it seems like a kind of weird dynamic? (What happens in Pacman actually?) Visually it doesn't make a lot of sense for them to overlap and it's confusing if everything is a snake. The extent to which they're even "ghost snakes" seems weird at that point. (As does the dynamic between Pacman and the ghosts really? Why can she eat them ever?)

SO, we go with that model:

- Snake AI is random-ish/chase-ish
- All Snakes collide with each other and themselves
- Ghost snakes reset to start area if they collide
- Need some sort of timed release of snakes from start so they don't collide instantly - Maybe just check every N ticks whether there's a spot before spawning however many snakes are needed
- You win if you eat all the pellets




## 2017-11-15 16:19 in which, thoughts about Msss. Pacman

Spent time today getting Msss. Pacman working. And it does. Well, there's a maze. There's dots you eat. There's big apples you eat. You get longer. There are four ghost snakes. They move around in the maze and chase you. And that's where we are.

In making this I consulted this nice explanation of Pacman ghost AIs: http://gameinternals.com/post/2072558330/understanding-pac-man-ghost-behavior. Quite a good read.

But in thinking about how complex and weird the legitimate AIs are, I felt exhausted by the idea of implementing them. And _then_ I also felt like I'm not totally sure those AIs even make sense for a snake version of this? And this in particular calls back to the question of how the ghosts die and the meaning of the power pellets. If the pellets are apples and make you longer, that plays into the snake idea of "improvement/progress" which is getting longer. That being the case, it feels like, more generally, you'd want collisions of heads and bodies (and heads) to be the core mechanic for dealing with ghosts. In which case the ghost AI definitely won't make sense because it won't account for that.

It also means, though, that it might be waaaay too easy for ghosts to self collide and hit each other? Buuuuut, it's possible that just having them regenerate right away and charge out again might be quite a good solution for that? I think that at least feels snake-y?

Buuuuut then there's the question of to what extent it actually makes sense as a translation/remediation of Ms. Pacman? Like at that point is it more of a visual thing? And it's secretly 'just' a multiplayer snake in a maze?

And that's getting back to the heart of this project and the question of what it's "really about" in terms of translation? Like, where is the spirit/soul of Ms. Pacman? If it's about eating dots and then eating ghosts then... yeah, you kind of need the ghost AI's and scatter mode and personalities and so on... if it's just "some shit in a maze" then I suppose it doesn't matter? But in writing that it's unfortunately feeling rather a lot like... it matters. Sigh.

So _if_ we say that it's not just heads hitting bodies then you'd have something like

- Normally the ghosts target your head, if they hit your head you die.
- In pill-mode you can eat the ghosts's heads.

Which is basically making the bodies irrelevant, right - it's just like the heads of the snakes are Ms. Pacman and ghosts. Which honestly doesn't feel legitimate in terms of Snake. So that sucks on the target system? The alternative

- Normally the ghosts target your head, if your head hits any part of a ghost you die
- If the ghosts hit your body they die

That's pretty much the lightcycle/tron version of things, where it's not really so much about eating things (except the pills to get longer). It's conceptually easier and at least makes the Snake body thing make sense. But it's kind of far off from what pacman is about and particularly misses out on the mode (and behaviour) switch that the power pellets give you. So it's a bit of a conundrum?

I guess it's possible to do some kind of mixed version? Like, after eating a 'power pellet' the ghosts become solid and thus can collide with each other and with you, making it possible to kill them at that time, whereas they're unkillable normally? But that seems massively out of step with the nature of Snake to me - the snake doesn't have modalities like that.

HOW DO YOU ANSWER THESE FUCKING QUESTIONS???

(I'm leaning toward - Snake is always solid, Ghosts maybe shouldn't even be transparent to avoid implication of insubstantiality - they're not transparent in Ms. Pacman anyway - and it's head on body collisions all around.)

Ghosts could be coloured like the original ghosts. Even if that maybe gives the impression they have those AIs which they would not.

## 2017-11-14 11:02 in which, a quick note about commit 74c94f0 (Notebook images)

I added notebook images in the last commit and, as I said in the commit message, I feel weird about leaving it at that because I feel like they somehow don't properly form a part of the story of the project in this way? Like they don't tie into the timeline? Except obviously they do if you think of the timeline as the commit history, so maybe I'm over thinking this. ANYWAY just to recap the decisions, main ideas:

- Decision to only have power pellets make snake longer in Msss. Pacman (to avoid ever increasing snake issue)
- Non-decision about ghost AI in Msss. Pacman
- Decision to not include an 'after work' in Papersss and rather just have it be an infinite level with changing rules in real time, reduces complexity, truer to arcade style of Snake
- (Introduces a problem of non-relevance of apples though)
- Decision to have no boundary marker in Sssensssible in favour of screen wrap and defined goal areas
- Decision to do menu in a pretty obvious way, including snakes that eat each line of the chosen menu item with an offset so it looks nice

That's what I ultimately got to in that notebooking. Thanks bye.

## 2017-11-09 11:03 in which, more about _Papersss, Pleassse_

This morning I added the barest basics of this version, in keeping with the design thinking I wrote about yesterday. So there's an immigrating snake crossing from left to right across the screen through two holes in the walls. It's targeting an apple that represents, I guess, the "good life" in the other country, which is funny. Need to decide whether that's something to actively include.

One mini-concern: the holes in the walls mean that the player snake could _leave_ which I don't want. But perhaps they just die instantly if they try to leave the office prematurely? Or could that be one "ending" of the game - that you run away. Maybe we hear a gunshot after you go off the screen? That might be kind of amazing actually. This would also do something for the idea of making the actual inner environment smaller, too - it would make sense to have a little bit of outer-space.

One of the big challenges up-coming is the information about who to let through or not for the day. (Which reminds me that obviously I now need a representation of time. I guess just "DAY 1" or whatever and then a time of day.) I'd already decided it was based on color, speed, length. So I need to be able to generate instructions based on those _and_ have them display nicely in my extremely limited grid of letter tiles available. Note that this will be even worse if the inner area is smaller - unless I display the instructions at the bottom of the screen, below the lower bound of the walls?

Also need the "payment screen" where you eat the apples you've earned over the course of the day. Which is funny. But of course yields a more complicated set of states, so I'll need some state tracking as well for that.

But if we try to imagine some texts as rules... well we should look at what the source game says actually. Duh. Duh duh duh. "Must have a passport", "Arstotzkan citizens only", "All documents must be current", "Foreigners require an entry ticket", "Workers must have a work pass", "No weapons or contraband", "No entry from Impor", ...

Importantly we can see there are both positive and negative rules. "Must have X", "Must not have Y". So we can imagine rules like

- NO BLUE SNAKES
- MUST BE MINIMUM 5 UNITS LONG
- NO SNAKES LONGER THAN 3 UNITS
- ONLY RED SNAKES
- SLOW SNAKES NOT ADMITTED
- NO FAST SNAKES

As I type these it becomes apparent that it's unclear how to discuss the "speed" of a snake in language - how does the player know what constitutes a fast or a slow snake? I guess it's just relative to their own speed of movement which is constant. That seems pretty fair.

And of course one could combine these rules as well - I think it would be easier to just stack them (one line each if at all possible?) rather than construct sentences out of them. Then we could have representations of the rules, generate the rule text, and check each snake against the current rules.

Then the question would be how to generate the snakes trying to get in. If the rule is ONLY BLUE SNAKES then do I try to conspicuously have more blue snakes, or just leave that aspect to complete randomness? (I know that in Papers, Please it's a designed sequence at certain points to create narrative events, but other than that I _think_ it's just random? I could easily be wrong about that. Also, I could check but I can't be bothered right now.) Basically I think random is fine and is in the basic spirit of the thing. You have to see a snake and judge it and act. All in a potentially very small amount of time.

And there are interactions between rules and snake-body that might be problematic. Say it's "only fast snakes" so you block a slow snake, but then a fast snake comes... it'll be much more likely to hit your body that's still there from blocking the slow one? Maybe not. And of course you could end up out of position relative to a fast snake especially since you can't catch up with it. But these are just "things" that I might put down to "realism". Ha ha. Realism.

Although it would be easier to only write rules in one way, like "NO BLUE SNAKES", "NO BLUE OR RED SNAKES", "NO BLUE, RED, OR GREEN SNAKES" and so on, that won't be as "fun" as being able to also say "ONLY BLUE SNAKES" for example? If I only have three snake colours (in terms of labelling) it might not be so hard to randomly flip those to OK/NOT OK and then generate an appropriate text - e.g. if two are on and one off it's "NO" for the off one. If one is on it's "ONLY" for the on one. If all on then I guess we don't have a rule on color. Seems fine.

Should there be a difficulty progression? There is one in Papers, Please. I guess it would be straightforward to only generate a single rule for the first day, two for the second, and then three thereafter. And then it may become apparent how to complicate these things further?

Complications can also be done via the representation of the snakes as well. A "blue snake" could be various shades of blue which would be pretty fun (I'd want to be able to use tint() for that?). Like "is that snake blue? Or green?" if it's some ambiguous shade. That's fun. Likewise you could imagine a snake that comes in slow, then speeds up! Or a snake that comes in at three units, but then partway through pops out another unit. That's pretty funny. Ha ha ha ha. I'm laughing over here.

FYI the available area of text (outside the walls) is 22 characters.

- NO RED SNAKES (13)
- ONLY GREEN SNAKES (17)
- NO FAST SNAKES (14)
- ONLY SLOW SNAKES (16)
- NO LONG SNAKES (14)
- ONLY SHORT SNAKES (17)
- NO SNAKES LONGER THAN 5 UNITS (29) < e.g. can't have something this complex if I'm shooting for single line
- ONLY 3-5 UNIT SNAKES (20) < this would fit but seems unclear
- NO 5 UNIT SNAKES < fits, seems clearer?
- ONLY 7 UNIT SNAKES < okay... but is "unit" appropriate? < maybe short/long is better? Although that will conflict with any idea of you getting longer when you eat your money at the end? Hmmmmmmmmm.

I think it may be better to have 3/5/7 unit snakes and have either one NO or one ONLY for those lengths? It's not quite as fun in terms of variable lengths though. I guess you could ask for 3+ unit snakes. ONLY 3 OR LESS UNIT SNAKES (26)

- NO LONGER THAN 6 BITS (21)
- NO SHORTER THAN 4 BITS (22)

Does 'bits' work as a term? It's something I use under the hood occasionally. Okay look this something I can solve later. Shut up Pippin.

OH MY GOD YOU COULD HAVE RENEGADE SNAKES ZOOMING PAST OUTSIDE THE OFFICE!!!

## 2017-11-08 09:59 in which, _Papersss, Pleassse_

Had a discussion with Rilla (aka R. aka Elmo aka Bunsen) about design "issues" in the game today. In particular I was laying out the way that the intensions of the game been shifted a lot by the experience of actually developing it. More in particular I was talking about how, after making _Ssshadow of the Colossssssusss_ and realising that the Snake version was actually a kind of "legitimate" remediation with mechanical "truthiness" to it and that could be challenging/interesting in related ways, I found myself requiring "more" of the design of the games. That is, the overall project became less about joke-y visual remixes of existing games into Snake and started to include considerations of challenge/fun/mechanics and of the "spirit" of the source games. That makes the design side a _lot_ more challenging and actually has made some of the game seem hard or impossible to really do well. Ironically, given how simple and Snake-y it is, _The Witness_ has proven very difficult to actually remediate. Perhaps because there's so little actual remediation to do, and then also because the actual puzzles in that game are weirdly complex to implement (beyond the basic, and Snake-y "eat all these dots" one). So it somehow ends up being boring and uninterestingly the same as the original beyond the "no takebacks" implied by Snake.

_Papers, Please_ there has problems too because my original hilarious idea to just have it be exactly the same thing as Snake but played to the rhythm of the tuba (or whatever it is) on the opening screen of the game no longer feels legitimate given the new nature of the game. Now that this thing is about genuinely grappling with remediation/translation/metaphor, just having a sonic/visual joke isn't really up to it. So it's interesting to me, I guess, that the implementation process for one game has kind of filtered out to reformulate the design proposition. (Which reminds me I wanted to try to write a "manifesto" ala Kony to capture the 'truth' or 'spirit' of design for this project. To try to articulate it perhaps a little more pithily at least. I planned that as a blog post. Maybe I'll have time and mental clarity for that today.)

So today Rilla and I went over design ideas and settled on something better for _Papersss, Pleassse_. After realising I can't do the joke version I'd imagined a version where you eat a red or green apple to signify approval or denial of a visa for a visiting snake. But in talking with Rilla we figured out that a more Snake-oriented thing would be that you either _block_ a snake trying to get through or you let it through. So your body is the "stamp". And then apples become your _payment_ at the end of the day, so you eat the apples as a kind of 'minigame' at the end (which actually oddly reminds me of the ... is it Street Fighter?... where you beat up a car for bonus points? Man that's weird). Conversation also went through to the question of _Papers, Please_ as hugely a game of information of course - and not representing that would be very untrue to the source game. The block-with-your body frees up a bunch of screen real estate, so I think it'll be possible to have instructions on what _kinds_ of snakes to allow through on any given day. So a level would be a single day (with a timer) and you'd receive instructions on screen of the kinds of snakes to deny entry. And that would be based on: length (how many units are permissible), color (ambiguity possible here, too), and speed (though I'm now realising that could conflict with the idea of the music?). There are complications introduced by all this - notable the fact that your body can kill you, but also that if you "leave your body in the way" you could end up blocking a snake you wanted to let through? (That would depend on how long you got though, which is complex as well.)

There's clearly enough here to build the initial prototype, and then I'll have to react to how certain things feel once it exists.


## 2017-11-01 10:36 in which, _Missssssile Command_

As I mentioned in the last commit, when I was laying out the basic skeleton for the code of Missssssile Command I played the original Atari version for a while and realised (or I suppose remembered?) that the original game isn't as simplistic and the representation I was developing in my head was. So I thought it would be sensible to think about how it would break down into a Snake translation a bit more seriously before I start trying to lay down the code of the thing.

So, maybe I break down the mechanical features I see in Missile Command and think about how they do (or don't) fit into the Snake framework. That seems like a reasonable starting point.

- _Player Missiles_. It seems "obvious" to me that this needs to be represented by the Snake itself. The player missiles represent the player's agency in the world of the game, and that's what the Snake does too. One thing this would appear to miss is the "launching" of a missile having significance - in MC it matters which missile bases are active (and indeed the fact there are three missile bases at all), because that alters your calculations of how long a missile will take to get to a spot (it optimises for shortest distance). If there's just one Snake then we can't replicate that complexity. You could "launch snakes" as missiles, but that's so far outside what Snake is about that it doesn't make sense. The notion of a snake with a moving and growing body is fundamental to translation. So my understanding is essentially that "the snake is the missile" and that the missile therefore behaves like a Snake. That is, given that we know a snake's body is solid, you _block_ missiles with the snake's body. And given that we know a snake's head is vulnerable, you might _die_ if you hit a missile with the head. BUT it's also true that the snake _eats_ things, you could reverse this and turn hit a missile with the head into a positive opportunity to grow the body and thus have a great chance of blocking future missiles. I like that dynamic more, I think, that the simple death one. It's nice, too, because in growing your body you also introduce a larger chance of your own death. So that's elegant, I think, and still in the spirit of the most basic nature of MC which is that you "block" missiles in order to disable them.

- _Enemy missiles_. It's funny that it only occurs to me right at this moment that they could be _snakes_! Amazingly "obvious" idea, but it hadn't reached me. This especially makes sense given that their representation has to be "snake-y" in the first place. In fact I guess it's arguable that even a representation of a regular missile was always going to look essentially like a snake. But it would be possible to maybe write a shitty 'ai' for the Snake class that would target a specific point and steer in a snakelike fashion toward there. This makes sense (and indeed there are multiplayer versions of snake that are basically the Tron lightcycles game). Okay I'm pretty happy. But we can colour code the enemy missile snakes in red so they're clear. BUT with the above thing on eating, their "head" should be an apple, because you eat that element. The language of colour/symbol, actually, is important in the context of snake and these sorts of minimalist games, right. Not about realism but about symbolism.

- _Cities_. A big element of the game I kind of glossed was just all-important cities at the bottom of the screen in MC. That's what the enemy missiles target (again, along with your bases, which I'm dropping). And that's what causes you to lose the game. So they really have to be there. I GUESS you could have them be apples that your snake is trying to protect? Hilariously this would lead to a potential mechanic where you could eat one or more of your own cities (but not all) in order to grow and be better able to defend them. That's a design decision that would _not_ be in the spirit of MC though, so I'm not really clear on how legitimate it would be. I kind of love it mechanically, and it's true that I feel like the ontology of the game makes sense that way, but it might be too cute. In MC you don't interact with your own cities at all except to protect them (indirect), so this would be taking liberties.

- _Planes etc._. In MC there are bonus elements that fly across the screen that form a kind of risk/reward element to the game. If you shoot for them you're running out of ammo (need to cover this below) in order to get points. No reason one can't do this. Perhaps a flashing snake that crosses horizontally that you can block for points. Nicely plays into risk reward for the Snake because the higher on the screen you go the more likely you'll have to chase down an errant missile from behind that might be quite hard. If the missiles are all snakes I guess these bonus things should be too. (But presumably they _shouldn't_ block the enemy missile snakes? That's a bit weird in terms of physics.). The OTHER option is that instead of being a snake they're just a bonus (flashing?) apple that cross the screen that you could eat for points and length. I think that might be better. (Note to self and anyone else who ever reads this: that was totally a design understanding being created as I typed it out.)

- _Ammo_. In MC there is limited ammunition. Your missile bases represent your ammo. I don't think there's a real way to deal with that. I suppose your snake could get _shorter_ as you block missiles to represent limited ammo, but I think that won't feel fun/interesting and there's that whole second later of trying to make something that remains within the spirit of entertainment of the original game. I could try it out easily enough however, and that's something to remember too. Not every decision is necessarily a totally philosophical/conceptual translation issue.

- _Split missiles_. In MC there is a further mechanic where some missiles split apart at a certain point to be more scary. I current don't imagine using that just because it seems like a complication unnecessary to convey "missile command as snake"

- _Levels_. There is the concept of increased difficulty and different screens. But I think in the context of my version of snake an infinite single level is fine.

That's it. I think I've made all the design decisions I need to begin implementation! And we'll see!


## 2017-10-30 13:54

Okay, so one thing I just did was split the to-do list out into a separate file, because the meaning of this file as 'process' was getting to be too huge. So now this file is the journal specifically, and the other file is for tracking particular plans of implementation.

I've been looking at the other versions of the game I have on the list to make and fretting about them. I guess that that fretting is all "part of design" and so forth, and that's fine. I will deal with that as I go. But still, it's frequently quite hard in each case to determine what really constitutes the "spirit" of any given version of the game. I feel like with the versions so far it goes beyond a kind of joke-y recognition of certain aspects of the source game put into the target (also: metaphor? remediation? translation? How to actually describe this process usefully?). That is, it doesn't feel enough to just hint at the source game... you kind of really need to feel it in the _system_ of the new game to some extent. And so in thinking most recently about _Papersss,Pleassse_ and _The Witnessssss_ I feel less sure of myself in terms of how to do it...

- _The Witnessssss_ is hard because the puzzles themselves are actually quite complicated feats of calculation. I can't, off the top of my head, even figure out how to do one of those "keep the white squares separate from the black squares"... it requires some kind of topological understanding I don't seem to have right now (I'm also kind of tired, admittedly). And most of the puzzle elements are like that? Well, maybe not. We have 'maze' version where it's just that certain areas are blocked off and you have to find a continuous path. We have 'dot' version, where there are dots you have to 'eat' before getting to the end. We have symmetry + maze version where you have two 'snakes' that constrain your navigation. Those don't require anything more than a defined map and the ability to eat things (and count whether they're all eaten). BUT the other interesting stuff like the 'segregation' idea, or the 'must pass this side' idea, or the 'must make this tetris shape' idea are all really kind of horrifying. And it's not like The Witness is _generating_ them, they're complicated to _design_. One _feature_ of The Witness, that is part of its spirit, is that idea of cumulative understanding. I'm just not sure I can do something like that. But then I'm also not sure that a simple maze (maybe maze + pellets) sufficiently captures a sense of the original game? And I mean are you supposed to have an overworld where you snake around and find different puzzles? Scope! Scope! My scope! So this is hard.

- _Papersss, Pleassse_ is hard because it's a beautiful and complex game and working out how to compress it down to Snake is tricky. I mean, Shadow is a bit like that too, but it has an ultimately simple core game loop or climbing and stabbing which we can fit into the language of Snake. Papers is a much more sophisticated game in terms of variety. And in particular it's such a game of information, which maybe isn't something the Snake framework is suited to? My original idea was a throw-away gag where the snake just moves to the rhythm of the great music of Papers, but then I started thinking about it eating a red or a green apple to indicate whether you give someone's passport a pass or not. And then I imagined another snake kind of "coming in" to wait for your judgement and then either retreating (red apple) or being allowed out the other side (green apple). But then _that_ begs the question of how you're actually making your decisions about which apple to eat? Like, can it be arbitrary? That seems to betray the spirit of the game, which is about rule-following plus about narrative/emotional decision making potentially in conflict with that. But how do you know the rules? How do you hear a snake's sob story? How can you tell it's the "wrong snake"? How much of the system can you represent given the components we have? HM. For that reason it's almost like the throw-away musical timing gag is more "respectful" of the game... better to have a gag than a super awkward and badly considered remediation?

I still think I "get" Sssuper Mario Brosss. (also a gag really in terms of it being unplayable for a snake), and also I think I "get" Missssssile Command, which seems like it's possible to maintaing the classic mechanics. So I guess I should go ahead and make one or both of those and keep simmering on the more complex things. It's true, though, that to this point I haven't tackled a really complex system... tells us something about the source games, I suppose, and how much they can be boiled down. Also just tells us something about what I, personally, am capable of with design thinking? At least while I'm sitting here, feeling sleeping, having eaten a donut inside a bagel.

## 2017-10-26 12:13

Just a quick note to say I started on Minesssweeper today. I'm finding it quite productive get the basics of a game going and then stop pushing when I get to the more fine-grained work (like soccer razmatazz or shadow of the colossus spirits evanescing or whatever). Minesssweeper went pretty smoothly in terms of the basic setup. In no small part, I assume, because I'm remediating a tile based game into another tile based game. So there's a nice alignment there which helps with life - there are no kind of spatial reconfigurations/reimaginings necessary at all. So actually that's pretty powerful.

The other moment of design today centred around the representation of neutral tiles on the map. I'd thought that I "should" have the apple representation since that's what the snake _eats_ in Snake, but then realised just as I was about to switch the sprite in the code that it conflicts with the meaning of tile selection in Minesweeper, which is specifically _neutral_ about the nature of any unrevealed tile (could be a bomb, could be safe). Here is makes sense that Minesweeper wins this design moment because it's the source system and because going the Snake way would specifically _break_ Minesweeper in terms of the meaning of its aesthetics. The reason I was fretting about all this in the first place was the question you always have to ask with Snake as a target system, which is "how long should the snake get and when?". In the context of this one it was easy to jump to the idea that individual tiles would be apples, since the Snake is processing them and they disappear. By having it become clear that they _cannot_ be apples, I actually end up with a very easy solution to the snake getting longer: it's _can't_ because there are no apples. This is handy in no small part because it really feels like if the snake is getting longer during play the game will become insanely difficult to the point of being unplayable. Because it would mean that the snake really just _extends_ from its starting position (the body would never be seen to move as it would permanently get longer? Unless you cleared a big area early I suppose).

So anyway, some more minutiae for you.

## 2017-10-25 13:36

A few developments in the last couple of days.

- The power of "gooooooool!" was surprising to me. Once the snakes could score goals I added a `console.log()` statement that just printed "Goooooool! Golgolgolgolgooooool!" to the console. The comparison between that and no explicit acknowledgement was kind of amazing and made me think about how important that aspect of aesthetic/visual/audio representation of excitement is to generating actual excitement. I guess screenshake is a pretty elementary version of that. Makes me think I could just literally write "GOOOOOOL!" on the screen, too. Some kind of text animation of that excitement. (Can you die during your goal celebration? Heh)

- Thinking extensively about collision aesthetics. Notably how unsatisfying a moving collision looks when one snake hits the other and the other keeps moving. No solidity to it - the snake's head is "in" the other one, but the other one just keeps moving. Doesn't make sense. I have ideas for fixing it.

- Thinking about the issue of the ball going against a wall and therefore being impossible to get out. Again had to come up with multiple versions of a solution that, some of which radically change how the game would work. Not clear how to choose just yet, but it may be in conversation with the remediation equation around source and target systems? As in, the most Soccer thing to do would be not to have walls in the first place, but rather an out of bounds area that would cause a reset. But that's getting very non-Snake, which is bad in another way, because the question is how would you represent Soccer in Snake, and it's true that a _wall which kills you_ is an appropriate metaphor for the ball going out of play to some extent (it's a response to the same concept)? The base response would be to let it happen, and then require both snakes to die to reset. A fudged double version would be to have an actual field of play with a wall around it so you can die out of bounds, but the ball can go out of bounds and reset without you dying too. I'm concerned that will be visually confusing so I should mock it up in Pixen.

Reflecting back up at the level of this methodological thing we're doing, I'm impressed by just how much detail this commit-oriented writing (along with this journaling) is extracting from me. I'm ending up writing _very_ detailed thinking about the specific decisions being made with each commit/build. One observation is that a lot of the time you have a kind of double thing... the design thinking sometime reflects what is present in the build, but just as often the design thinking around is about absences... so things that are not in the build but perhaps ought to be. That's probably a positive, but it feels like something to think about.

Anyway, this project is going well, and I'm managing to work on it in the small amounts of time I actually have available, too which is a positive.


## 2017-10-23 20:50

Spent some more time on the game today, mostly getting the Snake class working so that the snake is independent of the game. Especially important for multiple snakes.

Today's major realisation came around the issues of designing what happens as you dribble the ball around and whether you can steal etc. by "tackling" and so on and so on. In particular, I started to think about the game from a more 'sport oriented' perspective where it becomes important that it's fair (so you need to resolve collisions fairly and consistently) and also that you need to have some sort of skill that can be exercised and that it's clear how you might do better. These aren't concerns I tend to have for my games, but in remediating the idea of a soccer game (and here I note that 'Sssensssible Sssoccer' might be a misnomer? I'm really just doing Sssoccer generically?) I'm having to think about those features of play. Soccer and soccer videogames are _designed_ to have those qualities... those qualities are kind of the reason that the various mechanics exist. To remediate such a game you cannot just ignore them. So despite the fact it becomes Snake, it needs to maintain that sort of 'spirit' of the mechanics. I think that's entirely doable, but it's pushing me to think about aspects of play that I find unexpected.

There's also a small thought in the back of my head that Snake-based soccer is kind of cool and could be worthwhile in general. But that siren song is a dangerous one - I don't have time to make "good games"!

## 2017-10-20 12:09

Been a gap in development where I needed to do things like move house, but here I am at the kitchen table in the new house getting back to it.

I think the most productive thing I can work on right now is actually starting one of the other games rather than fine-tuning how Ssshadow itself works. So let me pick one I think would easy to work on...

So one interesting thing I notice when I look at this is... goddamn they all require complex stuff in the background. I guess this is the systems interlinking. Generally speaking Snake is providing a basic 'physics' of the world (a snake that collides with things, that moves on a tick) and a small amount of extra ideas (death on collision, growth on eating an apple), but not much more. To make the source game recognisable generally involves taking that form of movement or being-in-the-world (is that Heidegger? Hah.) and then translating the larger mechanics of the source game into such a world. That means compromises with the movement for example, or finding a representation/use of the Apple concept, and working out death. But generally the source games are very complicated and so you're often talking about simulating a lot of that game. e.g. Pacman presumably involves the logic of the ghosts and the concept of power pellets in order to really make sense? Although again there are fun weirdnesses there... are the ghosts little snakes? Then they could block passage ways as well... maybe they can all just move randomly or am I supposed to implement their separate AIs? Etc. And this will always return me to questions of what this game is truly 'about'.

### Papersss, Pleassse thinking

Anyway, I guess the next really easy one is just Papersss, Pleassse to the extent I was thinking about it as a very one-note joke where you move according to the timing of the opening music and otherwise are just literally playing Snake as per usual. That's a cop out in the sense of actual remediation, but I'm also allowed to have _one_ game that doesn't actually confront the task but rather goes for an easy life. (I'm _allowed_ to do anything obviously, since it's my game, but in terms of having the impact I want or making the argument I want or inviting the questions I want or whatever it is I do, I can't just have a bunch of trivial jokes.)

### Sssensssible Sssoccer thinking

I think, though, that Sssensible Sssoccer might be good. Thoughts for the initial foray:

- Two player to avoid AIs (which will make it harder to test but AI sucks)
- Two controllable Snakes
- An apple-ball (though here is a moment for questions, because you could also have apples separately and choose whether or not to eat them in case an elongated body had some advantage?, thus maintaining the meaning of an apple. But that said if the apple is the ball it maintains its status as the core object-of-interest/pursuit)
- Hole in the wall at the top and bottom for the goals
- Nudge the ball forward with the snake's head (two squares or one? Two might feel more like dribbling)
- Collision is still death but want about collision with ball against a wall or snake body? Can it jump?
- On death you reset to emerge from your own goal

That should be enough to get started on it.

## 2017-10-14 15:03

Added the game recognising actually winning. Made the colossus slower. Much too slow. Thinking about how the game is actually maybe 'good' at this point is a strange feeling. It occurs to me in particular that it would be possible within this framework to 'turn the handle' and crank out multiple levels with different colossi of different shapes, different speeds, movement, blah blah blah. Totally possible to do that. Might even be a good game. BUT that's not really the point I don't think? I guess you could say that's exploration of a kind of higher level structural remediation of the game? Both games have 'levels' and you could explore the relationship, particularly in terms of the ways that different colossi would lead to exploring different behaviours/qualities in the Snake version too. But I just don't think that's necessarily what's interesting/deep in the project, so my inclination right now at least is to say no to that.

## 2017-10-14 14:18

Just wrote the initial to do list to clarify what's need for Ssshadow after having worked intuitively thus far. The games aren't very complex. But then also noting that filling out the Git commit messages has been a good venue for the design thinking associated with moment to moment coding. But that's made this diary section less powerful/populated. BUT it's also true that these entries are probably more important for higher level thinking about what the game is about and so on, collating observations about multiple commits, etc.

## 2017-10-11 14:46

__Blog post from website__

_New Project: Sibilant Snakelikes_

Today I finally started writing some actual code for the new project I've been quietly thinking about on and off for the last several months: _Sibilant Snakelikes_. It's another iteration in my interest in how we can remediate one kind of game into another kind of game's framework. So in this case _Sibilant Snakelikes_ will be a series of remediations of existing games into the form of Snake. As per usual I'm choosing a kind of "low resolution" game as the target platform because I think that it's more controllable that way, the design decisions can achieve more clarity, the code itself is going to be less nightmarish, and also because it's quite funny to work on this kind of thing.

I've already done a bunch of designing of the subgames of the project to a point where I feel like I understand them about as well as I can in order to begin implementation (and thus begin to understand them from an implementation perspective which will naturally change elements of their design). The rule for picking games to remediate is premised on the title of the game: they have to have an 'S' in the title, which the remediated version with triple to make it more snake-y. Thus we have: Ssshadow of the Colossssssusss (pictured above), The Witnessssss, Sssuper Mario Brosss., and ssso forth. It's nice to have simple rules to make those sorts of decisions - closes down the potential design space so you don't freeze up. In a way reminds me of the kinds of constraints used by [Oulipo](https://en.wikipedia.org/wiki/Oulipo).

Each game will thus be an attempt to represent the gameplay and experience of the source game in the target system of Snake. Naturally this leads to plenty of absurdity and bizarre compromises. One thing I'm interested in is the tension between the source and target systems in terms of which has 'primacy' when deciding how to make a specific design decision. This project should be a chance to meditate on those kinds of questions as I go.

Since I started working with git to manage my production of games, and in particular since I started writing public-facing (post-release) design documentation, I've noticed I write a lot less about what I'm working on here on the website. With this project I'd quite like to remedy that. So I'll probably try to write posts here on the website, and then also just paste them into my documentation in the repository as I go - seems a reasonable compromise, and I miss attempting to communicate about this work more directly with the outside world. And, at least until I go fully open source and just develop these games in the open in a public repository (which I may well do), it'd be nice to have a 'live' portrayal of the work for anyone who's interested.

Finally, I just wanted to note here what a big deal it felt like today to finally just sit down and implement the very beginnings of Ssshadow of the Colossssssusss. In some ways it seems a bit lame to me, but I have felt kind of emotional about it. I haven't managed to work on a game since _It is as if you were doing work_, which is now about four months back. There have been perfectly good reasons (traveling to Hawaii to help run a workshop, home-life stuff that needed attention, preparation for teaching a new course, writing grant applications, writing essays for publication, going to a lot of meetings because I'm faculty at a university, etc.), but I discovering (or, really, rediscovering) just how fundamental to my sense of self working on games is. I was getting into some pretty bad emotional states because of it, to be honest with you. So there was a real sense of elation today when I actually did something toward getting a game made. Naturally now it seems like I could have just jumped in earlier and been happier, but who knows whether that's really true. Good things take time etc.

## 2017-10-11 11:09

Had a short conversation with Rilla (and myself) about the relationship of process documentation and GitHub specifically. In particular I just wrote a pretty extensive commit message+description for the little block of work I did here. Things that came up from this (and yes, it's pretty fucking meta to be writing a development journal entry about commit messages that I will then write a commit message for and commit...)

- When to commit is a very real thing. Even in the short period of work I did this morning getting the colossus on screen I made multiple design decisions that felt important to the overall nature of the game. I don't think I could reasonably have remember to break that into distinct pieces - maybe somebody else could, but maybe somebody else would have pushed ahead even further before committing? That commitment question is a big one indeed. I don't have an answer, just flagging it.
- The actual visual representation of commits on GitHub online and also in the Desktop application really minimises the role of commit descriptions - they're really a "drill down" kind of thing that you have to very explicitly expand out to read. That reduces the visibility of that design thinking. On the other hand it gives us the win of having the design/development meditation very specifically attached to a commit, rather than relying on it being referenced in the journal and forcing an analyst to then figure out which commit was being referred to, which is powerful.
- Don't want to create double work here. It would be possible to write a journal entry reflecting the same design thinking from the commit, but I'm a little... well actually AM I skeptical of that? Maybe part of writing those detailed descriptions for commits should be to paste them into the journal for that commit as well? That way you've got them in the linear record too - because I often find myself wanting to just reread design thinking over time, and that would facilitate that, while maintaining the commit-tied nature of them. I kind of like that.
- Writing the commit description. It felt quite good actually. A different style of writing. I tried to be more modular in what I was expressing about the commit, and ended up with a notation. + means something I added (generally in the technical sense), and ? means something I thought about in relation to the commit, often design.

Here's the commit message (note that in this instance it's from the LAST commit):

+ Process description (just a diary entry to get my head back in the game)

__+Process journal entry, +Initial implementation of Ssshadow of the Colossssssusss__

- + Added file for Ssshadow of the Colossssssusss and set it up to extend the base Snake class
- + Made decision to implement the colossus in the game as being built out of tiles (using data in an array) because I realised collision detection would be problematic with an image.
- + An implementation win from the data-driven representation is the ability to map out where the 'apple' appears in sequence on the colossus body specifically, which I was worried about with the image representation (would have been messier)
- + Putting the component pieces of the colossus into a 'group' in Phaser means I can move it around per tick as a whole unit which is nice, go frameworks

- ? (I'm going to try using a question mark to indicate any thoughts) Just seeing the colossus move around in the actual game _immediately_ made the game feel more real and worthwhile
- ? Looking at the code and the method calls immediately got my brain going in a way it hadn't been, just the simple pleasure of thinking about how to implement specific elements (like the colossus's decision-making process when it moves...)
- ? Stepping into implementation meant i thought about the potentialo scenario of the colossus moving on a tick onto the snake's head - e.g. "stepping on" the snake. I could prevent this (the colossus checks and makes sure not to do that), but in thinking about it I think it makes sense for this to be possible, in keeping with the threat that the colossus represents.
- ? That, in turn, is making me rethink and wonder about collisions between the colossus and the Snake's body... there's one of those tensions between the Snake rules (the snake's body is solid and impermeable) and the Colossus rules (the colossus is huge and can destroy anything). I'm still inclined toward Snake rules for that one, but I wonder what that prioritisation is based on?


## 2017-10-11 10:36

Welcome to my nightmare. Not really, but it's just that I haven't had any time for this project at all in the last month. I've done literally nothing on it other than pine away thinking about working on it, or really just the concept of working on anything creative of my own. Still, I've been teaching classes, applying for grant money, doing directed studies, going to meetings, so that's alright, right?

ANYWAY. There's perhaps some chance I can put more attention to this over the next weeks now that grants and essays are written and teaching is under control. (Meeting are never under control.)

As such I wanted to write an entry mostly to register that I still actually care about this project. I still believe that I understand what it is in terms of another exploration of remediation of game mechanics, using mechanics as a "medium" and so on. And so on.

It's not a 'critical' project per se, and not really speculative or disaffective. It's certainly experimental, though. Another one in this line of semi-formal experiments with form in videogames.

In terms of the work, it's sufficiently designed (via the low-res layered images) to just start implementation I suspect. Which begins with having them mechanics of Snake (can be taken from SNAKISMS) and then implementing the new stuff on top. I gueeeeessss I should use inheritance to extend the base Snake implementation so that I can fix things a little more smoothly moving forward? SNAKISMS already has that structure anyway, so I can take that and move forward.

I think it probably needs to be mobile friendly again. It's kind of dumb to make non-mobile games given it's how people live these days. Though on the other hand Snake isn't the best swipe-controlled game? Maybe it's fine? I don't remember the swipes feeling totally awesome on SNAKISMS? Or were they fine? I'll have to check that up.

Anyway I guess the truth of the matter is I should just start. Maybe I will.


## 2017-09-15 19:35

HA HA HA HA. Now I'm going to write about what the game is about. Like six weeks later. Or maybe it's even seven weeks. Part of this was just because of being busy, but I think it's also pretty clear that there's a resistance to tackling the work of really engaging with the "what is this for?" question. Maybe partly because it's intimidating? I think maybe most of all because you might get an answer you don't like... an answer like "nothing" and then you have to stop making it.

(Well you don't _have_ to stop, but now that I'm in this academic game full time I feel like I probably shouldn't spend too much time making games that serve no interesting purpose at all. Anyway that's not the case here, because...)

So the game is about remediation I think. And writing it now after so much time away from the game, I may repeat things I've written below, but I think it's a valuable exercise to try to say what it is cold.

It's an extension/follow-up on the Breakout Indies Bungle, where I remediated five indie games into Breakout. This time it's the same exercise, but remediating games into Snake. It also relates to SNAKISMS obviously, because in that case I was remediating (I guess? Maybe not media this time, but another form of translation at least) philosophical ideas into Snake (sometimes purely in a comic way, but sometimes with a genuine desire to be 'accurate').

The reason for making it is in large part to explore, through making, this idea of translation or remediation. Particularly the question of how you make design decisions in this context. You have a source system (the original game, like Tetris, say) and the target system (Snake), and you need to make design 'moves' that result in a version of Snake that 'is like' or even ideally in some sense 'is' the source game. You can't say 'is' really because that doesn't make sense, but the 'likeness' is interesting. Just how similar can such a complete reworking of a game really be? What does it mean to say that one game is like another? (Normally I think we'd be referring to them having the same or very similar mechanics? Doom is like Quake. I doubt you'd say two games were like each other on the narrative axis if they were TOTALLY distinct in terms of gameplay? That's probably an interesting thing to think about? Like if there were a post-apocalyptic match-3 game, would you compare it to Fallout 3? And now I have to make that.)

Okay so it's about examining the notion of translation (maybe I feel more comfortable there than remediation? Although I should re-read remediation texts because I think there might be something interesting to say about individual games as _mediums_ rather than instance of media?). And you examine it by doing it, seeing how you make design decisions, seeing how you _justify_ design decisions, and going from there. Process is very important here, which is why I'm writing this, but why it's also so key that when I'm making them I'm committing with regularity and with explanation.

It's a little weird in the sense that the games are maybe also already designed? I think there's also something weird/interesting to think about in terms of the relative complexities of the source and target? Like Shadow of the Colossus is complex... it has a narrative, detailed visual effects, a horse, a game-feel, etc... and the Snake version... well it's not the same, it's not so detailed? And that's something to think about when we talk about how you can say one represents the other? Is it farcical to even be making these sorts of claims/reaches? Like, sure you can make Snake look "a bit like" Shadow of the Colossus, but what does that mean exactly?

A lot of the juice presumably has to be in the juxtaposition/grafting of the rules and mechanics. The Snake version of Shadow is partially interesting because with think about the movement and life-and-death styles of Snake and how they relate to those things in the context of Shadow?

As with Chogue a big question is just how you decide _which system_ to accept the rule/mechanic from. Should there be a consistently dominant system? Does it depend on certain factors? How can I make myself aware of how those decisions are made?

Given that I've _already designed_ each game to some extent (pre the inevitable changes required by development itself), I guess I could go through and try to justify how it turned out?

I kind of don't like Tetrisss right now? But maybe I should just shut up.

---

## 2017-08-10 12:45

- Chessssss? Haha.

## 2017-08-09 13:57

Ha ha. I was going to write stuff about what the game is about again and again did not. Ha ha. Funny. I'm laughing.

## 2017-08-03 16:22

I have ten now that seem somewhat doable?

- Tetrisss
- Sssensssible Sssoccer
- Ssshadow of the Colossssssusss
- Sssteven'sss Sssausssage Roll
- Papersss, Pleassse
- Sssuper Hexagon
- SSSSSS
- The Witnessssss
- Sssuper Mario Brosss.
- Minesssweeper

BUT, I would suggest to you that SSR, Hexagon, and soccer could all be extremely difficult or just not very successful. Hexagon in particular doesn't seem like a very good idea. So it's probably important to have three in reserve if at all possible. And then to take all the game more toward some paper designing.

- Missssssile Command (ha ha)
- Asssteroidsss
- Msss. Pacman
- Ssspace War!
(Does this lean to heavy on the classic arcade side? Does that tell us something in itself?)

ALSO in the spirit of Jonathan pointing out that in _It is as if you were doing work_ I didn't actually write very much about the actual question, in that case, of speculative play and thinking about evoking thoughts about a near future etc... in the spirit of that, I should probably write at least a little something about the (nascent?) question that this game might be about or might approach?

... I will write this in a bit...

Okay bu... in a bit.




## Gimme some more (2017-07-20 14:11 & 2017-07-21 10:08 & 2017-08-03 16:15)

- Tetrisss

I guess the snake moves around at the bottom and needs to eat the falling Tetris pieces? And you ... lose when the snake dies? Which would be inevitable? Or maybe the snake has to be used to push and rotate pieces (how would you rotate as opposed to just push?) maybe it can ONLY push. Hehe. That's kind of funny.... could be complex, but it could be amazing.

- Sssensssible Sssoccer

Maybe a two player game. Two goals. A ball. Have to push the ball through the goal. If you score you get longer (or maybe opponent does - not sure which would be 'balanced'). Could be fun.

- Ssshadow of the Colossssssusss

There's a big figure on the screen, if you hit it in the wrong place you die. There's a spot you have to eat (the apple) that damages it and then another appears. Har har har. Hee hee. (What happens when it hits your body? I dunno.)

(At this point I guess I want there to be 10 levels ideally? 5 as a bare, bare minimum.)

- Sssteven's Sssausssage Roll

Remediate one of the puzzles (or make one up), the snake pushes the sausages and they roll around. They collide with your body. You have to grill them and get to the end point. Sausages should probably be quite big? (Graphically this doesn't seem like it will work well... if I'm sticking with Snake style graphics then the blockiness will work against anything with detail...)

- Papersss, Pleassse

I don't know how to do this but it feels like it might be too funny? I guess one funny option would be to steal the music and have the snake move like the titles - kind of a lurching through the game. And then ... I'm not quite sure how to (or whether to) add other elements of the game... maybe it's actually just enough... maybe it's about how many of the apples you get? Maybe the purity of the music is a better gag...

- Sssuper Hexagon

I guess shapes fly in from the sides and you try to avoid them? Like a maze moving inwards the whole time to the center? Might be impossible though - you couldn't move sideways? Unless they were far enough apart?

- SSSSSS

(The letter S sssix timesss. HAHAHAHAHA.)

Could be the gravitron? You can move around (bounce off the walls?) an a stream of things come through at you. Plus apples that you can eat. I think it would have to matter whether they hit your body? Or it cuts off your body but then those pieces remain and you collide with them? (May be visually confusing?)





## More furtherer thoughts (2017-07-19 10:27)

Last time I wrote-thought about this game I told myself I should start trying to come up with some of the ways the games could actually work to start getting an understanding of how to actually work with these ideas and to hopefully find the 'identity' of the game through that process. So I guess I will obey past-me's instructions and actually try it out?

SOOOOOOO...

- The Witnessssss

This one seems like one of the easier one's to do a 'proper' remediation just because the core mechanic of The Witness is set on a grid with a snake-like movement through space. Almost too easy (and conceivably a bit boring for that reason?). Essentially this one would be a standard-issue Witness puzzle that you would solve with the Snake. It changes the puzzle because then it's in real-time (I guess this would be even more intense if you generated the puzzles, but that sounds like a total nightmare?). You can crash the snake in the normal way, but also the snake would crash at the end if you haven't solved the puzzle correctly (I guess it would just smash into the final block rather than slithering it's way out). The Witness even has things you effectively 'eat' and those could be used to make the snake longer. So it's basically highly constrained Snake.

- Sssuper Mario Brosss.

Seems roughly okay. Side-scroller with the snake on the ground (like a snake). I guess it could eat the Goomba that it runs into first, get longer, be unable to jump for any of the powerups, and then smash into a pipe and die. Ha ha hardeeharhar. I guess one interesting-ish question is how to represent this all graphically? Because it suddenly occurs to me it might be quite appealing to see this all remediated into the gridded system of normal Snake rather than trying to match the graphics of the source game? Makes my job a lot easier. BUTTTTTT... is this even interesting? SHIT. SHIT. Is it?

- Minesssweeper

You on the Minesweeper grid, starting somewhere (shouldn't have a bomb!) and you 'clear' the squares you eat (and you get longer with each one, so the levels might be insoluble?). If you eat a bomb you obviously die. And when you clear a square the board should react in the way that Minesweeper traditionally does. Basically makes the game harder (similarly to The Witness), except much, much harder because there's no real time to react to the information available and the game has random resets so you wouldn't be able to learn how it works... (is this the thematic, though? Just - oh I turned these games into Snake and now they're all bullshit and impossible? IS THAT EVEN INTERESTING? It's still kind of an interesting formal exercse?)


## Further thoughts (2017-07-14 13:46)

I'm in Hawaii and this game isn't exactly on my mind, but I did do a couple of drawings in the notebook to think about what the screens might look like. (See screenshots or whatever.) While I was drawing those I ended up feeling like I was quite unclear on what the core of the game was, and was getting confused between some different possibilities which would really mean different things about how the game should look and feel...

- The real _bungle_ idea would be that the games are kind of terrible 'versions' of the games they reference. In that case they would need to be bad. They would need to be, I guess, kind of cursory treatments of the origin game using the medium of snake... so kind of lame by design.
- Another idea would be an actually serious attempt to _remediate_ the games into Snake - actually try to figure out how the basic Snake mechanisms could be used to actually try to recreate the spirit or appearance or something of those origin games. But an actual attempt to say it's "the same game" in some sense.
- Finally, I could try to _reimagine_ the games with Snake. So rather than trying to use Snake to represent them in a kind of rigid way, reimagine Snake around the ideas from the origin game.

These all have their recommendations. Obviously I won't call it a bungle if it's not the bungled approach. It's okay to make a game called Sibilant Snakelikes without the bungle concept. That would create, I guess, a more general idea of remediation based games (in one way or another they're all oriented toward remediation).

The Bungle approach would in theory be the easiest because it would be bad on purpose.

I'm not totally clear on whether it's funny? The Breakout Indies bungle was weird because those games were kind of serious attempts to remediate the games? Well, within the specific mechanics of breakout. They weren't really 'bungled' in the sense of being badly done, they were bungles in terms of... what? I mean I guess just the bungle of making a game on the wrong 'platform' or something.

hm hm hm hm.

Anyway, anyway, anyway, hm, anyway, hm, anyway, hm.

It's fine. It'll be fine. We're fine, we're doing fine.

I guess I should just come up with a bunch of actual mechanical ideas for the snakelikes (rather than just the hilarious sibilant names) and then see what the overall situation feels like. Feel it out through the actual design.


## Early days (2017-07-09 12:02)

Was talking to Rilla about this project again at breakfast at Hof Kelsten and it occurs to me I should really write some words down about it and start the repo etc. so that I have a record of it from the early days - notably if this is going to be useful from the perspective of our larger Research Creation project.

The genesis of the idea in this case was... hmm, I'm forgetting the precise details. It was definitely about bouncing ideas back and forth with Rilla. The title "Sibilant Step Siblings" came out of us joking around. And then in the mix was this idea of reimagining various games by adding 's'es to their titles and using that as a reason it would be made as a Snake-like version of it.

So the brief here is, as you might imagine: remediating existing games into Snake. Much as Indie Bungle 2 reimagined indie games as Breakout.

There's something to be said (and perhaps seriously written) about this idea of __remediation within a medium__? Or rather the idea that the fact this seems/feels like remediation suggests almost the idea of individual __games as mediums__? It would be worth re-engaging with the remediation book/literature and perhaps making this case through research creation? Anyway that's a thread to follow moving forward.

So along with that I have the twin issues of

- A title for this thing
- A set of games to remediate

As such here are some attempts at those things...

### Games to snakify

(Looking at this it seems like adding a triple 's' for a single is a decent rule to follow - I'd imagined that doubles would do it, but they don't quite look essy enough.)

- The Witnessssss
- Fesss (a cheat on a 'z', but funny to pronounce)
- The Sssimsss
- Sssuper Mario Bros.
- Minesssweeper
- Dear Esssther
- Gran Turisssmo
- Tetrisss
- Dark Sssoulsss
- The Ssstanley Parable / The Beginner'sss Guide < That is pretty funny with the possessive, there are probably other games with a possessive of course
- Ssspace Quessst
- Candy Crush Sssaga
- Shadow of the Colossssssusss
- The Lassst of Usss
- Sssensssible Sssoccer
- ...

### Naming

- Sibilant Step Siblings < The original, but I worry it's a bit too silly for a game that is ostensibly taking itself a bit seriously...
- Snakeses
- Bungle 3: Sss
- Snakelikes < This is a contender...
- Bungle 3: Snakelikes
- Snakelikes (An XXXX Bungle)
- Sssnakelikesss

The 'bungle' aspect of this is proving difficult to like.

- Snakelike Bungle
- The Sibilant Snakelike Bungle < Getting better?
- Sibilant Snakelikes Bungle

Hmmm. Okay well maybe The Sibilant Snakelike Bungle is pretty good? It's a shame Bungle doesn't start with an S. Pretty hard to make it do that though, ultimately. I .... okay there was some distraction there while I figured out that this computer's x key is not always responsive if I hit it in the lower left quadrant. Something I'll keep an eye on. Apparently it's a pretty seriously common problem with these computers (with this butterfly mechanism). Replacements are being done. Feeling annoyed about Apple and their expensive shit right now. Expensive. With an xx. It typed that double x just then on its own. This is not a nice thing to be running into. Think about how often I type x when I'm programming. Hm. Well it's not fixable prior to going to Hawaii so I guess I'll have this slightly below par x until then.

The Sibilant Snakelikes Bungle.

How's that?

x?
x?
xX?
xx?
x?
X?
x?
x?
x?
x?
x?
x?
xX?

Hmm.
