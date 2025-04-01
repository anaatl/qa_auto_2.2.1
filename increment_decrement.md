# Важно
# Использование x++ или x-- внутри выражений может приводить к неожиданным результатам, поэтому нужно понимать, когда именно происходит изменение.

# Эти операторы работают только с переменными. Например, 10++ вызовет ошибку.

# The Increment Operator (++)

## Post Increment y is incremented after it is assigned to x (post-incremented)
### Постфиксный (x++): Сначала возвращает текущее значение, затем увеличивает на 1.
    let y = 5;
    let x = y++; // y:6 , x:5

    let b = 5;
    console.log(b++); // 5 (сначала возвращает старое значение)
    console.log(b);   // 6 (увеличилось после вывода)

## Pre Increment y is incremented before it is assigned to x (pre-incremented) 
### Префиксный (++x): Увеличивает значение переменной на 1 сразу, перед возвратом значения.
    let y = 5;
    let x = ++y; // y:6 , x:6

    let a = 5;
    console.log(++a); // 6 (увеличение сразу)
    console.log(a);   // 6 (значение уже увеличено)

# The Decrement Operator (--)

## Post Decrement y is decremented after it is assigned to x (post-decremented)
### Постфиксный (x--): Сначала возвращает текущее значение, затем уменьшает.
    let y = 10;
    console.log(y--); // 10
    console.log(y);   // 9

## Pre Decrement y is decremented before it is assigned to x (pre-decremented)
### Префиксный (--x): Уменьшает значение переменной на 1 перед возвратом.
    let x = 10;
    console.log(--x); // 9
    console.log(x);   // 9

