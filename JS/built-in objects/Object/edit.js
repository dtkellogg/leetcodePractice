// ---------- Removing a property ---------- //

// ----- Option 1 ----- //
let myObject1 = {
  "ircEvent": "PRIVMSG",
  "method": "newURI",
  "regex": "^http://.*"
};

delete myObject1.regex;

console.log(myObject1);

// ----- Option 2 ----- //
let myObject2 = {
  "ircEvent": "PRIVMSG",
  "method": "newURI",
  "regex": "^http://.*"
};

delete myObject2['regex'];

console.log(myObject2);
