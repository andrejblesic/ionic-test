import { Component, OnInit } from '@angular/core';
import { createChart } from 'lightweight-charts';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor() {}

  chartWidth: number;

  renderChart() {
    const chart = createChart(document.getElementById('test'), { width: this.chartWidth - 5, height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
        { time: '2019-04-11', value: 80.01 },
        { time: '2019-04-12', value: 96.63 },
        { time: '2019-04-13', value: 76.64 },
        { time: '2019-04-14', value: 81.89 },
        { time: '2019-04-15', value: 74.43 },
        { time: '2019-04-16', value: 80.01 },
        { time: '2019-04-17', value: 96.63 },
        { time: '2019-04-18', value: 76.64 },
        { time: '2019-04-19', value: 81.89 },
        { time: '2019-04-20', value: 74.43 },
    ]);
  }

  ngOnInit() {
    this.chartWidth = document.body.clientWidth;
    this.renderChart();
    window.addEventListener('resize', () => {
      document.getElementById('test').firstChild.remove();
      this.chartWidth = document.body.clientWidth;
      this.renderChart();
    });
  }

}
