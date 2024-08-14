async function Add() {
  return 5 + 7;
}
async function display() {
  const result = await Add();
  console.log("The result is =", result);
}

display();

