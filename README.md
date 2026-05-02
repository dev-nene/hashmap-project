# hashmap-project
This project is a custom implementation of a HashMap data structure in JavaScript, built from scratch without using built-in Map or Object methods.

## Features

- Custom `hash(key)` function for generating hash codes
- `set(key, value)` – add or update key-value pairs
- `get(key)` – retrieve a value by key
- `has(key)` – check if a key exists
- `remove(key)` – delete a key-value pair
- `length()` – return number of stored keys
- `clear()` – remove all entries
- `keys()` – return all keys
- `values()` – return all values
- `entries()` – return all key-value pairs

## Implementation Details

- Uses an array of buckets to store data
- Handles collisions (e.g. chaining or probing)
- Load factor set to `0.75`
- Initial capacity of `16`
- Automatically resizes (doubles capacity) when load factor is exceeded
- Keys are limited to strings
