# EIK validator

[![Build Status](https://travis-ci.org/vmanchev/eik-validator.svg?branch=master)](https://travis-ci.org/vmanchev/eik-validator)

Javascript validator for any Bulgarian company registration number. All credits goes to VladSun user from this topic: http://www.linux-bg.org/forum/index.php?topic=36320.0

## Installation

```
npm install eik-validator --save
```

## Usage

```
var EIKValidator = require('eik-validator');
EIKValidator.isValidEIK('121292046'); // true
```

## Tests

```
npm install
npm run test
```