## `isEmpty`

The `isEmpty` function is designed to determine if a given value is considered "empty" or not. It returns a boolean value indicating whether the input is considered empty.

### Examples

- [Checking undefined](#checking-undefined)
- [Checking empty string](#checking-empty-string)
- [Checking empty object](#checking-empty-object)
- [Checking empty array](#checking-empty-array)
- [Checking array with undefined elements](#checking-array-with-undefined-elements)
- [Checking array with empty string elements](#checking-array-with-empty-string-elements)
- [Checking array with objects having empty properties](#checking-array-with-objects-having-empty-properties)
- [Checking object with empty properties](#checking-object-with-empty-properties)
- [Checking non-empty values](#checking-non-empty-values)

#### Checking undefined

```javascript
isEmpty(undefined); // Returns true
```

#### Checking empty string

```javascript
isEmpty(''); // Returns true
```

#### Checking empty object

```javascript
isEmpty({}); // Returns true
```

#### Checking empty array

```javascript
isEmpty([]); // Returns true
```

#### Checking array with undefined elements

```javascript
isEmpty([undefined, undefined]); // Returns true
```

#### Checking array with empty string elements

```javascript
isEmpty(['', '']); // Returns true
```

#### Checking array with objects having empty properties

```javascript
isEmpty([{ name: '', age: '' }]); // Returns true
```

#### Checking object with empty properties

```javascript
isEmpty({ name: '', age: '' }); // Returns true
```

#### Checking non-empty values

```javascript
isEmpty(0); // Returns false
isEmpty(111); // Returns false
isEmpty([{ name: 'Laura', age: '' }]); // Returns false
isEmpty({ name: 'Laura', age: '' }); // Returns false
isEmpty('Hello'); // Returns false
```
