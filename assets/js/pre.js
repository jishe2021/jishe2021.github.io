window.onload=function() {

    var station = document.getElementById("sta");
    var time2 = document.getElementById("timeCut");
    var t = document.getElementById("time");
    var p1 = document.getElementById("pre10");
    var p2 = document.getElementById("pre20");
    var p3 = document.getElementById("pre30");
    var bPre = document.getElementById("butt-Predict");

    bPre.onclick = function () {
        var s = station.value;
        var d = time2.value;
        axios.post('http://175.24.33.88:5000/predict', {
            station: s,
            type: d ,
        })
            .then(function (response) {
                console.log(response);
                console.log(response["data"]["d"])
                xd = response["data"]["x"]
                yd = response["data"]["y"]
                t.innerText = time2.value +'min'
                p1.innerText =response["data"]["pre_10"]
                p2.innerText = response["data"]["pre_20"]
                p3.innerText = response["data"]["pre_30"]
                //ala1 = response["data"]["alarm"]//预警
                var ymin1 = Math.min.apply(null, yd);
                var chart;
                $(document).ready(function() {
                    chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'containerP',
                            type: 'spline'
                        },
                        title: {
                            text:s+'客流预测'
                        },
                        yAxis: {
                            title: {
                                text: '预期客流'
                            },
                            min: ymin1
                        },
                        tooltip: {
                            formatter: function() {
                                return '<b>'+ this.series.name +'</b>'+': '+ this.y +' 人次';
                            }
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle'
                        },
                        plotOptions: {
                            series: {
                                label: {
                                    connectorAllowed: false
                                },
                            }
                        },
                        xAxis:[{
                            categories:xd
                        }],
                        series: [{
                            name: '预测客流',
                            data: yd ,
                            zones:[{
                                value: 246,
                                color: '#90ed7d',
                            },
                                {
                                    value: 431,
                                    color: '#7cb5ec',
                                },
                                {
                                    value: 493,
                                    color: '#f7a35c'
                                },{
                                    color: 'red',
                                    dashStyle: 'dot'
                                },]}],

                        responsive: {
                            rules: [{
                                condition: {
                                    maxWidth: 500
                                },
                                chartOptions: {
                                    legend: {
                                        layout: 'horizontal',
                                        align: 'center',
                                        verticalAlign: 'bottom'
                                    }
                                }
                            }]
                        }

                    });

                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}
