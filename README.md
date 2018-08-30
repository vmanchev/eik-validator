# NAP Validator

[![Build Status](https://travis-ci.org/vmanchev/nap-validator.svg?branch=master)](https://travis-ci.org/vmanchev/nap-validator)

Javascript validator functions for any Bulgarian company registration number and VAT number. This code does not 
validates that the company actually exists or the codes are assigned to a company. It validates the provided 
value against the formulas, which are used to generate real company registration and VAT numbers.

All credits goes to VladSun user from this topic: http://www.linux-bg.org/forum/index.php?topic=36320.0

## Installation

```
npm install nap-validator --save
```

## Usage

```
var validator = require('nap-validator');
validator.isValidEIK('121292046'); // true
validator.isValidVAT('BG121292046'); // true
```

## Tests

```
npm install
npm run test
```