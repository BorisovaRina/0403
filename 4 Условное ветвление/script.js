console.log("=== ТЕМА 4: УСЛОВИЯ ===\n");

// Вспомогательная функция из темы 2
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// 100. Напиши функцию, которая определяет знак числа
function checkSign(n) {
    if (n > 0) return "positive";
    if (n < 0) return "negative";
    return "zero";
}
console.log("100. checkSign(5) =", checkSign(5));
console.log("     checkSign(-3) =", checkSign(-3));
console.log("     checkSign(0) =", checkSign(0));

// 101. Что такое тернарный оператор ?:?
console.log("101. 5 > 3 ? 'yes' : 'no' =", 5 > 3 ? 'yes' : 'no'); // "yes"

// 102. Что выведет let x = 0; if(x) console.log("true");?
let x102 = 0;
console.log("102. x = 0; if(x) не выполнится (0 — falsy)");

// 103. Как проверить чётное/нечётное число?
function evenOdd(n) {
    return n % 2 === 0 ? "even" : "odd";
}
console.log("103. evenOdd(4) =", evenOdd(4));
console.log("     evenOdd(5) =", evenOdd(5));

// 104. Что такое switch? Когда использовать?
console.log("104. switch используется для множественного выбора");
function getDayName(day) {
    switch(day) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        default: return "Other";
    }
}
console.log("     getDayName(1) =", getDayName(1));

// 105. Что происходит без break в switch?
function fallthrough(x) {
    let result = "";
    switch(x) {
        case 1:
            result += "one";
        case 2:
            result += "two";
            break;
    }
    return result;
}
console.log("105. fallthrough(1) =", fallthrough(1)); // "onetwo"

// 106. Напиши условие: если age >= 18, вернуть "adult"
function checkAge(age) {
    return age >= 18 ? "adult" : "minor";
}
console.log("106. checkAge(20) =", checkAge(20));
console.log("     checkAge(15) =", checkAge(15));

// 107. Что делает default в switch?
console.log("107. default — аналог else, если нет совпадений");

// 108. Можно ли использовать switch со строками?
function greet(lang) {
    switch(lang) {
        case "ru": return "Привет";
        case "en": return "Hello";
        default: return "Hi";
    }
}
console.log("108. greet('ru') =", greet('ru'));

// 109. Как работает вложенный тернарный оператор?
function classify(n) {
    return n > 10 ? "big" : n > 5 ? "medium" : "small";
}
console.log("109. classify(15) =", classify(15));
console.log("     classify(7) =", classify(7));
console.log("     classify(3) =", classify(3));

// 110. Что выведет if("0") console.log("true");?
console.log("110. if('0') выполнится: '0' — truthy");

// 111. Напиши функцию getGrade(score) для оценок A-F
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}
console.log("111. getGrade(95) =", getGrade(95));
console.log("     getGrade(75) =", getGrade(75));

// 112. Как проверить вхождение в диапазон?
function inRange(x) {
    return x >= 1 && x <= 10;
}
console.log("112. inRange(5) =", inRange(5)); // true
console.log("     inRange(15) =", inRange(15)); // false

// 113. Что вернёт let x=5; let r = x>3 ? x>7 ? "big" : "medium" : "small"?
let x113 = 5;
let r113 = x113 > 3 ? x113 > 7 ? "big" : "medium" : "small";
console.log("113. r =", r113); // "medium"

// 114. Реализуй fizzbuzz(n) через if
function fizzbuzz(n) {
    if (n % 15 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return String(n);
}
console.log("114. fizzbuzz(15) =", fizzbuzz(15));
console.log("     fizzbuzz(9) =", fizzbuzz(9));

// 115. Можно ли использовать switch с диапазонами?
function gradeSwitch(score) {
    switch(true) {
        case score >= 90: return "A";
        case score >= 80: return "B";
        case score >= 70: return "C";
        default: return "F";
    }
}
console.log("115. gradeSwitch(85) =", gradeSwitch(85));

// 116. Что такое short-circuit evaluation?
console.log("116. Short-circuit: true || console.log('not called')");
true || console.log("not executed"); // не выполнится

// 117. Как заменить if-else на объект-lookup?
const actions = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b
};
console.log("117. actions['add'](5, 3) =", actions['add'](5, 3));

// 118. Реализуй classify(n) для простых/составных/других
function classifyNumber(n) {
    if (n <= 1) return "neither";
    if (isPrime(n)) return "prime";
    return "composite";
}
console.log("118. classifyNumber(7) =", classifyNumber(7));
console.log("     classifyNumber(9) =", classifyNumber(9));

// 119. Что происходит при fallthrough в switch(2)?
console.log("119. Fallthrough выполняет все case после совпадения без break");

// 120. Что такое guard clauses?
function processUser(user) {
    if (!user) return "No user";
    if (!user.name) return "No name";
    return `Hello ${user.name}`;
}
console.log("120. processUser(null) =", processUser(null));
console.log("     processUser({name: 'John'}) =", processUser({name: 'John'}));

// 121. Что такое strategy pattern?
const strategies = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
};
function calculate(op, a, b) {
    return strategies[op](a, b);
}
console.log("121. calculate('add', 5, 3) =", calculate('add', 5, 3));

// 122. Реализуй match для pattern matching
function match(val, cases) {
    const found = cases.find(([pred]) => pred(val));
    return found ? found[1](val) : val;
}
console.log("122. match(5, [[x=>x>10, ()=>'big'], [x=>true, ()=>'small']]) =",
    match(5, [[x=>x>10, ()=>'big'], [x=>true, ()=>'small']]));

// 123. Почему не стоит использовать вложенные тернарники?
console.log("123. Вложенные тернарники усложняют читаемость");

// 124. Реализуй state machine через switch
function stateMachine(state, action) {
    switch(state) {
        case 'idle':
            return action === 'start' ? 'running' : 'idle';
        case 'running':
            return action === 'stop' ? 'idle' : 'running';
        default:
            return state;
    }
}
console.log("124. stateMachine('idle', 'start') =", stateMachine('idle', 'start'));

// 125. Как работает optional chaining ?.?
const obj125 = { a: { b: 5 } };
console.log("125. obj.a?.b =", obj125.a?.b); // 5
console.log("     obj.c?.d =", obj125.c?.d); // undefined

// 126. Реализуй pipe(...fns)
function pipe(...fns) {
    return (val) => fns.reduce((acc, fn) => fn(acc), val);
}
const add1 = x => x + 1;
const double = x => x * 2;
console.log("126. pipe(add1, double)(5) =", pipe(add1, double)(5)); // 12

// 127. Напиши функции-валидаторы
const isString = x => typeof x === 'string';
const isNumber = x => typeof x === 'number';
console.log("127. isString('hello') =", isString('hello'));
console.log("     isNumber(42) =", isNumber(42));

// 128. Реализуй cond(pairs) из Ramda
function cond(pairs) {
    return val => {
        const found = pairs.find(([pred]) => pred(val));
        return found ? found[1](val) : undefined;
    };
}
console.log("128. cond([[x=>x>5, ()=>'big']])(10) =", 
    cond([[x=>x>5, ()=>'big'], [()=>true, ()=>'small']])(10));

// 129. Когда if — code smell?
console.log("129. Когда много вложенных if, лучше early return или strategy");

// 130. Реализуй when(predicate, transform)
function when(predicate, transform) {
    return val => predicate(val) ? transform(val) : val;
}
console.log("130. when(x=>x>5, x=>x*2)(10) =", when(x=>x>5, x=>x*2)(10)); // 20

// 131. Как заменить switch/if на роутинг?
const routes = {
    '/home': () => 'Home Page',
    '/about': () => 'About Page'
};
function router(path) {
    return routes[path] ? routes[path]() : '404';
}
console.log("131. router('/home') =", router('/home'));

// 132. Что выведет nested if-else?
console.log("132. Nested if-else усложняет код, используйте guard clauses");

console.log("\n=== ТЕМА 4 ЗАВЕРШЕНА (33 задачи) ===");