function makeRowClmZero(matrix) {
    let row = [];
    let column = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if(matrix[i][j] === 0) {
          row[i] = true;
          column[j] = true;
        }
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if(row[i] || column[j]) {
          matrix[i][j] = 0;
        }
      }
    }
  }