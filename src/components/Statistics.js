/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import './Statistics.css'
import air_quality from "../data/air_quality.json";
import rainfall from "../data/rainfall.json";
import temperature from "../data/temperature.json";
import {useState, useEffect, useRef} from 'react'
import { Chart, registerables } from "chart.js";
import increase_icon from '../img/increase.png'
import decrease_icon from '../img/decrease.png'
Chart.register(...registerables);
let data_aq = air_quality.data;
let data_temp = temperature.data;
let data_rain = rainfall.data;

const getCity = (elem) => {
  switch (elem) {
    case 1:
      return "Delhi*";
    case 2:
      return "Mumbai";
    case 3:
      return "Ahmedabad";
    case 4:
      return "Jaipur";
  }
};
const getSubDivision = (elem) => {
  switch (elem) {
    case "Delhi*":
      return "Haryana Delhi & Chandigarh";
    case "Mumbai":
      return "Madhya Maharashtra";
    case "Ahmedabad":
      return "Gujarat Region";
    case "Jaipur":
      return "East Rajasthan";
  }
};

const getPollutant = (elem) => {
  switch (elem) {
    case 1:
      return "SO2";
    case 2:
      return "NO2";
    case 3:
      return "PM10";
    case 4:
      return "PM2.5";
  }
};






const Statistics = () => {
    const [AQI_avg, set_AQI_avg] = useState(null);
    const [AQI_variation, set_AQI_variation] = useState(null);
    const [rainfall_avg, set_rainfall_avg] = useState(null);
    const [rainfall_variation, set_rainfall_variation] = useState(null);
    const [pollutant, set_pollutant] = useState(1);
    const [city, set_city] = useState(1);
    const [temperature_year, set_temperature_year] = useState(3);
    const [rainfall_year, set_rainfall_year] = useState(3);
    const [chart1, set_chart1] = useState(null);
    const [chart2, set_chart2] = useState(null);
    const [chart3, set_chart3] = useState(null);
    const getPollutantData = () => {
        let req_data = data_aq.find((elem) => elem[2] === getCity(+city));
        return [
          +req_data[+pollutant + 2],
          +req_data[+pollutant + 6],
          +req_data[+pollutant + 10],
        ];
      };
    const getRainData = () => {
        let subDiv = getSubDivision(getCity(+city));
        let req_data_index =
          data_rain.findIndex((elem) => elem[0] === subDiv) + rainfall_year - 1;
        let req_data = data_rain[req_data_index].slice(2, 14);
        return req_data;
      };
    function drawChart1(node) {
        let pollutant_data = getPollutantData();
        let sum = 0;
        pollutant_data.forEach((elem) => {
          if (!isNaN(elem)) sum += elem;
        });
        set_AQI_avg((sum / pollutant_data.length).toFixed());
        var gradient = node.getContext("2d").createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0, "rgb(255,0,0,0.5)");
        gradient.addColorStop(1, "rgb(255,255,255,0)");
        let chrt1 = new Chart(node, {
          type: "line",
          data: {
            labels: ["2019", "2020", "2021"],
            datasets: [
              {
                label: `Concentration of ${getPollutant(+pollutant)}`,
                data: pollutant_data,
                borderColor: "red",
                borderWidth: 1,
                fill: true,
                backgroundColor: gradient,
                tension: 0.4,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function (value, index, values) {
                    return value + " ppm";
                  },
                },
                grid: {
                  display: false,
                },
              },
            },
          },
        });
        set_chart1(chrt1);
    }
    const modifyChart1 = (showVariation = false) => {
        if(chart1 === null ) return;
        chart1.data.datasets[0].label = `Concentration of ${getPollutant(
          +pollutant
        )}`;
        let new_data = getPollutantData();
        let sum = 0;
        new_data.forEach((elem) => {
          if (!isNaN(elem)) sum += elem;
        });
        let new_AQI_avg = sum / new_data.length;
        set_AQI_variation(null);
        if (showVariation)
          set_AQI_variation((((new_AQI_avg - AQI_avg) / AQI_avg) * 100).toFixed());
        set_AQI_avg(new_AQI_avg.toFixed());
        chart1.data.datasets[0].data = new_data;
        chart1.update();
      };

    function drawChart2(node) {
        let data_temperature = data_temp[+temperature_year - 1].slice(1, 13);
        let chrt2 = new Chart(node, {
          type: "line",
          data: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Temperature",
                data: data_temperature,
                borderColor: "blue",
                fill: true,
                backgroundColor: "rgb(228,229,255,0.5)",
                tension: 0.4,
                borderWidth: 1,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function (value, index, values) {
                    return value + "°C";
                  },
                },
                grid: {
                  borderDash: [3, 3],
                },
              },
            },
          },
        });
        set_chart2(chrt2);
    }
    
    const modifyChart2 = () => {
        if(chart2 === null) return;
        chart2.data.datasets[0].data = data_temp[+temperature_year - 1].slice(1, 13);
        chart2.update();
      };
    
    function drawChart3(node) {
        let rain_data = getRainData();
        let sum = 0;
        rain_data.forEach((elem) => {
          if (!isNaN(+elem)) sum += +elem;
        });
        set_rainfall_avg((sum / rain_data.length).toFixed());
        let chrt3 = new Chart(node, {
          type: "bar",
          data: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Rainfall",
                data: rain_data,
                backgroundColor: "rgb(121,71,248)",
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                ticks: {
                  callback: function (value, index, values) {
                    return value + " mm";
                  },
                },
                grid: {
                  display: false,
                },
              },
            },
          },
        });
        set_chart3(chrt3);
    }

    const modifyChart3 = () => {
        if(chart3 === null) return;
        let subDiv = getSubDivision(getCity(+city));
        let req_data_index = data_rain.findIndex((elem) => elem[0] === subDiv) + +rainfall_year - 1;
        let new_data = data_rain[req_data_index].slice(2, 14);
        let sum = 0;
        new_data.forEach((elem) => {
            if (!isNaN(+elem)) sum += +elem;
        });
        let new_rainfall_avg = sum / new_data.length;
        set_rainfall_variation((
            ((new_rainfall_avg - rainfall_avg) / rainfall_avg) *
            100
        ).toFixed());
        set_rainfall_avg(new_rainfall_avg.toFixed());
        chart3.data.datasets[0].data = new_data;
        chart3.update();
    };
    const canvas1Ref = useRef()
    const canvas2Ref = useRef()
    const canvas3Ref = useRef()
    useEffect(() => {
        drawChart1(canvas1Ref.current)
        drawChart2(canvas2Ref.current)
        drawChart3(canvas3Ref.current)
    }, [])

    useEffect(() => {
        modifyChart1(true);
        modifyChart2();
        modifyChart3();
    }, [city]);
    useEffect(() => {
        modifyChart1(false)
    }, [pollutant]);
    useEffect(() => {
        modifyChart2()
    }, [temperature_year]);
    useEffect(() => {
        modifyChart3()
    }, [rainfall_year]);

    return (
        <div className="stat_section2">
            <div className="city">
                <h2>Statistics</h2>
                <div className="select">
                <select value={city} onChange={(e) => {set_city(e.target.value)}}>
                    <option value={1}>Delhi</option>
                    <option value={2}>Mumbai</option>
                    <option value={3}>Ahmedabad</option>
                    <option value={4}>Jaipur</option>
                </select>
                </div>
            </div>
            <div className="pollutant">
                <h5>Air Quality Index (AQI)</h5>
                <div className="select">
                <select
                    value={pollutant}
                    onChange={(e) => {
                        set_pollutant(e.target.value);
                    }}
                >
                    <option value={1}>SO2</option>
                    <option value={2}>NO2</option>
                    <option value={3}>PM10</option>
                    <option value={4}>PM2.5</option>
                </select>
                </div>
            </div>
            <div className="wrapper mb-30">
                <div className="variation">
                <div className="variation_text">{AQI_avg}<span>ppm</span></div>
                <div className="wrapper2">
                    {   (AQI_variation > 0 && Number.isFinite(+AQI_variation)) ? 
                        <>
                            <img className="variation_icon" src={increase_icon} alt="" />
                            <span className="increment">{AQI_variation}%</span>
                        </> 
                        :   (AQI_variation < 0 && Number.isFinite(+AQI_variation)) ?
                        <>
                            <img className="variation_icon" src={decrease_icon} alt="" />
                            <span className="decrement">{AQI_variation}%</span>
                        </>
                        :   <div className="variation_icon" />
                    }
                </div>
                </div>
                <div className="chart-type2"><canvas ref={canvas1Ref} className="myChart" /></div>
            </div>

            <div className="temperature">
                <h5>Average Monthly Temperature (°C)</h5>
                <div className="select">
                <select value={temperature_year} 
                    onChange={(e) => {
                        set_temperature_year(e.target.value)
                    }}
                >
                    <option value={1}>2019</option>
                    <option value={2}>2020</option>
                    <option value={3}>2021</option>
                </select>
                </div>
            </div>
            <div className="chart-type1 mb-30"><canvas ref={canvas2Ref} className="myChart" /></div>
            <div className="rainfall">
                <h5>Average Monthly Rainfall (mm)</h5>
                <div className="select">
                <select value={rainfall_year} onChange={(e) => {
                        set_rainfall_year(e.target.value)
                    }}
                >
                    <option value={1}>2019</option>
                    <option value={2}>2020</option>
                    <option value={3}>2021</option>
                </select>
                </div>
            </div>
            <div className="wrapper mb-30">
                <div className="variation">
                <div className="variation_text">{rainfall_avg}<span>mm</span></div>
                <div className="wrapper2">
                    { (rainfall_variation > 0 && Number.isFinite(+rainfall_variation)) ?
                    <>
                        <img className="variation_icon" src={increase_icon} alt="" />
                        <span className="increment">{rainfall_variation}%</span>
                    </>
                    : (rainfall_variation < 0 && Number.isFinite(+rainfall_variation)) ?
                    <>
                        <img className="variation_icon" src={decrease_icon} alt="" />
                        <span className="decrement">{rainfall_variation}%</span>
                    </>
                    :   <div className="variation_icon" />
                    }
                </div>
                </div>
                <div className="chart-type2"><canvas ref={canvas3Ref} className="myChart" /></div>
            </div>
        </div>
    );
}

export default Statistics;