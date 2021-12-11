function getInfo(infoObj) {
  let { name, info } = infoObj;
  let { partners } = info;
  if (!name) {
    name = "Unknown";
  }
  console.log(`Name: ${name}`);
  console.log(`Partners: ${partners[0]} ${partners[1]}`);
}

const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

getInfo(organisation);
