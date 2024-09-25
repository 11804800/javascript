//removing duplicate adjacents in string

//abbaca answer ca

var removeDuplicates = function (s) {
    let stack = [];
    // for (let c of s) {
    //     if (stack.length > 0 && stack[stack.length - 1] === c) {
    //         stack.pop();
    //     } else {
    //         stack.push(c);
    //     }
    // }
    // return stack.join("");

    for(let i=0;i<s.length;i++)
    {
        if(stack.length>0 && stack[stack.length-1]===s[i])
        {
            stack.pop();
        }
        else
        {
            stack.push(s[i]);
        }
    }

    return stack;
};

console.log(removeDuplicates("abbaca"));