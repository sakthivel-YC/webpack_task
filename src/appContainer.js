function AppContainer() {
  var div = document.createElement("div");
  var h1 = document.createElement("h1");
  var p = document.createElement("p");

  h1.innerText = "Hello webpack";
  p.innerText = "This is paragraph contents";
  div.append(h1);
  div.append(p);
  return div;
}
export default AppContainer();
