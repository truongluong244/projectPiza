import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  profileForm:any=  FormGroup;

  constructor(private router: Router , private param:ActivatedRoute,private service:OrderDetailsService, private fb:FormBuilder,) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
   }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.foodDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');

    }

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value

    // if(this.profileForm.value.name === '' ||
    //   this.profileForm.value.phone === ''||
    //   this.profileForm.value.address === ''
    //   ){
    //   alert("Vui lòng nhập đủ thông tin");

    // }
    // else{
    //   alert("Đã mua thành công");
    //   this.router.navigateByUrl('/');
    // }

  }

}
