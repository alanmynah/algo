class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  // O(n) time | O(1) space
  insert(value) {
    let currentNode = this
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value)
          break
        } else {
          currentNode = currentNode.left
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value)
          break
        } else {
          currentNode = currentNode.right
        }
      }
    }
    return this
  }

  // O(n) time | O(1) space
  contains(value) {
    let currentNode = this
    while (currentNode !== null) {
      if (currentNode < value) {
        currentNode = currentNode.left
      } else if (currentNode > value) {
        currentNode = currentNode.right
      } else {
        return true
      }
    }
    return false
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this
  }
}
