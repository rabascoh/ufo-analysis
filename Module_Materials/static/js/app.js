// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//Create table and populate with data
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

//handle user click
function handleClick(){
    //get datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check to see if a date was entered and filter using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
        //rebuild the table using filtered data
        buildTable(filteredData);
    };   
}

//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build the table when the webpage loads
buildTable(tableData);