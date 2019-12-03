
/*
 * HackerRank Diagonal Difference challenge.
  
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER of the difference between two diagonals of a given matrix.
 * The function accepts an Array arr as a parameter. This array is a Matrix, in this case is 3 by 3.
 */

function diagonalDifference(arr) {

    var matrix = arr.length; //variable for length of array parameter

    var diag1 = 0; //main diagonal
    var diag2 = 0; //second diagonal

    for (let i=0; i<matrix; i++){

        for (let j=0; j<matrix; j++){

            if(i===j){ //if the indexes match up then add the diagonal to the arr parameter.

                diag1 += arr[i][j];
            }

            if (i+j === matrix -1){ //if the two indexes, equal 2 which is one less than 3, then add this diagonal to array matrix parameter

                diag2 += arr[i][j];
            }
        }

        
    }

    return Math.abs(diag1 - diag2);  //return absolute difference of two diagonals in Matrix


}