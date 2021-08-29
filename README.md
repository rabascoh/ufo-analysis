# UFO Analysis

## Overview of UFO Analysis
The purpose of this deliverable is to allow users to explore UFO sightings data by filtering on date, city, state, country and shape. 

## Results

### User Instructions
To use the search criteria, go to the Filter Search pane on the lefthand side of the page. 

![Filters_Empty](https://github.com/rabascoh/ufo-analysis/blob/main/static/images/filters_empty.png)

#### Adding Filters
You will see five textboxes to enter date, city, state, country or shape criteria. Enter the criteria you would like to filter the dataset by in the same format as the placeholder text. The table will automatically filter the data by your criteria once you click outside of the textbox area or hit enter on your keyboard. You can follow the same process to update filters as needed. 

![Filters_Added](https://github.com/rabascoh/ufo-analysis/blob/main/static/images/filters_added.png)

#### Clearing Filters
To clear a specific filter, delete the text you entered in the textbox(es) and either click outside of the textbox area or hit enter on your keyboard. 
To clear all filters at once, you can refresh the page. 

## Summary
One drawback of this design is that it does not allow you to enter multiple search criteria per filter. For example, a user would have to individually filter for each date that they are interested in rather than selecting a date range. 

### Additional Recommendations
I would recommend the following changes to improve the user experience of this page. 
1. Allow multiple search criteria per filter including date ranges for the date field and multiple selections for the remaining fields (e.g., allow users to select US and CA in the Country filter). 
2. Add visualizations to allow users to quickly analyze data. For example, adding a timeseries chart to show UFO sightings overtime would be useful to gauge whether there are certain times of year that have more UFO sightings. 