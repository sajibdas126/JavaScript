function myMove(){
    const content = document.getElementById("content");
    let pos = 0;


    setInterval(frame, 5);

    function frame(){
        if(pos <350){
             pos++;
            content.style.top = pos +'px';
            content.style.left = pos +'px';
        }else{

        }
       
    }

}

myMove();