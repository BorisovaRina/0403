console.log("=== ТЕМА 5: ЛОГИЧЕСКИЕ ОПЕРАТОРЫ ===\n");

// 133. Что возвращает && оператор?
console.log("133. 5 && 10 =", 5 && 10); // 10 (второе значение)
console.log("     0 && 10 =", 0 && 10); // 0 (первое falsy)

// 134. Что возвращает || оператор?
console.log("134. 0 || 10 =", 0 || 10); // 10 (первое truthy)
console.log("     5 || 10 =", 5 || 10); // 5

// 135. Что вернёт 1 && 2 && 3?
console.log("135. 1 && 2 && 3 =", 1 && 2 && 3); // 3

// 136. Что вернёт 1 || 2 || 3?
console.log("136. 1 || 2 || 3 =", 1 || 2 || 3); // 1

// 137. Что вернёт 0 || "hello"?
console.log("137. 0 || 'hello' =", 0 || "hello"); // "hello"

// 138. Что вернёт false || "default"?
console.log("138. false || 'default' =", false || "default"); // "default"

// 139. Что делает оператор !?
console.log("139. !true =", !true); // false
console.log("     !0 =", !0); // true

// 140. Что такое двойное отрицание !!?
console.log("140. !!'hello' =", !!"hello"); // true
console.log("     !!0 =", !!0); // false

// 141. Что выведет true || false && true?
console.log("141. true || false && true =", true || false && true); // true

// 142. Что вернёт null || undefined || 0 || "hello"?
console.log("142. null || undefined || 0 || 'hello' =", 
    null || undefined || 0 || "hello"); // "hello"

// 143. Как работают значения по умолчанию?
function greet(name) {
    name = name || "Guest";
    return `Hello ${name}`;
}
console.log("143. greet() =", greet());
console.log("     greet('John') =", greet('John'));

// 144. Как заменить на ES6 defaults?
function greet2(name = "Guest") {
    return `Hello ${name}`;
}
console.log("144. greet2() =", greet2());

// 145. Что выведет "cat" || "dog"?
console.log("145. 'cat' || 'dog' =", "cat" || "dog"); // "cat"

// 146. Что выведет "cat" && "dog"?
console.log("146. 'cat' && 'dog' =", "cat" && "dog"); // "dog"

// 147. Что вернёт let a = 0; let b = a || a = 5;?
let a147 = 0;
let b147 = a147 || (a147 = 5);
console.log("147. a =", a147, ", b =", b147); // a=5, b=5

// 148. Что лучше: val || default или val ?? default для 0?
console.log("148. 0 || 'default' =", 0 || 'default'); // "default"
console.log("     0 ?? 'default' =", 0 ?? 'default'); // 0

// 149. Что вернут !![], !!0, !!null, !!NaN?
console.log("149. !![] =", !![]); // true
console.log("     !!0 =", !!0); // false
console.log("     !!null =", !!null); // false
console.log("     !!NaN =", !!NaN); // false

// 150. Как проверить колбэк перед вызовом?
function execute(callback) {
    callback && typeof callback === 'function' && callback();
}
console.log("150. execute(() => console.log('called'))");
execute(() => console.log("     Callback executed"));

// 151. Что выведет a && b || c?
console.log("151. true && false || true =", true && false || true); // true

// 152. Что выведет true && console.log("hi")?
console.log("152. true && console.log('hi'):");
true && console.log("     hi");

// 153. Реализуй and(...fns)
function and(...fns) {
    return val => fns.every(fn => fn(val));
}
console.log("153. and(x=>x>0, x=>x<10)(5) =", and(x=>x>0, x=>x<10)(5));

// 154. Реализуй or(...fns)
function or(...fns) {
    return val => fns.some(fn => fn(val));
}
console.log("154. or(x=>x<0, x=>x>10)(15) =", or(x=>x<0, x=>x>10)(15));

// 155. Реализуй not(fn)
function not(fn) {
    return (...args) => !fn(...args);
}
console.log("155. not(x=>x>5)(3) =", not(x=>x>5)(3)); // true

// 156. Как реализовать XOR в JS?
function xor(a, b) {
    return (a || b) && !(a && b);
}
console.log("156. xor(true, false) =", xor(true, false)); // true
console.log("     xor(true, true) =", xor(true, true)); // false

// 157. Что такое lazy evaluation?
console.log("157. || и && не вычисляют правую часть, если не нужно");

// 158. Реализуй compose(...fns) с null-проверками
function compose(...fns) {
    return val => fns.reduceRight((acc, fn) => 
        acc != null ? fn(acc) : acc, val);
}
console.log("158. compose(x=>x*2, x=>x+1)(5) =", compose(x=>x*2, x=>x+1)(5));

// 159. Напиши безопасное a.b.c.d
function safeGet(obj) {
    return obj && obj.a && obj.a.b && obj.a.b.c && obj.a.b.c.d;
}
console.log("159. safeGet({a:{b:{c:{d:5}}}}) =", safeGet({a:{b:{c:{d:5}}}}));

// 160. Как Proxy может изменить && и ||?
console.log("160. Proxy не может переопределить && и ||");

// 161. Что вернёт !(a && b) vs !a || !b?
console.log("161. !(true && false) =", !(true && false)); // true
console.log("     !true || !false =", !true || !false); // true

// 162. Реализуй allTrue(arr) без every
function allTrue(arr) {
    return arr.reduce((acc, val) => acc && Boolean(val), true);
}
console.log("162. allTrue([1, 2, 3]) =", allTrue([1, 2, 3]));
console.log("     allTrue([1, 0, 3]) =", allTrue([1, 0, 3]));

// 163. Что такое Either монада?
console.log("163. Either — функциональный паттерн для обработки ошибок");

// 164. Сформулируй De Morgan законы
console.log("164. De Morgan:");
console.log("     !(a && b) === !a || !b");
console.log("     !(a || b) === !a && !b");

// 165. Проверь законы De Morgan
const a165 = true, b165 = false;
console.log("165. !(a && b) === !a || !b:", 
    !(a165 && b165) === (!a165 || !b165));

console.log("\n=== ТЕМА 5 ЗАВЕРШЕНА (33 задачи) ===");