# Utility for Angular (vx+)[![Build Status](https://travis-ci.org/uttesh/ngu-utility.svg?branch=master)](https://travis-ci.org/uttesh/ngu-utility)

The utility components,service,directives and pipes for Angular.

## Quick Start

```
npm install ngu-utility --save
```

### Angular Version

This module library is built to work with **Angular 2.3.0+**, and support ahead-of-time compilation.

### Module Format

This library ships as a "flat ES module" (FESM). This means that all the JavaScript code is located in a single ES5-compatible file, but makes use of ES2015 `import` and `export` statements.

Webpack, Systemjs and Rollup all support this format and should work without problems.

A UMD bundle is also provided for systems which do not support FESM.

## Simple Example

```TypeScript
// app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { NguUtilityModule } from 'ngu-utility/ngu-utility.module'; // <-- import the module

@NgModule({
  declarations: [
  
  ],
  imports: [
  
   NguUtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
### 1. Letter Avatar Component

 letter avatar component, letter avatar for the given string. Like gmail or google inbox text avatar i.e. First letter of the given data will be the avatar

```HTML
<ngu-letter-avatar avatar-data='{{title}}' ></ngu-letter-avatar>
```
## Option attirbutes

You can affect how letteravatar operates with the following settings:

attribute name | default | description
-------------------------|---------|------------
`avatar-custom-bg-color` | No default value | Using this attribute set the custom color for avatar background.
`avatar-dynamic` | false | Set this attribute to true if dynamically avatar needs to be generated on data change.
`avatar-rotate-degree` | 0 | Set this attribute required degrees of rotation of the avatar.
`avatar-alphabet-colors` | default color set | Using this attribute set the custom colors for the alphabets only.
`avatar-char-count` | 1 | Specifies the number of letters to displayed. to generate combined letter avatar of first name and last name which are separated by space then set the value to '2'
`avatar-data` |  | Input data i.e. email, names...etc -OR- If image already exists for item, set image URL or image data
`avatar-height` | 50px | set the height for the avatar
`avatar-width` | 50px | set the width for the avatar
`avatar-font-weight` | 400 | set the font weight for the  avatar
`avatar-font-size` | 30px | set the font size for the letter
`avatar-shape` | square  | set the shape for the avatar. set 'round' for rounded avatars
`avatar-font-family` | HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif | set the font Family of the avatar.
`avatar-border` | false | set the avatarborder to 'true' for the white border to avatar.
`avatar-custom-border` | no default value | using this attribute set the custom style to avatar borders i.e <code> "border:5px solid black"</code>.

 preview snaps :
 
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/demo1.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/demo2.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/numbers.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/special_charaters.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/chinese.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/kannada.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/round_shape_digit_special.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/round_chinese_kannada.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/avatar_border1.png)
![demo](https://raw.github.com/uttesh/ngletteravatar/master/demo/avatar_border2.png)


## Building from source

Requires globally-installed node (tested with v5.x) & npm. 

```
npm install
npm run build 
```

## Contributions

For problems/suggestions please create an issue on Github.

## Contributors

* [@uttesh](https://twitter.com/uttesh)

# License

The MIT License

Copyright (c) 2017 Uttesh Kumar T.H. http://www.uttesh.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

