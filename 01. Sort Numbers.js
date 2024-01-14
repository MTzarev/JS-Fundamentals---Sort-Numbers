function sortNumbers(num1, num2, num3) {
    let bigger = 0;
    let middel = 0;
    let smallest = 0;
    if (num1 > num2 && num1 > num3) {
        bigger = num1;
    } if (num1 > num2 && num1 < num3) {
        middel = num1;
    } if (num1 < num2 && num1 < num3) {
        smallest = num1;
    } if (num2 > num1 && num2 > num3) {
        bigger = num2;
    } if (num2 > num1 && num2 < num3) {
        middel = num2
    } if (num2 < num1 && num2 < num3) {
        smallest = num2
    } if (num3 > num1 && num3 > num2) {
        bigger = num3;
    } if (num3 > num2 && num3 < num2) {
        middel = num3;
    } if (num3 < num1 && num3 < num2) {
        smallest = num3
    }

    console.log(bigger);
    console.log(middel);
    console.log(smallest);

}

sortNumbers(-2, 1, 3)