const symmetrical = (kata) => {
    kata = kata.toString()
    kata = kata
        .replace(/[^A-Z0-9!@#$%^&*()_+<>,.?/:;"' ]/ig, "")
        .toLowerCase();
    const sim = kata
        .split('')
        .reverse()
        .join('');

    if (kata === sim) {
        return true
    } else {
        return false
    }
}
 module.exports = symmetrical;