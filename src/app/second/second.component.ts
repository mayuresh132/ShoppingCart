import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

@Output() out1:EventEmitter<string>;
@Output() out2:EventEmitter<string>;
@Output() out3:EventEmitter<string>;
@Output() out4:EventEmitter<string>;
@Output() out5:EventEmitter<string>;
@Output() out6:EventEmitter<string>;
@Output() out7:EventEmitter<string>;
@Output() out8:EventEmitter<string>;
@Output() out9:EventEmitter<string>;

  constructor() { 
this.out1=new EventEmitter<string>();
this.out2=new EventEmitter<string>();
this.out3=new EventEmitter<string>();
this.out4=new EventEmitter<string>();
this.out5=new EventEmitter<string>();
this.out6=new EventEmitter<string>();
this.out7=new EventEmitter<string>();
this.out8=new EventEmitter<string>();
this.out9=new EventEmitter<string>();
  }

  ngOnInit() {
  }


  
abc(numb:number){

	if (numb==1){

	this.out1.emit("../../assets/mobile/mobile1.jpg")
	this.out2.emit("../../assets/mobile/mobile2.jpg")
	this.out3.emit("../../assets/mobile/mobile3.jpg")
	this.out4.emit("../../assets/mobile/mobile4.jpg")
	this.out5.emit("../../assets/mobile/mobile5.jpg")
	this.out6.emit("../../assets/mobile/mobile6.jpg")
	this.out7.emit("../../assets/mobile/mobile7.jpg")
	this.out8.emit("../../assets/mobile/mobile8.jpg")
	this.out9.emit("../../assets/mobile/mobile9.jpg")

	}
	if(numb==2){
   this.out1.emit("../../assets/power/power1.jpg")
	this.out2.emit("../../assets/power/power2.jpg")
	this.out3.emit("../../assets/power/power3.jpg")
	this.out4.emit("../../assets/power/power4.jpg")
	this.out5.emit("../../assets/power/power5.jpg")
	this.out6.emit("../../assets/power/power6.jpg")
	this.out7.emit("../../assets/power/power7.jpg")
	this.out8.emit("../../assets/power/power8.jpg")
	this.out9.emit("../../assets/power/power9.jpg")
	}
	if(numb==3){
this.out1.emit("../../assets/shirt/shirt1.jpg")
	this.out2.emit("../../assets/shirt/shirt2.jpg")
	this.out3.emit("../../assets/shirt/shirt3.jpg")
	this.out4.emit("../../assets/shirt/shirt4.jpg")
	this.out5.emit("../../assets/shirt/shirt5.jpg")
	this.out6.emit("../../assets/shirt/shirt6.jpg")
	this.out7.emit("../../assets/shirt/shirt7.jpg")
	this.out8.emit("../../assets/shirt/shirt8.jpg")
	this.out9.emit("../../assets/shirt/shirt9.jpg")
	}
	if(numb==4){
 this.out1.emit("../../assets/saree/saree1.jpg")
	this.out2.emit("../../assets/saree/saree2.jpg")
	this.out3.emit("../../assets/saree/saree3.jpg")
	this.out4.emit("../../assets/saree/saree4.jpg")
	this.out5.emit("../../assets/saree/saree5.jpg")
	this.out6.emit("../../assets/saree/saree6.jpg")
	this.out7.emit("../../assets/saree/saree7.jpg")
	this.out8.emit("../../assets/saree/saree8.jpg")
	this.out9.emit("../../assets/saree/saree9.jpg")
	}
	if(numb==5){
    this.out1.emit("../../assets/book/book1.jpg")
	this.out2.emit("../../assets/book/book2.jpg")
	this.out3.emit("../../assets/book/book3.jpg")
	this.out4.emit("../../assets/book/book4.jpg")
	this.out5.emit("../../assets/book/book5.jpg")
	this.out6.emit("../../assets/book/book6.jpg")
	this.out7.emit("../../assets/book/book7.jpg")
	this.out8.emit("../../assets/book/book8.jpg")
	this.out9.emit("../../assets/book/book9.jpg")
	}

}
}
