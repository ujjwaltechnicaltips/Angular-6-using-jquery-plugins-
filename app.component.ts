import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 
export class AppComponent  implements OnInit{

  constructor () {}

  ngOnInit()
  {

    $(document).ready(function(){
      $("a").css({"color":"red","font-size":"45px","font-style":"italic"});
      
    });
  
  }


}