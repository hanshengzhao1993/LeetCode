/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
 
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// first implemetation
var addTwoNumbers = function(l1, l2) {
   var currentFirstLL = l1;
   var currentSecondLL = l2;
   var newLinkedList = null;
   var pastAddedTo10 = false;
   while( currentSecondLL && currentFirstLL ){
    var addedValue = currentFirstLL.val + currentSecondLL.val;
    if(addedValue >= 10){
        if( newLinkedList === null ){
            if(pastAddedTo10){
                newLinkedList = new ListNode((addedValue % 10) + 1 )                
            } else {
                newLinkedList = new ListNode(addedValue % 10)  
            }
        } else {
            var currentLinkedList = newLinkedList;
            while(currentLinkedList.next){
                currentLinkedList = currentLinkedList.next;
            }
            if(pastAddedTo10){
                currentLinkedList.next = new ListNode((addedValue %10) + 1)
            } else {
                currentLinkedList.next = new ListNode( addedValue % 10)
            }
        }
        pastAddedTo10 = true;
    } else {
        if( newLinkedList === null ){
            if(pastAddedTo10){
                newLinkedList = new ListNode(addedValue + 1 )                
            } else {
                newLinkedList = new ListNode(addedValue)  
            }
        } else {
            var currentLinkedList = newLinkedList;
            while(currentLinkedList.next){
                currentLinkedList = currentLinkedList.next;
            }
            if(pastAddedTo10){
                currentLinkedList.next = new ListNode(addedValue + 1)
            } else {
                currentLinkedList.next = new ListNode( addedValue)
            }
        }
        pastAddedTo10 = false;
    }
    
    currentSecondLL = currentSecondLL.next;
    currentFirstLL = currentFirstLL.next;
   }
   return newLinkedList;
};

var addTwoList = function (l1, l2) {
  var array = [];
  while(l1 || l2){
    console.log(l1, l2)
    if(l2 === null || l1 === null){
      if(l1.val === null){
        array.push(l2.val);
        l2 = l2.next;
      } else {
        array.push(l1.val);
        l1 = l1.next;
      }
    } else {
      array.push(l1.val + l2.val)
      l1 = l1.next;
      l2 = l2.next;
    }
  }
  array.forEach( (ele, idx)=>{
    if(ele >= 10){
      if(array[idx + 1]){
        array[idx + 1] = array[idx + 1] + 1; 
      } else {
        array[idx + 1] = 1;
      }
    }
    array[idx] = array[idx] % 10;
  })
  var newLinkedList = null;

  for(var i = 0; i < array.length; i++){
    if(newLinkedList === null){
      newLinkedList = new ListNode(array[i]);
    } else {
      var currentNode = newLinkedList;
      while(currentNode){
        if(currentNode.next === null){
          break;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new ListNode(array[i])
    }
  }
  return newLinkedList;

}

// var linkedList1st = new ListNode(2);
// var linkedList2nd = linkedList1st.next = new ListNode(4);
// var linkedList3rd = linkedList2nd.next = new ListNode(3);


// var seconnd = new ListNode(5);
// seconnd.next = new ListNode(6);
// seconnd.next.next = new ListNode(4);

var l1 = new ListNode(1);
l1.next = new ListNode(8);

var l2 = new ListNode(0);

// console.log(linkedList1st, seconnd)
// console.log(addTwoNumbers(linkedList1st, seconnd))
// console.log(addTwoList(linkedList1st, seconnd));
console.log(addTwoList(l1,l2))
