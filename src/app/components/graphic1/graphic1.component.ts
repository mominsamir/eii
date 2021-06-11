import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { EmployemntData } from 'src/app/models/employement';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styleUrls: ['./graphic1.component.sass']
})
export class Graphic1Component implements OnInit {
  public result!: EmployemntData[];
  public loading: boolean = true;
  public options!: EChartsOption;

  constructor(private  service: DataService) { }

  ngOnInit(): void {
    this.service.getGraphicData().subscribe((data: EmployemntData[]) => {
      this.result = data;
      this.updateOption();
    });
    this.loading = false;
  }

  updateOption(): void {
    this.options = {
      title: {
        text: 'US unemployement rates  since 1940',
        left : 'center'
      },
      grid:{
        show: false
      },
      xAxis: {
        type: "category",
        name:'Year',
        nameLocation:'middle',
        splitLine: {
          show: true,
          interval:  (index:number, value: string) => parseInt(value) % 10 === 0 
        },
        nameTextStyle :{
          lineHeight: 56
        },
        data : this.result.map(c=>c.year),
        axisLabel: {
          interval: (index:number, value: string) => parseInt(value) % 10 === 0 
        }
      },
      yAxis: {
        name: 'Unemployed Percent',
        nameLocation:'middle',
        nameGap: 20,
        type: 'value',
        boundaryGap: [0, '100%'],
        nameTextStyle :{
          lineHeight: 56,
        },
        splitLine: {
          show: true
        },
        axisLabel: {
          showMinLabel: false
        },        
        min : 0,
        max : Math.round(Math.max.apply(Math, this.result.map(o=> o.unemployed_percent)))         
      },
      series: [{
        name: 'Year',
        type: 'line',
        showSymbol: false,
        data : this.result.map(c=>c.unemployed_percent),
        itemStyle: {
          color: "rgba(0, 0, 0, 1)"
        }
      }]
    };
  }


}
