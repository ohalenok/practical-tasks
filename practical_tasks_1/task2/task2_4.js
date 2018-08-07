function integer(a,b) { 
    if(a>=0 && b>=0)
    {
        if(a!=b)
        {
            return("The largest number is " + Math.max(a,b));
        }
    }   
}
console.log(integer(5,8));
