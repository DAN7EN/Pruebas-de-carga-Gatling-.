var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "471",
        "ko": "729"
    },
    "minResponseTime": {
        "total": "943",
        "ok": "943",
        "ko": "4671"
    },
    "maxResponseTime": {
        "total": "60184",
        "ok": "10440",
        "ko": "60184"
    },
    "meanResponseTime": {
        "total": "10386",
        "ok": "5628",
        "ko": "13459"
    },
    "standardDeviation": {
        "total": "7185",
        "ok": "3075",
        "ko": "7402"
    },
    "percentiles1": {
        "total": "10516",
        "ok": "4659",
        "ko": "11205"
    },
    "percentiles2": {
        "total": "12866",
        "ok": "9221",
        "ko": "14144"
    },
    "percentiles3": {
        "total": "17882",
        "ok": "10169",
        "ko": "17945"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "10368",
        "ko": "60012"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 468,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "count": 729,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "6.542",
        "ko": "10.125"
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
        "total": "1200",
        "ok": "471",
        "ko": "729"
    },
    "minResponseTime": {
        "total": "943",
        "ok": "943",
        "ko": "4671"
    },
    "maxResponseTime": {
        "total": "60184",
        "ok": "10440",
        "ko": "60184"
    },
    "meanResponseTime": {
        "total": "10386",
        "ok": "5628",
        "ko": "13459"
    },
    "standardDeviation": {
        "total": "7185",
        "ok": "3075",
        "ko": "7402"
    },
    "percentiles1": {
        "total": "10516",
        "ok": "4659",
        "ko": "11205"
    },
    "percentiles2": {
        "total": "12866",
        "ok": "9221",
        "ko": "14144"
    },
    "percentiles3": {
        "total": "17882",
        "ok": "10169",
        "ko": "17945"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "10368",
        "ko": "60012"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 468,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "count": 729,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "6.542",
        "ko": "10.125"
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
