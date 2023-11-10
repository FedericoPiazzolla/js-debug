const input = document.querySelector('input');
const array = []; // 1 null non va bene, []

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == 0) return; // 2 la vaiabile deve essere un numero

    array.push(input.value); // 3 add non va

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = input.value; // 4  utilizzare innerHTML
    document.querySelector('ul').append(li); //5: push no, append si

    let counter = 0; //6 counter deve essere un numero
    let item    = array[0];
    let max   = 1; //7 poiche max cambia
    const elems = [];

    for (let i = 0; i < array.length; i++) { // 8 manca il .length
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) { // 9 j al posto di i++
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) { // 10 mancavano parentesi graffe all 'if
                   max  = counter;
                    item = array[i]; 
                }
                
            }
        }

        counter = 0;
    }

    const alert = document.querySelector('.alert'); // 11  query selector al posto del get element

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`); // 12 backtip al posto di apici
});