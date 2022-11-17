


var chapters = {};

chapters.ohno = {};
chapters.ohno.description = "Elise is approaching the school gates up ahead, gun in hand, if you could just reach her, and get it off her without hurting her and without anyone seeing the gun, if you could just show her the photograph, she might change her mind. You're clutching the knife inside your pocket. Seb sees you, he grabs your arm and asks you whats going on. Should you warn him? What will you do? Shes getting away!...Type a word below...[OPTIONS LIMITED]";
chapters.ohno.choices = [];
chapters.ohno.choices.push({inputs:["tell", "warn", "say", "explain", "help", "situation"], chapter:"telltale"});
chapters.ohno.choices.push({inputs:["run", "chase", "catch", "creep", "follow"], chapter:"pushher"});
chapters.ohno.choices.push({inputs:["fight", "attack", "charge", "battle", "hit", "strike", "punch", "kick", "kill", "knife", "throw", "dash", "chuck", "dagger", "stab"], chapter:"throwknife"});
chapters.ohno.choices.push({inputs:["stab seb", "kill seb", "knife seb"]})
chapters.ohno.choices.push({inputs:["shout", "call", "scream"]})

chapters.telltale = {};
chapters.telltale.description = "'She's going to do it Seb', by the time you finish explaining she's already made it through the entrance. You run into the corridor with Seb, Elise is clutching the gun, holding it to a Tye's head, heart beating out of your chest you scream 'STOP', she hears you, she stops, but turns the gun towards you, she takes a shot, it misses. You're screaming at her for her to drop the gun, but she's just standing there. You hear sirens, her eyes widen, she drops the gun and runs up the stairs. You turn to Seb, a red blood stain soaking through his white cotton shirt, he drops to his knees beside you. Four Officers burst though the school doors, it's too late. They find her body by the bike sheds, she jumped out of a fourth story window.The impact of the fall broke most of the bones in her body, entangled. You lost the fight. You burn the photo, no one will ever know the truth.<b>START AGAIN</b>to re-write history...";
chapters.telltale.choices = [];
chapters.telltale.choices.push({inputs:["start", "again", "retry", "play", "try", "repeat"], chapter:"ohno"});

chapters.throwknife = {};
chapters.throwknife.description = "You hurl the knife in her direction. It spins forward, splitting the silence. In its descent, a fatal blow, back stabbed she drops to her knees, submissive to her desultory retribution, she bows to the concrete to meet her fate. You didn't save her, and lives will be destroyed. You had her, and now you've killed her. The police find you hiding at Seb's, you're a wreck. You're taken in for questioning. Manslaughter, 30 years, and no one to bail you out. Your body is found in your jail cell, you didn't make it more than a week.<br> Type <b>START AGAIN</b> to see your sister again";
chapters.throwknife.choices = [];
chapters.throwknife.choices.push({inputs:["start", "again", "retry", "play", "try", "repeat"], chapter:"ohno"});

chapters.pushher = {};
chapters.pushher.description = "Fear coursing through your veins, heart pounding. Echoic. You catchup with her, - you're screaming at her, but under the tension its muffled into silence. Her eyes are empty, apathy, you rush her hard into the concrete floor. No one notices as the gun skids underneath the lockers, you're ontop of her, bodies knotted, but she's wriggling free, her fingertips straying to reach the gun. Do you grab her left arm or her right?";
chapters.pushher.choices = [];
chapters.pushher.choices.push({inputs:["left"], chapter:"leftarm"});
chapters.pushher.choices.push({inputs:["right"], chapter:"rightarm"});
chapters.pushher.choices.push({inputs:["knife", "kill", "fight", "stabbing", "fight", "attack", "charge", "battle", "hit", "strike", "punch", "kick", "stab"], chapter:"killelise"});
chapters.pushher.choices.push({inputs:["photo", "picture", "photograph", "show"], chapter:"savedone"});

chapters.savedone = {};
chapters.savedone.description = "You half-loosten your grip, fumbling in your pocket for the picture, her fingertips meet the gun, eyes deadlocked on the trigger. But reaching the photograph out infront of her, you intercept her focus! Her expression changes, gun in her grasp, she turns to look at you, eyes flickering, animated, furrowed brows, taught lips, she blinks, soggy eyed, her body floppy and warm, she tears her arm from beneath the lockers to embrace you. Hair in mouth, snot, spit and tears of relief. Theres hope now, despite this shithole. And the bodies just walk around you, like a rock in a stream. To see how else it could have played out, type <b>START AGAIN</b>.";
chapters.savedone.choices = [];
chapters.savedone.choices.push({inputs:["start", "again", "retry", "play", "try", "repeat"], chapter:"ohno"});

chapters.leftarm = {};
chapters.leftarm.description = "You grapple her left arm, shes in your grasp but shes trying to snake out from beneath you. You can feel the knife pressing into your thigh. You can't to let her go, not now, her fingertips meet the gun, eyes deadlocked on the trigger. What will you do!????";
chapters.leftarm.choices = [];
chapters.leftarm.choices.push({inputs:["knife", "kill", "fight", "stab", "fight", "attack", "charge", "battle", "hit", "strike", "punch", "kick", "stab"], chapter:"killelise"});
chapters.leftarm.choices.push({inputs:["photo", "picture", "photograph", "show"], chapter:"savedone"});

chapters.rightarm = {};
chapters.rightarm.description = "You grapple her right arm as it reaches for the gun and hold her against you, shes in your grasp but she's trying to snake out from beneath you. You can't to let her go, not now. But she bites down hard on your hand, you loosten your grip, she breaks free of your embrace and runs down the corridor. What do you do?";
chapters.rightarm.choices = [];
chapters.rightarm.choices.push({inputs:["left"], chapter:"leftarm"});
chapters.rightarm.choices.push({inputs:["throw", "knife", "kill", "stab"], chapter:"throwknife"});
chapters.rightarm.choices.push({inputs:["run", "chase", "follow", "chasing", "running"], chapter:"deadend"});

chapters.deadend = {};
chapters.deadend.description = "Running, freefall against a notion of elusive progress, like bike in first gear. Overwhelmed but unwavered, you're legs swing beneath you. You take a left but its a dead end... all the doors are locked";
chapters.deadend.choices = [];
chapters.deadend.choices.push({inputs:["run", "back", "keep", "go", "running", "towards", "right"], chapter:"stairs"});
chapters.deadend.choices.push({inputs:["start", "again", "retry", "play", "try", "repeat"], chapter:"ohno"});

chapters.killelise = {};
chapters.killelise.description = "You half-loosen your grip, reaching into your pocket.<br> You draw your knife, but in your hesitation she jolts forward to grab the gun, you're pulling at her other arm, but she has a fistfull of your hair, in the struggle you cut yourself with the knife across your wrist. You feel like you're going to pass out, you've lost a lot of blood and your so..soo..tir.........e.....d.";
chapters.killelise.choices = [];
chapters.killelise.choices.push({inputs:["wake", "up", "come", "to", "regain"], chapter:"awake"});
chapters.killelise.choices.push({inputs:["start", "again", "retry", "play", "repeat"], chapter:"ohno"});

chapters.awake = {};
chapters.awake.description = "You regain consciousness, shaky. Blood-lost and everything is hazy, double vision. You stumble forward the corridor, can't focus... you're moving forward, clutching your bleeding wrist you bump and slide against the lockers...re-focus, focus, focus, in and out. its so quiet, where is everyone? You could look around? maybe you should call someone?.";
chapters.awake.choices = [];
chapters.awake.choices.push({inputs:["call", "phone", "ring", "calling", "phoning", "ringing"], chapter:"nocall"});
chapters.awake.choices.push({inputs:["search", "look", "find"], chapter:"deadend"});

chapters.nocall = {};
chapters.nocall.description = "You're delirious, struggling to work your phone using your injured hand.. tapping logs, dial, call, phone-to-ear-repeat, it rings..ring ring......ring ring......ring ring......ring ring............(you hear it ringing in the distance)....[CLICK]....<i>['Yoooooooooooooooooooo SUPP?']</i>.........<br>'SEB!!!! where are you????, I..I..I've hurt my self kinda bad..im justt.'..............-<br><i>['Seeeeeeeb's phone, don't leave a message, I won't get back to you.'][BEEP]</i>You realise that there's no one else to call. Life unforgiving. You're fucked, whats the point? Fuck the phone, you're the prank call hotline, dialtone dipshit, and you done fucked up. You hurl the phone down the corridor and kick a locker. Now what?? Fuck this? or keep looking?";
chapters.nocall.choices = [];
chapters.nocall.choices.push({inputs:["fuck this", "fuck"], chapter:"yousuck"});
chapters.nocall.choices.push({inputs:["search", "look", "find", "keep", "carry on"], chapter:"deadend"});

chapters.yousuck = {};
chapters.yousuck.description = "Fuck you, get out of here, and don't come back. You've lost everything, including this game.... type <b>START AGAIN</b>";
chapters.yousuck.choices = [];
chapters.yousuck.choices.push({inputs:["start", "again", "retry", "play", "repeat"], chapter:"ohno"});

chapters.stairs = {};
chapters.stairs.description = "You run back and clamber up the stairs instead. A door somewhere ahead screeches and murmurs, swinging on its hinges. You run towards the sound but it stops. You're on the 3rd floor of the 5 story school building, do you look around or carry on up the stairs? which floor?";
chapters.stairs.choices = [];
chapters.stairs.choices.push({inputs:["5th", "5", "top floor", "fith", "five", "go to the fifth floor", "go to the "], chapter:"topfloor"});
chapters.stairs.choices.push({inputs:["4th", "4", "next floor", "next", "carry", "continue", "up"], chapter:"dendtwo"});
chapters.stairs.choices.push({inputs:["look", "search", "around"], chapter:"dendtwo"});

chapters.dendtwo = {};
chapters.dendtwo.description = "The door to this floor is locked";
chapters.dendtwo.choices = [];
chapters.dendtwo.choices.push({inputs:["5th", "5", "top floor", "top floor", "bypass", "fith", "five"], chapter:"topfloor"});
chapters.dendtwo.choices.push({inputs:["4th", "4", "fourth", "next floor", "continue", "keep", "up", "run"], chapter:"fourthFloor"});
chapters.dendtwo.choices.push({inputs:["fuck this", "fuck"], chapter:"yousuck"});
chapters.dendtwo.choices.push({inputs:["down", "back", "second", "first", "2nd", "1st", "ground", "lower"], chapter:"fall"});

chapters.fourthFloor = {};
chapters.fourthFloor.description = "Panting, you reach the 4th floor, but all the doors here are locked, that sound came from somewhere else.";
chapters.fourthFloor.choices = [];
chapters.fourthFloor.choices.push({inputs:["5th", "5", "top floor", "next floor", "continue"], chapter:"topfloor"});
chapters.fourthFloor.choices.push({inputs:["fuck this", "fuck"], chapter:"yousuck"});
chapters.fourthFloor.choices.push({inputs:["down", "back", "first", "2nd", "1st", "ground", "lower" ], chapter:"fall"});

chapters.topfloor = {};
chapters.topfloor.description = "You tread carefully now, less faded, you're thinking more clearly. You see a shadow move along a wall, you run towards it, she's heard you now and she's running too. You catch gimps of her sneakers slip around a corner, a door slams shut. You hurry to it, she's locked herself in the room. She stares blankly at you through the glass, you're pulling at the handle but its no use... now what?";
chapters.topfloor.choices = [];
chapters.topfloor.choices.push({inputs:["smash", "break"], chapter:"doorbreak"});
chapters.topfloor.choices.push({inputs:["photograph", "picture", "photo"], chapter:"photodoor"});

chapters.doorbreak = {};
chapters.doorbreak.description = "You're kicking and punching at the glass door, the mesh between the glass shreds your knuckles..you can't see her anymore...you keep punching till you can reach around to grab the door handle, you twist your arm through and open the door from the inside. The room is empty and the blinds are flapping against the window frame....It's too late. They find her body by the bike sheds. The impact of the fall broke most of the bones in her body, entangled. You lost the fight. You burn the photo, no one will ever know the truth.";
chapters.doorbreak.choices = [];
chapters.doorbreak.choices.push({inputs:["start", "again", "retry", "play", "repeat"], chapter:"ohno"});

chapters.photodoor = {};
chapters.photodoor.description = "You rummage in your pocket for the photograph and hold it up to the glass of the door, as you pound it with your other hand. Her expression changes, eyes flickering, animated, furrowed brows, taught lips, she blinks, and walks toward the door. Soggy eyed, she puts a hand up against the glass to meet yours, and leans her head into get the closest look, and her warm breath clouds the glass, and she wipes it and takes another look. The door handle rattles, it swings open, slamming against the wall and her body hits against yours floppy and warm, she embraces you. Hair in mouth, snot, spit and tears of relief. Theres hope now. To see how else it could have played out, type <b>START AGAIN</b>.";
chapters.photodoor.choices = [];
chapters.photodoor.choices.push({inputs:["start", "again", "retry", "play", "repeat"], chapter:"ohno"});

chapters.fall = {};
chapters.fall.description = "You're erratic, irrational, in your panicked state you run back down the stairs, but you slip. You tumble down the stairs..................................................................you reach for a fire extinguisher as you hurtle down, bones on concrete. Choke on your apples Newton, this cylindrical over-sized tampon of red steel will reach the ground before you do, and as it pelts towards its destination, it smacks you with all gravity's force in the back of head, knocking you unconscious. You go into a coma...................................................................................................................................................................But you never wake up.";
chapters.fall.choices = [];
chapters.fall.choices.push({inputs:["start", "again", "retry", "play", "repeat"], chapter:"ohno"});


var messageNum = 0;
var currentChapter;


function showChapter(chapterName) {
	$("body").animate({ scrollBottom: 120 }, "slow");
	currentChapter = chapters[chapterName];
	var divString = "<div class='message' id='message" + messageNum + "'>" + currentChapter.description +"</div>";
    $('#story').append(divString);
    $('#message' + messageNum).hide().show(6000);
    $('#message' + messageNum).scrambledWriter();
	messageNum++;
}



$(document).ready(function(){
	showChapter("ohno");
	
	$(function()
    {
		var  textBox = $('#command');
		var code = null;
		textBox.keypress(function(e)
		{
			code = (e.keyCode ? e.keyCode : e.which);
			if (code == 13) {
				//alert(this.value);
				tryCommand(this.value);
				e.preventDefault();
			}
		});
    });
});

function tryCommand(command) {
	command = command.toLowerCase();
	for (var i = 0; i < currentChapter.choices.length; i++)
	{
		for (var j = 0; j < currentChapter.choices[i].inputs.length; j++)
		{
			if (command.indexOf(currentChapter.choices[i].inputs[j]) > -1)
			{
				showChapter(currentChapter.choices[i].chapter);
				
				$('#command').val("");
				
				return;
			}
		}
	}
	
	var errorMessages = [];
	errorMessages.push("I do not understand you?");
	errorMessages.push("Please speak so that I understand.");
	errorMessages.push("I haven't been programmed to understand that");
	errorMessages.push("You can't do that.");
	errorMessages.push("That is stupid. Try something else.");
	
	var errorMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
	
	var divString = "<div class='message' id='message" + messageNum + "'>" + errorMessage +"</div>";
    $('#story').append(divString);
    $('#message' + messageNum).hide().show(600);
	messageNum++;
	
	$('#command').val("");
	
	//alert($('#command'));
	//alert(this);
}
