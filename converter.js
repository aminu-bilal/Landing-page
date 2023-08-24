
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('Ibsinput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';

    let Lbs = e.target.value;
    document.getElementById('GramsOutput').innerHTML = Lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML = Lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = Lbs*16;
});