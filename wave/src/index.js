import Recorder from "recorder-core"
import * as echarts from "echarts/core";
import {DataZoomComponent, GridComponent, TitleComponent, ToolboxComponent, TooltipComponent} from "echarts/components";
import {BarChart, LineChart} from "echarts/charts";
import {UniversalTransition} from "echarts/features";
import {CanvasRenderer} from "echarts/renderers";

echarts.use([TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, DataZoomComponent, LineChart, BarChart, CanvasRenderer, UniversalTransition]);
const spectrogramChart = echarts.init(document.getElementById("spectrogram"));
let audioData = [];
let recorder = null;
let recording = false;

function setOption(data) {
    var option = getOption(data);
    // 指定图表的配置项和数据
    // 使用刚指定的配置项和数据显示图表。
    spectrogramChart.setOption(option);
}

function getOption(data) {
    if (!data) {
        return {};
    }
    return {
        tooltip: {
            trigger: "axis",
            position: function (pt) {
                return [pt[0], "10%"];
            }
        },
        xAxis: {
            show: true,
            type: "category",
            boundaryGap: false
        },
        grid: {
            top: "3%",
            left: 2,
            right: 10,
            bottom: 60,
            containLabel: true
        },
        yAxis: {
            show: true,
            type: "value",
            boundaryGap: [0, "10%"]
        },
        dataZoom: [
            {
                type: "inside",
                start: 0,
                end: 10
            },
            {
                start: 0,
                end: 10
            }
        ],
        series: [
            {
                type: "bar",
                data: Array.from(data),
                barWidth: "50%",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "inside", //数据在中间显示
                            formatter: "{c}" //百分比显示，模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数
                        },
                        color: "#1f78af" //设置柱子的颜色
                    }
                }
            },
            {
                name: "Audio Data",
                type: "line",
                symbol: "none",
                smooth: true,
                sampling: "lttb",
                itemStyle: {
                    color: "rgb(255, 70, 131)"
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgb(255, 158, 68)"
                        },
                        {
                            offset: 1,
                            color: "rgb(255, 70, 131)"
                        }
                    ])
                },
                data: Array.from(data)
            }
        ]
    };
}

function normalize(x) {
    var mean = -100;
    var std = 10;
    return x.map((x) => (x - mean) / std);
}

function closeRecorder() {
    recorder?.close();
    recorder = null;
    recording = false;
}

function recStart() {
    if (!recorder) {
        console.error("未打开录音");
        return;
    }
    audioData = [];
    recorder.start();
}

function recStop() {
    if (!recorder) {
        console.error("未打开录音");
        return;
    }
    recording = false;
    recorder.stop();
}

function recOpen() {
    if (recorder) {
        closeRecorder();
        return;
    }
    Recorder.TrafficImgUrl = "";
    //创建录音对象
    recorder = Recorder({
        type: "wav", //录音格式，可以换成wav等其他格式
        sampleRate: 16000, //录音的采样率，越大细节越丰富越细腻
        bitRate: 16, //录音的比特率，越大音质越好
        onProcess: function (buffers, powerLevel, bufferDuration, bufferSampleRate, newBufferIdx, asyncEnd) {
            var normalizeData = normalize(buffers[buffers.length - 1]);
            normalizeData.forEach(function (item) {
                audioData.push(item);
            });
            setOption(audioData);
        }
    });
    //打开录音，获得权限
    recorder.open();
}

function stop() {
    recStop();
    document.getElementById("pause").removeAttribute("disabled");
}

document.getElementById("start").addEventListener("click", function () {
    document.getElementById("start").setAttribute("disabled", true);
    recStart();
});
document.getElementById("pause").addEventListener("click", function () {
    stop();
});
document.getElementById("reset").addEventListener("click", function () {
    stop();
    audioData = [];
    setOption(audioData);
});
recOpen();
