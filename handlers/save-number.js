function saveNumberHandler() {
  debugger;
  // read new number from user input
  const x = document.getElementById("input").value;
  // read from state the data you will need for the next step
  numbers.all.push(numbers.current);
  // find the new biggest and smallest values
  if (x < numbers.smallest) {
    numbers.smallest = x;
  }
  if (x > numbers.biggest) {
    numbers.biggest = x;
  }
  // update state: new biggest, new smallest, new current & save the last current
  let newInput = x;
  // re-render the user interface with values stored in state
  document.getElementById("biggest").innerHTML = numbers.biggest;
  document.getElementById("smallest").innerHTML = numbers.smallest;
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "save number",
    newInput,
    numbers: JSON.parse(JSON.stringify(numbers))
  });
}
