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
        try {
            const result = wasmModule.ccall(
                'reverseString',
                'string',
                ['string'],
                [inputString]
            );
            
            alert(`Исходная строка: ${inputString}\nРазвернутая строка: ${result}`);
        } catch (error) {
            console.error("Ошибка:", error);
            alert("Ошибка при обработке строки");
        }
    } else {
        alert("Вы не ввели строку!");
    }
}

initWasm();
