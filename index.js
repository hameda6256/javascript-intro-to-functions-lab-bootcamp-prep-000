function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}
function sayHiToGrandma (string){
  var cantAnswer = "I cant hear you!";
  var yesAnswer = "Yes INDEED!";
  var noAnswer = "I love you, too.";
  if (string.toLowerCase(string) === string)
    return cantAnswer;
}
else if (string.toUpperCase(string) === string){
    return yesAnswer;
}
else if ("I love you, Grandma." === string)
    return noAnswer