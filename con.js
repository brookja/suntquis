class Example {
    constructor() {
        this._dims = [1, 2, 3, 4, 5]; // Initialize _dims with an array
    }
    
    getLength() {
        let m = this._dims.length; // Accessing the length of the _dims array
        return m;
    }
}

const example = new Example();
console.log(example.getLength()); // Outputs: 5
