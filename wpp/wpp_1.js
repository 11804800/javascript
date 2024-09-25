const date = new Date();

console.log(date.getDay());


const days=[
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
]

const timeformat = Intl.DateTimeFormat("en-in", {
  timeStyle: "medium",
});


console.log("Today is "+days[date.getDay()]);
console.log("Current time is : " + timeformat.format(date));
