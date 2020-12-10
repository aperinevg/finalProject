import React, {Component} from 'react';
import {PieChart, Pie, Sector, Cell,Tooltip} from 'recharts';


function Chart(props) {
    const data = props.state.data;
    const COLORS = props.state.COLORS
    // const data = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    //     { name: 'Group D', value: 200 },
    //   ];
      
    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

   
      
    return (
    <div className="chart">
        <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8"  />
        {/* <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
        <Tooltip />
      </PieChart>
        
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