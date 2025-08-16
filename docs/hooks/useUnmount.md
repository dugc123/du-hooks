---
nav:
  path: /hooks
---

# useUnmount

只在组件卸载时执行的 Hook。

## 代码演示

### 基础用法

<code src="../../src/useUnmount/index.ts"></code>

## API

```typescript
useUnmount(fn: () => void);
```

### 参数

| 参数 | 说明             | 类型         | 默认值 |
| ---- | ---------------- | ------------ | ------ |
| fn   | 组件卸载时执行的函数 | `() => void` | -      |