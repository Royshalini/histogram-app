import React, { useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Histogram from "react-chart-histogram";

const App = () => {
  const [histogramData, setHistogramData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([])

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://www.terriblytinytales.com/test.txt"
      );
      //   console.log(response)
      const text = response.data;
      const words = text.toLowerCase().split(/\W+/);
      const wordFrequency = {};
      words.forEach((word) => {
        if (word in wordFrequency) {
          wordFrequency[word] += 1;
        } else {
          wordFrequency[word] = 1;
        }
      });

      const sortedWords = Object.entries(wordFrequency).sort(
        (a, b) => b[1] - a[1]
      );
      const top20Words = sortedWords.slice(0, 20);

      const labels = top20Words.map((word) => word[0]);
      const data = top20Words.map((word) => word[1]);
        setData(data);
      console.log(labels);

      setHistogramData({ labels, datasets: [{ data }] });
      console.log("dwd",data);

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const exportData = () => {
    const csvContent = histogramData.labels.reduce(
      (csv, label, index) =>
        `${csv}"${label}",${histogramData.datasets[0].data[index]}\n`,
      "Word,Occurrences\n"
    );
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "histogram_data.csv";
    link.click();
  };
  const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };

  return (
    <div style={{"marginTop":"3rem"}}>
      <button onClick={fetchData} disabled={isLoading}>
        Submit
      </button>
      {console.log("dayta", histogramData.labels)}
      {histogramData.labels && (
        <div style={{marginTop:"3rem"}}>
          <Histogram
            xLabels={histogramData.labels }
            yValues={data }
            width="600"
            height="400"    
            options={ options}
          />
          <button onClick={exportData} style={{backgroundColor:"blue", padding:"1rem" ,color:"#fff"}}>Export</button>
        </div>
      )}
    </div>
  );
};

export default App;