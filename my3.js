let value = +prompt('Type a number', 0);
switch (true) {
    case value > 0:
        alert(1);
        break;
    case value == 0:
        alert(0);
        break;
    default:
        alert(-1);
        break;
}