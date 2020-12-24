import  style from './PiePage.module.css';
import InputForPie from './InputForPie/InputForPie';
import PieChart from './Chart/PieChart';
import Item from './InputForPie/Item';



const PiePageTotal = props => {

    
  const totalExpenses = Math.round(props.dataExpenses.reduce((acc, val) => acc + val, 0)*10)/10;
  const totalIncome = Math.round(props.dataIncome.reduce((acc, val) => acc + val, 0)*10)/10;

  const total = {
    lables: ["Expenses", "Income"],
    data:[totalExpenses, totalIncome]
  }
  
    
 

    return (
        <div className={style.container}>
            <h3 className={style.titleTotal}>{props.title}</h3>
            <div className={style.piePage} >
                        
                <div className= {style.historyTotal}>
                  <div className= {style.historyTotalText}>
                    <p className={style.historyTotalTitle}>Total Income</p>
                    {totalIncome + " руб"}
                  </div>
                  <div className= {style.historyTotalText}>
                    <p className={style.historyTotalTitle}>Total Expenses</p>
                    {totalExpenses + " руб"}
                  </div>
                  
                  
                </div>
               
                      
            
              <PieChart  lables={total.lables} data={total.data}/>
            </div>
        </div>
    );
}

export default PiePageTotal; 