import React from 'react';
import '../styles/index.scss';
import { Bar } from 'react-chartjs-2';


function NoCharts(props) {
  return <h1>No charts</h1>;
}

function Charts(props) {
  const myCharts = props.myCharts;
  if (myCharts.length > 0) {

    const charts = myCharts.map(function(chart) {

                  return  <div className="row">
                         <div className="col-xl-7">
                           <div className="card">
                             <div className="card-header">
                               <i className="fa fa-align-justify"></i>
                               Bar Graph Data
                             </div>
                             <div className="card-block">
                               <div data-tip data-for='happyFace' className="chart-wrapper">
                               <Bar data={{
                                 labels: ['Data 1', 'Data 2'],
                                 datasets: [
                                   {
                                     backgroundColor: ['#E3E5F0','#D5D7D8'],
                                     borderColor: ['#8C94C4', '#53595F'],
                                     borderWidth: 5,
                                     data: [ chart.spend, chart.revenue ]
                                   }
                                 ]
                               }}
                               options={{
                                 tooltips: {
                                     enabled: false
                                       },
                                 legend: {
                                     display: false
                                       },
                                 maintainAspectRatio: false,
                                 scales: {
                                     yAxes: [{

                                       ticks: {
                                           callback: function(value) { return '$' + value; }
                                         },
                                         stacked:true,
                                          gridLines: {
                                           display:true,
                                            color:"rgba(255,99,132,0.2)"

                                       }
                                     }],
                                     xAxes:[{
                                        gridLines: {
                                          display:false
                                         }
                                     }]
                                 }
                               }}
                               />
                               </div>
                             </div>
                           </div>
                           </div>
                         </div>;
                        });
              return <div>{charts}</div>
                 }
            else {
              return <NoCharts />;
              }
            }


export default class App extends React.Component {

  render() {

      let myArr = [

      { spend: 1200,
        revenue: 1500 }

      ];

    return (
      <div>

        <Charts myCharts={myArr} />

        <div className="col-xl-5">
          <div className="row">
            <div className="col-xl-12">
            <div className="col-xl-12">
              <div className="social-box facebook topbox">
                <i className="fa card-font">Some Data <span className="fa-pie-chart"></span></i>
                <div className="chart-wrapper">
                  <canvas id="social-box-chart-1" height="90"></canvas>
                </div>
                <div className="vertical-align-roi">
                <div>
                <strong className="card-font">data</strong>
                </div>
                </div>
                    <br></br>
                    <span className="card-sublabel">data</span>

              </div>
            </div>

              <div className="col-xl-12">
                <div className="social-box facebook">
                  <i className="fa card-font">Some More Data <span className="fa-sitemap"></span></i>
                  <div className="chart-wrapper">
                    <canvas id="social-box-chart-1" height="90"></canvas>
                  </div>
                  <ul>
                    <li>
                      <strong>data</strong>
                      <span>data</span>
                    </li>
                    <li>
                      <strong>data</strong>
                      <span>data</span>
                    </li>
                    <li>
                      <strong>data</strong>
                      <span>data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    )
  }
}
