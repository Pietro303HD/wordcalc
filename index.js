function stringCalc(string, returnValues)  {
    let pattern = [["a", "1"],["b", "2"],["c", "3"],["d", "4"],["e", "5"],["f", "6"],["g", "7"],["h", "8"],["i", "9"],["j", "10"],["k", "11"],["l", "12"],["m", "13"],["n", "14"],["o", "15"],["p", "16"],["q", "17"],["r", "18"],["s", "19"],["t", "20"],["u", "21"],["v", "22"],["w", "23"],["x", "24"],["y", "25"],["z", "26"]];
    let total = 0;
    let values = [];
    let characters = string.split("");
    characters.forEach((element, index) => {
      let char = pattern.find(x => element == x[0]);
      if (!char) {
        if (!parseInt(element)) {
          char = ["", "0"]
        } else {
        char = ["", element]
      };}
      let value = char[1] || element;
      values.push(value);
      });
      values.forEach((element, index) => {
        let num = parseInt(element);
        total = total + num;
        });
        if (returnValues == 1) return values
        return total
    }
    
    /* seed is the order of the values
    normal (default) seed is: 0123456789, bla bla bla
    
    cool seed: 84726510329
    */
    
    function setSeed(value, seed) {
      let randomizedValues = [];
      seed = seed.split("");
      seed.forEach((element, index) => {
        randomizedValues.push(value[parseInt(element)])
        if (index > 9) {

        }
      });
      
      return randomizedValues
    }
    
    function stringFind(value) {
      let pattern = [["a", "1"],["b", "2"],["c", "3"],["d", "4"],["e", "5"],["f", "6"],["g", "7"],["h", "8"],["i", "9"],["j", "10"],["k", "11"],["l", "12"],["m", "13"],["n", "14"],["o", "15"],["p", "16"],["q", "17"],["r", "18"],["s", "19"],["t", "20"],["u", "21"],["v", "22"],["w", "23"],["x", "24"],["y", "25"],["z", "26"]];
    
      pattern.forEach((element) => {
        console.log(`${element[0]}:${Math.round(value / parseInt(element[1]))}`)
      })
    }
    let string = "eu odeio lavar prato"
    
    console.log(`string:${string}`)
    console.log(`calc:${stringCalc(string, 1)}`)
    console.log(`uhh:${setSeed(stringCalc(string, 1), '84726510329')}`)
    console.log(`total:${stringCalc(string)}`)
    stringFind(stringCalc(string))