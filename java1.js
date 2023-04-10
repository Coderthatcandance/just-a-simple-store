c_info();

removers();












function c_info(){

cart_info();

cart_info1();

cart_info2();
}


function removers() {
  
remove();

remove1();

remove2();
}


function cart_info(){

    const info=JSON.parse(sessionStorage.getItem('data'));

    const main_div= document.getElementById('the_c');

    const cdiv=document.createElement('div');

    cdiv.innerText=info;

    cdiv.setAttribute('class',"text")

    main_div.appendChild(cdiv);

    cdiv.setAttribute('id','dbutt')

    if(cdiv.innerText==''){}
    
    else{
    dbutt(cdiv);}

}


function cart_info1(){

    let info1=JSON.parse(sessionStorage.getItem('data1'));

    const main_div1= document.getElementById('the_c');

    const cdiv1=document.createElement('div');

    cdiv1.innerText=info1;

    cdiv1.setAttribute('class',"text")

    main_div1.appendChild(cdiv1);

    cdiv1.setAttribute('id','dbutt1')

    if(cdiv1.innerText==''){}
    
    else{
    dbutt1(cdiv1);}
}


function cart_info2(){
    
    const info2=JSON.parse(sessionStorage.getItem('data2'));

    const main_div2= document.getElementById('the_c');
  
    const cdiv2=document.createElement('div');

    cdiv2.innerText=info2;

    cdiv2.setAttribute('class',"text")

    main_div2.appendChild(cdiv2);

    cdiv2.setAttribute('id','dbutt2')

    if(cdiv2.innerText==''){}
    
    else{
    dbutt2(cdiv2);}

    
}


function dbutt(cdiv){
    
    const cdiv_butt=document.createElement('button');

    cdiv_butt.innerText='𝘅';

    cdiv.appendChild(cdiv_butt);

    cdiv_butt.setAttribute('class','dbutt');

    cdiv_butt.setAttribute('id','dbutt');
}



function dbutt1(cdiv1){
    const cdiv1_butt=document.createElement('button');

    cdiv1_butt.innerText='𝘅';

    cdiv1.appendChild(cdiv1_butt);

    cdiv1_butt.setAttribute('class','dbutt')

    cdiv1_butt.setAttribute('id','dbutt1')
}



function dbutt2(cdiv2){
    const cdiv2_butt=document.createElement('button');

    cdiv2_butt.innerText='𝘅';

    cdiv2.appendChild(cdiv2_butt);

    cdiv2_butt.setAttribute('class','dbutt');

    cdiv2_butt.setAttribute('id','dbutt2');
}



function remove(){

    const i_1=document.getElementById('dbutt');

    const d_1=document.getElementById('dbutt');
 
    i_1.addEventListener('click',()=>{

    if(i_1===d_1){

    d_1.innerHTML=''

    }

    else{};
    

    })

 }


  function remove1(){

    const i_2=document.getElementById('dbutt1');

    const d_2=document.getElementById('dbutt1');

    i_2.addEventListener('click',()=>{

    if(i_2===d_2){

    d_2.innerHTML=''

    }

    else{};
            
    })   

  }


  function remove2(){

    const i_3=document.getElementById('dbutt2');

    const d_3=document.getElementById('dbutt2');

    i_3.addEventListener('click',()=>{

    if(i_3===d_3){
            
    d_3.innerHTML=''

    }
        
    else{};

    
    })    

  }
  
  




