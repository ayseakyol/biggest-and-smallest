function saveNumberHandler() {
  debugger;
  // read new number from user input
  const newCurrent = Number(document.getElementById("input").value);
  // read from state the data you will need for the next step
  const oldCurrent = numbers.current;
  const oldBiggest = numbers.biggest;
  const oldSmallest = numbers.smallest;
  // find the new biggest and smallest values
  const newBiggest = Math.max(oldBiggest, newCurrent);
  const newSmallest = Math.min(oldSmallest, newCurrent);

  // update state: new biggest, new smallest, new current & save the last current
  numbers.biggest = newBiggest;
  numbers.smallest = newSmallest;
  numbers.current = newCurrent;
  numbers.all.push(oldCurrent);

  // re-render the user interface with values stored in state
  document.getElementById("biggest").innerHTML = numbers.biggest;
  document.getElementById("smallest").innerHTML = numbers.smallest;

  // log user interaction: handler name, user input, new state
  log.push({
    handler: "save number",
    newInput: newCurrent,
    numbers: JSON.parse(JSON.stringify(numbers))
  });
}
