(function(jQuery) {

    "use strict";

// for apexchart
function apexChartUpdate(chart, detail) {
    let color = getComputedStyle(document.documentElement).getPropertyValue('--dark');
    if (detail.dark) {
      color = getComputedStyle(document.documentElement).getPropertyValue('--white');
    }
    chart.updateOptions({
      chart: {
        foreColor: color
      }
    })
  }

// for am chart
function amChartUpdate(chart, detail) {
  // let color = getComputedStyle(document.documentElement).getPropertyValue('--dark');
  if (detail.dark) {
    // color = getComputedStyle(document.documentElement).getPropertyValue('--white');
    chart.stroke = am4core.color(getComputedStyle(document.documentElement).getPropertyValue('--white'));
  }
  chart.validateData();
}

/*---------------------------------------------------------------------
   Apex Charts
-----------------------------------------------------------------------*/
if (jQuery("#apex-basic").length) {
  options = {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  };
  if(typeof ApexCharts !== typeof undefined){
    (chart = new ApexCharts(document.querySelector("#apex-basic"), options)).render()
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }

    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })
  }
}
if (jQuery("#apex-line-area").length) {
  options = {
    chart: {
      height: 350,
      type: "area"
    },
    dataLabels: {
      enabled: !1
    },
    stroke: {
      curve: "smooth"
    },
    colors: ["#4788ff", "#ff4b4b"],
    series: [{
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    xaxis: {
      type: "datetime",
      categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"]
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    }
  };
  (chart = new ApexCharts(document.querySelector("#apex-line-area"), options)).render()
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}
if (jQuery("#apex-bar").length) {
  options = {
    chart: {
      height: 350,
      type: "bar"
    },
    plotOptions: {
      bar: {
        horizontal: !0
      }
    },
    dataLabels: {
      enabled: !1
    },
    colors: ["#4788ff"],
    series: [{
      data: [470, 540, 580, 690, 1100, 1200, 1380]
    }],
    xaxis: {
      categories: ["Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
    }
  };
  (chart = new ApexCharts(document.querySelector("#apex-bar"), options)).render()
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}
if (jQuery("#apex-column").length) {
  options = {
    chart: {
      height: 350,
      type: "bar"
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "55%",
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: !1
    },
    stroke: {
      show: !0,
      width: 2,
      colors: ["transparent"]
    },
    colors: ["#4788ff", "#37e6b0", "#ff4b4b"],
    series: [{
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58]
    }, {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105]
    }, {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48]
    }],
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function(e) {
          return "$ " + e + " thousands"
        }
      }
    }
  };
  (chart = new ApexCharts(document.querySelector("#apex-column"), options)).render()
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}
if (jQuery("#apex-mixed-chart").length) {
  options = {
    chart: {
      height: 350,
      type: "line",
      stacked: !1
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth"
    },
    plotOptions: {
      bar: {
        columnWidth: "50%"
      }
    },
    colors: ["#ff4b4b", "#37e6b0", "#4788ff"],
    series: [{
      name: "Facebook",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
      name: "Vine",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
      name: "Dribbble",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    fill: {
      opacity: [.85, .25, 1],
      gradient: {
        inverseColors: !1,
        shade: "light",
        type: "vertical",
        opacityFrom: .85,
        opacityTo: .55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: ["01/01/2003", "02/01/2003", "03/01/2003", "04/01/2003", "05/01/2003", "06/01/2003", "07/01/2003", "08/01/2003", "09/01/2003", "10/01/2003", "11/01/2003"],
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      min: 0
    },
    tooltip: {
      shared: !0,
      intersect: !1,
      y: {
        formatter: function(e) {
          return void 0 !== e ? e.toFixed(0) + " views" : e
        }
      }
    },
    legend: {
      labels: {
        useSeriesColors: !0
      },
      markers: {
        customHTML: [function() {
          return ""
        }, function() {
          return ""
        }, function() {
          return ""
        }]
      }
    }
  };
  (chart = new ApexCharts(document.querySelector("#apex-mixed-chart"), options)).render()
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}







/*---------------------------------------------------------------------
   Am Charts
-----------------------------------------------------------------------*/

    if(jQuery('#am-simple-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("am-simple-chart", am4charts.XYChart);
      chart.colors.list = [am4core.color("#32BDEA"),am4core.color("#6c757d")];

      // Add data
      chart.data = [{
        "country": "USA",
        "visits": 2025
      }, {
        "country": "China",
        "visits": 1882
      }, {
        "country": "Japan",
        "visits": 1809
      }, {
        "country": "Germany",
        "visits": 1322
      }, {
        "country": "UK",
        "visits": 1122
      }, {
        "country": "France",
        "visits": 1114
      }];

      // Create axes

      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;

      categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
        if (target.dataItem && target.dataItem.index & 2 == 2) {
          return dy + 25;
        }
        return dy;
      });

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.name = "Visits";
      series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
      series.columns.template.fillOpacity = .8;

      var columnTemplate = series.columns.template;
      columnTemplate.strokeWidth = 2;
      columnTemplate.strokeOpacity = 1;

      const body = document.querySelector('body')
      if (body.classList.contains('dark')) {
        amChartUpdate(chart, {
          dark: true
        })
      }

      document.addEventListener('ChangeColorMode', function (e) {
        amChartUpdate(chart, e.detail)
      })

      }); // end am4core.ready()
   }

   if(jQuery('#am-columnlinr-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("am-columnlinr-chart", am4charts.XYChart);
       chart.colors.list = [am4core.color("#4788ff"),];

      // Export
      chart.exporting.menu = new am4core.ExportMenu();

      // Data for both series
      var data = [ {
        "year": "2009",
        "income": 23.5,
        "expenses": 21.1
      }, {
        "year": "2010",
        "income": 26.2,
        "expenses": 30.5
      }, {
        "year": "2011",
        "income": 30.1,
        "expenses": 34.9
      }, {
        "year": "2012",
        "income": 29.5,
        "expenses": 31.1
      }, {
        "year": "2013",
        "income": 30.6,
        "expenses": 28.2,
        "lineDash": "5,5",
      }, {
        "year": "2014",
        "income": 34.1,
        "expenses": 32.9,
        "strokeWidth": 1,
        "columnDash": "5,5",
        "fillOpacity": 0.2,
        "additional": "(projection)"
      } ];

      /* Create axes */
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.minGridDistance = 30;

      /* Create value axis */
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      /* Create series */
      var columnSeries = chart.series.push(new am4charts.ColumnSeries());
      columnSeries.name = "Income";
      columnSeries.dataFields.valueY = "income";
      columnSeries.dataFields.categoryX = "year";

      columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
      columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
      columnSeries.columns.template.propertyFields.stroke = "stroke";
      columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
      columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
      columnSeries.tooltip.label.textAlign = "middle";

      var lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.name = "Expenses";
      lineSeries.dataFields.valueY = "expenses";
      lineSeries.dataFields.categoryX = "year";

      lineSeries.stroke = am4core.color("#4788ff");
      lineSeries.strokeWidth = 3;
      lineSeries.propertyFields.strokeDasharray = "lineDash";
      lineSeries.tooltip.label.textAlign = "middle";

      var bullet = lineSeries.bullets.push(new am4charts.Bullet());
      bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
      bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
      var circle = bullet.createChild(am4core.Circle);
      circle.radius = 4;
      circle.fill = am4core.color("#fff");
      circle.strokeWidth = 3;

      chart.data = data;

        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          amChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          amChartUpdate(chart, e.detail)
        })

      });
   }

   if(jQuery('#am-stackedcolumn-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("am-stackedcolumn-chart", am4charts.XYChart);
      chart.colors.list = [am4core.color("#ff4b4b"),
      am4core.color("#37e6b0"),
      am4core.color("#fe721c")];


      // Add data
      chart.data = [{
        "year": "2016",
        "europe": 2.5,
        "namerica": 2.5,
        "asia": 2.1,
        "lamerica": 0.3,
        "meast": 0.2
      }, {
        "year": "2017",
        "europe": 2.6,
        "namerica": 2.7,
        "asia": 2.2,
        "lamerica": 0.3,
        "meast": 0.3
      }, {
        "year": "2018",
        "europe": 2.8,
        "namerica": 2.9,
        "asia": 2.4,
        "lamerica": 0.3,
        "meast": 0.3
      }];

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.grid.template.location = 0;


      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.min = 0;

      // Create series
      function createSeries(field, name) {

        // Set up series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.name = name;
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "year";
        series.sequencedInterpolation = true;

        // Make it stacked
        series.stacked = true;

        // Configure columns
        series.columns.template.width = am4core.percent(60);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

        // Add label
        var labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.text = "{valueY}";
        labelBullet.locationY = 0.5;

        return series;
      }

      createSeries("europe", "Europe");
      createSeries("namerica", "North America");
      createSeries("asia", "Asia-Pacific");

      // Legend
      chart.legend = new am4charts.Legend();

        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          amChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          amChartUpdate(chart, e.detail)
        })

      }); // end am4core.ready()
   }

   if(jQuery('#am-barline-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create("am-barline-chart", am4charts.XYChart);
      chart.colors.list = [am4core.color("#4788ff"),
      am4core.color("#37e6b0")];

      chart.data = [{
              "year": "2005",
              "income": 23.5,
              "expenses": 18.1
          }, {
              "year": "2006",
              "income": 26.2,
              "expenses": 22.8
          }, {
              "year": "2007",
              "income": 30.1,
              "expenses": 23.9
          }, {
              "year": "2008",
              "income": 29.5,
              "expenses": 25.1
          }, {
              "year": "2009",
              "income": 24.6,
              "expenses": 25
          }];

      //create category axis for years
      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.location = 0;

      //create value axis for income and expenses
      var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.opposite = true;


      //create columns
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryY = "year";
      series.dataFields.valueX = "income";
      series.name = "Income";
      series.columns.template.fillOpacity = 0.5;
      series.columns.template.strokeOpacity = 0;
      series.tooltipText = "Income in {categoryY}: {valueX.value}";

      //create line
      var lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.dataFields.categoryY = "year";
      lineSeries.dataFields.valueX = "expenses";
      lineSeries.name = "Expenses";
      lineSeries.strokeWidth = 3;
      lineSeries.tooltipText = "Expenses in {categoryY}: {valueX.value}";

      //add bullets
      var circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
      circleBullet.circle.fill = am4core.color("#fff");
      circleBullet.circle.strokeWidth = 2;

      //add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      //add legend
      chart.legend = new am4charts.Legend();

        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          amChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          amChartUpdate(chart, e.detail)
        })

      }); // end am4core.ready()
   }

   if(jQuery('#am-datedata-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("am-datedata-chart", am4charts.XYChart);
      chart.colors.list = [am4core.color("#57aeff")];

      // Add data
      chart.data = [{
        "date": "2012-07-27",
        "value": 13
      }, {
        "date": "2012-07-28",
        "value": 11
      }, {
        "date": "2012-07-29",
        "value": 15
      }, {
        "date": "2012-07-30",
        "value": 16
      }, {
        "date": "2012-07-31",
        "value": 18
      }, {
        "date": "2012-08-01",
        "value": 13
      }, {
        "date": "2012-08-02",
        "value": 22
      }, {
        "date": "2012-08-03",
        "value": 23
      }, {
        "date": "2012-08-04",
        "value": 20
      }, {
        "date": "2012-08-05",
        "value": 17
      }, {
        "date": "2012-08-06",
        "value": 16
      }, {
        "date": "2012-08-07",
        "value": 18
      }, {
        "date": "2012-08-08",
        "value": 21
      }, {
        "date": "2012-08-09",
        "value": 26
      }, {
        "date": "2012-08-10",
        "value": 24
      }, {
        "date": "2012-08-11",
        "value": 29
      }, {
        "date": "2012-08-12",
        "value": 32
      }, {
        "date": "2012-08-13",
        "value": 18
      }, {
        "date": "2012-08-14",
        "value": 24
      }, {
        "date": "2012-08-15",
        "value": 22
      }, {
        "date": "2012-08-16",
        "value": 18
      }, {
        "date": "2012-08-17",
        "value": 19
      }, {
        "date": "2012-08-18",
        "value": 14
      }, {
        "date": "2012-08-19",
        "value": 15
      }, {
        "date": "2012-08-20",
        "value": 12
      }, {
        "date": "2012-08-21",
        "value": 8
      }, {
        "date": "2012-08-22",
        "value": 9
      }, {
        "date": "2012-08-23",
        "value": 8
      }, {
        "date": "2012-08-24",
        "value": 7
      }, {
        "date": "2012-08-25",
        "value": 5
      }, {
        "date": "2012-08-26",
        "value": 11
      }, {
        "date": "2012-08-27",
        "value": 13
      }, {
        "date": "2012-08-28",
        "value": 18
      }, {
        "date": "2012-08-29",
        "value": 20
      }, {
        "date": "2012-08-30",
        "value": 29
      }, {
        "date": "2012-08-31",
        "value": 33
      }, {
        "date": "2012-09-01",
        "value": 42
      }, {
        "date": "2012-09-02",
        "value": 35
      }, {
        "date": "2012-09-03",
        "value": 31
      }, {
        "date": "2012-09-04",
        "value": 47
      }, {
        "date": "2012-09-05",
        "value": 52
      }, {
        "date": "2012-09-06",
        "value": 46
      }, {
        "date": "2012-09-07",
        "value": 41
      }, {
        "date": "2012-09-08",
        "value": 43
      }, {
        "date": "2012-09-09",
        "value": 40
      }, {
        "date": "2012-09-10",
        "value": 39
      }, {
        "date": "2012-09-11",
        "value": 34
      }, {
        "date": "2012-09-12",
        "value": 29
      }, {
        "date": "2012-09-13",
        "value": 34
      }, {
        "date": "2012-09-14",
        "value": 37
      }, {
        "date": "2012-09-15",
        "value": 42
      }, {
        "date": "2012-09-16",
        "value": 49
      }, {
        "date": "2012-09-17",
        "value": 46
      }, {
        "date": "2012-09-18",
        "value": 47
      }, {
        "date": "2012-09-19",
        "value": 55
      }, {
        "date": "2012-09-20",
        "value": 59
      }, {
        "date": "2012-09-21",
        "value": 58
      }, {
        "date": "2012-09-22",
        "value": 57
      }, {
        "date": "2012-09-23",
        "value": 61
      }, {
        "date": "2012-09-24",
        "value": 59
      }, {
        "date": "2012-09-25",
        "value": 67
      }, {
        "date": "2012-09-26",
        "value": 65
      }, {
        "date": "2012-09-27",
        "value": 61
      }, {
        "date": "2012-09-28",
        "value": 66
      }, {
        "date": "2012-09-29",
        "value": 69
      }, {
        "date": "2012-09-30",
        "value": 71
      }, {
        "date": "2012-10-01",
        "value": 67
      }, {
        "date": "2012-10-02",
        "value": 63
      }, {
        "date": "2012-10-03",
        "value": 46
      }, {
        "date": "2012-10-04",
        "value": 32
      }, {
        "date": "2012-10-05",
        "value": 21
      }, {
        "date": "2012-10-06",
        "value": 18
      }, {
        "date": "2012-10-07",
        "value": 21
      }, {
        "date": "2012-10-08",
        "value": 28
      }, {
        "date": "2012-10-09",
        "value": 27
      }, {
        "date": "2012-10-10",
        "value": 36
      }, {
        "date": "2012-10-11",
        "value": 33
      }, {
        "date": "2012-10-12",
        "value": 31
      }, {
        "date": "2012-10-13",
        "value": 30
      }, {
        "date": "2012-10-14",
        "value": 34
      }, {
        "date": "2012-10-15",
        "value": 38
      }, {
        "date": "2012-10-16",
        "value": 37
      }, {
        "date": "2012-10-17",
        "value": 44
      }, {
        "date": "2012-10-18",
        "value": 49
      }, {
        "date": "2012-10-19",
        "value": 53
      }, {
        "date": "2012-10-20",
        "value": 57
      }, {
        "date": "2012-10-21",
        "value": 60
      }, {
        "date": "2012-10-22",
        "value": 61
      }, {
        "date": "2012-10-23",
        "value": 69
      }, {
        "date": "2012-10-24",
        "value": 67
      }, {
        "date": "2012-10-25",
        "value": 72
      }, {
        "date": "2012-10-26",
        "value": 77
      }, {
        "date": "2012-10-27",
        "value": 75
      }, {
        "date": "2012-10-28",
        "value": 70
      }, {
        "date": "2012-10-29",
        "value": 72
      }, {
        "date": "2012-10-30",
        "value": 70
      }, {
        "date": "2012-10-31",
        "value": 72
      }, {
        "date": "2012-11-01",
        "value": 73
      }, {
        "date": "2012-11-02",
        "value": 67
      }, {
        "date": "2012-11-03",
        "value": 68
      }, {
        "date": "2012-11-04",
        "value": 65
      }, {
        "date": "2012-11-05",
        "value": 71
      }, {
        "date": "2012-11-06",
        "value": 75
      }, {
        "date": "2012-11-07",
        "value": 74
      }, {
        "date": "2012-11-08",
        "value": 71
      }, {
        "date": "2012-11-09",
        "value": 76
      }, {
        "date": "2012-11-10",
        "value": 77
      }, {
        "date": "2012-11-11",
        "value": 81
      }, {
        "date": "2012-11-12",
        "value": 83
      }, {
        "date": "2012-11-13",
        "value": 80
      }, {
        "date": "2012-11-14",
        "value": 81
      }, {
        "date": "2012-11-15",
        "value": 87
      }, {
        "date": "2012-11-16",
        "value": 82
      }, {
        "date": "2012-11-17",
        "value": 86
      }, {
        "date": "2012-11-18",
        "value": 80
      }, {
        "date": "2012-11-19",
        "value": 87
      }, {
        "date": "2012-11-20",
        "value": 83
      }, {
        "date": "2012-11-21",
        "value": 85
      }, {
        "date": "2012-11-22",
        "value": 84
      }, {
        "date": "2012-11-23",
        "value": 82
      }, {
        "date": "2012-11-24",
        "value": 73
      }, {
        "date": "2012-11-25",
        "value": 71
      }, {
        "date": "2012-11-26",
        "value": 75
      }, {
        "date": "2012-11-27",
        "value": 79
      }, {
        "date": "2012-11-28",
        "value": 70
      }, {
        "date": "2012-11-29",
        "value": 73
      }, {
        "date": "2012-11-30",
        "value": 61
      }, {
        "date": "2012-12-01",
        "value": 62
      }, {
        "date": "2012-12-02",
        "value": 66
      }, {
        "date": "2012-12-03",
        "value": 65
      }, {
        "date": "2012-12-04",
        "value": 73
      }, {
        "date": "2012-12-05",
        "value": 79
      }, {
        "date": "2012-12-06",
        "value": 78
      }, {
        "date": "2012-12-07",
        "value": 78
      }, {
        "date": "2012-12-08",
        "value": 78
      }, {
        "date": "2012-12-09",
        "value": 74
      }, {
        "date": "2012-12-10",
        "value": 73
      }, {
        "date": "2012-12-11",
        "value": 75
      }, {
        "date": "2012-12-12",
        "value": 70
      }, {
        "date": "2012-12-13",
        "value": 77
      }, {
        "date": "2012-12-14",
        "value": 67
      }, {
        "date": "2012-12-15",
        "value": 62
      }, {
        "date": "2012-12-16",
        "value": 64
      }, {
        "date": "2012-12-17",
        "value": 61
      }, {
        "date": "2012-12-18",
        "value": 59
      }, {
        "date": "2012-12-19",
        "value": 53
      }, {
        "date": "2012-12-20",
        "value": 54
      }, {
        "date": "2012-12-21",
        "value": 56
      }, {
        "date": "2012-12-22",
        "value": 59
      }, {
        "date": "2012-12-23",
        "value": 58
      }, {
        "date": "2012-12-24",
        "value": 55
      }, {
        "date": "2012-12-25",
        "value": 52
      }, {
        "date": "2012-12-26",
        "value": 54
      }, {
        "date": "2012-12-27",
        "value": 50
      }, {
        "date": "2012-12-28",
        "value": 50
      }, {
        "date": "2012-12-29",
        "value": 51
      }, {
        "date": "2012-12-30",
        "value": 52
      }, {
        "date": "2012-12-31",
        "value": 58
      }, {
        "date": "2013-01-01",
        "value": 60
      }, {
        "date": "2013-01-02",
        "value": 67
      }, {
        "date": "2013-01-03",
        "value": 64
      }, {
        "date": "2013-01-04",
        "value": 66
      }, {
        "date": "2013-01-05",
        "value": 60
      }, {
        "date": "2013-01-06",
        "value": 63
      }, {
        "date": "2013-01-07",
        "value": 61
      }, {
        "date": "2013-01-08",
        "value": 60
      }, {
        "date": "2013-01-09",
        "value": 65
      }, {
        "date": "2013-01-10",
        "value": 75
      }, {
        "date": "2013-01-11",
        "value": 77
      }, {
        "date": "2013-01-12",
        "value": 78
      }, {
        "date": "2013-01-13",
        "value": 70
      }, {
        "date": "2013-01-14",
        "value": 70
      }, {
        "date": "2013-01-15",
        "value": 73
      }, {
        "date": "2013-01-16",
        "value": 71
      }, {
        "date": "2013-01-17",
        "value": 74
      }, {
        "date": "2013-01-18",
        "value": 78
      }, {
        "date": "2013-01-19",
        "value": 85
      }, {
        "date": "2013-01-20",
        "value": 82
      }, {
        "date": "2013-01-21",
        "value": 83
      }, {
        "date": "2013-01-22",
        "value": 88
      }, {
        "date": "2013-01-23",
        "value": 85
      }, {
        "date": "2013-01-24",
        "value": 85
      }, {
        "date": "2013-01-25",
        "value": 80
      }, {
        "date": "2013-01-26",
        "value": 87
      }, {
        "date": "2013-01-27",
        "value": 84
      }, {
        "date": "2013-01-28",
        "value": 83
      }, {
        "date": "2013-01-29",
        "value": 84
      }, {
        "date": "2013-01-30",
        "value": 81
      }];

      // Set input format for the dates
      chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.dateX = "date";
      series.tooltipText = "{value}"
      series.strokeWidth = 2;
      series.minBulletDistance = 15;

      // Drop-shaped tooltips
      series.tooltip.background.cornerRadius = 20;
      series.tooltip.background.strokeOpacity = 0;
      series.tooltip.pointerOrientation = "vertical";
      series.tooltip.label.minWidth = 40;
      series.tooltip.label.minHeight = 40;
      series.tooltip.label.textAlign = "middle";
      series.tooltip.label.textValign = "middle";

      // Make bullets grow on hover
      var bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.strokeWidth = 2;
      bullet.circle.radius = 4;
      bullet.circle.fill = am4core.color("#fff");

      var bullethover = bullet.states.create("hover");
      bullethover.properties.scale = 1.3;

      // Make a panning cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "panXY";
      chart.cursor.xAxis = dateAxis;
      chart.cursor.snapToSeries = series;

      // Create vertical scrollbar and place it before the value axis
      chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarY.parent = chart.leftAxesContainer;
      chart.scrollbarY.toBack();

      // Create a horizontal scrollbar with previe and place it underneath the date axis
      chart.scrollbarX = new am4charts.XYChartScrollbar();
      chart.scrollbarX.series.push(series);
      chart.scrollbarX.parent = chart.bottomAxesContainer;

      dateAxis.start = 0.79;
      dateAxis.keepSelection = true;

        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          amChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          amChartUpdate(chart, e.detail)
        })


      }); // end am4core.ready()
   }
   if(jQuery('#am-linescrollzomm-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("am-linescrollzomm-chart", am4charts.XYChart);
      chart.colors.list = [am4core.color("#57aeff")];

      // Add data
      chart.data = generateChartData();

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 50;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "visits";
      series.dataFields.dateX = "date";
      series.strokeWidth = 2;
      series.minBulletDistance = 10;
      series.tooltipText = "{valueY}";
      series.tooltip.pointerOrientation = "vertical";
      series.tooltip.background.cornerRadius = 20;
      series.tooltip.background.fillOpacity = 0.5;
      series.tooltip.label.padding(12,12,12,12)

      // Add scrollbar
      chart.scrollbarX = new am4charts.XYChartScrollbar();
      chart.scrollbarX.series.push(series);

      // Add cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.xAxis = dateAxis;
      chart.cursor.snapToSeries = series;

      function generateChartData() {
          var chartData = [];
          var firstDate = new Date();
          firstDate.setDate(firstDate.getDate() - 1000);
          var visits = 1200;
          for (var i = 0; i < 500; i++) {
              var newDate = new Date(firstDate);
              newDate.setDate(newDate.getDate() + i);

              visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

              chartData.push({
                  date: newDate,
                  visits: visits
              });
          }
          return chartData;
      }

        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          amChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          amChartUpdate(chart, e.detail)
        })

      });
   }

   if(jQuery('#am-zoomable-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("am-zoomable-chart", am4charts.XYChart);
      chart.colors.list = [am4core.color("#57aeff")];

      // Add data
      chart.data = [ {
        "date": "2012-07-27",
        "value": 13
      }, {
        "date": "2012-07-28",
        "value": 11
      }, {
        "date": "2012-07-29",
        "value": 15
      }, {
        "date": "2012-07-30",
        "value": 16
      }, {
        "date": "2012-07-31",
        "value": 18
      }, {
        "date": "2012-08-01",
        "value": 13
      }, {
        "date": "2012-08-02",
        "value": 22
      }, {
        "date": "2012-08-03",
        "value": 23
      }, {
        "date": "2012-08-04",
        "value": 20
      }, {
        "date": "2012-08-05",
        "value": 17
      }, {
        "date": "2012-08-06",
        "value": 16
      }, {
        "date": "2012-08-07",
        "value": 18
      }, {
        "date": "2012-08-08",
        "value": 21
      }, {
        "date": "2012-08-09",
        "value": 26
      }, {
        "date": "2012-08-10",
        "value": 24
      }, {
        "date": "2012-08-11",
        "value": 29
      }, {
        "date": "2012-08-12",
        "value": 32
      }, {
        "date": "2012-08-13",
        "value": 18
      }, {
        "date": "2012-08-14",
        "value": 24
      }, {
        "date": "2012-08-15",
        "value": 22
      }, {
        "date": "2012-08-16",
        "value": 18
      }, {
        "date": "2012-08-17",
        "value": 19
      }, {
        "date": "2012-08-18",
        "value": 14
      }, {
        "date": "2012-08-19",
        "value": 15
      }, {
        "date": "2012-08-20",
        "value": 12
      }, {
        "date": "2012-08-21",
        "value": 8
      }, {
        "date": "2012-08-22",
        "value": 9
      }, {
        "date": "2012-08-23",
        "value": 8
      }, {
        "date": "2012-08-24",
        "value": 7
      }, {
        "date": "2012-08-25",
        "value": 5
      }, {
        "date": "2012-08-26",
        "value": 11
      }, {
        "date": "2012-08-27",
        "value": 13
      }, {
        "date": "2012-08-28",
        "value": 18
      }, {
        "date": "2012-08-29",
        "value": 20
      }, {
        "date": "2012-08-30",
        "value": 29
      }, {
        "date": "2012-08-31",
        "value": 33
      }, {
        "date": "2012-09-01",
        "value": 42
      }, {
        "date": "2012-09-02",
        "value": 35
      }, {
        "date": "2012-09-03",
        "value": 31
      }, {
        "date": "2012-09-04",
        "value": 47
      }, {
        "date": "2012-09-05",
        "value": 52
      }, {
        "date": "2012-09-06",
        "value": 46
      }, {
        "date": "2012-09-07",
        "value": 41
      }, {
        "date": "2012-09-08",
        "value": 43
      }, {
        "date": "2012-09-09",
        "value": 40
      }, {
        "date": "2012-09-10",
        "value": 39
      }, {
        "date": "2012-09-11",
        "value": 34
      }, {
        "date": "2012-09-12",
        "value": 29
      }, {
        "date": "2012-09-13",
        "value": 34
      }, {
        "date": "2012-09-14",
        "value": 37
      }, {
        "date": "2012-09-15",
        "value": 42
      }, {
        "date": "2012-09-16",
        "value": 49
      }, {
        "date": "2012-09-17",
        "value": 46
      }, {
        "date": "2012-09-18",
        "value": 47
      }, {
        "date": "2012-09-19",
        "value": 55
      }, {
        "date": "2012-09-20",
        "value": 59
      }, {
        "date": "2012-09-21",
        "value": 58
      }, {
        "date": "2012-09-22",
        "value": 57
      }, {
        "date": "2012-09-23",
        "value": 61
      }, {
        "date": "2012-09-24",
        "value": 59
      }, {
        "date": "2012-09-25",
        "value": 67
      }, {
        "date": "2012-09-26",
        "value": 65
      }, {
        "date": "2012-09-27",
        "value": 61
      }, {
        "date": "2012-09-28",
        "value": 66
      }, {
        "date": "2012-09-29",
        "value": 69
      }, {
        "date": "2012-09-30",
        "value": 71
      }, {
        "date": "2012-10-01",
        "value": 67
      }, {
        "date": "2012-10-02",
        "value": 63
      }, {
        "date": "2012-10-03",
        "value": 46
      }, {
        "date": "2012-10-04",
        "value": 32
      }, {
        "date": "2012-10-05",
        "value": 21
      }, {
        "date": "2012-10-06",
        "value": 18
      }, {
        "date": "2012-10-07",
        "value": 21
      }, {
        "date": "2012-10-08",
        "value": 28
      }, {
        "date": "2012-10-09",
        "value": 27
      }, {
        "date": "2012-10-10",
        "value": 36
      }, {
        "date": "2012-10-11",
        "value": 33
      }, {
        "date": "2012-10-12",
        "value": 31
      }, {
        "date": "2012-10-13",
        "value": 30
      }, {
        "date": "2012-10-14",
        "value": 34
      }, {
        "date": "2012-10-15",
        "value": 38
      }, {
        "date": "2012-10-16",
        "value": 37
      }, {
        "date": "2012-10-17",
        "value": 44
      }, {
        "date": "2012-10-18",
        "value": 49
      }, {
        "date": "2012-10-19",
        "value": 53
      }, {
        "date": "2012-10-20",
        "value": 57
      }, {
        "date": "2012-10-21",
        "value": 60
      }, {
        "date": "2012-10-22",
        "value": 61
      }, {
        "date": "2012-10-23",
        "value": 69
      }, {
        "date": "2012-10-24",
        "value": 67
      }, {
        "date": "2012-10-25",
        "value": 72
      }, {
        "date": "2012-10-26",
        "value": 77
      }, {
        "date": "2012-10-27",
        "value": 75
      }, {
        "date": "2012-10-28",
        "value": 70
      }, {
        "date": "2012-10-29",
        "value": 72
      }, {
        "date": "2012-10-30",
        "value": 70
      }, {
        "date": "2012-10-31",
        "value": 72
      }, {
        "date": "2012-11-01",
        "value": 73
      }, {
        "date": "2012-11-02",
        "value": 67
      }, {
        "date": "2012-11-03",
        "value": 68
      }, {
        "date": "2012-11-04",
        "value": 65
      }, {
        "date": "2012-11-05",
        "value": 71
      }, {
        "date": "2012-11-06",
        "value": 75
      }, {
        "date": "2012-11-07",
        "value": 74
      }, {
        "date": "2012-11-08",
        "value": 71
      }, {
        "date": "2012-11-09",
        "value": 76
      }, {
        "date": "2012-11-10",
        "value": 77
      }, {
        "date": "2012-11-11",
        "value": 81
      }, {
        "date": "2012-11-12",
        "value": 83
      }, {
        "date": "2012-11-13",
        "value": 80
      }, {
        "date": "2012-11-18",
        "value": 80
      }, {
        "date": "2012-11-19",
        "value": 87
      }, {
        "date": "2012-11-20",
        "value": 83
      }, {
        "date": "2012-11-21",
        "value": 85
      }, {
        "date": "2012-11-22",
        "value": 84
      }, {
        "date": "2012-11-23",
        "value": 82
      }, {
        "date": "2012-11-24",
        "value": 73
      }, {
        "date": "2012-11-25",
        "value": 71
      }, {
        "date": "2012-11-26",
        "value": 75
      }, {
        "date": "2012-11-27",
        "value": 79
      }, {
        "date": "2012-11-28",
        "value": 70
      }, {
        "date": "2012-11-29",
        "value": 73
      }, {
        "date": "2012-11-30",
        "value": 61
      }, {
        "date": "2012-12-01",
        "value": 62
      }, {
        "date": "2012-12-02",
        "value": 66
      }, {
        "date": "2012-12-03",
        "value": 65
      }, {
        "date": "2012-12-04",
        "value": 73
      }, {
        "date": "2012-12-05",
        "value": 79
      }, {
        "date": "2012-12-06",
        "value": 78
      }, {
        "date": "2012-12-07",
        "value": 78
      }, {
        "date": "2012-12-08",
        "value": 78
      }, {
        "date": "2012-12-09",
        "value": 74
      }, {
        "date": "2012-12-10",
        "value": 73
      }, {
        "date": "2012-12-11",
        "value": 75
      }, {
        "date": "2012-12-12",
        "value": 70
      }, {
        "date": "2012-12-13",
        "value": 77
      }, {
        "date": "2012-12-14",
        "value": 67
      }, {
        "date": "2012-12-15",
        "value": 62
      }, {
        "date": "2012-12-16",
        "value": 64
      }, {
        "date": "2012-12-17",
        "value": 61
      }, {
        "date": "2012-12-18",
        "value": 59
      }, {
        "date": "2012-12-19",
        "value": 53
      }, {
        "date": "2012-12-20",
        "value": 54
      }, {
        "date": "2012-12-21",
        "value": 56
      }, {
        "date": "2012-12-22",
        "value": 59
      }, {
        "date": "2012-12-23",
        "value": 58
      }, {
        "date": "2012-12-24",
        "value": 55
      }, {
        "date": "2012-12-25",
        "value": 52
      }, {
        "date": "2012-12-26",
        "value": 54
      }, {
        "date": "2012-12-27",
        "value": 50
      }, {
        "date": "2012-12-28",
        "value": 50
      }, {
        "date": "2012-12-29",
        "value": 51
      }, {
        "date": "2012-12-30",
        "value": 52
      }, {
        "date": "2012-12-31",
        "value": 58
      }, {
        "date": "2013-01-01",
        "value": 60
      }, {
        "date": "2013-01-02",
        "value": 67
      }, {
        "date": "2013-01-03",
        "value": 64
      }, {
        "date": "2013-01-04",
        "value": 66
      }, {
        "date": "2013-01-05",
        "value": 60
      }, {
        "date": "2013-01-06",
        "value": 63
      }, {
        "date": "2013-01-07",
        "value": 61
      }, {
        "date": "2013-01-08",
        "value": 60
      }, {
        "date": "2013-01-09",
        "value": 65
      }, {
        "date": "2013-01-10",
        "value": 75
      }, {
        "date": "2013-01-11",
        "value": 77
      }, {
        "date": "2013-01-12",
        "value": 78
      }, {
        "date": "2013-01-13",
        "value": 70
      }, {
        "date": "2013-01-14",
        "value": 70
      }, {
        "date": "2013-01-15",
        "value": 73
      }, {
        "date": "2013-01-16",
        "value": 71
      }, {
        "date": "2013-01-17",
        "value": 74
      }, {
        "date": "2013-01-18",
        "value": 78
      }, {
        "date": "2013-01-19",
        "value": 85
      }, {
        "date": "2013-01-20",
        "value": 82
      }, {
        "date": "2013-01-21",
        "value": 83
      }, {
        "date": "2013-01-22",
        "value": 88
      }, {
        "date": "2013-01-23",
        "value": 85
      }, {
        "date": "2013-01-24",
        "value": 85
      }, {
        "date": "2013-01-25",
        "value": 80
      }, {
        "date": "2013-01-26",
        "value": 87
      }, {
        "date": "2013-01-27",
        "value": 84
      }, {
        "date": "2013-01-28",
        "value": 83
      }, {
        "date": "2013-01-29",
        "value": 84
      }, {
        "date": "2013-01-30",
        "value": 81
      } ];

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.minGridDistance = 50;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.dateX = "date";
      series.strokeWidth = 3;
      series.fillOpacity = 0.5;

      // Add vertical scrollbar
      chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarY.marginLeft = 0;

      // Add cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";
      chart.cursor.lineX.disabled = true;

        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          amChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          amChartUpdate(chart, e.detail)
        })

      }); // end am4core.ready()
   }
   if(jQuery('#am-radar-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      /* Create chart instance */
      var chart = am4core.create("am-radar-chart", am4charts.RadarChart);
      chart.colors.list = [am4core.color("#4788ff")];

      /* Add data */
      chart.data = [{
        "country": "Lithuania",
        "litres": 501
      }, {
        "country": "Czechia",
        "litres": 301
      }, {
        "country": "Ireland",
        "litres": 266
      }, {
        "country": "Germany",
        "litres": 165
      }, {
        "country": "Australia",
        "litres": 139
      }, {
        "country": "Austria",
        "litres": 336
      }, {
        "country": "UK",
        "litres": 290
      }, {
        "country": "Belgium",
        "litres": 325
      }, {
        "country": "The Netherlands",
        "litres": 40
      }];

      /* Create axes */
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
      valueAxis.renderer.axisFills.template.fillOpacity = 0.05;

      /* Create and configure series */
      var series = chart.series.push(new am4charts.RadarSeries());
      series.dataFields.valueY = "litres";
      series.dataFields.categoryX = "country";
      series.name = "Sales";
      series.strokeWidth = 3;

        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          amChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          amChartUpdate(chart, e.detail)
        })

      }); // end am4core.ready()
   }
   if(jQuery('#am-polar-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      /* Create chart instance */
      var chart = am4core.create("am-polar-chart", am4charts.RadarChart);

      /* Add data */
      chart.data = [ {
        "direction": "N",
        "value": 8
      }, {
        "direction": "NE",
        "value": 9
      }, {
        "direction": "E",
        "value": 4.5
      }, {
        "direction": "SE",
        "value": 3.5
      }, {
        "direction": "S",
        "value": 9.2
      }, {
        "direction": "SW",
        "value": 8.4
      }, {
        "direction": "W",
        "value": 11.1
      }, {
        "direction": "NW",
        "value": 10
      } ];

      /* Create axes */
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "direction";

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      //valueAxis.renderer.gridType = "polygons";

      var range = categoryAxis.axisRanges.create();
      range.category = "NW";
      range.endCategory = "NW";
      range.axisFill.fill = am4core.color("#4788ff");
      range.axisFill.fillOpacity = 0.3;

      var range2 = categoryAxis.axisRanges.create();
      range2.category = "N";
      range2.endCategory = "N";
      range2.axisFill.fill = am4core.color("#ff4b4b");
      range2.axisFill.fillOpacity = 0.3;

      var range3 = categoryAxis.axisRanges.create();
      range3.category = "SE";
      range3.endCategory = "SW";
      range3.axisFill.fill = am4core.color("#37e6b0");
      range3.axisFill.fillOpacity = 0.3;
      range3.locations.endCategory = 0;

      /* Create and configure series */
      var series = chart.series.push(new am4charts.RadarSeries());
      series.dataFields.valueY = "value";
      series.dataFields.categoryX = "direction";
      series.name = "Wind direction";
      series.strokeWidth = 3;
      series.fillOpacity = 0.2;

        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          amChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          amChartUpdate(chart, e.detail)
        })

      }); // end am4core.ready()
   }

   if(jQuery('#am-polarscatter-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      /* Create chart instance */
      var chart = am4core.create("am-polarscatter-chart", am4charts.RadarChart);
       chart.colors.list = [am4core.color("#4788ff"),am4core.color("#fe721c"),am4core.color("#37e6b0")];

      /* Add data */
      chart.data = [{
        "country": "Lithuania",
        "litres": 501,
        "units": 250
      }, {
        "country": "Czech Republic",
        "litres": 301,
        "units": 222
      }, {
        "country": "Ireland",
        "litres": 266,
        "units": 179
      }, {
        "country": "Germany",
        "litres": 165,
        "units": 298
      }, {
        "country": "Australia",
        "litres": 139,
        "units": 299
      }];

      /* Create axes */
      var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
      xAxis.renderer.maxLabelPosition = 0.99;

      var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
      yAxis.renderer.labels.template.verticalCenter = "bottom";
      yAxis.renderer.labels.template.horizontalCenter = "right";
      yAxis.renderer.maxLabelPosition = 0.99;
      yAxis.renderer.labels.template.paddingBottom = 1;
      yAxis.renderer.labels.template.paddingRight = 3;

      /* Create and configure series */
      var series1 = chart.series.push(new am4charts.RadarSeries());
      series1.bullets.push(new am4charts.CircleBullet());
      series1.strokeOpacity = 0;
      series1.dataFields.valueX = "x";
      series1.dataFields.valueY = "y";
      series1.name = "Series #1";
      series1.sequencedInterpolation = true;
      series1.sequencedInterpolationDelay = 10;
      series1.data = [
        { "x": 83, "y": 5.1 },
        { "x": 44, "y": 5.8 },
        { "x": 76, "y": 9 },
        { "x": 2, "y": 1.4 },
        { "x": 100, "y": 8.3 },
        { "x": 96, "y": 1.7 },
        { "x": 68, "y": 3.9 },
        { "x": 0, "y": 3 },
        { "x": 100, "y": 4.1 },
        { "x": 16, "y": 5.5 },
        { "x": 71, "y": 6.8 },
        { "x": 100, "y": 7.9 },
        { "x": 35, "y": 8 },
        { "x": 44, "y": 6 },
        { "x": 64, "y": 0.7 },
        { "x": 53, "y": 3.3 },
        { "x": 92, "y": 4.1 },
        { "x": 43, "y": 7.3 },
        { "x": 15, "y": 7.5 },
        { "x": 43, "y": 4.3 },
        { "x": 90, "y": 9.9 }
      ];

      var series2 = chart.series.push(new am4charts.RadarSeries());
      series2.bullets.push(new am4charts.CircleBullet());
      series2.strokeOpacity = 0;
      series2.dataFields.valueX = "x";
      series2.dataFields.valueY = "y";
      series2.name = "Series #2";
      series2.sequencedInterpolation = true;
      series2.sequencedInterpolationDelay = 10;
      series2.data = [
        { "x": 178, "y": 1.3 },
        { "x": 129, "y": 3.4 },
        { "x": 99, "y": 2.4 },
        { "x": 80, "y": 9.9 },
        { "x": 118, "y": 9.4 },
        { "x": 103, "y": 8.7 },
        { "x": 91, "y": 4.2 },
        { "x": 151, "y": 1.2 },
        { "x": 168, "y": 5.2 },
        { "x": 168, "y": 1.6 },
        { "x": 152, "y": 1.2 },
        { "x": 138, "y": 7.7 },
        { "x": 107, "y": 3.9 },
        { "x": 124, "y": 0.7 },
        { "x": 130, "y": 2.6 },
        { "x": 86, "y": 9.2 },
        { "x": 169, "y": 7.5 },
        { "x": 122, "y": 9.9 },
        { "x": 100, "y": 3.8 },
        { "x": 172, "y": 4.1 },
        { "x": 140, "y": 7.3 },
        { "x": 161, "y": 2.3 },
        { "x": 141, "y": 0.9 }
      ];

      var series3 = chart.series.push(new am4charts.RadarSeries());
      series3.bullets.push(new am4charts.CircleBullet());
      series3.strokeOpacity = 0;
      series3.dataFields.valueX = "x";
      series3.dataFields.valueY = "y";
      series3.name = "Series #3";
      series3.sequencedInterpolation = true;
      series3.sequencedInterpolationDelay = 10;
      series3.data = [
        { "x": 419, "y": 4.9 },
        { "x": 417, "y": 5.5 },
        { "x": 434, "y": 0.1 },
        { "x": 344, "y": 2.5 },
        { "x": 279, "y": 7.5 },
        { "x": 307, "y": 8.4 },
        { "x": 279, "y": 9 },
        { "x": 220, "y": 8.4 },
        { "x": 201, "y": 9.7 },
        { "x": 288, "y": 1.2 },
        { "x": 333, "y": 7.4 },
        { "x": 308, "y": 1.9 },
        { "x": 330, "y": 8 },
        { "x": 408, "y": 1.7 },
        { "x": 274, "y": 0.8 },
        { "x": 296, "y": 3.1 },
        { "x": 279, "y": 4.3 },
        { "x": 379, "y": 5.6 },
        { "x": 175, "y": 6.8 }
      ];

      /* Add legend */
      chart.legend = new am4charts.Legend();

      /* Add cursor */
      chart.cursor = new am4charts.RadarCursor();

        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          amChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          amChartUpdate(chart, e.detail)
        })

      }); // end am4core.ready()
   }
   if(jQuery('#am-3dpie-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create("am-3dpie-chart", am4charts.PieChart3D);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.legend = new am4charts.Legend();

      chart.data = [
        {
          country: "Lithuania",
          litres: 501.9,
          fill: "red"
        },
        {
          country: "Germany",
          litres: 165.8
        },
        {
          country: "Australia",
          litres: 139.9
        },
        {
          country: "Austria",
          litres: 128.3
        },
        {
          country: "UK",
          litres: 99
        },
        {
          country: "Belgium",
          litres: 60
        }
      ];

      var series = chart.series.push(new am4charts.PieSeries3D());
      series.colors.list = [am4core.color("#4788ff"),am4core.color("#37e6b0"),am4core.color("#ff4b4b"),
      am4core.color("#fe721c"),am4core.color("#876cfe"),am4core.color("#01041b")];
      series.dataFields.value = "litres";
      series.dataFields.category = "country";

        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          amChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          amChartUpdate(chart, e.detail)
        })

      }); // end am4core.ready()
   }

   if(jQuery('#am-layeredcolumn-chart').length){
      am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("am-layeredcolumn-chart", am4charts.XYChart);
      chart.colors.list = [am4core.color("#37e6b0"),am4core.color("#4788ff")];

      // Add percent sign to all numbers
      chart.numberFormatter.numberFormat = "#.#'%'";

      // Add data
      chart.data = [{
          "country": "USA",
          "year2004": 3.5,
          "year2005": 4.2
      }, {
          "country": "UK",
          "year2004": 1.7,
          "year2005": 3.1
      }, {
          "country": "Canada",
          "year2004": 2.8,
          "year2005": 2.9
      }, {
          "country": "Japan",
          "year2004": 2.6,
          "year2005": 2.3
      }, {
          "country": "France",
          "year2004": 1.4,
          "year2005": 2.1
      }, {
          "country": "Brazil",
          "year2004": 2.6,
          "year2005": 4.9
      }];

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "GDP growth rate";
      valueAxis.title.fontWeight = 800;

      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "year2004";
      series.dataFields.categoryX = "country";
      series.clustered = false;
      series.tooltipText = "GDP grow in {categoryX} (2004): [bold]{valueY}[/]";

      var series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.dataFields.valueY = "year2005";
      series2.dataFields.categoryX = "country";
      series2.clustered = false;
      series2.columns.template.width = am4core.percent(50);
      series2.tooltipText = "GDP grow in {categoryX} (2005): [bold]{valueY}[/]";

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineX.disabled = true;
      chart.cursor.lineY.disabled = true;

        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          amChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          amChartUpdate(chart, e.detail)
        })

      }); // end am4core.ready()
   }

/*---------------------------------------------------------------------
   Morris Charts
-----------------------------------------------------------------------*/

if(jQuery('#morris-line-chart').length){
  new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'morris-line-chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value'],
    lineColors: ['#4788ff']
  });
}

if(jQuery('#morris-bar-chart').length){
 Morris.Bar({
element: 'morris-bar-chart',
data: [
  {x: '2011 Q1', y: 3, z: 2, a: 3},
  {x: '2011 Q2', y: 2, z: null, a: 1},
  {x: '2011 Q3', y: 0, z: 2, a: 4},
  {x: '2011 Q4', y: 2, z: 4, a: 3}
],
xkey: 'x',
ykeys: ['y', 'z', 'a'],
labels: ['Y', 'Z', 'A'],
barColors: ['#4788ff', '#fe721c', '#37e6b0'],
hoverCallback: function (index, options, content, row) {
                    return '';
                  }
}).on('click', function(i, row){
console.log(i, row);
});
}

if(jQuery('#morris-area-chart').length){
  var area = new Morris.Area({
    element: 'morris-area-chart',
    resize: true,
    data: [
      {y: '2011 Q1', item1: 2666, item2: 2666},
      {y: '2011 Q2', item1: 2778, item2: 2294},
      {y: '2011 Q3', item1: 4912, item2: 1969},
      {y: '2011 Q4', item1: 3767, item2: 3597},
      {y: '2012 Q1', item1: 6810, item2: 1914},
      {y: '2012 Q2', item1: 5670, item2: 4293},
      {y: '2012 Q3', item1: 4820, item2: 3795},
      {y: '2012 Q4', item1: 15073, item2: 5967},
      {y: '2013 Q1', item1: 10687, item2: 4460},
      {y: '2013 Q2', item1: 8432, item2: 5713}
    ],
    xkey: 'y',
    ykeys: ['item1', 'item2'],
    labels: ['Item 1', 'Item 2'],
    lineColors: ['#75e275', '#75bcff'],
    hoverCallback: function (index, options, content, row) {
                    return '';
                  }
  });
}

if(jQuery('#morris-donut-chart').length){
  var donut = new Morris.Donut({
    element: 'morris-donut-chart',
    resize: true,
    colors: ["#4788ff", "#ff4b4b", "#37e6b0"],
    data: [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ],
    hideHover: 'auto'
  });
}

/*---------------------------------------------------------------------
   High Charts
-----------------------------------------------------------------------*/
if (jQuery("#high-basicline-chart").length && Highcharts.chart("high-basicline-chart", {
    chart: {
      type: "spline",
      inverted: !0
    },
    title: {
      text: "Atmosphere Temperature by Altitude"
    },
    subtitle: {
      text: "According to the Standard Atmosphere Model"
    },
    xAxis: {
      reversed: !1,
      title: {
        enabled: !0,
        text: "Altitude"
      },
      labels: {
        format: "{value} km"
      },
      maxPadding: .05,
      showLastLabel: !0
    },
    yAxis: {
      title: {
        text: "Temperature"
      },
      labels: {
        format: "{value}°"
      },
      lineWidth: 2
    },
    legend: {
      enabled: !1
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "{point.x} km: {point.y}°C"
    },
    plotOptions: {
      spline: {
        marker: {
          enable: !1
        }
      }
    },
    series: [{
      name: "Temperature",
      color: "#4788ff",
      data: [
        [0, 15],
        [10, -50],
        [20, -56.5],
        [30, -46.5],
        [40, -22.1],
        [50, -2.5],
        [60, -27.7],
        [70, -55.7],
        [80, -76.5]
      ]
    }]
  }), jQuery("#high-area-chart").length && Highcharts.chart("high-area-chart", {
    chart: {
      type: "areaspline"
    },
    title: {
      text: "Average fruit consumption during one week"
    },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      x: 150,
      y: 100,
      floating: !0,
      borderWidth: 1,
      backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF"
    },
    xAxis: {
      categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      plotBands: [{
        from: 4.5,
        to: 6.5,
        color: "rgba(68, 170, 213, .2)"
      }]
    },
    yAxis: {
      title: {
        text: "Fruit units"
      }
    },
    tooltip: {
      shared: !0,
      valueSuffix: " units"
    },
    credits: {
      enabled: !1
    },
    plotOptions: {
      areaspline: {
        fillOpacity: .5
      }
    },
    series: [{
      name: "John",
      color: "#4788ff",
      data: [3, 4, 3, 5, 4, 10, 12]
    }, {
      name: "Jane",
      color: "#37e6b0",
      data: [1, 3, 4, 3, 3, 5, 4]
    }]
  }), jQuery("#high-columnndbar-chart").length && Highcharts.chart("high-columnndbar-chart", {
    chart: {
      type: "bar"
    },
    title: {
      text: "Stacked bar chart"
    },
    xAxis: {
      categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total fruit consumption"
      }
    },
    legend: {
      reversed: !0
    },
    plotOptions: {
      series: {
        stacking: "normal"
      }
    },
    series: [{
      name: "John",
      color: "#4788ff",
      data: [5, 3, 4, 7, 2]
    }, {
      name: "Jane",
      color: "#ff4b4b",
      data: [2, 2, 3, 2, 1]
    }, {
      name: "Joe",
      color: "#37e6b0",
      data: [3, 4, 4, 2, 5]
    }]
  }), jQuery("#high-pie-chart").length && Highcharts.chart("high-pie-chart", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: !1,
      type: "pie"
    },
    colorAxis: {},
    title: {
      text: "Browser market shares in January, 2018"
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    plotOptions: {
      pie: {
        allowPointSelect: !0,
        cursor: "pointer",
        dataLabels: {
          enabled: !0,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %"
        }
      }
    },
    series: [{
      name: "Brands",
      colorByPoint: !0,
      data: [{
        name: "Chrome",
        y: 61.41,
        sliced: !0,
        selected: !0,
        color: "#4788ff"
      }, {
        name: "Internet Explorer",
        y: 11.84,
        color: "#ff4b4b"
      }, {
        name: "Firefox",
        y: 10.85,
        color: "#65f9b3"
      }, {
        name: "Edge",
        y: 4.67,
        color: "#6ce6f4"
      }, {
        name: "Other",
        y: 2.61
      }]
    }]
  }), jQuery("#high-scatterplot-chart").length && Highcharts.chart("high-scatterplot-chart", {
    chart: {
      type: "scatter",
      zoomType: "xy"
    },
    accessibility: {
      description: "A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms."
    },
    title: {
      text: "Height Versus Weight of 507 Individuals by Gender"
    },
    subtitle: {
      text: "Source: Heinz  2003"
    },
    xAxis: {
      title: {
        enabled: !0,
        text: "Height (cm)"
      },
      startOnTick: !0,
      endOnTick: !0,
      showLastLabel: !0
    },
    yAxis: {
      title: {
        text: "Weight (kg)"
      }
    },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      x: 100,
      y: 70,
      floating: !0,
      backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
      borderWidth: 1
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: !0,
              lineColor: "rgb(100,100,100)"
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: !1
            }
          }
        },
        tooltip: {
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat: "{point.x} cm, {point.y} kg"
        }
      }
    },
    series: [{
      name: "Female",
      color: "rgba(223, 83, 83, .5)",
      data: [
        [161.2, 51.6],
        [167.5, 59],
        [159.5, 49.2],
        [157, 63],
        [155.8, 53.6],
        [170, 59],
        [159.1, 47.6],
        [166, 69.8],
        [176.2, 66.8],
        [160.2, 75.2],
        [172.7, 62],
        [155, 49.2],
        [156.5, 67.2],
        [164, 53.8],
        [160.9, 54.4]
      ],
      color: "#4788ff"
    }, {
      name: "Male",
      color: "rgba(119, 152, 191, .5)",
      data: [
        [174, 65.6],
        [175.3, 71.8],
        [193.5, 80.7],
        [186.5, 72.6],
        [187.2, 78.8],
        [181.5, 74.8],
        [184, 86.4],
        [184.5, 78.4],
        [175, 62],
        [184, 81.6],
        [180.1, 93],
        [175.5, 80.9],
        [180.6, 72.7],
        [184.4, 68],
        [175.5, 70.9],
        [180.3, 83.2],
        [180.3, 83.2]
      ],
      color: "#ff4b4b"
    }]
  }), jQuery("#high-linendcolumn-chart").length && Highcharts.chart("high-linendcolumn-chart", {
    chart: {
      zoomType: "xy"
    },
    title: {
      text: "Average Monthly Temperature and Rainfall in Tokyo"
    },
    subtitle: {
      text: "Source: WorldClimate.com"
    },
    xAxis: [{
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      crosshair: !0
    }],
    yAxis: [{
      labels: {
        format: "{value}°C",
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      title: {
        text: "Temperature",
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, {
      title: {
        text: "Rainfall",
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: "{value} mm",
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: !0
    }],
    tooltip: {
      shared: !0
    },
    legend: {
      layout: "vertical",
      align: "left",
      x: 120,
      verticalAlign: "top",
      y: 100,
      floating: !0,
      backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || "rgba(255,255,255,0.25)"
    },
    series: [{
      name: "Rainfall",
      type: "column",
      yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144, 176, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      color: "#4788ff",
      tooltip: {
        valueSuffix: " mm"
      }
    }, {
      name: "Temperature",
      type: "spline",
      data: [7, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      color: "#ff4b4b",
      tooltip: {
        valueSuffix: "°C"
      }
    }]
  }), jQuery("#high-dynamic-chart").length && Highcharts.chart("high-dynamic-chart", {
    chart: {
      type: "spline",
      animation: Highcharts.svg,
      marginRight: 10,
      events: {
        load: function() {
          var e = this.series[0];
          setInterval(function() {
            var t = (new Date).getTime(),
              a = Math.random();
            e.addPoint([t, a], !0, !0)
          }, 1e3)
        }
      }
    },
    time: {
      useUTC: !1
    },
    title: {
      text: "Live random data"
    },
    accessibility: {
      announceNewData: {
        enabled: !0,
        minAnnounceInterval: 15e3,
        announcementFormatter: function(e, t, a) {
          return !!a && "New point added. Value: " + a.y
        }
      }
    },
    xAxis: {
      type: "datetime",
      tickPixelInterval: 150
    },
    yAxis: {
      title: {
        text: "Value"
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: "#808080"
      }]
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}"
    },
    legend: {
      enabled: !1
    },
    exporting: {
      enabled: !1
    },
    series: [{
      name: "Random data",
      color: "#4788ff",
      data: function() {
        var e, t = [],
          a = (new Date).getTime();
        for (e = -19; e <= 0; e += 1) t.push({
          x: a + 1e3 * e,
          y: Math.random()
        });
        return t
      }()
    }]
  }), jQuery("#high-3d-chart").length) {
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: "high-3d-chart",
      type: "column",
      options3d: {
        enabled: !0,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: "Chart rotation demo"
    },
    subtitle: {
      text: "Test options by dragging the sliders below"
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144, 176, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      color: "#4788ff"
    }]
  });

  function showValues() {
    $("#alpha-value").html(chart.options.chart.options3d.alpha), $("#beta-value").html(chart.options.chart.options3d.beta), $("#depth-value").html(chart.options.chart.options3d.depth)
  }
  $("#sliders input").on("input change", function() {
    chart.options.chart.options3d[this.id] = parseFloat(this.value), showValues(), chart.redraw(!1)
  }), showValues()
}
if (jQuery("#high-gauges-chart").length && Highcharts.chart("high-gauges-chart", {
    chart: {
      type: "gauge",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: !1
    },
    title: {
      text: "Speedometer"
    },
    pane: {
      startAngle: -150,
      endAngle: 150,
      background: [{
        backgroundColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, "#FFF"],
            [1, "#333"]
          ]
        },
        borderWidth: 0,
        outerRadius: "109%"
      }, {
        backgroundColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, "#333"],
            [1, "#FFF"]
          ]
        },
        borderWidth: 1,
        outerRadius: "107%"
      }, {}, {
        backgroundColor: "#DDD",
        borderWidth: 0,
        outerRadius: "105%",
        innerRadius: "103%"
      }]
    },
    yAxis: {
      min: 0,
      max: 200,
      minorTickInterval: "auto",
      minorTickWidth: 1,
      minorTickLength: 10,
      minorTickPosition: "inside",
      minorTickColor: "#666",
      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: "inside",
      tickLength: 10,
      tickColor: "#666",
      labels: {
        step: 2,
        rotation: "auto"
      },
      title: {
        text: "km/h"
      },
      plotBands: [{
        from: 0,
        to: 120,
        color: "#55BF3B"
      }, {
        from: 120,
        to: 160,
        color: "#DDDF0D"
      }, {
        from: 160,
        to: 200,
        color: "#DF5353"
      }]
    },
    series: [{
      name: "Speed",
      data: [80],
      tooltip: {
        valueSuffix: " km/h"
      }
    }]
  }, function(e) {
    e.renderer.forExport || setInterval(function() {
      var t, a = e.series[0].points[0],
        n = Math.round(20 * (Math.random() - .5));
      ((t = a.y + n) < 0 || t > 200) && (t = a.y - n), a.update(t)
    }, 3e3)
  }), jQuery("#high-barwithnagative-chart").length) {
  var categories = ["0-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69", "70-74", "75-79", "80-84", "85-89", "90-94", "95-99", "100 + "];
  Highcharts.chart("high-barwithnagative-chart", {
    chart: {
      type: "bar"
    },
    title: {
      text: "Population pyramid for Germany, 2018"
    },
    subtitle: {
      text: 'Source: <a href="http://populationpyramid.net/germany/2018/">Population Pyramids of the World from 1950 to 2100</a>'
    },
    accessibility: {
      point: {
        descriptionFormatter: function(e) {
          return e.index + 1 + ", Age " + e.category + ", " + Math.abs(e.y) + "%. " + e.series.name + "."
        }
      }
    },
    xAxis: [{
      categories: categories,
      reversed: !1,
      labels: {
        step: 1
      },
      accessibility: {
        description: "Age (male)"
      }
    }, {
      opposite: !0,
      reversed: !1,
      categories: categories,
      linkedTo: 0,
      labels: {
        step: 1
      },
      accessibility: {
        description: "Age (female)"
      }
    }],
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function() {
          return Math.abs(this.value) + "%"
        }
      },
      accessibility: {
        description: "Percentage population",
        rangeDescription: "Range: 0 to 5%"
      }
    },
    plotOptions: {
      series: {
        stacking: "normal"
      }
    },
    tooltip: {
      formatter: function() {
        return "<b>" + this.series.name + ", age " + this.point.category + "</b><br/>Population: " + Highcharts.numberFormat(Math.abs(this.point.y), 1) + "%"
      }
    },
    series: [{
      name: "Male",
      data: [-2.2, -2.1, -2.2, -2.4, -2.7, -3, -3.3, -3.2, -2.9, -3.5, -4.4, -4.1, -0],
      color: "#4788ff"
    }, {
      name: "Female",
      data: [2.1, 2, 2.1, 2.3, 2.6, 2.9, 3.2, 3.1, 2.9, 3.4, 0],
      color: "#ff4b4b"
    }]
  })
}

/*--------------Widget Chart 1----------------*/

var options = {
    chart: {
        height: 80,
        type: 'area',
        sparkline: {
            enabled: true
        },
        group: 'sparklines',

    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
        }
    },

    series: [{
        name: 'series1',
        data: [60, 15, 50, 30, 70]
    }, ],
    colors: ['#50b5ff'],

    xaxis: {
        type: 'datetime',
        categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};

if(jQuery('#chart-1').length){
    var chart = new ApexCharts(
        document.querySelector("#chart-1"),
        options
    );
    chart.render();
}


/*--------------Widget Chart 2----------------*/
var options = {
    chart: {
        height: 80,
        type: 'area',
        sparkline: {
            enabled: true
        },
        group: 'sparklines',

    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
        }
    },
    series: [{
        name: 'series1',
        data: [70, 40, 60, 30, 60]
    }, ],
    colors: ['#fd7e14'],

    xaxis: {
        type: 'datetime',
        categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};

if(jQuery('#chart-2').length){
    var chart = new ApexCharts(
        document.querySelector("#chart-2"),
        options
    );

    chart.render();
}

/*--------------Widget Chart 3----------------*/
var options = {
    chart: {
        height: 80,
        type: 'area',
        sparkline: {
            enabled: true
        },
        group: 'sparklines',

    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
        }
    },
    series: [{
        name: 'series1',
        data: [60, 40, 60, 40, 70]
    }, ],
    colors: ['#49f0d3'],

    xaxis: {
        type: 'datetime',
        categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};
if(jQuery('#chart-3').length){
    var chart = new ApexCharts(
        document.querySelector("#chart-3"),
        options
    );
    chart.render();
}

/*--------------Widget Chart 4----------------*/
var options = {
    chart: {
        height: 80,
        type: 'area',
        sparkline: {
            enabled: true
        },
        group: 'sparklines',

    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
        }
    },
    series: [{
        name: 'series1',
        data: [75, 30, 60, 35, 60]
    }, ],
    colors: ['#ff9b8a'],

    xaxis: {
        type: 'datetime',
        categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};

if(jQuery('#chart-4').length){
    var chart = new ApexCharts(
        document.querySelector("#chart-4"),
        options
    );

    chart.render();
}

/*--------------Widget Box----------------*/

if(jQuery('#mm-chart-box1').length){
    var options = {
      series: [{
        name: "Total sales",
        data: [10, 10, 35, 10]
    }],
      colors: ["#50b5ff"],
      chart: {
      height: 50,
      width: 100,
      type: 'line',
      sparkline: {
          enabled: true,
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar'],
    }
    };

    var chart = new ApexCharts(document.querySelector("#mm-chart-box1"), options);
    chart.render();
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}
if(jQuery('#mm-chart-box2').length){
    var options = {
      series: [{
        name: "Sale Today",
        data: [10, 10, 35, 10]
    }],
      colors: ["#ff9b8a"],
      chart: {
      height: 50,
      width: 100,
      type: 'line',
      sparkline: {
          enabled: true,
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar'],
    }
    };

    var chart = new ApexCharts(document.querySelector("#mm-chart-box2"), options);
    chart.render();
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}
if(jQuery('#mm-chart-box3').length){
    var options = {
      series: [{
        name: "Total Classon",
        data: [10, 10, 35, 10]
    }],
      colors: ["#49f0d3"],
      chart: {
      height: 50,
      width: 100,
      type: 'line',
      sparkline: {
          enabled: true,
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar'],
    }
    };

    var chart = new ApexCharts(document.querySelector("#mm-chart-box3"), options);
    chart.render();
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}
if(jQuery('#mm-chart-box4').length){
    var options = {
      series: [{
        name: "Total Profit",
        data: [10, 10, 35, 10]
    }],
      colors: ["#fd7e14"],
      chart: {
      height: 50,
      width: 100,
      type: 'line',
      sparkline: {
          enabled: true,
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar'],
    }
    };

    var chart = new ApexCharts(document.querySelector("#mm-chart-box4"), options);
    chart.render();
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}
/*--------------Widget End----------------*/

/*-------------- Widget Chart ----------------*/
if (jQuery("#ethernet-chart-01").length) {
    var options = {
      series: [{
        name: "Desktops",
        data: [5, 30, 6, 20, 5, 18, 10]
    }],
    colors: ['#4788ff'],
      chart: {
      height: 60,
      width: 100,
      type: 'line',
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    }
    };

    var chart = new ApexCharts(document.querySelector("#ethernet-chart-01"), options);
    chart.render();
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}
if (jQuery("#ethernet-chart-02").length) {
    var options = {
      series: [{
        name: "Desktops",
        data: [5, 20, 4, 18, 3, 15, 10]
    }],
    colors: ['#1ee2ac'],
      chart: {
      height: 60,
      width: 100,
      type: 'line',
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    }
    };

    var chart = new ApexCharts(document.querySelector("#ethernet-chart-02"), options);
    chart.render();
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}
if (jQuery("#ethernet-chart-03").length) {
    var options = {
      series: [{
        name: "Desktops",
        data: [5, 20, 6, 18, 5, 15, 4]
    }],
    colors: ['#ff4b4b'],
      chart: {
      height: 60,
      width: 100,
      type: 'line',
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    }
    };

    var chart = new ApexCharts(document.querySelector("#ethernet-chart-03"), options);
    chart.render();
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}
if (jQuery("#ethernet-chart-04").length) {
    var options = {
      series: [{
        name: "Desktops",
        data: [5, 15, 3, 20, 5, 18, 13]
    }],
    colors: ['#4788ff'],
      chart: {
      height: 60,
      width: 100,
      type: 'line',
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    }
    };

    var chart = new ApexCharts(document.querySelector("#ethernet-chart-04"), options);
    chart.render();
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}

/*-------------- Widget Chart End ----------------*/

/*--------------Widget Chart ----------------*/
function getNewSeries(e, t) {
  var a = e + TICKINTERVAL;
  lastDate = a;
  for (var n = 0; n < data.length - 10; n++) data[n].x = a - XAXISRANGE - TICKINTERVAL, data[n].y = 0;
  data.push({
    x: a,
    y: Math.floor(Math.random() * (t.max - t.min + 1)) + t.min
  })
}
if (jQuery("#chart-9").length) {
    var chart9 = new ApexCharts(document.querySelector("#chart-9"), options);
    chart9.render(), window.setInterval(function() {
        getNewSeries(lastDate, {
            min: 10,
            max: 90
        }), jQuery("#chart-9").length && chart9.updateSeries([{
            data: data
        }])
    }, 1e3)
}

function generateData(e, t, a) {
    for (var n = 0, o = []; n < t;) {
        var r = Math.floor(750 * Math.random()) + 1,
            i = Math.floor(Math.random() * (a.max - a.min + 1)) + a.min,
            c = Math.floor(61 * Math.random()) + 15;
        o.push([r, i, c]), 864e5, n++
    }
    return o
}
options = {
    chart: {
        height: 440,
        type: "bubble",
        stacked: !1,
        toolbar: {
            show: !1
        },
        animations: {
            enabled: !0,
            easing: "linear",
            dynamicAnimation: {
                speed: 1e3
            }
        },
        sparkline: {
            enabled: !0
        },
        group: "sparklines"
    },
    dataLabels: {
        enabled: !1
    },
    series: [{
        name: "Bubble1",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 10, {
            min: 10,
            max: 60
        })
    }, {
        name: "Bubble2",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 10, {
            min: 10,
            max: 60
        })
    }, {
        name: "Bubble3",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 10, {
            min: 10,
            max: 60
        })
    }, {
        name: "Bubble4",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 10, {
            min: 10,
            max: 60
        })
    }],
    fill: {
        opacity: .8
    },
    title: {
        show: !1
    },
    xaxis: {
        tickAmount: 8,
        type: "category",
        labels: {
            show: !1
        }
    },
    yaxis: {
        max: 70,
        labels: {
            show: !1
        }
    },
    legend: {
        show: !1
    }
};

/*-------------- Widget Chart End ----------------*/

/*---------------------------------------------------------------------
   Editable Table
-----------------------------------------------------------------------*/
const $tableID = $('#table');
 const $BTN = $('#export-btn');
 const $EXPORT = $('#export');

 const newTr = `
<tr class="hide">
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half">
    <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
    <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
  </td>
  <td>
    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Remove</button></span>
  </td>
</tr>`;

 $('.table-add').on('click', 'i', () => {

   const $clone = $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');

   if ($tableID.find('tbody tr').length === 0) {

     $('tbody').append(newTr);
   }

   $tableID.find('table').append($clone);
 });

 $tableID.on('click', '.table-remove', function () {

   $(this).parents('tr').detach();
 });

 $tableID.on('click', '.table-up', function () {

   const $row = $(this).parents('tr');

   if ($row.index() === 1) {
     return;
   }

   $row.prev().before($row.get(0));
 });

 $tableID.on('click', '.table-down', function () {

   const $row = $(this).parents('tr');
   $row.next().after($row.get(0));
 });

 // A few jQuery helpers for exporting only
 jQuery.fn.pop = [].pop;
 jQuery.fn.shift = [].shift;

 $BTN.on('click', () => {

   const $rows = $tableID.find('tr:not(:hidden)');
   const headers = [];
   const data = [];

   // Get the headers (add special header logic here)
   $($rows.shift()).find('th:not(:empty)').each(function () {

     headers.push($(this).text().toLowerCase());
   });

   // Turn all existing rows into a loopable array
   $rows.each(function () {
     const $td = $(this).find('td');
     const h = {};

     // Use the headers from earlier to name our hash keys
     headers.forEach((header, i) => {

       h[header] = $td.eq(i).text();
     });

     data.push(h);
   });

   // Output the result
   $EXPORT.text(JSON.stringify(data));
 });

/*---------------------------------------------------------------------
    Form Wizard - 1
-----------------------------------------------------------------------*/

$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function(){

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#top-tab-list li").eq($("fieldset").index(next_fs)).addClass("active");
    $("#top-tab-list li").eq($("fieldset").index(current_fs)).addClass("done");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative',

    });

    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    });

    $(".previous").click(function(){

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#top-tab-list li").eq($("fieldset").index(current_fs)).removeClass("active");
    $("#top-tab-list li").eq($("fieldset").index(previous_fs)).removeClass("done");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });

    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }

    $(".submit").click(function(){
    return false;
    })

});

 /*---------------------------------------------------------------------
   validate form wizard
-----------------------------------------------------------------------*/

$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.addClass('active');
            $item.parent().addClass('active');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='email'],input[type='password'],input[type='url'],textarea"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.active').trigger('click');
});
 /*---------------------------------------------------------------------
   Vertical form wizard
-----------------------------------------------------------------------*/
$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function(){

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#top-tabbar-vertical li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    });

    $(".previous").click(function(){

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#top-tabbar-vertical li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });

    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }

    $(".submit").click(function(){
    return false;
    })

});


/*---------------------------------------------------------------------
   Profile Image Edit
-----------------------------------------------------------------------*/

$(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".file-upload").on('change', function(){
        readURL(this);
    });

    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});

// ratting
$(function() {
  if(typeof $.fn.barrating !== typeof undefined){
    $('#example').barrating({
      theme: 'fontawesome-stars'
    });
    $('#bars-number').barrating({
      theme: 'bars-1to10'
    });
    $('#movie-rating').barrating('show',{
      theme: 'bars-movie'
    });
    $('#movie-rating').barrating('set', 'Mediocre');
    $('#pill-rating').barrating({
      theme: 'bars-pill',
      showValues: true,
      showSelectedRating: false,
      onSelect: function(value, text) {
        alert('Selected rating: ' + value);
    }
    });
  }
  if (typeof $.fn.mdbRate !== typeof undefined) {
    $('#rateMe1').mdbRate();
    $('#face-rating').mdbRate();
  }
});

// quill
if (jQuery("#editor").length) {
  var quill = new Quill('#editor', {
  theme: 'snow'
  });
}
  // With Tooltip
  if (jQuery("#quill-toolbar").length) {
  var quill = new Quill('#quill-toolbar', {
      modules: {
        toolbar: '#quill-tool'
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
  });
  // Enable all tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Can control programmatically too
  $('.ql-italic').mouseover();
  setTimeout(function() {
      $('.ql-italic').mouseout();
  }, 2500);
}
  // file upload
  $(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });




// New dashboard Airmin

  if(jQuery('#layout1-chart-01').length){
    var options = {
     series: [{
     name: 'Net Profit',
     data: [50, 35, 45, 80, 65, 50]
    },],
      colors: ["#4d49bf"],
     chart: {
     type: 'bar',
     height: 70,
     width: 100,
       sparkline: {
         enabled: true,
       }
    },
    legend: {
     show: false
    },
    plotOptions: {
     bar: {
       horizontal: false,
       columnWidth: '55%',
       endingShape: 'rounded'
     },
    },
    dataLabels: {
     enabled: false
    },
    stroke: {
     show: true,
     width: 2,
     colors: ['transparent']
    },
    xaxis: {
     categories: ['02:30', '02:45', '03:00', '03:15'],
    },
    yaxis: {
     title: {
       text: ''
     },
     labels: {
     offsetX: -20,
     offsetY: 0
    },
    },
    grid: {
    padding: {
     left: -5,
     right: 0
    }
    },
    fill: {
     opacity: 1
    },
    tooltip: {
      enabled: false
    }
    };

    var chart = new ApexCharts(document.querySelector("#layout1-chart-01"), options);
    chart.render();
      const body = document.querySelector('body')
      if (body.classList.contains('dark')) {
        apexChartUpdate(chart, {
          dark: true
        })
      }

      document.addEventListener('ChangeColorMode', function (e) {
        apexChartUpdate(chart, e.detail)
      })
    };



    if(jQuery('#layout1-chart-02').length){
      var options = {
       series: [{
       name: 'Net Profit',
       data: [50, 35, 45, 80, 65, 50]
      }, {
       name: 'Revenue',
       data: [76, 85, 101, 98, 50, 80]
      }],
        colors: ["#4d49bf", "#dcd4ff"],
       chart: {
       type: 'bar',
       height: 70,
       width: 100,
         sparkline: {
           enabled: true,
         }
      },
      legend: {
       show: false
      },
      plotOptions: {
       bar: {
         horizontal: false,
         columnWidth: '55%',
         endingShape: 'rounded'
       },
      },
      dataLabels: {
       enabled: false
      },
      stroke: {
       show: true,
       width: 2,
       colors: ['transparent']
      },
      xaxis: {
       categories: ['02:30', '02:45', '03:00', '03:15'],
      },
      yaxis: {
       title: {
         text: ''
       },
       labels: {
       offsetX: -20,
       offsetY: 0
      },
      },
      grid: {
      padding: {
       left: -5,
       right: 0
      }
      },
      fill: {
       opacity: 1
      },
      tooltip: {
        enabled: false
      }
      };

      var chart = new ApexCharts(document.querySelector("#layout1-chart-02"), options);
      chart.render();
        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          apexChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          apexChartUpdate(chart, e.detail)
        })
      };


      if (jQuery("#layout1-chart-03").length) {
        const options = {
              series: [{
                name: "Desktops",
                data: [5, 8, 6, 15, 10, 15, 10,6,5]
            }],
            colors: ['#4d49bf'],
              chart: {
              height: 60,
              width: 100,
              type: 'line',
              zoom: {
                enabled: false
              },
              sparkline: {
              enabled: true,
            }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth',
              width: 3
            },
            title: {
              text: '',
              align: 'left'
            },
            grid: {

              row: {
                colors: ['transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            tooltip: {
              enabled: false
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            }
            };

            const chart = new ApexCharts(document.querySelector("#layout1-chart-03"), options);
            chart.render();
         const body = document.querySelector('body')
         if (body.classList.contains('dark')) {
           apexChartUpdate(chart, {
             dark: true
           })
         }

         document.addEventListener('ChangeColorMode', function (e) {
           apexChartUpdate(chart, e.detail)
         })
       };

       if (jQuery("#layout1-chart-06").length) {
        var options = {
          series: [{
            name: 'series1',
            data: [10, 15, 20, 20, 25, 13, 20, 15, 12]
          }],
          colors: ["#4d49bf"],
          chart: {
            height: 100,
            type: 'area',
            sparkline: {
              enabled: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        };

        var chart = new ApexCharts(document.querySelector("#layout1-chart-06"), options);
        chart.render();
        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          apexChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          apexChartUpdate(chart, e.detail)
        })
      }



      if (jQuery("#layout1-chart-07").length) {
        const options = {
          series: [{
            name: 'Operation',
            data: [48, 24, 18, 8, 50, 25, 40, 20]
          }, {
            name: 'Visitors',
            data: [60, 30, 20, 10, 30, 15, 30, 30]
          }],
          colors: ['#FF6B6B', '#e8f0ff'],
          chart: {
            type: 'bar',
            height: 300,
            stacked: true,
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 580,
            options: {
              legend: {

                position: 'bottom',
                offsetX: -30,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              borderRadius: 8,
              horizontal: false,
              columnWidth: '40%',
            }
          },

          xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May ', 'Jun ','Jul','Aug','Sep'],
            labels: {
              minHeight: 20,
              maxHeight: 20,
            }
          },
           yaxis: {
            labels: {
                offsetY: 0,
                minWidth: 20,
                maxWidth: 20,
              }
           },
          legend: {
            show:false
          },
          fill: {
            opacity: 1,
          },
          dataLabels: {
            enabled: false,

          }
        };

        const chart = new ApexCharts(document.querySelector("#layout1-chart-07"), options);
        chart.render();
        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          apexChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          apexChartUpdate(chart, e.detail)
        })

      }


      if (jQuery("#layout1-chart-07-1").length) {
        const options = {
          series: [{
            name: 'Operation',
            data: [48, 24, 18, 8, 50, 25, 40, 20]
          }, {
            name: 'Visitors',
            data: [60, 30, 20, 10, 30, 15, 30, 30]
          }],
          colors: ['#FF6B6B', '#e8f0ff'],
          chart: {
            type: 'bar',
            height: 300,
            stacked: true,
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 580,
            options: {
              legend: {

                position: 'bottom',
                offsetX: -30,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
               borderRadius: 8,
              horizontal: false,
              columnWidth: '40%',
            }
          },

          xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May ', 'Jun ','Jul','Aug','Sep'],
            labels: {
              minHeight: 20,
              maxHeight: 20,
            }
          },
           yaxis: {
            labels: {
                offsetY: 0,
                minWidth: 20,
                maxWidth: 20,
              }
           },
          legend: {
           show:false
          },
          fill: {
            opacity: 1,
          },
          dataLabels: {
            enabled: false,

          }
        };

        const chart = new ApexCharts(document.querySelector("#layout1-chart-07-1"), options);
        chart.render();
        const body = document.querySelector('body')
        if (body.classList.contains('dark')) {
          apexChartUpdate(chart, {
            dark: true
          })
        }

        document.addEventListener('ChangeColorMode', function (e) {
          apexChartUpdate(chart, e.detail)
        })

      }








      if (jQuery("#layout1-chart04").length) {
        const options = {
          series: [{
          data: [20, 40, 15, 34, 12, 3, 33, 20, 66]
        }],
        colors: ['#ff6b6b'],
          chart: {
          type: 'line',
          height: 220
        },
        stroke: {
          curve: 'stepline',
        },
        xaxis: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May ', 'Jun ','Jul','Aug','Sep'],
          labels: {
            minHeight: 20,
            maxHeight: 20,
          }

        },
        yaxis: {
          labels: {
              offsetY: 0,
              minWidth: 20,
              maxWidth: 20,
              formatter: function(val, index) {
                return '$'+ val ;
              }

            }
         },

        dataLabels: {
          enabled: false
        },

        markers: {
          hover: {
            sizeOffset: 4
          }
        }
        };

        const chart = new ApexCharts(document.querySelector("#layout1-chart04"), options);
        chart.render();
          const body = document.querySelector('body')
          if (body.classList.contains('dark')) {
            apexChartUpdate(chart, {
              dark: true
            })
          }

          document.addEventListener('ChangeColorMode', function (e) {
            apexChartUpdate(chart, e.detail)
          })

        };

        if (jQuery("#layout1-chart05").length) {
          options = {
            chart: {
              height: 310,
              type: "candlestick",
              zoom: {
                enabled: false
              }
            },
            colors: ["#ff6b6b", "#4d49bf"],
            series: [{
              data: [{

                x: new Date(15388452e5),
                y: [6595.97, 6602.01, 6588.17, 6602]
              }, {
                x: new Date(1538847e6),
                y: [6602, 6607, 6596.51, 6599.95]
              }, {
                x: new Date(15388488e5),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
              }, {
                x: new Date(15388506e5),
                y: [6591.02, 6603.08, 6591, 6591]
              }, {
                x: new Date(15388524e5),
                y: [6591, 6601.32, 6585, 6592]
              }, {
                x: new Date(15388542e5),
                y: [6593.13, 6596.01, 6590, 6593.34]
              }, {
                x: new Date(1538856e6),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
              }, {
                x: new Date(15388578e5),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
              }, {
                x: new Date(15388596e5),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
              }, {
                x: new Date(15388614e5),
                y: [6596.25, 6604.2, 6590, 6602.99]
              }, {
                x: new Date(15388632e5),
                y: [6602.99, 6606, 6584.99, 6587.81]
              }, {
                x: new Date(1538865e6),
                y: [6587.81, 6595, 6583.27, 6591.96]
              }, {
                x: new Date(15388668e5),
                y: [6591.97, 6596.07, 6585, 6588.39]
              }, {
                x: new Date(15388686e5),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
              }, {
                x: new Date(15388704e5),
                y: [6596.44, 6601, 6590, 6596.55]
              }, {
                x: new Date(15388722e5),
                y: [6598.91, 6605, 6596.61, 6600.02]
              }, {
                x: new Date(1538874e6),
                y: [6600.55, 6605, 6589.14, 6593.01]
              }, {
                x: new Date(15388758e5),
                y: [6593.15, 6605, 6592, 6603.06]
              }]
            }],
            title: {
              text: "",
              align: "left"
            },
            xaxis: {
              type: "datetime",
              labels: {
                minHeight: 20,
                maxHeight: 20,
              }
            },
            yaxis: {

              tooltip: {
                enabled: !0
              },
              labels: {
                offsetX: -1,
                offsetY: 0,
                minWidth: 20,
                maxWidth: 20,
              }
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#4d49bf',
                  downward: '#ff6b6b'
                }
              }
            }
          };
          (chart = new ApexCharts(document.querySelector("#layout1-chart05"), options)).render()
          const body = document.querySelector('body')
          if (body.classList.contains('dark')) {
            apexChartUpdate(chart, {
              dark: true
            })
          }

          document.addEventListener('ChangeColorMode', function (e) {
            apexChartUpdate(chart, e.detail)
          })
        }

  //  dashboard-1



  if (jQuery("#layout2-chart12").length) {
    var options = {
      series: [{
        name: '进站',
        color: '#ff6b6b',
        data: [
          {
            x: "",
            y: 760
          },
          {
            x: "5:00",
            y: 343
          },
          {
            x: "",
            y: 53079
          },
          {
            x: "6:00",
            y: 194970
          },
          {
            x: "",
            y: 403684
          },
          {
            x: "7:00",
            y: 851227
          },
          {
            x: "",
            y: 1582018
          },
          {
            x: "8:00",
            y: 1909425
          },
          {
            x:"",
            y: 1428620
          },
          {
            x: "9:00",
            y: 950901
          },
          {
            x: "",
            y: 758568
          },
          {
            x: "10:00",
            y: 686929
          },
          {
            x: "",
            y: 665950
          },
          {
            x: "11:00",
            y: 653050
          },
          {
            x: "",
            y: 688269
          },
          {
            x: "12:00",
            y: 743407
          },
          {
            x: "",
            y: 765151
          },
          {
            x: "13:00",
            y: 763972
          },
          {
            x: "",
            y: 757813
          },
          {
            x: "14:00",
            y: 764383
          },
          {
            x: "",
            y: 757484
          },
          {
            x: "15:00",
            y: 815390
          },
          {
            x:"",
            y: 851711
          },
          {
            x: "16:00",
            y: 882274
          },
          {
            x: "",
            y: 985615
          },
          {
            x: "17:00",
            y: 1364844
          },
          {
            x: "",
            y: 1606378
          },
          {
            x: "18:00",
            y: 1437172
          },
          {
            x: "",
            y: 1050841
          },
          {
            x: "19:00",
            y: 844691
          },
          {
            x: "",
            y: 728254
          },
          {
            x: "20:00",
            y: 764383
          },
          {
            x: "",
            y: 713654
          },
          {
            x: "21:00",
            y: 652630
          },
          {
            x:"",
            y: 519015
          },
          {
            x: "22:00",
            y: 440928
          },
          {
            x: "",
            y: 215855
          },
          {
            x: "23:00",
            y: 48207
          },
          {
            x: "",
            y: 3805
          }
        ]
      }, {
        name: '出站',
        color:"#4d49bf",
        data: [
          {
            x: "",
            y: 1188
          },
          {
            x: "5:00",
            y: 286
          },
          {
            x: "",
            y: 2018
          },
          {
            x: "6:00",
            y: 46087
          },
          {
            x: "",
            y: 204668
          },
          {
            x: "7:00",
            y:419484
          },
          {
            x: "",
            y: 903213
          },
          {
            x: "8:00",
            y: 1753403
          },
          {
            x:"",
            y: 1977746
          },
          {
            x: "9:00",
            y: 1241897
          },
          {
            x: "",
            y: 914499
          },
          {
            x: "10:00",
            y: 733253
          },
          {
            x: "",
            y: 684879
          },
          {
            x: "11:00",
            y: 666838
          },
          {
            x: "",
            y: 675523
          },
          {
            x: "12:00",
            y: 685473
          },
          {
            x: "",
            y: 743820
          },
          {
            x: "13:00",
            y: 765629
          },
          {
            x: "",
            y: 764847
          },
          {
            x: "14:00",
            y: 754095
          },
          {
            x: "",
            y: 761310
          },
          {
            x: "15:00",
            y: 766072
          },
          {
            x:"",
            y: 819595
          },
          {
            x: "16:00",
            y: 844336
          },
          {
            x: "",
            y: 904414
          },
          {
            x: "17:00",
            y:1069441
          },
          {
            x: "",
            y: 1411543
          },
          {
            x: "18:00",
            y: 1575168
          },
          {
            x: "",
            y: 1368790
          },
          {
            x: "19:00",
            y: 1026116
          },
          {
            x: "",
            y: 834296
          },
          {
            x: "20:00",
            y: 747808
          },
          {
            x: "",
            y: 745599
          },
          {
            x: "21:00",
            y: 716436
          },
          {
            x:"",
            y: 629565
          },
          {
            x: "22:00",
            y: 516685
          },
          {
            x: "",
            y: 394487
          },
          {
            x: "23:00",
            y: 200196
          },
          {
            x: "",
            y: 49533
          }
        ]
      }],
      chart: {
        type: 'area',
        height: 300
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 4,
        floating: false,
        labels: {
          style: {
            colors: '#8e8da4',

          },formatter: function(val, index) {
            return  val/10000+'万人次';
          },
          offsetY: -7,
          offsetX: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        }
      },
      fill: {
        opacity: 0.5
      },
      tooltip: {
        fixed: {
          enabled: false,
          position: 'topRight'
        }
      },
      grid: {
        yaxis: {
          lines: {
            offsetX: -30
          }
        },
        padding: {
          left: 20
        }
      }
    };
    const chart = new ApexCharts(document.querySelector("#layout2-chart12"), options);
    chart.render();
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }

    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })
  };




  if (jQuery("#layout2-chart02").length) {
   const options = {
      series: [{
        name: 'A',
        data: [464, 213, 92, 59, 196, 4011, 51061, 204904, 313503, 148091, 116773, 122583, 142501, 145874, 148466, 164174, 198287, 430288, 357559, 194005, 188466, 151696, 79669, 4174]
      }, {
        name: 'B',
        data: [1217, 555, 205, 216, 686, 34783, 350455, 1314512, 1776439, 983564, 815909, 811701, 905261, 919397, 924890, 1028605, 1119956, 1579275, 1341211, 923143, 853934, 681888, 402680, 29808]
      }, {
        name: 'C',
        data: [1136, 776, 454, 129, 919, 14628, 197138, 913829, 1248103, 577814, 420197, 407035, 460796, 456514, 448511, 474322, 549646, 961659, 789243, 455797, 432850, 338061, 174434, 18030]
      }],
      colors: ["#4d49bf", "#ff6b6b",'#e8f0ff'],
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: false,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      title: {
        text: '',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0
        },
      },
      xaxis: {
        categories: ['0:00', '1:00', '2:00', '', '4:00', '5:00', '6:00', '', '8:00', '9:00', '10:00', '', '12:00', '13:00', '14:00', '', '16:00', '17:00', '18:00', '', '20:00', '21:00', '22:00', ''],
        labels: {
             minHeight: 30,
             maxHeight: 30,
         }
      },
      yaxis: {
        labels: {
            offsetY: 0,
            minWidth: 50,
            maxWidth: 50,
            formatter: function(val, index) {
              return  val/10000+'万';
            }

          }
       },
       legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: -33
      }
    };
    const chart = new ApexCharts(document.querySelector("#layout2-chart02"), options);
    chart.render();
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }

    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })
  };

  if (jQuery("#layout2-chart03").length) {
    var options = {
      series: [44, 55, 67, 83],
      chart: {
        height: 300,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };

    var chart = new ApexCharts(document.querySelector("#layout2-chart03"), options);
    chart.render();
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }

    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })
  };



  if (jQuery("#layout2-chart05").length) {
    const options = {
      series: [{
        name: 'A',
        data: [324, 211, 209, 111, 187, 353, 18651, 129683, 626338, 293384, 150668, 132795, 139335, 155163, 147410, 148030, 166507, 253181, 287814, 169449, 141751, 129088, 84400, 18220]
      }, {
        name: 'B',
        data:  [1598, 554, 302, 304, 701, 1184, 167584, 762158, 1870505, 1190729, 859432, 836937, 891871, 937947, 936294, 975476, 1055127, 1387301, 1653725, 1061078, 819835, 724059, 499223, 133273]
      }, {
        name: 'C',
        data: [1658, 651, 736, 343, 880, 767, 64520, 430856, 1234306, 672283, 408032, 372629, 398087, 437366, 431701, 462161, 527116, 840502, 1002419, 629885, 531821, 492854, 327549, 98236]
      }],
      colors: ["#4d49bf", "#ff6b6b",'#e8f0ff'],
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: false,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      title: {
        text: '',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0
        },
      },
      xaxis: {
        categories: ['0:00', '1:00', '2:00', '', '4:00', '5:00', '6:00', '', '8:00', '9:00', '10:00', '', '12:00', '13:00', '14:00', '', '16:00', '17:00', '18:00', '', '20:00', '21:00', '22:00', ''],
        labels: {
          minHeight: 30,
          maxHeight: 30,
        }
      },
      yaxis: {
        labels: {
          offsetY: 0,
          minWidth: 50,
          maxWidth: 50,
          formatter: function(val, index) {
            return  val/10000+'万';
          }

        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: -33
      }
    };
    const chart = new ApexCharts(document.querySelector("#layout2-chart05"), options);
    chart.render();
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }

    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })
  };

  if (jQuery("#layout2-chart06").length) {
    var options = {
      series: [{
        data: [11, 45, 1, 1, 23]
      }],
      chart: {
        height: 250,
        type: 'bar',
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: ["#26a0fc","#26e7a6","#febc3b","#6d848e","#8b75d7"],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          '办公主导型',
          '居住主导型',
          '换乘站点型',
          '商业中心型',
          '办公+居住型',
        ],
        labels: {
          style: {
            colors: ["#26a0fc","#26e7a6","#febc3b","#6d848e","#8b75d7"],
            fontSize: '12px'
          }
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#layout2-chart06"), options);
    chart.render();
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }

    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })

  };
  if (jQuery("#layout2-chart11").length) {
    var options = {
      series: [{
        name: "工作日",
        data: [116.89, 45.11, 37.5, 22.39, 29.0, 21.72, 18.0, 13.89, 22.33, 48.83, 11.72, 81.78, 1881.39, 8919.17, 19186.17, 43134.11, 87242.89, 96148.56, 56879.44, 38650.89, 28977.06, 26050.11, 24840.0, 25058.44, 25355.06, 27405.94, 28055.0, 27717.22, 26799.94, 26944.22, 27163.33, 29533.56, 30567.72, 33290.28, 41594.89, 60247.83, 70267.06, 60417.17, 43946.78, 34248.11, 30063.94, 29866.94, 28714.5, 25538.39, 20541.83, 15440.89, 7698.06, 1949.06]
      },
        {
          name: "周末",
          data: [68.0, 42.67, 35.83, 20.5, 27.67, 22.33, 15.33, 9.17, 26.83, 44.17, 10.83, 78.33, 1622.5, 5904.83, 10565.83, 18598.33, 27243.33, 36962.33, 32050.33, 31836.17, 30161.5, 30385.33, 30506.0, 31091.17, 31486.67, 34483.0, 35749.5, 36389.83, 36707.17, 37182.17, 37328.67, 38806.67, 39579.33, 41224.5, 43852.17, 45265.33, 43047.17, 38860.83, 32252.33, 29847.33, 27977.67, 28629.5, 27608.0, 23709.83, 20353.17, 16223.33, 8354.83, 1798.33]
        },
        {
          name: '节假日',
          data: [0.0, 0.0, 0.0, 0.0, 22.0, 12.0, 26.0, 11.0, 17.0, 44.0, 10.0, 76.0, 2487.0, 8694.0, 10738.0, 15209.0, 19571.0, 25298.0, 25765.0, 27766.0, 30697.0, 33665.0, 36682.0, 37924.0, 40162.0, 43615.0, 46142.0, 47598.0, 51453.0, 53221.0, 53160.0, 55151.0, 56641.0, 57842.0, 57620.0, 55490.0, 52078.0, 48116.0, 41560.0, 38746.0, 38791.0, 36217.0, 33927.0, 27615.0, 24813.0, 19211.0, 11502.0, 3660.0]
        }
      ],
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ['0:00', '', '1:00', '', '2:00', '', '3:00', '', '4:00', '', '5:00', '', '6:00', '', '7:00', '', '8:00', '', '9:00', '', '10:00', '', '11:00', '', '12:00', '', '13:00', '', '14:00', '', '15:00', '', '16:00', '', '17:00', '', '18:00', '', '19:00', '', '20:00', '', '21:00', '', '22:00', '', '23:00', ''],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val
              }
            }
          }
        ]
      },
      grid: {
        borderColor: '#f1f1f1',
      }
    };

    const chart = new ApexCharts(document.querySelector("#layout2-chart11"), options);
    chart.render();
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }

    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })

  };

  if (jQuery("#layout2-chart10").length) {
    var options = {
      series: [{
        name: "工作日",
        data: [49.28, 68.61, 49.44, 18.11, 19.44, 9.67, 9.28, 7.83, 39.39, 33.39, 13.67, 2137.94, 8382.17, 18556.33, 40644.5, 78182.72, 93223.39, 66482.5, 40751.11, 30169.33, 26146.56, 24821.5, 24149.94, 25629.67, 27514.44, 27919.11, 27674.94, 27016.06, 27029.56, 26873.44, 29288.67, 30822.06, 32362.0, 37524.39, 57795.06, 71833.44, 63647.83, 45228.5, 34675.89, 29221.44, 30446.94, 28601.22, 26570.89, 20798.17, 17308.22, 8323.11, 1880.72, 149.94]},
        {
          name: "周末",
          data:
              [53.5, 62.33, 40.17, 14.5, 17.83, 10.17, 8.0, 5.17, 50.17, 21.5, 14.0, 1877.17, 5886.67, 9973.0, 17536.67, 26021.17, 34488.67, 34220.33, 31597.5, 30789.5, 30388.0, 30480.83, 30190.0, 31188.33, 33916.0, 36055.0, 36301.17, 36644.83, 37242.0, 36798.33, 38958.5, 39889.67, 40451.83, 42506.0, 44917.67, 43409.17, 40373.33, 32548.67, 30151.83, 27308.5, 29456.0, 27427.33, 24605.33, 19978.83, 18140.5, 8986.17, 1722.33, 115.83]
        },
        {
          name: '节假日',
          data:
              [0.0, 0.0, 0.0, 0.0, 25.0, 34.0, 14.0, 3.0, 31.0, 30.0, 13.0, 3333.0, 8771.0, 9832.0, 14406.0, 18602.0, 24472.0, 26613.0, 27796.0, 30783.0, 33963.0, 36278.0, 37211.0, 39805.0, 44651.0, 46277.0, 48016.0, 51655.0, 54399.0, 52972.0, 54443.0, 57576.0, 57047.0, 55140.0, 55027.0, 52921.0, 49271.0, 41436.0, 39614.0, 38417.0, 36815.0, 34268.0, 26722.0, 24775.0, 20537.0, 12122.0, 4020.0, 411.0]
        }
      ],
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ['0:00', '', '1:00', '', '2:00', '', '3:00', '', '4:00', '', '5:00', '', '6:00', '', '7:00', '', '8:00', '', '9:00', '', '10:00', '', '11:00', '', '12:00', '', '13:00', '', '14:00', '', '15:00', '', '16:00', '', '17:00', '', '18:00', '', '19:00', '', '20:00', '', '21:00', '', '22:00', '', '23:00', ''],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val
              }
            }
          }
        ]
      },
      grid: {
        borderColor: '#f1f1f1',
      }
    };

    const chart = new ApexCharts(document.querySelector("#layout2-chart10"), options);
    chart.render();
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }

    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })

  };
  if (jQuery("#layout2-chart07").length) {
    var options = {
      series: [{
        name: '办公主导型',
        data: [11, 0, 0]
      }, {
        name: '居住主导型',
        data: [14, 10, 21]
      }, {
        name: '换乘站点型',
        data: [1, 0, 0]
      }, {
        name: '商业中心型',
        data: [1, 0, 0]
      }, {
        name: '办公+居住型',
        data: [7, 4, 12]
      }],
      chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        dropShadow: {
          enabled: true,
          blur: 1,
          opacity: 0.25
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '60%',
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
      },
      xaxis: {
        categories: ["B", "A", "C"],
      },
      yaxis: {
        title: {
          text: undefined
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val + "个"
          }
        }
      },
      fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
          style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

        }
      },
      states: {
        hover: {
          filter: 'none'
        }
      },
      legend: {
        position: 'right',
        offsetY: 40
      }
    };

    const chart = new ApexCharts(document.querySelector("#layout2-chart07"), options);
    chart.render();
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }

    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })

  };


  if (jQuery("#layout2-chart01").length) {
    var options = {
        series: [{
        name: 'series1',
        data: [60, 100, 60, 120, 60, 90]
      }],
      colors: ["#4d49bf"],
        chart: {
        height :'100%',
        type: 'area',
        sparkline: {
          enabled: false,
      }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
       show: false
      },
      stroke: {
        curve: 'smooth'
      },
      // labels: {
      //   minHeight: 20,
      //   maxHeight: 20,
      // },

      xaxis: {
        categories: ['Jan', 'Feb', 'Mar','Apr','May','Jun'],
        labels: {
          minHeight: 20,
          maxHeight: 20,
        }

      },
      yaxis: {

        title: {
          text: ''
        },
        labels: {
        offsetX: -20,
        offsetY: 0
      },
      },
      grid: {
        show:false
    },
      tooltip: {

        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      };

      var chart = new ApexCharts(document.querySelector("#layout2-chart01"), options);
      chart.render();
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
}



})(jQuery);


