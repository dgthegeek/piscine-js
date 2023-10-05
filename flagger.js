function flags(obj) {
    const res = { alias: { h: 'help' } };
  
    if (Object.keys(obj).length === 0) return res;
  
    const help = obj.help;
    delete obj.help;
  
    const description = [];
  
    for (let key in obj) {
      res.alias[key[0]] = key;
      description.push(`-${key[0]}, --${key}: ${obj[key]}`);
    }
  
    res.description = description.length === 0
      ? ''
      : description.length === 1
      ? description[0]
      : description.join('\n');
  
    return res;
  }
  