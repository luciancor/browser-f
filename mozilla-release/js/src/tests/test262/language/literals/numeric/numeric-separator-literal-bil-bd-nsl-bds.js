// |reftest| skip -- numeric-separator-literal is not supported
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0b` | `0B` BinaryDigit NumericLiteralSeparator BinaryDigit
info: |
  NumericLiteralSeparator ::
    _

  BinaryIntegerLiteral ::
    0b BinaryDigits
    0B BinaryDigits

  BinaryDigits ::
    BinaryDigit
    BinaryDigits BinaryDigit
    BinaryDigits NumericLiteralSeparator BinaryDigit

  BinaryDigit :: one of
    0 1

features: [numeric-separator-literal]
---*/

assert.sameValue(0b0_10, 0b010);
assert.sameValue(0B0_10, 0B010);

reportCompare(0, 0);
