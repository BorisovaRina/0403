console.log("=== ТЕМА 3: СРАВНЕНИЕ ===\n");

// 67. Чем отличается == от ===?
console.log("67. 5 == '5' =", 5 == '5'); // true
console.log("    5 === '5' =", 5 === '5'); // false

// 68. Что вернёт 5 == 5? И 5 === "5"?
console.log("68. 5 == 5 =", 5 == 5); // true
console.log("    5 === '5' =", 5 === '5'); // false

// 69. Что вернёт null == undefined? И null === undefined?
console.log("69. null == undefined =", null == undefined); // true
console.log("    null === undefined =", null === undefined); // false

// 70. Что вернёт null == 0?
console.log("70. null == 0 =", null == 0); // false
console.log("    null >= 0 =", null >= 0); // true
console.log("    null > 0 =", null > 0); // false

// 71. Как сравниваются строки?
console.log("71. 'apple' < 'banana' =", 'apple' < 'banana'); // true
console.log("    'Z' < 'a' =", 'Z' < 'a'); // true (по Unicode)

// 72. Что вернёт NaN === NaN?
console.log("72. NaN === NaN =", NaN === NaN); // false
console.log("    Number.isNaN(NaN) =", Number.isNaN(NaN)); // true

// 73. Что вернут <, >, <=, >=?
console.log("73. 5 < 10 =", 5 < 10); // true
console.log("    5 > 3 =", 5 > 3); // true
console.log("    5 <= 5 =", 5 <= 5); // true
console.log("    5 >= 6 =", 5 >= 6); // false

// 74. Что выведет (1 < 2 < 3)?
console.log("74. (1 < 2 < 3) =", (1 < 2 < 3)); // true
console.log("    Объяснение: (true < 3) → (1 < 3) = true");

// 75. Что выведет (3 > 2 > 1)?
console.log("75. (3 > 2 > 1) =", (3 > 2 > 1)); // false
console.log("    Объяснение: (true > 1) → (1 > 1) = false");

// 76. Что вернёт 2 < "12"?
console.log("76. 2 < '12' =", 2 < "12"); // true (строка преобразуется в 12)

// 77. Реализуй isEqual(a, b)
function isEqual(a, b) {
    return a === b;
}
console.log("77. isEqual(5, 5) =", isEqual(5, 5)); // true
console.log("    isEqual(5, '5') =", isEqual(5, '5')); // false

// 78. Что выведет console.log(0 == false)? И console.log("" == false)?
console.log("78. 0 == false =", 0 == false); // true
console.log("    '' == false =", "" == false); // true

// 79. Что вернёт "" == false?
console.log("79. '' == false =", "" == false); // true

// 80. Как проверить равенство массивов?
function arraysEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
console.log("80. arraysEqual([1,2], [1,2]) =", arraysEqual([1,2], [1,2])); // true

// 81. Почему null == 0, null >= 0, но не null > 0?
console.log("81. null == 0:", null == 0); // false
console.log("    null >= 0:", null >= 0); // true
console.log("    null > 0:", null > 0); // false
console.log("    (== использует особые правила для null)");

// 82. Почему undefined == 0, undefined >= 0 false?
console.log("82. undefined == 0:", undefined == 0); // false
console.log("    undefined >= 0:", undefined >= 0); // false
console.log("    (undefined преобразуется в NaN)");

// 83. Реализуй компаратор для сортировки чисел
function numComparator(a, b) {
    return a - b;
}
console.log("83. [3,1,2].sort(numComparator) =", [3,1,2].sort(numComparator));

// 84. Чем отличается Object.is(a, b) от ===?
console.log("84. Object.is(NaN, NaN) =", Object.is(NaN, NaN)); // true
console.log("    NaN === NaN =", NaN === NaN); // false
console.log("    Object.is(+0, -0) =", Object.is(+0, -0)); // false
console.log("    +0 === -0 =", +0 === -0); // true

// 85. Что вернёт "abc" > "ABC"?
console.log("85. 'abc' > 'ABC' =", "abc" > "ABC"); // true

// 86. Реализуй between(val, min, max)
function between(val, min, max) {
    return val >= min && val <= max;
}
console.log("86. between(5, 0, 10) =", between(5, 0, 10)); // true

// 87. Что вернёт Symbol() === Symbol()?
console.log("87. Symbol() === Symbol() =", Symbol() === Symbol()); // false

// 88. Реализуй deepEqual(a, b) для объектов
function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) 
        return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every(key => deepEqual(a[key], b[key]));
}
console.log("88. deepEqual({a:1}, {a:1}) =", deepEqual({a:1}, {a:1})); // true

// 89. Что такое SameValueZero?
console.log("89. SameValueZero используется в Set/Map");
console.log("    [NaN].includes(NaN) =", [NaN].includes(NaN)); // true

// 90. Как работает приведение типов при сравнении?
console.log("90. '5' == 5 =", '5' == 5); // true (строка → число)
console.log("    true == 1 =", true == 1); // true (boolean → число)

// 91. Что выведет console.log([] == ![])? 
console.log("91. [] == ![] =", [] == ![]); // true
console.log("    ([] преобразуется в '', ![] в false, '' == false)");

// 92. Реализуй sortStrings(arr) с учётом локали
function sortStrings(arr) {
    return arr.sort((a, b) => a.localeCompare(b));
}
console.log("92. sortStrings(['яблоко', 'банан']) =", sortStrings(['яблоко', 'банан']));

// 93. Почему Array.prototype.includes() находит NaN?
console.log("93. [1, NaN, 3].includes(NaN) =", [1, NaN, 3].includes(NaN)); // true

// 94. Что вернёт new String("a") === "a"?
console.log("94. new String('a') === 'a' =", new String("a") === "a"); // false
console.log("    new String('a') == 'a' =", new String("a") == "a"); // true

// 95. Как сравнить два объекта Date?
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-01-01');
console.log("95. date1 === date2 =", date1 === date2); // false
console.log("    date1.getTime() === date2.getTime() =", 
    date1.getTime() === date2.getTime()); // true

// 96. Что такое Abstract Equality Comparison в JS?
console.log("96. Abstract Equality (==): выполняет приведение типов");
console.log("    Strict Equality (===): без приведения типов");

// 97. Почему typeof null === "object"?
console.log("97. typeof null =", typeof null); // "object" (баг в JS)

// 98. Можно ли переопределить Proxy-сравнение?
const proxy98 = new Proxy({}, {
    has(target, key) {
        return key === 'exists';
    }
});
console.log("98. 'exists' in proxy98 =", 'exists' in proxy98); // true

// 99. Почему NaN — это number, а не отдельный тип?
console.log("99. typeof NaN =", typeof NaN); // "number"
console.log("    (NaN — особое числовое значение IEEE 754)");

console.log("\n=== ТЕМА 3 ЗАВЕРШЕНА (33 задачи) ===");