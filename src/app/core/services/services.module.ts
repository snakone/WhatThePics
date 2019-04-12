import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService,
         PostService,
         LoginService,
         UserService,
         CameraService,
         UploadService} from './services.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HttpService,
    PostService,
    LoginService,
    UserService,
    CameraService,
    UploadService
  ]
})

export class ServicesModule { }
