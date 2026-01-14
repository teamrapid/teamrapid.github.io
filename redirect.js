// GENERATED AUTOMATICALLY, DO NOT EDIT
let list = "W3siZnJvbSI6ImNoYXRyb29tIiwidG8iOiJodHRwczovL3pvb20udXMvai8xMjM0NWFiY2RlZiJ9LHsiZnJvbSI6Imdvb2dsZWRvYyIsInRvIjoiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xMjM0NWFiY2RlZiJ9XQ=="; // empty array base64 encoded

list = JSON.parse(window.atob(list));

const baseurl = "";
const from = window.location.pathname
  .toLowerCase()
  .replace(new RegExp(`^/*${baseurl}`), "")
  .replace(/^(\/+)/, "");

const to = list.find((entry) => entry?.from === from)?.to;

console.info({ from, to });

if (to)
  window.location.href = to;
