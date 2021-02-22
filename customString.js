export function charToArray(string) {
    let arrayString = [];
    if (string) {
        for (let i = 0; i < string.length; i++) {
            arrayString[i] = string[i];
        }
    }
    return arrayString;
}

export function reverse(text) {
    /**
     * salut = tulas
     */
    let reverseString = "";

    if (text.length > 0) {
        let textLength = text.length - 1;

        for (let i = textLength; i >= 0; i--) {
            reverseString += text[i];
        }
    }

    return reverseString;
}
reverse("salut")