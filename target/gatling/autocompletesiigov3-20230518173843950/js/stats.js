var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "394",
        "ok": "394",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1037",
        "ok": "1037",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "755",
        "ok": "755",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "196",
        "ok": "196",
        "ko": "-"
    },
    "percentiles1": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "percentiles2": {
        "total": "923",
        "ok": "923",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1003",
        "ok": "1003",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1035",
        "ok": "1035",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 44,
    "percentage": 44
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 56,
    "percentage": 56
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
        "total": "14.286",
        "ok": "14.286",
        "ko": "-"
    }
},
contents: {
"req_buscador-de-sii-4ad16": {
        type: "REQUEST",
        name: "Buscador de Siigo",
path: "Buscador de Siigo",
pathFormatted: "req_buscador-de-sii-4ad16",
stats: {
    "name": "Buscador de Siigo",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "394",
        "ok": "394",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1037",
        "ok": "1037",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "755",
        "ok": "755",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "196",
        "ok": "196",
        "ko": "-"
    },
    "percentiles1": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "percentiles2": {
        "total": "923",
        "ok": "923",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1003",
        "ok": "1003",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1035",
        "ok": "1035",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 44,
    "percentage": 44
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 56,
    "percentage": 56
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
        "total": "14.286",
        "ok": "14.286",
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
