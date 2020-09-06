import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public Prime(n:number)
  {
    console.log(n);

    if (n===1)
    {
      console.log("Not prime");
    }
    else if(n === 2)
    {
      console.log("Prime");
    }else
    {
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0)
        {
          console.log("Not Prime");
        }
      }  
      console.log("Prime");
    }
  }
  
  
}

 

  /*  public chkPrime()
    {  
      this.ino = 4;
      var i : number;
      var j : number;
      var notPrime : boolean;

      notPrime = false;

      for (i = 1; i <= this.ino; i++) {

        for(j = 2; j<= i; j++) {

        if (i%j == 0 && j!==i) {
          //notPrime = true;
          console.log("Prime");
        }
        else
        {
          console.log("Not prime");
        }
      }
    }
  }*/