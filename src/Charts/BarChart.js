import React, {useState,useEffect} from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'

const delay = ms => new Promise(res => setTimeout(res, ms));

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = () =>
{
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {    
    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  
    var bigData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    // var i=0;
    var chunkArray =[]
    // var arrayone = [];var arraytwo = [];var arraythree = []; var arrayfour = [];
    // while(i<20)
    // {
      //   if(i<5)
      //   {
      //     arrayone.push(bigData[i]); 
      //   }

      //   if(i>=5 && i<10)
      //   {
      //     arraytwo.push(bigData[i])
      //   }

      //   if(i>=10 && i<15)
      //   {
          
      //     arraythree.push(bigData[i]); 
      //   }

      //   if(i>=15 && i<20)
      //   {
          
      //     arrayfour.push(bigData[i]); 
      //   }
        
      // i++;

        const chunkSize = 5;
        // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // const result = [];
        for (let i = 0; i < bigData.length; i += chunkSize) 
        {
            const chunk = bigData.slice(i, i + chunkSize);
            // result.push(chunk)
            chunkArray.push(chunk);
        }
        // console.log(chunkArray);
    //}

    
    
    async function setData() 
    {
      var j=0
      
      
        while(j<chunkArray.length)
        {
            // if(j===0)
            // {
            //   // console.log("arraytwo",arrayone)
            //   setCurrentData(chunkArray[j]);
            //   j++;
            //   await delay(5000);
            // }

            // if(j===1)
            // {
            //   setCurrentData(chunkArray[j]);
            //   j++;
            //   await delay(5000);
            // }

            // if(j===2)
            // {
            //   //  console.log("chunk 2",chunkArray[2]);
            //   setCurrentData(chunkArray[j]);
            //   j++;
            //   await delay(5000);
            // }
            setCurrentData(chunkArray[j]);
           
            await delay(5000);
            j++;

            if(j===chunkArray.length)
            {
              j=0;
            }

            //return currentData;
        }
    }
    setData();
    
  },[]);

    var data = {
        labels: ['One', 'Two', 'Three', 'Four', 'Five'],
        datasets: [{
          label: 'Y axis',
          data: {currentData},
          borderWidth: 1
        }]
      }

      var options = {
        maintainAspectRatio : false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        legend : {
            labels : {
                fontSize : 26
            }
        }
    }

    var backgroundColor = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)'
    ]

      var borderColor = [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)'
      ]
      // console.log(currentData)
    return(
        <div>
            <Bar 
                data = {{
                  labels: ['One', 'Two', 'Three', 'Four', 'Five'],
                  datasets: [{
                    label: '# of Votes',
                    data: [...currentData],
                    borderWidth: 1
                  }]
                }}
                height={400}
                options = {options}
                backgroundColor = {backgroundColor}
                borderColor = {borderColor}
            />
        </div>
    )
}

export default BarChart;