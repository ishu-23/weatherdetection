var searchinput=document.getElementById("search-input");
const searchbutton=document.getElementById("search-button");
const apikey="b807d9abba407f927991b9548a707920";
const url="https://api.openweathermap.org/data/2.5/weather?q={searchinput}&appid={apikey}";
async function getapi(url)
{
  const response =await fetch(url);
  var data=await response.json();
  alert(data);
  alert('hi');
}
getapi(url);



