var array = [
  {
    quote: "“Without music, life would be a mistake.”",
    ath: "― Friedrich Nietzsche, Twilight of the Idols",
  },
  {
    quote:
      "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    ath: "― Oscar Wilde, The Happy Prince and Other Stories",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    ath: "― Robert Frost",
  },
  {
    quote:
      "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
    ath: "― William Shakespeare, As You Like It",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    ath: "― Mahatma Gandhi",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    ath: "― Marcus Tullius Cicero",
  },
  {
    quote: "“So many books, so little time.”",
    ath: "― Frank Zappa",
  },
  {
    quote: "“It does not do to well on dreams and forget to live.”",
    ath: "― J.K. Rowling, Harry Potter and the Sorcerer's Stone",
  },
  {
    quote:
      "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    ath: "― Mark Twain",
  },
  {
    quote: "“I have not failed. I've just found 10,000 ways that won't work.”",
    ath: "― Thomas A. Edison",
  },
  {
    quote: "“The only way out of the labyrinth of suffering is to forgive.”",
    ath: "― John Green, Looking for Alaska",
  },
  {
    quote: "“Go to heaven for the climate and hell for the company.”",
    ath: "― Benjamin Franklin Wade",
  },
  {
    quote:
      "“The reason I talk to myself is because I’m the only one whose answers I accept.”",
    ath: "― George Carlin",
  },
  {
    quote: "“He's like a drug for you, Bella.”",
    ath: "― Stephenie Meyer, Eclipse",
  },
  {
    quote: "“I am free of all prejudice. I hate everyone equally. ”",
    ath: "― W.C. Fields",
  },
];

var y = null;
function newQuote() {
  var x = Math.floor(Math.random() * array.length);
  while (x == y) {
    x = Math.floor(Math.random() * array.length);
  }
  document.getElementById("demo1").innerHTML = array[x].ath;
  document.getElementById("demo").innerHTML = array[x].quote;
  y = x;
}
