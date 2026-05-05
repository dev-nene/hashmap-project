class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.size = 0;
    this.buckets = new Array(this.capacity);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [[key, value]];
      this.size++;
    } else {
      for (let pair of this.buckets[index]) {
        if (pair[0] === key) {
          pair[1] = value;
          return;
        }
      }

      this.buckets[index].push([key, value]);
      this.size++;
    }

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  resize() {
    const oldBuckets = this.buckets;

    this.capacity *= 2;
    this.buckets = new Array(this.capacity);
    this.size = 0;

    for (let bucket of oldBuckets) {
      if (!bucket) continue;

      for (let [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      for (let pair of this.buckets[index]) {
        if (key === pair[0]) {
          return pair[1];
        }
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      for (let pair of this.buckets[index]) {
        if (key === pair[0]) {
          return true;
        }
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (key === this.buckets[index][i][0]) {
          this.buckets[index].splice(i, 1);
          if (this.buckets[index].length === 0) this.buckets[index] = undefined;
          this.size -= 1;
          return true;
        }
      }
    }
    return false;
  }

  length() {
    return this.size;
  }
}
