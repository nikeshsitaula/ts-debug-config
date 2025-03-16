class StringTreeNode {
  val: string;
  left: StringTreeNode | null;
  right: StringTreeNode | null;

  constructor(
    val: string,
    left: StringTreeNode | null = null,
    right: StringTreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const breadthFirstValuesRecursive = (
  queue: StringTreeNode[],
  values: string[] = []
): string[] => {
  if (queue.length === 0) return values;

  let current = queue.shift()!;
  values.push(current.val);

  if (current.left) queue.push(current.left);
  if (current.right) queue.push(current.right);

  return breadthFirstValuesRecursive(queue, values);
};

const treeRoot = new StringTreeNode("a");
treeRoot.left = new StringTreeNode("b");
treeRoot.right = new StringTreeNode("c");
treeRoot.left.left = new StringTreeNode("d");
treeRoot.left.right = new StringTreeNode("e");
treeRoot.right.right = new StringTreeNode("f");

console.log(breadthFirstValuesRecursive([treeRoot]));
