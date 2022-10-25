const dots_container = document.getElementById('dots-container');

const dots_arr = [];
const rows = 25;
const columns = 25;

//create dots
for(let i =0; i < rows; i++){
    dots_arr[i] = [];
    for(let j=0; j < columns; j++){
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dots_container.appendChild(dot);
        dots_arr[i].push(dot);
    }
}

dots_arr.forEach((columns, i) => {
    columns.forEach((dot, j) => {
        dot.addEventListener('click', () => {
            growDot(i, j);
        });
    });
})

function growDot(i, j) {
    if(dots_arr[i] && dots_arr[i][j]){
        if(!dots_arr[i][j].classList.contains('grow')){
            dots_arr[i][j].classList.add('grow');
            setTimeout(() => {
                growDot(i-1, j);
                growDot(i+1, j);
                growDot(i, j+1);
                growDot(i, j-1);
            }, 300)
            setTimeout(() => {
                dots_arr[i][j].classList.remove('grow');
            }, 300)
        }
    }
}