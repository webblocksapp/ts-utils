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

## `set`

The `set` function allows you to deeply modify objects and arrays by specifying a path and a value to set at that path.

## Signature

```typescript
function set(data: any, path: string, value: any): any;
```

## Examples

- [Set a Property in an Object](#set-a-property-in-an-object)
- [Set an Empty Array](#set-an-empty-array)
- [Update a Property in an Array of Objects](#update-a-property-in-an-array-of-objects)
- [Update Nested Property in an Array](#update-nested-property-in-an-array)
- [Create Nested Objects](#create-nested-objects)
- [Update Property in an Array of Objects with Mixed Types](#update-property-in-an-array-of-objects-with-mixed-types)
- [Update Property with Undefined Original Data](#update-property-with-undefined-original-data)
- [Update Nested Property with Undefined Original Data](#update-nested-property-with-undefined-original-data)
- [Update Property at Specific Index](#update-property-at-specific-index)
- [Create Nested Object with New Key](#create-nested-object-with-new-key)

## Set a Property in an Object

```typescript
set({}, 'name', 'Laura');
// Output: { name: 'Laura' }
```

## Set an Empty Array

```typescript
set({}, 'contacts', []);
// Output: { contacts: [] }
```

## Update a Property in an Array of Objects

```typescript
set([{ name: 'John' }], '0.name', 'Laura');
// Output: [{ name: 'Laura' }]
```

## Update Nested Property in an Array

```typescript
set([{ names: ['John', 'Gabriela'] }], '0.names.1', 'Laura');
// Output: [{ names: ['John', 'Laura'] }]
```

## Create Nested Objects

```typescript
set({}, 'data.name', 'Laura');
// Output: { data: { name: 'Laura' } }
```

## Update Property in an Array of Objects with Mixed Types

```typescript
set([], '0.name', { isValid: false });
// Output: [{ name: { isValid: false } }]
```

## Update Property with Undefined Original Data

```typescript
set(undefined, '0.name', { isValid: false });
// Output: [{ name: { isValid: false } }]
```

## Update Nested Property with Undefined Original Data

```typescript
set(undefined, 'name.0', { isValid: false });
// Output: { name: [{ isValid: false }] }
```

## Update Property at Specific Index

```typescript
set([{ name: 'John' }], '1.name', 'Laura');
// Output: [{ name: 'John' }, { name: 'Laura' }]
```

## Create Nested Object with New Key

```typescript
set({}, 'key1.state', ['Laura']);
// Output: { key1: { state: ['Laura'] } }
```
