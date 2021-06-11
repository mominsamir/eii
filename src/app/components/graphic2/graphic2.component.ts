import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { EmployemntData } from 'src/app/models/employement';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-graphic2',
  templateUrl: './graphic2.component.html',
  styleUrls: ['./graphic2.component.sass']
})
export class Graphic2Component implements OnInit {
  public result!: EmployemntData[];
  public loading: boolean = true;
  public options!: EChartsOption;

  constructor(private  service: DataService) {  }


  ngOnInit(): void {
    this.service.getGraphicData().subscribe((data: EmployemntData[]) => {
      this.result = data;
      this.updateOption();
      this.loading = false;
    });
  }
  updateOption(): void {

    this.options = {
      title: {
        text: 'US population, total employment and unemployment since 1940',
        left : 'center'
      },
      grid:{
        show: true,
        borderColor: '00000' 
      },
      tooltip: {
        order: 'seriesAsc',
        trigger: 'axis',      
        triggerOn: 'mousemove',
        showContent : true,
        formatter: function (params: any) {
          let rez = '';
          params.forEach((item: { color: any; seriesName: string; data: string; }) => {
              var xx = '<span style="display: inline-block;">' + item.seriesName + ': ' + item.data  + '</span><br>'
              rez += xx;
          });
          return '<div>'+rez+'</div>';
        },    
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding:5,   
        textStyle:{
          color: '#fff',
          fontSize:10
        },
        alwaysShowContent: true,
      },    
      legend  :{
        show: true,
        width:'100%',
        type:'plain',
        orient: "vertical",
        align: "right",
        left: "90%",
        top: "30%",  
        textStyle: {
          fontSize:'10px'
        },
        selectedMode:true
      },
      xAxis: {
        type: "category",
        name:'Year',
        nameLocation:'middle',
        splitLine: {
          show: false,
        },
        nameTextStyle :{
          lineHeight: 56
        },
        data : this.result.map(c=>c.year),
      },
      yAxis: {
        name: 'Unemployed Percent',
        nameLocation:'middle',
        nameGap: 40,      
        type: 'value',
        boundaryGap: [0, '100%'],
        nameTextStyle :{
          lineHeight: 56,
        },
        splitLine: {
          show: true
        },        
        min : 0,
        max : Math.round(Math.max.apply(Math, this.result.map(o=> o.population))/50000)*50000         
      },
      series: [{
        name: 'Population',
        type: 'line',
        showSymbol: false,
        data : this.result.map(c=>c.population),
        itemStyle: {
          color: "rgba(0, 0, 0, 1)"
        },
        markLine: {
          symbol:'none',
          data: [
              {type: 'average', name: 'avarage'}
          ],
          label:{
            position:'start',
            backgroundColor: 'rgba(0, 0, 0,1)',
            color: 'rgba(255, 255, 255, 1)',
            fontSize:10,
            padding:4
  
          }
        }
      },{
        name: 'Employed Total',
        type: 'line',
        showSymbol: false,
        data : this.result.map(c=>c.employed_total),
        itemStyle: {
          color: "rgba(255, 138, 14, 1)"
        }
      },
      {
        name: 'Unemployed',
        type: 'line',
        showSymbol: false,
        data : this.result.map(c=>c.unemployed),
        itemStyle: {
          color: "rgba(30, 94, 100, 1)"
        }
      }]
    };
  }  

}
