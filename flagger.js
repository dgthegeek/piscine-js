function flags(obj) {
    const res = { alias: { h: 'help' } };
  
    if (Object.keys(obj).length === 0) return res;
  
    const help = obj.help;
    delete obj.help;
  
    res.description = (help || Object.keys(obj)).map(key => `-${key[0]}, --${key}: ${obj[key]}`).join('\n');
  
    return res;
  }
  