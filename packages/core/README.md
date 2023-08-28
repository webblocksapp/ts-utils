## `isEmpty`

The `isEmpty` function is designed to determine if a given value is considered "empty" or not. It returns a boolean value indicating whether the input is considered empty.

### Signature

```typescript
function isEmpty(value: any): boolean;
```

### Examples

- [Checking Undefined](#checking-undefined)
- [Checking Empty String](#checking-empty-string)
- [Checking Empty Object](#checking-empty-object)
- [Checking Empty Array](#checking-empty-array)
- [Checking Array with Undefined Elements](#checking-array-with-undefined-elements)
- [Checking Array with Empty String Elements](#checking-array-with-empty-string-elements)
- [Checking Array with Objects Having Empty Properties](#checking-array-with-objects-having-empty-properties)
- [Checking Object with Empty Properties](#checking-object-with-empty-properties)
- [Checking Non-empty Values](#checking-non-empty-values)

#### Checking Undefined

```typescript
isEmpty(undefined); // Returns true
```

#### Checking Empty String

```typescript
isEmpty(''); // Returns true
```

#### Checking Empty Object

```typescript
isEmpty({}); // Returns true
```

#### Checking Empty Array

```typescript
isEmpty([]); // Returns true
```

#### Checking Array with Undefined Elements

```typescript
isEmpty([undefined, undefined]); // Returns true
```

#### Checking Array with Empty String Elements

```typescript
isEmpty(['', '']); // Returns true
```

#### Checking Array with Objects Having Empty Properties

```typescript
isEmpty([{ name: '', age: '' }]); // Returns true
```

#### Checking Object with Empty Properties

```typescript
isEmpty({ name: '', age: '' }); // Returns true
```

#### Checking Non-empty Values

```typescript
isEmpty(0); // Returns false
isEmpty(111); // Returns false
isEmpty([{ name: 'Laura', age: '' }]); // Returns false
isEmpty({ name: 'Laura', age: '' }); // Returns false
isEmpty('Hello'); // Returns false
```

## set

The `set` function is used to set a value within a nested object or array based on a given path. It creates new objects or arrays along the path if necessary.

## Signature

```typescript
function set(obj: any, path: string, value: any): any;
```

## Table of Contents

- [Setting a property in an empty object](#setting-a-property-in-an-empty-object)
- [Setting an array in an empty object](#setting-an-array-in-an-empty-object)
- [Setting a property in an array element](#setting-a-property-in-an-array-element)
- [Setting a property in a nested object](#setting-a-property-in-a-nested-object)
- [Setting an array in an array element](#setting-an-array-in-an-array-element)
- [Setting a property with undefined initial object](#setting-a-property-with-undefined-initial-object)
- [Setting a property in an array with undefined initial array](#setting-a-property-in-an-array-with-undefined-initial-array)
- [Setting a property in a nested array with undefined initial array](#setting-a-property-in-a-nested-array-with-undefined-initial-array)
- [Setting a property in a non-existent array index](#setting-a-property-in-a-non-existent-array-index)
- [Setting a property in a nested object with multiple keys](#setting-a-property-in-a-nested-object-with-multiple-keys)

## Examples

### Setting a property in an empty object

```typescript
set({}, 'name', 'Laura');
// Output: { name: 'Laura' }
```

### Setting an array in an empty object

```typescript
set({}, 'contacts', []);
// Output: { contacts: [] }
```

### Setting a property in an array element

```typescript
set([{ name: 'John' }], '0.name', 'Laura');
// Output: [{ name: 'Laura' }]
```

### Setting a property in a nested object

```typescript
set({}, 'data.name', 'Laura');
// Output: { data: { name: 'Laura' } }
```

### Setting an array in an array element

```typescript
set([], '0.name', { isValid: false });
// Output: [{ name: { isValid: false } }]
```

### Setting a property with undefined initial object

```typescript
set(undefined, '0.name', { isValid: false });
// Output: [{ name: { isValid: false } }]
```

### Setting a property in an array with undefined initial array

```typescript
set(undefined, 'name.0', { isValid: false });
// Output: { name: [{ isValid: false }] }
```

### Setting a property in a nested array with undefined initial array

```typescript
set([{ name: 'John' }], '1.name', 'Laura');
// Output: [{ name: 'John' }, { name: 'Laura' }]
```

### Setting a property in a non-existent array index

```typescript
set({}, 'key1.state', ['Laura']);
// Output: { key1: { state: ['Laura'] } }
```
