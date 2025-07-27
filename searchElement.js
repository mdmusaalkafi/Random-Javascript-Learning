function searchElement(n, arr)  
{
    for(i = 0; i <= arr.length; i++)
    {
        if(arr[i]==n)
        {
            return i;
        }
    }
}

let arr = [1, 2, 3, 4, 5];

n = 5;

indexNo = searchElement(n, arr);    

console.log(indexNo);