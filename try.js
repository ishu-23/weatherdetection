var searchinput=document.getElementById("search-input").value;
const searchbutton=document.getElementById("search-button").value;
const key="b807d9abba407f927991b9548a707920";
const url='https://api.openweathermap.org/data/2.5/weather?q=${searchinput}&appid=${key}&units=metric';
async function getapi(url)
{ console.log(searchinput)
  console.log(key)
  const response =await fetch(url);
  var data=await response.json();
  console.log(data);
}
