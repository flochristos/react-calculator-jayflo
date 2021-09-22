import './App.css';
import React from 'react';
const { useState } = React;
function App() {
  const [var1, setVar] = useState();
  const [symbol, setSymbol] = useState();


  function handleClick(props) {
    let buttonText = props.target.value;
    let inputText = document.getElementById('result').value;
    console.log(inputText + buttonText);
    //adding the input value so as to validate user input..
      let  total = inputText + buttonText;
        if (total.charAt(0) === "0") {
          
        } else if (total.charAt(0) === "-") {
          document.getElementById("result").value = total;
        } else {
          document.getElementById("result").value = total;
        }
        if (props.target.value === "clear") {
          document.getElementById("result").value = "";
        }
        if (total.charAt(0) === "" || (props.target.value === "-")) {
          document.getElementById("result").value = total;
          let symbol1 = document.getElementById("result").value.slice(-1);
          setSymbol(symbol1);
          let sum1 =document.getElementById("result").value.slice(0, -1);
          setVar(parseFloat(sum1));
         
        }else if ((props.target.value === "+") ||(props.target.value === "/") || (props.target.value === "*")) {
          let symbol1 = document.getElementById("result").value.slice(-1);
          setSymbol(symbol1);
          let sum1 =document.getElementById("result").value.slice(0, -1);
          setVar(parseFloat(sum1));
          document.getElementById("result").value = "";
         
        }

        if (props.target.value === "%") {
          let sum1 =document.getElementById("result").value.slice(0, -1);
          document.getElementById("ans").innerText =  +sum1 / 100;
          document.getElementById("result").value = +sum1 / 100;
        }

        if (props.target.value === "d") {
          document.getElementById("result").value = document.getElementById("result").value.slice(0, -2);;
        }
        

        //equal to code
        if (props.target.value === "=") {
          // alert(sum1);
         
            let var2 = document.getElementById("result").value.slice(0, -1);
            if (isNaN(var1 && var2)) {
             document.getElementById("result").value = "";
             alert("Not a valid Computation");
             window.location.reload();
            }
            switch (symbol) {
              case "+":
                document.getElementById("ans").innerText =  +var1 + +var2;
                document.getElementById("result").value = +var1 + +var2;
                setVar(+var1 + +var2);
                break;
              case "-":
                document.getElementById("ans").innerText =  +var1 - +var2;
                document.getElementById("result").value = +var1 - +var2;
                setVar(+var1 - +var2);
                break;
              case "/":
                document.getElementById("ans").innerText =  +var1 / +var2;
                document.getElementById("result").value = +var1 / +var2;
                setVar(+var1 / +var2);
                break;
              case "*":
                document.getElementById("ans").innerText =  +var1 * +var2;
                document.getElementById("result").value = +var1 * +var2;
                setVar(+var1 * +var2);
                break;
            
              default:
                document.getElementById("ans").innerText =  "0";
                document.getElementById("result").value = "";
                break;
            }
            
            
        }
        return total;
  }
    
    
  
  // function handleClick2(props) {
  //   document.getElementById("ans").innerHTML = eval(document.getElementById("result").value);
  // }
  return (
    <div className="App">
          <div className="answer">Ans = <b  id="ans">0</b></div>
          <input type="text" onChange={handleClick} readOnly  placeholder="0" className="inputid" id="result"/>
           <hr/> 
           {/* calculator buttons below */}
           {/* button + */}
           <button className="opbut" value="+" onClick={handleClick}>+</button>
           {/* button - */}
           <button className="opbut" value="-" onClick={handleClick}>-</button>
           {/* button × */}
           <button className="opbut" value="*" onClick={handleClick}>×</button>
           {/* button ÷ */}
           <button className="opbut"  value="/" onClick={handleClick}>÷</button>
           {/* button 0 */}
           <button className="calbut" value={0} onClick={handleClick}>0</button>
           {/* button 1 */}
           <button className="calbut" value={1} onClick={handleClick}>1</button>
           {/* button 2 */}
           <button className="calbut" value={2}  onClick={handleClick}>2</button>
           {/* button 3 */}
           <button className="calbut" value={3} onClick={handleClick}>3</button>
           {/* button 4 */}
           <button className="calbut" value={4} onClick={handleClick}>4</button>
           {/* button 5 */}
           <button className="calbut" value={5} onClick={handleClick}>5</button>
           {/* button 6 */}
           <button className="calbut" value={6} onClick={handleClick}>6</button>
           {/* button 7 */}
           <button className="calbut" value={7} onClick={handleClick}>7</button>
           {/* button 8 */}
           <button className="calbut" value={8} onClick={handleClick}>8</button>
           {/* button 9 */}
           <button className="calbut"  value={9} onClick={handleClick}>9</button>
           {/* button ( */}
           <button className="opbut"  value="clear" onClick={handleClick}>C</button>
           {/* button ) */}
           <button className="opbut" value="d" onClick={handleClick}>Del</button>
           {/* button % */}
           <button className="opbut" value="%" onClick={handleClick}>%</button>
           {/* button y^ */}
           <button className="opbut" value={"."} onClick={handleClick}>.</button>
           {/* button total = */}
           <button className="ansbut" value="=" onClick={handleClick}>=</button>
           <hr/>
           <div className="appName">A Simple React Calculator - Jayflo</div>
        </div>
  );
  
}

export default App;
