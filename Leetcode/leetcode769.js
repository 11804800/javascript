// Input: arr = [4,3,2,1,0]
// Output: 1
// Explanation:
// Splitting into two or more chunks will not return the required result.
// For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.

function MaxChunks(arr)
{
    let chunks=0;
    let max=0;
    
    for (let i=0; i<arr.length; i++)
    {
        max=Math.max(max,arr[i]);
        if(i===max)
        {
            chunks++;
        }
    }
    return chunks;
}

console.log(MaxChunks([1,0,2,3,4]));