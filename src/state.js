const labels =[];
const data = [];

let rerender = ()=>{    
}

export const state = {
    _chartData :{
        labels: labels ,
        datasets:[
          {data: data,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ],
        
      },
    getChartData() {
        return this._chartData;
    },  
       
    addLabel(label, num){        
        labels.push(label);
        data.push(+num);
        rerender(this._chartData);
    },
    
    
}

export const subscribe = (observer) => {
    rerender = observer;   
}





 
