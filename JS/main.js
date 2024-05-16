var one = `“Be yourself; everyone else is already taken.”<br><br>
― Oscar Wilde`
var two = `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”<br><br>
― Bernard M. Baruch`
var three = `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<br><br>
― Albert Einstein`
var four = `“You only live once, but if you do it right, once is enough.”<br><br>
― Mae West`
var five = `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”<br><br>
― Maya Angelou`
var six = `“Live as if you were to die tomorrow. Learn as if you were to live forever.”<br><br>
― Mahatma Gandhi`
var seven = `
“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”<br><br>
― Marilyn Monroe`
var eight = `“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”<br><br>
― Albert Einstein`
var nine = `“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”<br><br>
― Bill Keane`
var ten = `“For every minute you are angry you lose sixty seconds of happiness.”<br><br>
― Ralph Waldo Emerson`

var quotes = [one,two,three,four,five,six,seven,eight,nine,ten];

console.log(quotes);


function generateQuote(){
  document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random()*10)];

}