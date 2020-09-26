var ask = true;
while(ask){

    var comp = Math.round((Math.random() * 10));

    for(var i = 3; i >= 1; i--){
        alert('Guess the number between 1 - 10\nYou have ' + i + ' chances');

        var player = prompt('Enter the number');
        
        if(player == comp){
            alert('YOU RIGHT!\nThe number is ' + comp);
        }
        else{
            alert('LOL YOU WRONG!');
        }
    }

    console.log(comp);

    ask = confirm('Again?');
}