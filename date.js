export  function getDate()
{
   let today = new Date();
    let options={
    weekday:"long",
    day:"numeric",
    month:"long"
}
var day=today.toLocaleString("en-US",options);
return day;
}

export  function getDay()
{
   let today = new Date();
    let options={
    weekday:"long",
   
}
var day=today.toLocaleString("en-US",options);
return day;
}
export default {
    getDate,
    getDay
  }