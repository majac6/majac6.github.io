---
title: "React 18의 새로운 기능들"
date: "2024-01-20"
description: "React 18에서 추가된 Concurrent Features와 새로운 Hooks에 대해 알아봅니다."
tags: ["react", "javascript", "frontend"]
---

# React 18의 새로운 기능들

React 18이 출시되면서 많은 새로운 기능들이 추가되었습니다. 이 글에서는 주요 변경사항들을 살펴보겠습니다.

## Concurrent Features

React 18의 가장 큰 변화는 Concurrent Features의 도입입니다.

### Automatic Batching

이전에는 React 이벤트 핸들러 내에서만 배칭이 자동으로 처리되었지만, React 18에서는 모든 업데이트가 자동으로 배칭됩니다.

```javascript
// React 18 이전
setTimeout(() => {
  setCount(c => c + 1); // 리렌더링 발생
  setFlag(f => !f);     // 리렌더링 발생
}, 1000);

// React 18 이후
setTimeout(() => {
  setCount(c => c + 1); // 배칭됨
  setFlag(f => !f);     // 배칭됨
}, 1000);
```

### Suspense for Data Fetching

서버 사이드 렌더링에서 Suspense를 사용할 수 있게 되었습니다.

```javascript
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Comments />
    </Suspense>
  );
}
```

## 새로운 Hooks

### useTransition

UI를 차단하지 않고 상태 업데이트를 표시할 수 있습니다.

```javascript
function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      setCount(c => c + 1);
    });
  }

  return (
    <div>
      {isPending && <Spinner />}
      <button onClick={handleClick}>
        Count: {count}
      </button>
    </div>
  );
}
```

### useDeferredValue

값의 업데이트를 지연시킬 수 있습니다.

```javascript
function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query);
  
  return (
    <ul>
      {search(deferredQuery).map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

## 새로운 Root API

React 18에서는 새로운 Root API를 사용합니다.

```javascript
// React 18 이전
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, container);

// React 18 이후
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(container);
root.render(<App />);
```

## 마무리

React 18의 새로운 기능들은 성능과 사용자 경험을 크게 향상시킵니다. 특히 Concurrent Features는 미래의 React 개발 방향을 제시하고 있습니다.

앞으로 더 많은 기능들이 추가될 예정이니 계속해서 주목해보시기 바랍니다! 🎉 