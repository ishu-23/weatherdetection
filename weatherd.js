async function hello()
{ const key="b807d9abba407f927991b9548a707920";
  var searchinput=document.getElementById("search-input").value;
  const url='https://api.openweathermap.org/data/2.5/weather?q=Bhoom&appid=b807d9abba407f927991b9548a707920';
  console.log(searchinput);
  const response =await fetch(url);
  var data=await response.json();

  console.log(data);
}



