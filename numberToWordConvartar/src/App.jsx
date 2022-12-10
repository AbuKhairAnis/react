import './App.css'
import { useState } from 'react';



function App() {
  const [number, setNumber] = useState(0)
  const [state, setState] = useState(' ')


  const handleChange = (e) => {
    const num = e.target.value
    setNumber(num);
  };


  const handleSubmit = (e) => {
    e.preventDefault()

    const word = inWords(number)
    setState(word)

  }

  const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    let n ;
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
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
