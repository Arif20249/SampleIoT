import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token : any; 
  constructor(
    private storage: StorageService
  ) { }

  async logout(){
    return await this.storage.removeStorage('uid');
  }
}
