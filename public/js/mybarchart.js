function createChart(id,yr) {
    $(id).kendoChart({
                           dataSource: {
                           transport: {
                           read: {
                           url: "/getchartdata?year="+yr,
                           dataType: "json"
                           }
                           },
                           sort: {
                           field: "year",
                           dir: "asc"
                           }
                           },
                           title: {
                           text: "Movies by year"
                           },
                           legend: {
                           position: "top"
                           },
                           seriesDefaults: {
                           type: "column"
                           },
                           series:
                           [{
                            field: "count",
                            categoryField: "year"
                            }]
                        });
}

