//   questuin number 1 
// //  example 1
function maxProductSubarray(nums) {
    if (nums.length === 0) return 0;

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const tempMax = maxProduct;
        maxProduct = Math.max(nums[i], nums[i] * maxProduct, nums[i] * minProduct);
        minProduct = Math.min(nums[i], nums[i] * tempMax, nums[i] * minProduct);
        result = Math.max(result, maxProduct);
    }

    return result;
}

// Example = 2
const nums1 = [2, -3, -2, -4];
console.log(maxProductSubarray(nums1)); 

const nums2 = [-2, 0, -1];
console.log(maxProductSubarray(nums2)); 


//  question 2 
function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap[complement] !== undefined) {
        return [numMap[complement], i];
      }
      numMap[nums[i]] = i;
    }
    return [];
  }

  console.log(twoSum([2,7,11,15], 9)); 
  console.log(twoSum([3,2,4], 6)); 
  console.log(twoSum([3,3], 6));


// question = 3 
 function reverseWords(inputString) {
    
    const words = inputString.split(' ');

    
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = 'I love JavaScript quiz';
const reversedResult = reverseWords(inputSentence);
console.log(reversedResult); 



//   question4 
 let library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false
    }
  ];
  
  for (let i = 0; i < library.length; i++) {
    let book = library[i];
    console.log('Book: ' + book.title);
    console.log('Author: ' + book.author);
    console.log('Reading Status: ' + (book.readingStatus ? 'Read' : 'Not Read'));
    console.log('--------------------');
  }


// question 5
function amountCoins(amount , coins) {
    let result = [];
    coins.sort(function(a, b) { return b - a; });
  
    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i];
      while (amount >= coin) {
        amount -= coin;
        result.push(coin);
      }
    }
  
    return result;
  }
  
  console.log(amountCoins(46, [25, 10, 10, 2, 1]));




  
















