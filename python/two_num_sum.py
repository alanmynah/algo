# O(n^2) time | O(1) space


def twoNumSum(arr, targetSum):
    for i in range(len(arr) - 1):
        firstNum = arr[i]
        for j in range(i + 1, len(arr)):
            secondNum = arr[j]
            if firstNum + secondNum == targetSum:
                return sorted([firstNum, secondNum])
    return []

# O(n) time | O(n) space


def twoNumSum1(arr, targetSum):
    nums = {}
    for num in arr:
        possibleMatch = targetSum - num
        if possibleMatch in nums:
            return sorted([possibleMatch, num])
        else:
            nums[num] = True
    return []

# O(nlog(n)) time | O(1) space


def twoNumSum2(arr, targetSum):
    arr.sort()
    leftNum = 0
    rightNum = len(arr) - 1
    while leftNum < rightNum:
        currentSum = arr[leftNum] + arr[rightNum]
        if currentSum == targetSum:
            return [arr[leftNum], arr[rightNum]]
        elif currentSum < targetSum:
            leftNum += 1
        elif currentSum > targetSum:
            rightNum -= 1
    return []
