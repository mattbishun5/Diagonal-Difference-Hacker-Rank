
/*
 * HackerRank Diagonal Difference challenge.
  
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts an Array arr as a parameter.
 */

function diagonalDifference(arr) {

    var matrix = arr.length;

    var diag1 = 0;
    var diag2 = 0;

    for (let i=0; i<matrix; i++){

        for (let j=0; j<matrix; j++){

            if(i===j){

                diag1 += arr[i][j];
            }

            if (i+j === matrix -1){

                diag2 += arr[i][j];
            }
        }

        
    }

    return Math.abs(diag1 - diag2); 


}