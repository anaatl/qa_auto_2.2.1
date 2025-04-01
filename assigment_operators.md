## Assignment Operators
    =	x = y	x = y
    +=	x += y	x = x + y
    -=	x -= y	x = x - y
    *=	x *= y	x = x * y
    /=	x /= y	x = x / y
    %=	x %= y	x = x % y
    **=	x **= y	x = x ** y

## Shift Assignment Operators
### <<=	побитовый сдвиг влево с присваиванием 
    x <<= y	x = x << y
example
    let a = 5; // 101
    a <<= 1; // 10 (1010)

### >>= побитовый сдвиг вправо с присваиванием
    x >>= y	x = x >> y
example
    let a = 5; // 101
    a >>= 1; // 2 (10)

### >>>= беззнаковый сдвиг вправо с присваиванием
    x >>>= y x = x >>> y
example
    let a = -5;
    a >>>= 1; // Для отрицательных чисел работает по-другому, чем `>>`

## Bitwise Assignment Operators
### &= Побитовое И
    x &= y	x = x & y
example
    let x = 5;   // (0101)
    x &= 3;      // (0011)
    console.log(x); // 1 (0001)

### ^=	Побитовое ИЛИ
    x ^= y	x = x ^ y
example
    let x = 5;   // (0101)
    x |= 3;      // (0011)
    console.log(x); // 7 (0111)

### |=	Побитовое исключающее ИЛИ
    x |= y	x = x | y
example
    let x = 5;   // (0101)
    x ^= 3;      // (0011)
    console.log(x); // 6 (0110)

## Logical Assignment Operators
### &&=	присваивает новое значение только если текущее значение правдиво (true)
    x &&= y	x = x && (x = y)
  example
    let a = true;
    a &&= false; // a становится false
    
    let b = 5;
    b &&= 10; // b становится 10 (так как 5 — truthy значение)
    
    console.log(a, b); // false 10

### ||=	присваивает новое значение только если текущее значение ложное (false, 0, null, undefined, NaN, "")
    x ||= y	x = x || (x = y)
example
    let x = 0;
    x ||= 42; // x становится 42 (так как 0 — falsy)
    
    let y = "Hello";
    y ||= "World"; // y остается "Hello" (так как "Hello" — truthy)
    
    console.log(x, y); // 42 "Hello"

### ??=	работает только с null и undefined. Если переменная null или undefined, ей присваивается новое значение
    x ??= y	x = x ?? (x = y)
example

    let c = null;
    c ??= "Default"; // c становится "Default"
        
    let d = 0;
    d ??= 100; // d остается 0 (так как 0 — это не null и не undefined)
    
    console.log(c, d); // "Default" 0

