## The list of games

- Tetrisss
- Sssensssible Sssoccer
- Ssshadow of the Colossssssusss
- ? Sssteven'sss Sssausssage Roll
- Papersss, Pleassse
- ? Sssuper Hexagon
- SSSSSS
- The Witnessssss
- Sssuper Mario Brosss.
- Minesssweeper
- Missssssile Command (ha ha)
- ? Asssteroidsss
- Msss. Pacman
- ??? Ssspace War!

## TO-DO

### Sssensssible Sssoccer

- Get the game to recognise goal scoring (and the reset - I guess Snakes should reset to their positions)
- Display the score at the top
- Presumably have a timer that records how long the game has gone on
- Decide on how snakes get longer (bonus apples? scoring a goal? after every goal regardless of who scored?) and implement it
- Figure out what happens if you kick the ball inside a snake (this is especially a real thing if we have the ball move to squares per kick - might be a reason not to do that - if not that you could just die if you kick the ball into another snake, which is a simple response - but if you do single moves then how can you steal the ball? Maybe, again, you just can't)
- Self-Body collision is broken? Something to do with coordinate systems?

- ~~Do a bunch of things that get the game partially working (but make sure you forget to list them in your to-dos, because I guess that wasn't necessary)~~

### Ssshadow of the Colossssssusss

- Add win condition (what will this be like? "BUT AT WHAT COST?!?!?!")
  - In Shadow there's that swirling soul thing... something like that... black smoke... vanishes into black (change alpha?)... tendrils hit the avatar... he collapses...

- ~~Make winning actually register~~
- ~~__PROBABLY TOO SLOW NOW__ Slow down the colossus~~
- ~~Make colossus move better (in more than one direction, for instance)~~
- ~~Make snake die on impact~~
- ~~Make apple appear at different colossus locations~~
- ~~Make colossus move~~
- ~~Get the colossus displaying~~
- ~~Get basic Snake working~~

- BUGS
  - I managed to pass through the colossus's shoulder. Probably that's it moving and me moving. Will have to try to recreate though. I just did (notably after reversing colossusMove and checkColossusCollision, so it's something deeper than that...)

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
