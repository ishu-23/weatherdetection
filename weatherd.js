async function hello() {
  const key = "b807d9abba407f927991b9548a707920";
  
  var searchinput = document.getElementById("search-input").value;
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchinput}&appid=${key}&units=metric`;
  
  console.log(searchinput);
  
  const response = await fetch(url);
  
  var data = await response.json();
  
  const {name} = data;
  const {icon, description} = data.weather;
  const {temp, humidity} = data.main;
  const {speed} = data.weather;
  
  console.log(data);
  console.log(name,icon,description,temp,humidity,speed);
  
  document.getElementById("temp").value=temp;
}