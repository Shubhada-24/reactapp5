let addition = () =>{
 let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [result, setResult] = useState("");

  let calculate = () => {
    setResult(Number(num1) + Number(num2));
  };

    return(
            <div>
      <h1>Addition Calculator</h1>

      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Enter first number"
      />

      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Enter second number"
      />

      <button onClick={calculate}>Add</button>

      <h2>Result: {result}</h2>
    </div>
  );
};
    

export default addition;