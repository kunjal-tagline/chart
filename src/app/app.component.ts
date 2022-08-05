import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import MatchScore from './utility/dataset.json';
Chart.register(...registerables);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'chart';
  lables: any = [];
  dataArray: any = [];

  ngAfterViewInit() {
    let ctx: any = document.getElementById('myChart');

    //For hide lines only display points
    //Chart.defaults.datasets.line.showLine = false;

    MatchScore.MatchScore.map((element: any) => {
      this.lables.push(element.name);
      this.dataArray.push(element.score);
    });

    //Line chart data
    var linedata = {
      labels: this.lables,
      datasets: [
        {
          label: 'TeamA',
          data: this.dataArray,
          backgroundColor: ['blue', 'green', 'yellow', 'pink'],
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
          spanGaps: true,
        },
      ],
    };

    //Line chart options
    var lineoptions = {
      responsive: true,
      title: {
        display: true,
        position: 'top',
        text: 'Line Graph',
        fontSize: 50,
        fontColor: '#111',
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#333',
          fontSize: 16,
        },
      },
      layout: {
        padding: {
          left: 50,
          top: 50,
        },
      },
      elements: {
        point: {
          radius: 0, // default to disabled in all datasets
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    };

    //Create line chart
    var chart = new Chart(ctx, {
      type: 'line',
      data: linedata,
      options: lineoptions,
    });

    let radar: any = document.getElementById('radarChart');
    //Radar data
    const radarData = {
      labels: [
        'Adminstration',
        'Information',
        'Marketing',
        'Supports',
        'Sales',
        'Devlopment',
        'Extra',
      ],
      datasets: [
        {
          label: 'Buget',
          data: [65, 39, 90, 81, 56, 55, 40],
          fill: true,
          borderColor: 'red',
        },
        {
          label: 'Spending',
          data: [28, 48, 80, 19, 96, 27, 15],
          fill: true,
          borderColor: 'gray',
        },
      ],
    };

    //Radar options
    var radarOptions = {
      elements: {
        line: {
          borderWidth: 2,
        },
      },
    };

    //Radar chart
    var radarchart = new Chart(radar, {
      type: 'radar',
      data: radarData,
      options: radarOptions,
    });
  }
}
