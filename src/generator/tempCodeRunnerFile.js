function* iterable(array){
    for (let value of array){
        yield value;
    }
}

const it = iterable(['Oscar', 'omar', 'ana', 'lucia', 'juan']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
