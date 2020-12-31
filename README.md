# 🌎hoox

React hooks 状态持久化，全局共享

### 背景

最近看到 [hox](https://github.com/umijs/hox)，真的让我眼前一亮。由于它较低的关注度，为了在生产环境用的更放心，此仓库主要用于验证 hox 的原理，并实现一个简易版的 hox

### hox 给我带来了什么？

我一直都不喜欢 Redux 那一套，写起来太繁琐了，真的是苦 Redux 久矣，所以一直在找替代方案。

想要替代 Redux, 先来看看它给我带来了什么？

**全局状态共享。**

这是我使用 redux 的唯一理由。

如何让状态全局共享，且改变状态更新视图？

答案就是： hooks 状态持久化

#### 如何让 hooks 的状态持久化?

1. 状态持久化

- 新建一个 react 环境，并创建模拟组件
- 模拟组件接收 hook
- 将 hook 执行的返回结果保存下来
- 以后每一个调用的该 hook 的组件得到的是同一份返回结果

2. 更新状态

- 当 hook 状态发生改变，
- 触发模拟组件更新
- 进而触发更新 hook 的返回结果

### 例子

```js
import { createModel } from "../hoox";

function useCounter() {
  const [count, setCount] = React.useState(0);

  const sub = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  const action = {
    sub,
    add
  };

  return { count, action };
}

const Action = (props) => {
  const { count, action } = useCounter();
  return (
    <div>
      <h3>Action Component:</h3>
      <h1>{count}</h1>
      <button onClick={action.sub}>-</button>
      <button onClick={action.add}>+</button>
    </div>
  );
};

const Show = (props) => {
  const { count } = useCounter();
  return (
    <div>
      <h3>Show Component:</h3>
      {count}
      <hr />
    </div>
  );
};
```

点击加号或者减号都会触发 Action 和 Show 组件 count 状态的同步更新，[查看例子](https://codesandbox.io/s/github/goldEli/hoox)
