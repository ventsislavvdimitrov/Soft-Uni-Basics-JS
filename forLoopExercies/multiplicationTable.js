function multiplicationTable(input) {

    let number = Number(input[0]);

    for (i = 1; i <= 10; i++) {
        let res = i * number;
        console.log(`${i} * ${number} = ${res}`);
    }

}

multiplicationTable(['5']);