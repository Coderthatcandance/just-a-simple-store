push_items();

cart_add();

const the_items=['','',''];











function push_items(){
 
    item1();

    item2();

    item3();
   
}


function item1(){
    const item_1=document.getElementById('item_name').innerText;

    const addto_c=document.getElementById('add_cart');


   addto_c.addEventListener('click',()=>{

    the_items[0]=item_1;

    addto_c.disabled=true;

    addto_c.innerText='added!'

    cart_add();
    })

}


function item2(){
    
    const item_2=document.getElementById('item_name1').innerText;

    const addto_c1=document.getElementById('add_cart1');

    
    addto_c1.addEventListener('click',()=>{

    the_items[1]=item_2;

    addto_c1.disabled=true;

    addto_c1.innerText='added!'

    cart_add();
    })

    
}


function item3(){
    const item_3=document.getElementById('item_name2').innerText;
    
    const addto_c2=document.getElementById('add_cart2');

    
    addto_c2.addEventListener('click',()=>{

    the_items[2]=item_3;

    addto_c2.disabled=true;

    addto_c2.innerText='added!'

    cart_add();
    })
    
}


function cart_add(){


    const goto_c=document.getElementById('cart');

    goto_c.addEventListener('click',()=>{
        
    sessionStorage.setItem('data',JSON.stringify(the_items[0]));

    sessionStorage.setItem('data1',JSON.stringify(the_items[1]));

    sessionStorage.setItem('data2',JSON.stringify(the_items[2]));

    })

   
}