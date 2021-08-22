// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    //clear existing data
    tbody.html("");
    //loop through each object in the data
    //append a row and cell for each value in the row
    data.forEach((dataRow) => {
        //append a row to the table
        let row = tbody.append("tr");
        //loop through each field in dataRow
        //add each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}
