// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.

//two pointers

//time O(n) space O(1)

function LongPressed(name, typed) {
  let typedpointer = 0;
  let namepointer = 0;
  if (name.length > typed.length) {
    return false;
  } else {
    while (typedpointer < typed.length) {
      if (name[namepointer] === typed[typedpointer]) {
        namepointer++;
        typedpointer++;
      }
      else if(name[namepointer-1] === typed[typedpointer]) {
        typedpointer++;
      }
      else{
        return false;
      }
  }
  }

  return namepointer === name.length;
}

console.log(LongPressed("alex", "aaleexa")); // true)
