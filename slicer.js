function slice(input, startIndex, endIndex) {
    const length = input.length;
  
    if (startIndex < 0) {
      startIndex = Math.max(0, length + startIndex);
    }
  
    if (endIndex === undefined) {
      endIndex = length;
    } else if (endIndex < 0) {
      endIndex = Math.max(0, length + endIndex);
    }
  
    if (Array.isArray(input)) {
      return input.slice(startIndex, endIndex);
    }
}
  
