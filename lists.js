var namesList = ['the Cowardly Lion','Dr. Seuss','Ebenezer Scrooge','Bugs Bunny','James Bond','Amelia Earhart','Andy Warhol','Jimmy Stewart','Dr. Emmett Brown','John Hancock','Dennis the Menace','Dumbledore','Eleanor Roosevelt','Sirius Black','Sean Connery','Dracula','Shakespeare','Bruce Willis','Babe Ruth','James Earl Jones','Buzz Lightyear','Spider Man','Albert Einstein','Inigo Montoya','Denzel Washington','Jim Henson','Barbie','James Madison','Sherlock Holmes','Fozzy','Brad Pitt','Buddy Holly','Elizabeth Bennett','Scooby Doo','E.T.','Jackson Pollock','Indiana Jones','Shel Silverstein','Henry Ford','Capn Crunch','Dora the Explorer','Abraham Lincoln','Elvis Presley','Stephanie Meyer','Lance Armstrong','Leonardo Da Vinci','C-3P0','Celine Dion','Davy Crockett','Mahatma Gandhi','Justin Beiber','Anakin Skywalker','Eli Whitney','Audrey Hepburn','Isaac Newton','Robin Hood','Rocky','Frankenstein','Beethoven','Pocahontas','Kevin Bacon','John Williams','Louis Armstrong','Hannah Montana','David Beckham','Helen Keller','Lucille Ball','Sacajawea','Benjamin Franklin','Captain Kirk','Billy the Kid','Franklin D. Roosevelt','Mario','Han Solo','Mark Twain','C. S. Lewis','Salvador Dali','Captain Hook','Rapunzel','Charles Dickens','Luke Skywalker','Harry Houdini','Santa Claus','Harrison Ford','Batman','George Lucas','Darth Vader','Mufasa','Oprah Winfrey','Garfield','Genghis Khan','Gilligan','Michael Phelps','Michelangelo','Charles Darwin','Betsy Ross','Bill Gates','Walt Disney','Harry Potter','Marty McFly','Hamlet','Mother Teresa','Cleopatra','Mr. Darcy','Clark Kent','Grace Kelly','Thomas Edison','Tony Hawk','Neil Armstrong','Bill Cosby','George Washington','Cinderella','Willy Wonka','Mary Poppins','Peter Pan','Frodo','Neil Diamond','George of the Jungle','Mr. Rogers','Pablo Piccaso','Voldermort','Winnie the Pooh','Christopher Columbus','Aristotle','Amanda Bynes','Will Smith','Tom Hanks','Grace Kelly','Babe Ruth','Walt Disney','Carrie Fisher','Galileo','Mr. Rogers','Leonardo DiCaprio','Abraham Lincoln','Andy Griffith','Mohammad Ali','Oscar Wilde','Paul McCartney','Michael Phelps','Plato','Lewis and Clark','Johnny Depp','Buddy Holly','Leonardo Da Vinci','Walter Cronkite','Lord Byron','Beethoven','Audrey Hepburn','King George','Tiger Woods','Benjamin Franklin','Mother Teresa','Michael J. Fox','Mandy Moore','Bill Gates','Albert Einstein','Victor Hugo','Susan B. Anthony','Justin Beiber','Archimedes','Martin Sheen','the Wright Brothers','Davy Crockett','Bill Clinton','Socrates','Ulysses S. Grant','Alex Rodriguez','Bruce Willis','John Williams','the Beatles','Eddie Murphy','Shia LaBeouf','Neil Diamond','Norman Rockwell','Steve Jobs','Claude Monet','Theodore Roosevelt','Harrison Ford','Michelangelo','Shaquille ONeal','Thomas Paine','Stephanie Meyer','Steve Martin','Shakespeare','Samuel Morse','Rembrandt','George Lucas','Christopher Columbus','Buzz Aldrin','Lewis Carrol','Brad Pitt','Mark Twain','Barack Obama','Dick Van Dyke','Jimmy Stewart','David Beckham','Georgia OKeeffe','C. S. Lewis','Regis Philbin','Rosa Parks','Reese Witherspoon','Dakota Fanning','Cleopatra','J.K. Rowling','Andy Warhol','Helen Keller','Elton John','Robin Williams','Kevin Bacon','Raphael','Jack Black','Christian Bale','Charles Dickens','Danny Glover','Patrick Henry','Henry Ford','Charles Darwin','Denzel Washington','Queen Latifah','Dr. Seuss','Pocahontas','Ronald Regan','Sacajawea','Isaac Newton','Michael Jordan','James Taylor','Salvador Dali','Genghis Khan','Charles Dickens','Pelé','Elijah Wood','Neil Armstrong','Eleanor Roosevelt','Michael Jackson','Tony Hawk','Anne Frank','Copernicus','James Madison','Eli Whitney','Harry Houdini','Ernest Hemingway','Frank Lloyd Wright'];

document.getElementById("pass").addEventListener ("click", newWord, false);
document.getElementById("success").addEventListener ("click", newWord, false);
document.getElementById("startbutton").addEventListener ("click", init, false);

var globalTimer;

function init()
{
 document.getElementById("timer").innerHTML = 60;
 newWord();
 clearInterval(globalTimer);
  var decre = function() {
    var timer = document.getElementById("timer");
    var number = timer.innerHTML;
    number--;
    document.getElementById("timer").innerHTML = number;
    if(number==0)
    {
      alert("Game Over!")
    }
}

var curTimer = setInterval(decre, 1000);
console.log(curTimer);
globalTimer=curTimer;
}
function newWord()
{

  var list = namesList;
  var state = this.id;
  var curItem = list[Math.floor(Math.random()*list.length)];

  document.getElementById("curItem").innerHTML = curItem;
  if(state=="pass")
  {
    var score = document.getElementById("passcount");
    var number = score.innerHTML;
    number++;
    document.getElementById("passcount").innerHTML = number;
  }
  else if (state=="success")
  {

    var score = document.getElementById("successcount");
    var number = score.innerHTML;
    number++;
    document.getElementById("successcount").innerHTML = number;

  }

}
