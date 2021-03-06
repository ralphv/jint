/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * note that prior to the finally ES5 draft SameValue was used for comparisions
 * and hence NaNs could be found using lastIndexOf *
 *
 * @path ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-8-10.js
 * @description Array.prototype.lastIndexOf must return correct index (NaN)
 */


function testcase() {
  var _NaN = NaN;
  var a = new Array("NaN",_NaN,NaN, undefined,0,false,null,{toString:function (){return NaN}},"false");
  if (a.lastIndexOf(NaN) === -1)  // NaN matches nothing, not even itself
  {
    return true;
  }
 }
runTestCase(testcase);
