var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "600",
        "ok": "600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "762",
        "ok": "762",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "307",
        "ok": "307",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "percentiles1": {
        "total": "287",
        "ok": "287",
        "ko": "-"
    },
    "percentiles2": {
        "total": "330",
        "ok": "330",
        "ko": "-"
    },
    "percentiles3": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "percentiles4": {
        "total": "537",
        "ok": "537",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 600,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.836",
        "ok": "9.836",
        "ko": "-"
    }
},
contents: {
"req_peticionzorros-318a0": {
        type: "REQUEST",
        name: "PeticionZorros",
path: "PeticionZorros",
pathFormatted: "req_peticionzorros-318a0",
stats: {
    "name": "PeticionZorros",
    "numberOfRequests": {
        "total": "600",
        "ok": "600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "762",
        "ok": "762",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "307",
        "ok": "307",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "percentiles1": {
        "total": "287",
        "ok": "287",
        "ko": "-"
    },
    "percentiles2": {
        "total": "330",
        "ok": "330",
        "ko": "-"
    },
    "percentiles3": {
        "total": "419",
        "ok": "419",
        "ko": "-"
    },
    "percentiles4": {
        "total": "537",
        "ok": "537",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 600,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.836",
        "ok": "9.836",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
