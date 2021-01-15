function CreateMatrix(n) {
    if (n <= 0) {
        alert("Wrong Input!");
    } else {
        // counter = 0;
        let InputNum1 = n;
        document.getElementById("Form1").innerHTML = 'Input Number 1';
        for (let m = 0; m < parseInt(InputNum1, 10); m++) {
            let InsertingRow = document.getElementById('Form1').insertRow(m);
            for (let p = 0; p < parseInt(InputNum1, 10); p++) {
                let InsertingCell = InsertingRow.insertCell(p);
                InsertingCell.innerHTML = "<input type='number' id='Numbers" + String(p) + String(m) + "'></input>"
            }
        }
        let InputNum2 = n;
        document.getElementById("Form2").innerHTML = 'Input Number 2';
        for (let m = 0; m < parseInt(InputNum2, 10); m++) {
            let InsertingRow = document.getElementById('Form2').insertRow(m);
            for (let p = 0; p < parseInt(InputNum2, 10); p++) {
                let InsertingCell = InsertingRow.insertCell(p);
                InsertingCell.innerHTML = "<input type='number' id='Numbers" + String(p) + String(m) + "'></input>"
            }
        }


    }
}

function Sum(input) {
    if (toString.call(input) !== "[object Array]") {
        return false;
    }
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i])
    }
    return total;
}