console.log("=== ТЕМА 6: NULLISH (?? и ?.) ===\n");

// 166. Чем отличается ?? от ||?
console.log("166. 0 ?? 'default' =", 0 ?? 'default'); // 0
console.log("     0 || 'default' =", 0 || 'default'); // "default"

// 167. Что вернёт null ?? "default"?
console.log("167. null ?? 'default' =", null ?? "default"); // "default"

// 168. Что вернёт undefined ?? "default"?
console.log("168. undefined ?? 'default' =", undefined ?? "default"); // "default"

// 169. Что вернёт 0 ?? "default"? И 0 || "default"?
console.log("169. 0 ?? 'default' =", 0 ?? "default"); // 0
console.log("     0 || 'default' =", 0 || "default"); // "default"

// 170. Что вернёт "" ?? "default"?
console.log("170. '' ?? 'default' =", "" ?? "default"); // ""

// 171. Что вернёт false ?? "default"?
console.log("171. false ?? 'default' =", false ?? "default"); // false

// 172. Что вернёт NaN ?? "default"?
console.log("172. NaN ?? 'default' =", NaN ?? "default"); // NaN

// 173. Что такое ??= Nullish Assignment?
let x173 = null;
x173 ??= 42;
console.log("173. x = null; x ??= 42; x =", x173); // 42

// 174. Что выведет let x = null; x ??= 42; console.log(x)?
let x174 = null;
x174 ??= 42;
console.log("174. x =", x174); // 42

// 175. Что выведет let x = 0; x ??= 42; console.log(x)?
let x175 = 0;
x175 ??= 42;
console.log("175. x =", x175); // 0

// 176. Где лучше использовать ??, а где ||?
console.log("176. ?? для значений, где 0/'' валидны");
console.log("     || для логических значений по умолчанию");

// 177. Что вернёт null ?? undefined ?? 0 ?? "hello"?
console.log("177. null ?? undefined ?? 0 ?? 'hello' =", 
    null ?? undefined ?? 0 ?? "hello"); // 0

// 178. Можно ли смешивать ?? с && или ||?
console.log("178. Нельзя без скобок: (a ?? b) && c");

// 179. Как работает optional chaining с ??
const obj179 = { a: null };
console.log("179. obj.a?.b ?? 'default' =", obj179.a?.b ?? 'default'); // "default"

// 180. Реализуй configure(options)
function configure(options = {}) {
    const config = {
        debug: options.debug ?? false,
        timeout: options.timeout ?? 5000
    };
    return config;
}
console.log("180. configure({debug: true}) =", 
    JSON.stringify(configure({debug: true})));

// 181. В чём разница между || и ?? для falsy?
console.log("181. || учитывает все falsy, ?? только null/undefined");

// 182. Что выведет let count = 0; count ||= 10; console.log(count)?
let count182 = 0;
count182 ||= 10;
console.log("182. count =", count182); // 10

// 183. Что выведет let count = 0; count ??= 10; console.log(count)?
let count183 = 0;
count183 ??= 10;
console.log("183. count =", count183); // 0

// 184. Как работает ?? для lazy init?
const cache184 = {};
function getValue(key) {
    return cache184[key] ?? (cache184[key] = `computed_${key}`);
}
console.log("184. getValue('test') =", getValue('test'));

// 185. Что выведет obj.a ??= "set"?
let obj185 = { a: null };
obj185.a ??= "set";
console.log("185. obj.a =", obj185.a); // "set"

// 186. Реализуй ?? в ES5
function nullish(a, b) {
    return a != null ? a : b;
}
console.log("186. nullish(0, 5) =", nullish(0, 5)); // 0
console.log("     nullish(null, 5) =", nullish(null, 5)); // 5

// 187. Как Proxy влияет на ??
console.log("187. Proxy может перехватывать get, но ?? работает с результатом");

// 188. Реализуй getDeep(obj, path, defaultVal)
function getDeep(obj, path, defaultVal) {
    const value = path.split('.').reduce((acc, key) => acc?.[key], obj);
    return value ?? defaultVal;
}
console.log("188. getDeep({a:{b:5}}, 'a.b', 0) =", 
    getDeep({a:{b:5}}, 'a.b', 0));

// 189. Работает ли ?? с undefined, возвращённым функцией?
function getUndefined() {
    return undefined;
}
console.log("189. getUndefined() ?? 'default' =", 
    getUndefined() ?? 'default'); // "default"

// 190. Реализуй deepMerge(defaults, options)
function deepMerge(defaults, options) {
    const result = {};
    for (let key in defaults) {
        result[key] = options[key] ?? defaults[key];
    }
    return result;
}
console.log("190. deepMerge({a:1, b:2}, {b:3}) =", 
    JSON.stringify(deepMerge({a:1, b:2}, {b:3})));

// 191. Реализуй coalesce(...vals)
function coalesce(...vals) {
    return vals.find(v => v != null);
}
console.log("191. coalesce(null, undefined, 0, 5) =", 
    coalesce(null, undefined, 0, 5)); // 0

// 192. Чем отличается a?.b ?? c от a?.b || c?
console.log("192. a?.b ?? c учитывает только null/undefined");
console.log("     a?.b || c учитывает все falsy");

// 193. Где применять ??
console.log("193. Использовать ?? в кэшировании, конфигурации, API");

// 194. Что такое falsy coalescing?
console.log("194. Falsy coalescing — || (учитывает все falsy)");

// 195. Что вернёт 0 && null ?? x?
console.log("195. 0 && null ?? 'x' =", (0 && null) ?? 'x'); // "x"

// 196. Реализуй каскад env → config → defaults
function getConfig(key) {
    const env = { KEY: null };
    const config = { key: undefined };
    const defaults = { key: 'default' };
    return env.KEY ?? config.key ?? defaults.key;
}
console.log("196. getConfig('key') =", getConfig('key'));

// 197. Используй Proxy для дефолтных значений
function withDefaults(obj, defaults) {
    return new Proxy(obj, {
        get(target, key) {
            return target[key] ?? defaults[key];
        }
    });
}
const obj197 = withDefaults({a: 1}, {a: 0, b: 2});
console.log("197. obj197.a =", obj197.a); // 1
console.log("     obj197.b =", obj197.b); // 2

// 198. Объясни приоритет операторов
console.log("198. ?? имеет низкий приоритет, используйте скобки");
console.log("     (a && b) ?? c");

// ========================================
// ЗАДАЧА 199: Комплексная (типы)
// ========================================

console.log("\n=== ЗАДАЧА 199: КОМПЛЕКСНАЯ ===\n");

function complexTask199() {
    // Все типы преобразований
    const str = "42";
    const num = Number(str);
    const bool = Boolean(num);
    const back = String(num);
    
    console.log("199. Преобразования:");
    console.log("     String '42' → Number:", num);
    console.log("     Number 42 → Boolean:", bool);
    console.log("     Number 42 → String:", back);
    console.log("     typeof each:", typeof str, typeof num, typeof bool, typeof back);
}
complexTask199();

// ========================================
// ЗАДАЧА 200: Итоговая (все темы)
// ========================================

console.log("\n=== ЗАДАЧА 200: ИТОГОВАЯ ===\n");

function finalTask200() {
    // Используем все изученные концепции
    const data = {
        value: null,
        count: 0,
        name: ""
    };
    
    // Nullish coalescing
    data.value = data.value ?? 100;
    
    // Logical operators
    data.count = data.count || 10;
    
    // Optional chaining
    const nested = { a: { b: { c: 42 } } };
    const result = nested?.a?.b?.c ?? "default";
    
    // Type conversion
    const num = Number("123");
    const str = String(num);
    
    // Math operations
    const sum = num + data.value;
    const product = num * 2;
    
    // Comparison
    const isEqual = num === 123;
    const isGreater = sum > 200;
    
    // Conditionals
    const status = isGreater ? "high" : "low";
    
    console.log("200. Итоговые результаты:");
    console.log("     data.value:", data.value);
    console.log("     data.count:", data.count);
    console.log("     nested.a.b.c:", result);
    console.log("     num:", num, "str:", str);
    console.log("     sum:", sum, "product:", product);
    console.log("     isEqual:", isEqual, "isGreater:", isGreater);
    console.log("     status:", status);
    
    return {
        data,
        result,
        num,
        str,
        sum,
        product,
        isEqual,
        isGreater,
        status
    };
}

const finalResult = finalTask200();

console.log("\n=== ВСЕ 200 ЗАДАЧ ВЫПОЛНЕНЫ ===");
console.log("Итоговый объект:", finalResult);