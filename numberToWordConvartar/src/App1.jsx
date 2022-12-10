import './App.css'
import { useState } from 'react';



function App() {
  const [number, setNumber] = useState(0)
  const [state, setState] = useState(' ')

  const numberString = number.toString();

  const handleChange = (e) => {
    const num = e.target.value
    setNumber(num);
  };


  function numToWord(numbers) {
    let ones = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
      'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];

    let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function tentoword(num) {
      const str = num.toString()

      if (num < 20) {
        return ones[num];
      }
      else {
        return tenth[str[0]] + ' ' + ones[str[1]];
      }

    }

    if (numbers < 0) return 'Negative numbers are not supported.'
    if (numbers == 0) return "zero";
    if (numbers < 20) {
      return ones[numbers]
    }

    if (numberString.length == 2) {
      return tenth[numberString[0]] + ' ' + ones[numberString[1]];
    };
    if (numberString.length == 3) {
      if (numberString[1] == 0 && numberString[2] == 0) {
        return ones[numberString[0]] + "Hundred";
      }
      if (numberString[1] == 0 && numberString[2] !== 0) {
        return ones[numberString[0]] + "Hundred " + ones[numberString[2]];
      }
      if (numberString[1] !== 0) {
        return ones[numberString[0]] + "Hundred " + tentoword(numberString[1] + numberString[2])
      }

    };
    if (numberString.length == 4) {
      if (numberString[1] == 0 && numberString[2] == 0 && numberString[3] == 0) {
        return ones[numberString[0]] + "Thousand";
      }
      if (numberString[1] == 0 && numberString[2] == 0 && numberString[3] !== 0) {
        return ones[numberString[0]] + "Thousand"+" " +ones[numberString[3]];
      }
    }



  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const cd = numToWord(number)
    setState(cd)


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="num" >Input Number</label>
        <input type="number" name="number" id='num' onChange={handleChange} value={number} />
        <input type="submit" value="Convert Word" />
      </form>
      <h3>Word:{state} </h3>
    </div>
  )
}

export default App
