# pOne

Objective
Be better with symbols and numbers.

Timer: 60s

Game point:
One correct guess get 1 point.
One incorrect guess get -3 points.
3 wrongs, game over.

Game manual:
1. Begin with entering Player's name (optional).
2. Choose level and number of cards (5 or 7 cards).
3. Game is silent from the beginning. At the input, can click for sound of typing during play.
4. Under play input, enter "start" to begin the game. Timer starts.
5. Timer reached "0", Game stops.
6. Reset Game to play again. Otherwise, the input will be disabled for input.
7. After Reset, Player's Name and Choose Level will be reset.

--
Project Post Mortem
Post mortems are important to understand about what happened in a project and actively think about what you learned.
Post-mortems are meant to be a blame-less space open to objective conversation about what went well and what could be improved.
Even in the examples below, where tens of millions of dollars could be lost, the best approach is to think through the series of events that led to the outcome.
Large mistakes are almost never the fault of the developer, but of the sytems and processes in place to prevent errors and problems.
https://github.com/danluu/post-mortems https://blog.codinghorror.com/the-project-postmortem/

What to Bring
Please answer the following questions. Take at least 30 minutes to prepare.
--
Approach and Process
What in my process and approach to this project would I do differently next time?
- Finding better code to replace hardcode (with more research). 
- Put them in module (section) so when a code goes wrong, you can check that section straightaway. 
- List the items that is related to that section. (For this project, I did it only after I finished most of my code because I can't find where I go wrong.)
- After organizing, it gets easier to check when there is error and if you want to add other functionality or structure, it takes less time to add when it was in a mess.
- Checking whether it is better to have some repeated short code or put it in function or restructure how the codes run. 
- Naming of function, variables and array so it is easier to recall what that stands for after a break.
- learn more shortcuts for mac, browser and everything on sublime.
- Thinking too much of just keep adding more functions actually reduce the quality of code (in terms of modularity).

What in my process and approach to this project went well that I would repeat next time?
- Using a function when I have two repeated code in the beginning.
- Check for error code for each function separated from my current code before adding them.
- Console log every decision steps the same way for that function only so it wouldn't plague the console panel.
- Make sure the console log shows the answer that I expected.
- Check new code on console before using especially those unfamiliar ones.
- After adding one function, re-check that it works before moving to the next.
- Once done, remove console log before doing another.
- Trying to code without googling (so to recall as much as I can on what I've learn to reduce processing time next time). Only to google if codes or function that I needed is new to me or when it took me too long to remember.
- Check reset button after each additional functionality that needs reset and ensure it reset correctly for the game to be played again.
- cmd+D is really useful when I decided that my bad variable naming is giving me trouble. Learn from the stand-up group.

Code and Code Design
What in my code and program design in the project would I do differently next time?
- Hard code to be replaced by shorter code like all the on and off thing (timer, sound...).
(still mastering and researching on how to use them in place).
- Simplify difficulty level code (I think there is a much simpler way but I need to try.). It is hard coded for now. I should make an array for the buttons. *script.js LINE 66 ~ 93.
- reset button code is getting more complicated. *script.js LINE 189 ~ 216
- Animation CSS which I don't have for now.
- Make it more challenging (add another level of difficulty across game). Like with increasing time, the game gets harder with more symbols on the stacks. I would need to check my knowledge on the setTimeout(), setInterval() which I am trying to master. Right now, I can only use the basic function of it when nothing is involved.
- Another is to add a game racing or something maybe to make it more interesting to play with others. Like able to race car if you typed symbols and numbers faster.


What in my code and program design in the project went well? Is there anything I would do the same next time?
- The flow with divider. I know where to find which function went wrong when I get an error.
- setTimeout function - To give sometime after a set was done before adding another set.
  *script.js LINE 246, LINE 271
- adding card from javascript to current cards which is already in HTML. 
  *script.js LINE 118 ~ 141
- difficulty level symbols where I use concat() on *script.js LINE 86.
- timer (I have never use before). Google.
  *script.js LINE 329 ~ 345.
- sound (I have never use before). Getting some tips from our standup group.
  *script.js LINE 43 ~ 62.
- addEventListener (throughout the script.). A lot of them.

For each, please include code examples.

Code snippet up to 20 lines.
Code design documents or architecture drawings / diagrams.

WDI Unit 1 Post Mortem
What habits did I use during this unit that helped me?
- Checking the console and console.log before making more code to ensure it is running. Writing bit by bit to prevent too many errors. Trouble-shooting with the developer tools which I didn't really know how to use it before this even when I know it is there.
- break things apart and put it together. code from scratch.
- the css and flex box game.

What habits did I have during this unit that I can improve on?
- hard code, sublime short-cut and not knowing many operation of a macbook (have been using windows for 20 years).
- thinking too hard that it complicates what I need to do (worry I don't have enough time or I didn't do enough or falling behind and not getting any better).
- learning to learn on the spot (as I am used to learning on my own pace where I can pause when I have too much new information that sometimes, I am lost with live session.)
- Catching some technical terms that I have not encountered before.

How is the overall level of the course during this unit? (instruction, course materials, etc.)
- Understanding the code, what it does and how developers normally use it (thinking process which makes coding more efficient or having less error, habit to avoid like try not to commit -m "message", etc.). 
- The troubleshooting part with developer tools.
- All the labwork/assignment practices.
- Seeing others code.
