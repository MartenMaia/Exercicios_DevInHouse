let divDisplay = document.querySelector('.quadrado');

function InserirCor(cor){
    let classDisplay = divDisplay.className.valueOf();
    let classes = classDisplay.split(" ");
    classes.forEach(element => {
        divDisplay.classList.remove(element);
    });
    divDisplay.classList.add("quadrado")
    divDisplay.classList.add(cor)
    
}