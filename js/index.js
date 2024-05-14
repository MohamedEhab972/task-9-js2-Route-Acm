function reandomNumber() {
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    ranNums = [],
    i = nums.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
  }
  return ranNums;
}
var x = reandomNumber();

function newQuote() {
  switch (x[0]) {
    case 1:
      document.getElementById("demo").innerHTML =
        "“Without music, life would be a mistake.”";
      document.getElementById("demo1").innerHTML =
        "― Friedrich Nietzsche, Twilight of the Idols";
      x.splice(0, 1);
      break;
    case 2:
      document.getElementById("demo").innerHTML =
        "“I am so clever that sometimes I don't understand a single word of what I am saying.”";
      document.getElementById("demo1").innerHTML =
        "― Oscar Wilde, The Happy Prince and Other Stories";
      x.splice(0, 1);
      break;
    case 3:
      document.getElementById("demo").innerHTML =
        "“In three words I can sum up everything I've learned about life: it goes on.”";
      document.getElementById("demo1").innerHTML = "― Robert Frost";
      x.splice(0, 1);
      break;
    case 4:
      document.getElementById("demo").innerHTML =
        "“Be the change that you wish to see in the world.”";
      document.getElementById("demo1").innerHTML = "― Mahatma Gandhi";
      x.splice(0, 1);
      break;
    case 5:
      document.getElementById("demo").innerHTML =
        "“You only live once, but if you do it right, once is enough.”";
      document.getElementById("demo1").innerHTML = "― Mae West";
      x.splice(0, 1);
      break;
    case 6:
      document.getElementById("demo").innerHTML =
        "“A room without books is like a body without a soul.”";
      document.getElementById("demo1").innerHTML = "― Marcus Tullius Cicero";
      x.splice(0, 1);
      break;
    case 7:
      document.getElementById("demo").innerHTML =
        "“So many books, so little time.”";
      document.getElementById("demo1").innerHTML = "― Frank Zappa";
      x.splice(0, 1);
      break;
    case 8:
      document.getElementById("demo").innerHTML =
        "“It does not do to dwell on dreams and forget to live.”";
      document.getElementById("demo1").innerHTML =
        "― J.K. Rowling, Harry Potter and the Sorcerer's Stone";
      x.splice(0, 1);
      break;
    case 9:
      document.getElementById("demo").innerHTML =
        "“Good friends, good books, and a sleepy conscience: this is the ideal life.”";
      document.getElementById("demo1").innerHTML = "― Mark Twain";
      x.splice(0, 1);
      break;
    case 10:
      document.getElementById("demo").innerHTML =
        "“I have not failed. I've just found 10,000 ways that won't work.”";
      document.getElementById("demo1").innerHTML = "― Thomas A. Edison";
      x.splice(0, 1);
      break;
    case 11:
      document.getElementById("demo").innerHTML =
        "“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”";
      document.getElementById("demo1").innerHTML = "― Dr. Seuss";
      x.splice(0, 1);
      break;
    case 12:
      document.getElementById("demo").innerHTML =
        "“The fool doth think he is wise, but the wise man knows himself to be a fool.”";
      document.getElementById("demo1").innerHTML =
        "― William Shakespeare, As You Like It";
      x.splice(0, 1);
      break;
    case 13:
      document.getElementById("demo").innerHTML =
        "“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”";
      document.getElementById("demo1").innerHTML =
        "― Maurice Switzer, Mrs. Goose, Her Book";
      x.splice(0, 1);
      break;
  }
  if (x.length - 1 == 0) {
    x = reandomNumber();
  }
}
