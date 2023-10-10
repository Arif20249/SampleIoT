import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js/auto";
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { PanelService } from 'src/app/services/panel/panel.service';





@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.page.html',
  styleUrls: ['./panel-control.page.scss'],
})
export class PanelControlPage implements AfterViewInit, OnInit {

  @ViewChild("persentaseKalibrasiCanvas") persentaseKalibrasiCanvas: any;

  allpersentaseKalibrasiChartSub : Subscription = new Subscription;
  allCompositionChart : any[] = []
  allDataPanel : any[] = [];
  allDataPanelSub : Subscription = new Subscription

  dataPercentage: any[] = []

  token : any;
  constructor(
    public global : GlobalService,
    private PanelService: PanelService,
    private authServices : AuthService,
  ) { 

  }

  ngOnInit() {
    this.allDataPanelSub = this.PanelService.allDataPanel.subscribe(data => 
      {
        console.log("data",this.allDataPanel)
      if (data instanceof Object){
        this.allDataPanel = data;
        // console.log("data",this.allDataPanel)
      } else {
        this.allDataPanel = this.allDataPanel.concat(data);
      }
    })

    this.getAllData()
  }
  

  doughnutChart: any;

  ngAfterViewInit() {
    this.ComposisiChartMethod();
  }

  ComposisiChartMethod() {
  //   let composition_area : any[] = []
  //   let composition_label : any[] = []
  //   console.log('data', this.doughnutChart)

  //   this.allCompositionChart.forEach(data => {
  //     composition_area.push(data.area)
  //     composition_label.push(data.category)
  //   })
  //   if(!this.doughnutChart){
  //     this.doughnutChart = new Chart(this.persentaseKalibrasiCanvas.nativeElement, {
  //       type: 'line',
  //       data: {
          
  //         datasets: [{
  //           label: '',
  //           data: [65,70,100,10,50],
  //           backgroundColor: [
  //             'rgba(255, 159, 64, 0.2)',
  //             'rgba(255, 99, 132, 0.2)',
  //             'rgba(54, 162, 235, 0.2)',
  //             'rgba(255, 206, 86, 0.2)',
  //             'rgba(75, 192, 192, 0.2)'
  //           ],
  //           hoverBackgroundColor: [
  //             '#FFCE56',
  //             '#FF6384',
  //             '#36A2EB',
  //             '#FFCE56',
  //             '#FF6384'
  //           ]
  //         }]
  //       }, 
  //       options: {
  //         scales: {
  //           x: {
              
  //           }
  //       }
  //       },
  //     });
  //   } 
  // }
  }
  async getAllData (){
    // this.isLoading = true;
    // this.global.showLoader();
    setTimeout(async() => {
      await this.PanelService.getDataPanel(this.token);
      this.global.hideLoader();
    }, 1000);
  }
}
