function MinHeap() {
  this.data = [];
}

MinHeap.prototype.insert = function(val) {
  this.data.push(val);
  this.bubbleUp(this.data.length-1);
};

MinHeap.prototype.bubbleUp = function(index) {
  while (index > 0) {
    // get the parent
    var parent = Math.floor((index + 1) / 2) - 1;
    
    // if parent is greater than child
    if (this.data[parent] > this.data[index]) {
      // swap
      var temp = this.data[parent];
      this.data[parent] = this.data[index];
      this.data[index] = temp;
    }
    
    index = parent;
  }
};

MinHeap.prototype.extractMin = function() {
  var min = this.data[0];
  
  // set first element to last element
  this.data[0] = this.data.pop();
  
  // call bubble down
  this.bubbleDown(0);
  
  return min;
};

MinHeap.prototype.bubbleDown = function(index) {
  while (true) {
    var child = (index+1)*2;
    var sibling = child - 1;
    var toSwap = null;
    
    // if current is greater than child
    if (this.data[index] > this.data[child]) {
      toSwap = child;
    }
    
    // if sibling is smaller than child, but also smaller than current
    if (this.data[index] > this.data[sibling] && (this.data[child] == null || (this.data[child] !== null && this.data[sibling] < this.data[child]))) {
        toSwap = sibling;
    }
    
    // if we don't need to swap, then break.
    if (toSwap == null) {
      break;
    }
    
    var temp = this.data[toSwap];
    this.data[toSwap] = this.data[index];
    this.data[index] = temp;
    
    index = toSwap;
  }
};


var swap = function (array, idx1, idx2) {
  var temp = array[idx1];
  array[idx1]= array[idx2];
  array[idx2] = temp;
}
var MaxHeap = function () {
  this.heap = [];
  this.count = 0;
};

MaxHeap.prototype.insert = function (value) {
  if(this.count === 0){
    this.heap.push(value);
    this.count++;
  } else {
    this.heap.push(value);
    this.count++;
    var currentIndex = this.count - 1;
    var parentIndex = Math.floor((currentIndex - 1)/ 2);
    while( this.heap[parentIndex] < this.heap[currentIndex] ){
      swap(this.heap, parentIndex, currentIndex); 
      if(parentIndex === 0){
        break;
      } else {
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1)/ 2);
      }
    }
  }

}

MaxHeap.prototype.deleteMax = function () {
  swap(this.heap, this.count - 1, 0);
  var deletedValue = this.heap.pop();
  var currentIndex = 0;
  var leftChild = (currentIndex * 2) + 1;
  var rightChild = (currentIndex * 2) + 2;
  var maxChild = this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
  while( this.heap[currentIndex] < this.heap[leftChild] || this.heap[currentIndex] < this.heap[rightChild] ){
    if(this.heap.length === 2){
      if(this.heap[0] > this.heap[1]){
        break;
      } else {
        swap(this.heap, 0, 1);
        break;
      }
    }
    swap(this.heap, currentIndex, maxChild);
    currentIndex = maxChild;
    leftChild = (currentIndex * 2) + 1;
    rightChild = (currentIndex * 2) + 2;
    maxChild = this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
  }

  this.count --;
  return deletedValue;
}
MaxHeap.prototype.peak = function () {
  return this.heap[0]
}



var mediumUnsortedArray = function (arr) {
  var maxHeap = new MaxHeap();
  var minHeap = new MinHeap();

  arr.forEach( (ele, idx)=>{
    if(idx === 0){
      minHeap.insert(ele);
    } else {
      if(minHeap.data[0] < ele){
        minHeap.insert(ele);
      } else {
        maxHeap.insert(ele);
      }
    }

    if( minHeap.data.length > maxHeap.count + 1){
      maxHeap.insert(minHeap.extractMin());
    }

    if( minHeap.data.length + 1 < maxHeap.count){
      minHeap.insert(maxHeap.deleteMax());
    }
  });

  console.log(minHeap, maxHeap)
  if( (minHeap.data.length + maxHeap.count) % 2 === 0){
    return (minHeap.data[0] + maxHeap.heap[0]) / 2;
  } else {
    if(minHeap.data.length > maxHeap.count){
      return minHeap.data[0]
    } else {
      return maxHeap.heap[0]
    }
  }
}



console.log(mediumUnsortedArray([5,4,3,2,1]));
console.log(mediumUnsortedArray([9,8,7,6,5]));
console.log(mediumUnsortedArray([1,3,5,2,4,6]));
console.log(mediumUnsortedArray([7,8,9,4,2,0]))
// console.log(mediumUnsortedArray());
// console.log(mediumUnsortedArray());
