/**
 * desc: 在组件首次渲染时，执行方法。
 */

import { message } from 'antd';
import { useBoolean, useMount } from 'du-hooks';
import React from 'react';

const MyComponent = () => {
  useMount(() => {
    message.info('mount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, { toggle }] = useBoolean(false);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
