import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css']
})
export class ThirdCompComponent implements OnInit {
@Input()
imgUrl1:string;
@Input()
imgUrl2:string;
@Input()
imgUrl3:string;
@Input()
imgUrl4:string;
@Input()
imgUrl5:string;
@Input()
imgUrl6:string;
@Input()
imgUrl7:string;
@Input()
imgUrl8:string;
@Input()
imgUrl9:string;
  ngOnInit() {

  }
}
