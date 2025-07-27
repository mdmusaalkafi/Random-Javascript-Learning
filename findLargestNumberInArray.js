function findLargestNumber(arr)
{
    largestNumber = arr[0];
    for(i = 0; i <= arr.length; i++)
    {
        if(arr[i] > largestNumber)
        {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}

arr = [389,98, 4454, 454, 43, 54, 999];

output = findLargestNumber(arr);

console.log(output);