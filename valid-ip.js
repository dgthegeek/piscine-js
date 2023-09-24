function findIP(str) {
  const ipPattern =
    /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;

  return str.match(ipPattern) || [];
}
