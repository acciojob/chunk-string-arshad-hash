function chunkString(str, chunkSize) {
	if(str===null)return[];
	
    const result = [];
  
    for (let i = 0; i < str.length; i += chunkSize) {
      result.push(str.slice(i, i + chunkSize));
    }
  
    return result;
  }
  
  // Examples
  const str = prompt("Enter String.");
  const size = parseInt(prompt("Enter Chunk Size.")) ;
  alert(chunkString(str, size));
