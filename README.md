
# Histogram app

histogram app has main component as app.js in which there are the state hook. 
  ### 1. histogramdata

 histogramData initial value is set to an empty array which is updated after an api call to the [https://www.terriblytinytales.com/test.txt] and after getting response from api all the words are then sliced using the space between them and then histogramData is set with lables and dataset 

### 2. isLoading
 is loading is just for showing loading text after submit button 
 is clicked it's initial value is set to false

### 3. data 
 data is used to set the data into which is extracted from [https://www.terriblytinytales.com/test.txt]

## Functions

1. fetch data which is used for making an api call to [https://www.terriblytinytales.com/test.txt]
2. exportData is used to create a csv file .

### fetch function

The fetchData function retrieves text data from a [https://www.terriblytinytales.com/test.txt], converts it to lowercase, splits it into words, and calculates the frequency of each word. The word frequencies are stored in an object named wordFrequency.


### exportData

The exportData function generates a CSV file from histogram data. It creates a CSV content string by iterating over labels and corresponding dataset values. Then, it creates a Blob object with the CSV content, generates a download URL, creates a link element, and triggers a click event to download the CSV file.

---
 <histogram> is accepting 5 paramaents xLables for x-axis labelling which is set to histogram lables for top 20 words .

y-axis which is used for number of time a word is occuring 
width, height for setting up width and height of the histogram
options is the style which is used for displaying the histogram candles 

one export button is there and onclick of that function the export data function is running .

---
### library used 
1. axios for making an api call 
2. react-chart-histogram for creating the histogram chart 



