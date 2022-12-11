/*
First Task :
You are asked to write an algorithm that fulfills the following: 

Name: Dot product
Description:
Write a function, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
*/

function dotProduct(vector1, vector2) {
    let result = 0;
    for (let i = 0; i < vector1.length; i++) {
        result = result + (vector1[i] * vector2[i])
    }
    return result;
}

function orthogonal_check(vec1, vec2) {
    if (dot_product(vec1, vec2) === 0) {
        return ("Vectors [" + vec1 + "] and [" + vec2 + "] are orthogonal");
    } else {
        return ("Vectors [" + vec1 + "] and [" + vec2 + "] are not orthogonal")
    }

}




/*Second Task:
Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands. Each time we take a new card we put it in the right place in our hand.

Each time work only with the first i-1 element from of the array
Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.
*/
function insertionSort(arr, n) {
    let i,
        key,
        j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}