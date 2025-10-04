let wasmModule;

async function initWasm() {
    try {
        wasmModule = await Module();
        console.log("WASM модуль загружен успешно");
    } catch (error) {
        console.error("Ошибка загрузки WASM модуля:", error);
    }
}

async function processString() {
    if (!wasmModule) {
        await initWasm();
    }

    const inputString = prompt("Введите строку для разворота через C++ :");
    
    if (inputString && inputString.length > 0) {
        const resultPtr = wasmModule._reverseString(inputString);
        
        const result = wasmModule.UTF8ToString(resultPtr);
        
        wasmModule._freeString(resultPtr);
        
        alert(`Исходная строка: ${inputString}\nРазвернутая строка: ${result}`);
    } else {
        alert("Вы не ввели строку!");
    }
}

initWasm();
