//import fetch from "node-fetch";

//-------------------MAP--------------------------


fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then (list => {
    return list.map (element => {
      return element.id;
    })
  })
  .then (modList => {
      console.log("Mapped IDs (Map) : " + modList);
  });
  

//--------------------FILTER-------------------------


fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then (list => {
    return list.filter (element => element.id >= 4)
  })
  .then (listFilteredID => {
    return listFilteredID.map (element => {
      return element.id;
    })
  })
  .then (listFiltered => console.log ("Filtered list of IDs (Filter): " + listFiltered));

//----------------------REDUCE-----------------------

const initialValue = 0;
fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then (list => {
    return list.map (element => {
      return element.id;
    })
  })
  .then (listID => { 
    return listID.reduce ((prev, next) => prev + next, initialValue)
  })
  .then(sum => {
    console.log("Sum of all IDs (Reduce) : " + sum);
  })