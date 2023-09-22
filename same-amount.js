function sameAmount(str, reg1, reg2) {
    const regex1 = new RegExp(reg1, 'g');
    const regex2 = new RegExp(reg2, 'g');
    const resRegex1 = str.match(regex1) || [];
    const resRegex2 = str.match(regex2) || [];
  
    return resRegex1.length === resRegex2.length;
  }
  

const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
 ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`


 console.log(sameAmount(data, /h/, /w/))