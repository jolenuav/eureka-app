import * as React from 'react';
import { Circle, G, Path, Svg } from 'react-native-svg';

function CafeDolceSvg(props: any) {
  return (
    <Svg height={40} viewBox='0 0 512 512' width={40} {...props}>
      <Path d='M24 88h144v144H24z' fill='#e74444' />
      <G fill='#ea8333'>
        <Path d='M24 88h144a32 32 0 01-32 32H56a32 32 0 01-32-32zM56 192h80v40H56zM56 160h80v16H56z' />
      </G>
      <Path
        d='M192.006 272a7.987 7.987 0 01-6.406-3.2L164 240H24a8 8 0 010-16h144a8 8 0 016.4 3.2l24 32a8 8 0 01-6.394 12.8z'
        fill='#6a7073'
      />
      <Circle cx={112} cy={344} fill='#7e8488' r={80} />
      <Path
        d='M112 432a88 88 0 1188-88 88.1 88.1 0 01-88 88zm0-160a72 72 0 1072 72 72.081 72.081 0 00-72-72z'
        fill='#6a7073'
      />
      <Path
        d='M64 352a8 8 0 01-8-8 56.063 56.063 0 0156-56 8 8 0 010 16 40.045 40.045 0 00-40 40 8 8 0 01-8 8zM96 397.271a7.978 7.978 0 01-2.666-.46 56.424 56.424 0 01-28-21.84 8 8 0 1113.324-8.858 40.323 40.323 0 0020 15.613A8 8 0 0196 397.271z'
        fill='#6a7073'
      />
      <Circle cx={408} cy={344} fill='#7e8488' r={80} />
      <Path
        d='M408 432a88 88 0 1188-88 88.1 88.1 0 01-88 88zm0-160a72 72 0 1072 72 72.081 72.081 0 00-72-72z'
        fill='#6a7073'
      />
      <Path
        d='M360 352a8 8 0 01-8-8 56.063 56.063 0 0156-56 8 8 0 010 16 40.045 40.045 0 00-40 40 8 8 0 01-8 8zM392 397.271a7.978 7.978 0 01-2.666-.46 56.424 56.424 0 01-28-21.84 8 8 0 1113.324-8.858 40.323 40.323 0 0020 15.613A8 8 0 01392 397.271z'
        fill='#6a7073'
      />
      <Path
        d='M369.552 222.874a8 8 0 00-11.308.365l-99.356 105.984-32.215-83.76 129.863-34.177a8 8 0 00-4.072-15.473L220.8 230.464l-13.374-33.435a8 8 0 10-14.856 5.942l14.041 35.1-100.27 100.27a8 8 0 0011.314 11.314l95.3-95.295 35.581 92.51a8 8 0 0013.3 2.6l108.08-115.29a8 8 0 00-.364-11.306z'
        fill='#d9dbdd'
      />
      <Path d='M256 352H112a8 8 0 010-16h144a8 8 0 010 16z' fill='#d9dbdd' />
      <Circle cx={112} cy={344} fill='#6a7073' r={16} />
      <Circle cx={256} cy={344} fill='#6a7073' r={32} />
      <Path
        d='M256 416a8 8 0 01-8-8v-64a8 8 0 0116 0v64a8 8 0 01-8 8z'
        fill='#d9dbdd'
      />
      <Path
        d='M272 416h-32a8 8 0 010-16h32a8 8 0 010 16zM168 168h48a32 32 0 0132 32h-80v-32z'
        fill='#6a7073'
      />
      <Path
        d='M408 352a8 8 0 01-7.478-5.154l-64-168a8 8 0 015.536-10.609l64-16a8 8 0 017.6 2.1c1.919 1.92 11.035 12.88 1.933 40.187a8 8 0 01-15.18-5.06c3.334-10 3.445-16.365 2.886-20.048l-48.611 12.153 60.791 159.577A8 8 0 01408 352z'
        fill='#d9dbdd'
      />
      <Circle cx={408} cy={344} fill='#6a7073' r={16} />
    </Svg>
  );
}

export default CafeDolceSvg;