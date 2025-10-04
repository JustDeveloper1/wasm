#include <cstring>

extern "C" {
    void reverseString(char* input, char* output, int length) {
        for (int i = 0; i < length; i++) {
            output[i] = input[length - 1 - i];
        }
        output[length] = '\0';
    }

    int getStringLength(char* str) {
        int length = 0;
        while (str[length] != '\0') {
            length++;
        }
        return length;
    }
}
