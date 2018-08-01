function Arrays_sum(array1, array2) 
{
  let array3 = [];
  let ctr = 0;
  let x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    array3.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      array3.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      array3.push(array1[x]);
    }
  }
  return array3;
}

console.log(Arrays_sum([5,8,0,2,3], [0,8,6,5,4]));
