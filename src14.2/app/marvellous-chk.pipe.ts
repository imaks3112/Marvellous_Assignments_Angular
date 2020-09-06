import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: any, ...args:string[]): any 
  {
    let result = value;

    if(args[0] == "Prime")
    {
      let x = 2;
      for( x = 2; x < result; x++)
      {
        if(value % x === 0)
        {
          result += "It is Prime number.";
        }
        else
        {
          result += "It is Not Prime number.";
        }
      }
    }

    if(args[1] == "Perfect")
    {
       // Logic to check whether value is Perfect or not.
       for(let i=1;i<=result/2;i++)
       {
           if(result%i === 0)
            {
              result += i;
            }    
       }
       result += "It is Perfect number.";
    }

    if(args[2] == "Even")
    {
        // Logic to check whether value is Even or not.
        if(value % 2 == 0)
        {
          result += "It is Even.";
        }
    }

    if(args[3] == "Odd")
    {
        // Logic to check whether value is Odd or not.
        if(value % 2 != 0)
        {
          result +=  "It is Odd number.";
        }
    }
    return result;
  } 
}
