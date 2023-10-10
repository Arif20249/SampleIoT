import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatabaseService } from '../database.service';


@Injectable({
  providedIn: 'root'
})
export class PanelService {

  private _allDataPanel = new BehaviorSubject<any>(null)

  constructor( 
    private DB : DatabaseService  ) { }


    get allDataPanel(){
      return this._allDataPanel.asObservable();
    }
  
    async getDataPanel(token : string) {
      try {
        let getDataPanel : any = this.DB.getDataPanel(token).then(async (params : any) =>{
          const data = JSON.parse(params)
          await this._allDataPanel.next(data.data)
        } )
      } catch (error){
        console.log(error)
        throw(error)
      }
    }

 
}
