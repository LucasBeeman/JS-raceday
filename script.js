let raceNumber = Math.floor(Math.random() * 1000);
var earlyReg = true;
var age = 18;
var adultMin = 18;
var raceTime = "";

if (earlyReg && age > adultMin)
{
  raceNumber = raceNumber + 1000;
  raceTime = '9:30 am'
  console.log(`you will start racing at ${raceTime}`);
  console.log(`your race number is ${raceNumber}`);
}
else if (earlyReg === false && age >= adultMin)
{
  raceTime = "11:00 am";
  console.log(`you will start racing at ${raceTime}`);
  console.log(`your race number is ${raceNumber}`);
}
else if (age < adultMin)
{
  raceTime = "12:30pm";
  console.log(`you will start racing at ${raceTime}`);
  console.log(`your race number is ${raceNumber}`);
}
else
{
  console.log("see the registration desk");
}