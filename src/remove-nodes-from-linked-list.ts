type ListNode = number[]

function removeNodes(head: ListNode | null): ListNode | null {
  if (!head) {
    return head
  }
  for (let index = 0; index < head.length; index++) {
    if (head[index] < head[index + 1]) {
      head = head.slice(index + 1)
      index++
    }
  }

  console.log(head)

  return head
}

export default removeNodes
