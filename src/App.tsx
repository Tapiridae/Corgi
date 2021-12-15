import type { Component } from 'solid-js';
import { createSignal, createEffect, createMemo } from 'solid-js';

interface IProps {
  name: string;
  age: number;
  cool: boolean;
  fn: () => void;
}

const App: Component = () => {
  const [getValue, setValue] = createSignal<IProps>(
    {
      name: 'weishaodaren',
      age: 77,
      cool: false,
      fn: () => void 0,
    },
    {
      equals: (prev, next) => {
        console.log(prev, next, `equals`);
        return false;
      },
    }
  );

  const [a, setA] = createSignal({
    name: 'weishaodaren-001',
    age: 7,
    cool: true,
  });

  createEffect((prev) => {
    const sum = a().age + prev;
    return sum;
  }, 0);

  setA({ name: 'weishaodaren-002', age: 2, cool: true });

  setValue((prev) => ({ ...prev, name: 'lalalalal', fn: () => alert(1) }));

  const _getValue = createMemo((prev) => {
    const sum = a().age + prev;
    return sum;
  }, 0);

  return (
    <div>
      <header>
        <p>{getValue().name}</p>
        <p>{getValue().age}</p>
        <p onClick={() => getValue().fn()}>{getValue().cool.toString()}</p>
      </header>
    </div>
  );
};

export default App;
