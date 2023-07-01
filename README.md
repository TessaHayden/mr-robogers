# Mr. Roboger's Neighborhood

By Tessa Hayden

The program will display a count up to the user's inputed number then return the list with the numbers 1, 2 & 3 replaced by words.

#### Technologies used:

1. HTML
2. CSS
3. Javascript
4. Bootstrap
5. Web APIs

### Description:

 For the numbers 1, 2, 3, they will be replaced with "beep", "boop" and "Won't you be my neighbor?" - respectively.  The hierarchy of the digit replacement for numbers containing more than one of the digits to-be replaced is as follows, 3 > 2, 2 > 1. Therefore, 11 will be replaced with "beep", 12 will be replaced with "boop" and 13 will be replaced with "Won't you be my neighbor?".

#### Setup:

- _Clone Repository to your desktop_
- _Navigate to the top level of directory, index.html_
- _Open index.html in your browser_

#### Link to repository:

https://github.com/TessaHayden/mr-robogers

#### Known Bugs:

The program does not account for negatives or decimals.

#### TDD:
> Describe: replaceNum()
>
>Test: "It iterates from 0 to user's inputed number."
>Code: 
>let userInputNum = "6"
>let countNum = 0;
>Expected Output: [0, 1, 2, 3, 4, 5, 6];
>
>Test: "It should replace 1 with 'beep', 2 with 'boop' & 3 with 'Won't you be my neighbor?'"
>Code:
>forEachList.map();
>beepList.push();
>Expected Output: [0, beep, boop, "Won't you be my neighbor?"]
>
>Test: "It should use logic to determine substitution precedence for 1, 2 & 3."
>Code:
>if (el.includes("3" || "2") === true);
>else if (el.includes("2"));
>else if (el.includes("1") === true);
>Expected Output: [..., 9, "beep", "beep", "boop", "Won't you be my neighbor?"]

MIT
copyright (c) _2023_ _Tessa Hayden_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


