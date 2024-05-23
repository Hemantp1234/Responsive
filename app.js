function ShowPrime(n)
{
    for( let i = 2; i < n ; i++) 
        {
            if(!IsPrime(i)) continue;

            console.log(i);
        }
}


function IsPrime(n)
{
    for(let i = 2 ; i < n ; i++)
        {
            if(n % i == 0) return false;

        }
        return true;
}


ShowPrime(10);