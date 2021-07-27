
大致说明：
看上面的框架图，先抓住它的主干，即 Collection 和 Map。
1、Collection 是一个接口，是高度抽象出来的集合，它包含了集合的基本操作和属性。Collection 包含了 List 和 Set 两大分支。
• List 是一个有序的队列，每一个元素都有它的索引。第一个元素的索引值是 0。List 的实现类有 LinkedList, ArrayList, Vector, Stack。
• Set 是一个不允许有重复元素的集合。Set 的实现类有 HastSet 和 TreeSet。HashSet 依赖于 HashMap，它实际上