let user = prompt("Enter S W or G");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI];

const match = (cpu, user) => {
  if (cpu == user) return "nobody";
  else if (cpu == "S" && user == "W") {
    return "cpu won";
  } else if (cpu == "S" && user == "G") {
    return "user won";
  } else if (cpu == "G" && user == "S") {
    return "cpu won";
  } else if (cpu == "G" && user == "W") {
    return "user won";
  } else if (cpu == "W" && user == "G") {
    return "cpu won";
  } else if (cpu == "W" && user == "S") {
    return "user won";
  }
};
let res=match(cpu,user);
console.log("the result is:"+res);
