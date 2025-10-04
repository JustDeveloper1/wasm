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
        const length = wasmModule._getStringLength(inputString);
        
        const inputPtr = wasmModule._malloc(length + 1);
        const outputPtr = wasmModule._malloc(length + 1);
        
        wasmModule.stringToUTF8(inputString, inputPtr, length + 1);
        
        wasmModule._reverseString(inputPtr, outputPtr, length);
        
        const result = wasmModule.UTF8ToString(outputPtr);
        
        wasmModule._free(inputPtr);
        wasmModule._free(outputPtr);
        
        alert(`Исходная строка: ${inputString}\nРазвернутая строка: ${result}`);
    } else {
        alert("Вы не ввели строку!");
    }
}

initWasm();
