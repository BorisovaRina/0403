console.log("=== ТЕМА 1: ТИПЫ И ПРЕОБРАЗОВАНИЯ ===\n");

// 1. Что выведет console.log(typeof "hello")?
console.log("1. typeof 'hello':", typeof "hello"); // string

// 2. Что вернут Number("42"), parseInt("42"), +"42"?
console.log("2. Number('42'):", Number("42")); // 42
console.log("   parseInt('42'):", parseInt("42")); // 42
console.log("   +'42':", +"42"); // 42

// 3. Чем отличается Number("") от Number(" ")?
console.log("3. Number(''):", Number("")); // 0
console.log("   Number(' '):", Number(" ")); // 0

// 4. Что вернут Boolean(0), Boolean(""), Boolean(null)?
console.log("4. Boolean(0):", Boolean(0)); // false
console.log("   Boolean(''):", Boolean("")); // false
console.log("   Boolean(null):", Boolean(null)); // false

// 5. Чем отличается String(123) от (123).toString()?
console.log("5. String(123):", String(123)); // "123"
console.log("   (123).toString():", (123).toString()); // "123"

// 6. Какие значения falsy в JS?
console.log("6. Falsy значения: false, 0, '', null, undefined, NaN, 0n");

// 7. Что вернут Number(true) и Number(false)?
console.log("7. Number(true):", Number(true)); // 1
console.log("   Number(false):", Number(false)); // 0

// 8. Чем отличается Boolean("") от Boolean(" ")?
console.log("8. Boolean(''):", Boolean("")); // false
console.log("   Boolean(' '):", Boolean(" ")); // true

// 9. В чём разница между explicit и implicit преобразованием?
console.log("9. Explicit: Number('5'), String(42), Boolean(0)");
console.log("   Implicit: '5' + 1 = '51', '5' - 1 = 4");

// 10. Что выведет console.log("1" + 2)?
console.log("10. '1' + 2 =", "1" + 2); // "12"

// 11. Что выведет console.log("5" - "3")?
console.log("11. '5' - '3' =", "5" - "3"); // 2

// 12. Что вернёт parseInt("10px")? А Number("10px")?
console.log("12. parseInt('10px'):", parseInt("10px")); // 10
console.log("    Number('10px'):", Number("10px")); // NaN

// 13. Что выведет parseInt("0x1F", 16)?
console.log("13. parseInt('0x1F', 16):", parseInt("0x1F", 16)); // 31

// 14. Как правильно проверить NaN?
console.log("14. Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("    isNaN('hello'):", isNaN("hello")); // true (преобразует в NaN)

// 15. Что вернёт typeof NaN?
console.log("15. typeof NaN:", typeof NaN); // "number"

// 16. Что выведет console.log(null + 1)? А undefined + 1?
console.log("16. null + 1 =", null + 1); // 1
console.log("    undefined + 1 =", undefined + 1); // NaN

// 17. Как работает toString(2)?
console.log("17. (10).toString(2):", (10).toString(2)); // "1010"

// 18. Что вернёт parseFloat("3.14abc")?
console.log("18. parseFloat('3.14abc'):", parseFloat("3.14abc")); // 3.14

// 19. Что выведет console.log("3" * "4")?
console.log("19. '3' * '4' =", "3" * "4"); // 12

// 20. Чем отличается Number(null) vs Number(undefined)?
console.log("20. Number(null):", Number(null)); // 0
console.log("    Number(undefined):", Number(undefined)); // NaN

// 21. Приоритет операций: "", +, -, *
console.log("21. '' + 5 + 3 =", "" + 5 + 3); // "53"
console.log("    '' + (5 + 3) =", "" + (5 + 3)); // "8"
console.log("    5 + 3 + '' =", 5 + 3 + ""); // "8"
console.log("    5 - '3' =", 5 - "3"); // 2

// 22. Что вернут: "" + 1, "1", 1 + "", null + ""?
console.log("22. '' + 1 =", "" + 1); // "1"
console.log("    '1' =", "1"); // "1"
console.log("    1 + '' =", 1 + ""); // "1"
console.log("    null + '' =", null + ""); // "null"

// 23. Почему 0.1 + 0.2 !== 0.3 в JS?
console.log("23. 0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004
console.log("    Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON:", 
    Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true

// 24. Что выведет Number(Symbol("test"))?
try {
    console.log("24. Number(Symbol('test')):", Number(Symbol("test")));
} catch(e) {
    console.log("24. Number(Symbol('test')): TypeError");
}

// 25. Напиши функцию safeNumber(val)
function safeNumber(val) {
    return !isNaN(Number(val));
}
console.log("25. safeNumber('42'):", safeNumber("42")); // true
console.log("    safeNumber('abc'):", safeNumber("abc")); // false

// 26. Как работают valueOf и toString?
const obj26 = {
    valueOf() { return 100; },
    toString() { return "200"; }
};
console.log("26. obj + 0 =", obj26 + 0); // 100 (valueOf)
console.log("    String(obj) =", String(obj26)); // "200" (toString)

// 27. Чем отличается parseInt от Math.trunc?
console.log("27. parseInt('3.7'):", parseInt("3.7")); // 3
console.log("    Math.trunc(3.7):", Math.trunc(3.7)); // 3
console.log("    parseInt('10px'):", parseInt("10px")); // 10
console.log("    Math.trunc('10px'):", Math.trunc("10px")); // NaN

// 28. Что вернут Number(""), Number("1"), Number("1,2")?
console.log("28. Number(''):", Number("")); // 0
console.log("    Number('1'):", Number("1")); // 1
console.log("    Number('1,2'):", Number("1,2")); // NaN

// 29. Как преобразовать BigInt в Number и обратно?
console.log("29. Number(42n):", Number(42n)); // 42
console.log("    BigInt(42):", BigInt(42)); // 42n

// 30. Реализуй метод Symbol.toPrimitive
const obj30 = {
    [Symbol.toPrimitive](hint) {
        if (hint === "number") return 100;
        if (hint === "string") return "hello";
        return true;
    }
};
console.log("30. obj + 0 =", obj30 + 0); // 100
console.log("    String(obj) =", String(obj30)); // "hello"

// 31. Почему null + undefined даёт NaN?
console.log("31. null + undefined =", null + undefined); // NaN
console.log("    Number(null) =", Number(null), ", Number(undefined) =", Number(undefined));

// 32. Как проверить тип, не путая null и object?
function getType(val) {
    return val === null ? "null" : typeof val;
}
console.log("32. getType(null):", getType(null)); // "null"
console.log("    getType({}):", getType({})); // "object"

// 33. Что выведет | для числа 3.7?
console.log("33. 3.7 | 0 =", 3.7 | 0); // 3
