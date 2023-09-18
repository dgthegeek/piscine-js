function words(inputString) {
    return inputString.split(' ');
  }
  
  function sentence(arrayOfStrings) {
    return arrayOfStrings.join(' ');
  }
  
  function yell(inputString) {
    return inputString.toUpperCase();
  }
  
  function whisper(inputString) {
    return `*${inputString.toLowerCase()}*`;
  }
  
  function capitalize(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
  }
  

  