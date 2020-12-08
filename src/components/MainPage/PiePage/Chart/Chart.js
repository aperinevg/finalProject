import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


function Chart(props) {
    return (
    <div className="chart">
        
        <Pie
            data={props.chartData}
            options={{
                title:{
                display:true,
                text:'Largest Cities In ',
                fontSize:25
                },
                legend:{
                display:true,
                position:"bottom"
                },
                maintainAspectRatio: false 
            }}            
            height={300}
        />
  </div>
    );
}

 




// class Chart extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       chartData:props.chartData
//     }
//   } 

//   render(){
//     return (
//       <div className="chart">
        
//         <Pie
//           data={this.state.chartData}
//           options={{
//             title:{
//               display:this.props.displayTitle,
//               text:'Largest Cities In '+this.props.location,
//               fontSize:25
//             },
//             legend:{
//               display:props.displayLegend,
//               position:props.legendPosition
//             },
//             maintainAspectRatio: false 
//           }}
          
//           height={300}
//         />
//       </div>
//     )
//   }
// }

export default Chart;