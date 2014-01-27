    Highcharts.theme = {
      colors: ["#435D87", "#21A7C0", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#21A7C0", "#aaeeee"],
      chart: {
        backgroundColor: "#3d3e44",
        borderWidth: 0,
        borderRadius: 0,
        plotBackgroundColor: null,
        plotShadow: false,
        plotBorderWidth: 0
      },
      title: {
        style: {
          color: "#FFF",
          font: "16px Open Sans, sans-serif"
        }
      },
      subtitle: {
        style: {
          color: "#DDD",
          font: "12px Open Sans, sans-serif"
        }
      },
      xAxis: {
        gridLineWidth: 0,
        lineColor: 0,
        tickColor: 0,
        labels: {
          style: {
            color: "#7A899f",
            fontWeight: "normal"
          }
        },
        title: {
          style: {
            color: "#7A899f",
            font: "normal 12px Open Sans, sans-serif",
            "text-transform": "uppercase"
          }
        }
      },
      yAxis: {
        alternateGridColor: null,
        minorTickInterval: null,
        gridLineColor: 0,
        lineWidth: 0,
        tickWidth: 0,
        labels: {
          style: {
            color: "#7A899f",
            fontWeight: "normal"
          }
        },
        title: {
          style: {
            color: "#7A899f",
            font: "normal 12px Open Sans, sans-serif",
            "text-transform": "uppercase"
          }
        }
      },
      legend: {
        itemMarginTop: 25,
        itemMarginBottom: 25,
        verticalAlign: "top",
        borderWidth: 0,
        itemWidth: 120,
        itemStyle: {
          "border-radius": 0,
          color: "#7A899f",
          font: "bold 12px Open Sans, sans-serif",
          "text-transform": "uppercase"
        },
        itemHoverStyle: {
          color: "#FFF"
        },
        itemHiddenStyle: {
          color: "#333"
        }
      },
      labels: {
        style: {
          color: "#CCC"
        }
      },
      tooltip: {
        backgroundColor: "#FFF",
        borderWidth: 0,
        style: {
          font: "Open Sans, sans-serif",
          color: "#1b1d26"
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            color: "#CCC"
          },
          marker: {
            lineColor: "#333"
          }
        },
        spline: {
          marker: {
            lineColor: "#333"
          }
        },
        scatter: {
          marker: {
            lineColor: "#333"
          }
        },
        candlestick: {
          lineColor: "white"
        }
      },
      toolbar: {
        itemStyle: {
          color: "#CCC"
        }
      },
      navigation: {
        buttonOptions: {
          backgroundColor: {
            linearGradient: [0, 0, 0, 20],
            stops: [[0.4, "#606060"], [0.6, "#333333"]]
          },
          borderColor: "#000000",
          symbolStroke: "#C0C0C0",
          hoverSymbolStroke: "#FFFFFF"
        }
      },
      exporting: {
        buttons: {
          exportButton: {
            symbolFill: 0,
            enabled: false
          },
          printButton: {
            symbolFill: "#7797BE",
            enabled: false
          }
        }
      },
      rangeSelector: {
        buttonTheme: {
          fill: {
            linearGradient: [0, 0, 0, 20],
            stops: [[0.4, "#888"], [0.6, "#555"]]
          },
          stroke: "#000000",
          style: {
            color: "#CCC",
            fontWeight: "bold"
          },
          states: {
            hover: {
              fill: {
                linearGradient: [0, 0, 0, 20],
                stops: [[0.4, "#BBB"], [0.6, "#888"]]
              },
              stroke: "#000000",
              style: {
                color: "white"
              }
            },
            select: {
              fill: {
                linearGradient: [0, 0, 0, 20],
                stops: [[0.1, "#000"], [0.3, "#333"]]
              },
              stroke: "#000000",
              style: {
                color: "yellow"
              }
            }
          }
        },
        inputStyle: {
          backgroundColor: "#333",
          color: "silver"
        },
        labelStyle: {
          color: "silver"
        }
      },
      navigator: {
        handles: {
          backgroundColor: "#666",
          borderColor: ""
        },
        outlineColor: "#CCC",
        maskFill: "rgba(16, 16, 16, 0.5)",
        series: {
          color: "#7798BF",
          lineColor: "#A6C7ED"
        }
      },
      scrollbar: {
        barBackgroundColor: {
          linearGradient: [0, 0, 0, 20],
          stops: [[0.4, "#888"], [0.6, "#555"]]
        },
        barBorderColor: "#CCC",
        buttonArrowColor: "#CCC",
        buttonBackgroundColor: {
          linearGradient: [0, 0, 0, 20],
          stops: [[0.4, "#888"], [0.6, "#555"]]
        },
        buttonBorderColor: "#CCC",
        rifleColor: "#FFF",
        trackBackgroundColor: {
          linearGradient: [0, 0, 0, 10],
          stops: [[0, "#000"], [1, "#333"]]
        },
        trackBorderColor: "#666"
      },
      legendBackgroundColor: "rgba(48, 48, 48, 0)",
      legendBackgroundColorSolid: "rgb(70, 70, 70)",
      dataLabelsColor: "#444",
      textColor: "#E0E0E0",
      maskColor: "rgba(255,255,255,0.3)"
    };
    Highcharts.setOptions(Highcharts.theme);