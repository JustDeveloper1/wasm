#include <cstring>
#include <cstdlib>

extern "C" {

    char* reverseString(const char* input) {
        if (input == nullptr) return nullptr;
        
        int length = strlen(input);
        char* output = (char*)malloc(length + 1);
        
        for (int i = 0; i < length; i++) {
            output[i] = input[length - 1 - i];
        }
        output[length] = '\0';
        
        return output;
    }

    int getStringLength(const char* str) {
        if (str == nullptr) return 0;
        return strlen(str);
    }

    void freeString(char* str) {
        if (str != nullptr) {
            free(str);
        }
    }
}
