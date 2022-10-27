# @0xreeko/naniteId

A random string generator to produce text that can be used as unique IDs. Great for creating IDs when mapping over objects and giving them unique values in the `key` prop.

**How to install**
```
npm i naniteid
```

**How to use**
```jsx
import { naniteId } from '@0xreeko/naniteId'

 let proxy = [
    {
      id: naniteId(),
      fullName: 'Leonis V',
      course: 'Software Engineering',
    },
    {
      id: naniteId(),
      fullName: 'Enrique V',
      course: 'Triple Sciences',
    },
    {
      id: naniteId(),
      fullName: 'Zancus V',
      course: "Latin",
    },
  ];

   console.log(proxy.forEach(item => console.log(item.id)));

   // x6xks84ss4c
   // 3afn08cdobi
   // gftevuudlsp
```