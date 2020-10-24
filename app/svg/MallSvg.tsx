import * as React from 'react';
import { Path, Svg } from 'react-native-svg';

function MallSvg(props: any) {
  return (
    <Svg height={50} viewBox='0 0 512 512' width={50} {...props}>
      <Path
        d='M280 192a8 8 0 01-8-8v-80a56 56 0 00-112 0v80a8 8 0 01-16 0v-80a72 72 0 01144 0v80a8 8 0 01-8 8z'
        fill='#dadcde'
      />
      <Path d='M296 472H24l16-320h240z' fill='#eb423f' />
      <Path d='M360 472h-64l-16-320h64z' fill='#d13330' />
      <Path
        d='M328.47 431.99c-.16.01-.32.01-.48.01a8 8 0 01-7.98-7.53l-16-272c-.01-.16-.01-.31-.01-.47h16.02l15.97 271.53a8.007 8.007 0 01-7.52 8.46z'
        fill='#a82a27'
      />
      <Path
        d='M488 472h-64l-1-12.93v-.01L408 264h64l14.75 191.69v.01z'
        fill='#eba72e'
      />
      <Path
        d='M456.8 431.96a7.322 7.322 0 01-.81.04 8 8 0 01-7.95-7.2l-.29-2.86-15.71-157.14a7.143 7.143 0 01-.04-.8h16.04l15.72 157.21.2 1.99a8 8 0 01-7.16 8.76z'
        fill='#e09f2c'
      />
      <Path
        d='M488 472h-9.62L456 438.42 433.62 472H424l-1-12.93v-.01l24.75-37.12 1.59-2.38a8.01 8.01 0 0113.32 0l1.1 1.65 22.99 34.48v.01z'
        fill='#e09f2c'
      />
      <Path d='M424 472H216l16-208h176z' fill='#f7b030' />
      <Path
        d='M328 416h-16a40.045 40.045 0 01-40-40v-64a8 8 0 0116 0v64a24.027 24.027 0 0024 24h16a24.027 24.027 0 0024-24v-64a8 8 0 0116 0v64a40.045 40.045 0 01-40 40z'
        fill='#e9eef2'
      />
      <Path d='M96 184h16v48H96z' fill='#dadcde' />
      <Path
        d='M104 192a8 8 0 01-8-8v-80a72 72 0 01144 0v80a8 8 0 01-16 0v-80a56 56 0 00-112 0v80a8 8 0 01-8 8z'
        fill='#e9eef2'
      />
      <Path d='M128 296H80v-64l24-16 24 16z' fill='#f7b030' />
    </Svg>
  );
}

export default MallSvg;