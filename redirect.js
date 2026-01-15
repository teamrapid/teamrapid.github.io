// GENERATED AUTOMATICALLY, DO NOT EDIT
let list = "W3siZnJvbSI6ImludHJhbmV0IiwidG8iOiJodHRwczovL2FpcnRhYmxlLmNvbS9hcHAwaXdac2JMM2hFSmpyYi9wYWdlTHpZb1EyYm1DcURpYSJ9LHsiZnJvbSI6ImhlbHAiLCJ0byI6Imh0dHBzOi8vYWlydGFibGUuY29tL2FwcDBpd1pzYkwzaEVKanJiL3BhZ3NrcEJNdUVsQzkxdmRDIn0seyJmcm9tIjoib25ib2FyZGluZyIsInRvIjoiaHR0cHM6Ly9mb3JtLmZpbGxvdXQuY29tL3QvMXUxQ2EyYU1nYXVzP2lkPSJ9LHsiZnJvbSI6Im9mZmJvYXJkaW5nIiwidG8iOiJodHRwczovL2Zvcm0uZmlsbG91dC5jb20vdC85SmdaMzVVcHZKdXM/aWQ9In0seyJmcm9tIjoidHJhaW5pbmciLCJ0byI6Imh0dHBzOi8vZm9ybS5maWxsb3V0LmNvbS90L2ZkNHl5a0JXVVF1cz9pZD0ifSx7ImZyb20iOiJhbGwtaGFuZHMiLCJ0byI6Imh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzBBSzJfSTJWSEVVbVJVazlQVkEifSx7ImZyb20iOiJzbGFjayIsInRvIjoiaHR0cHM6Ly9qb2luLnNsYWNrLmNvbS90L3JhcmVjb2xsYWJvcmF0aXZlL3NoYXJlZF9pbnZpdGUvenQtM21zZGpodXBoLXV2cFRSUTNOSVBfcEdkQXFlZU1xd3cifV0="; // empty array base64 encoded

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
