
function totalofMemory(clicking ,product){
    const genuineRate=1299;
    
   if(clicking == true){
    const formemory=document.getElementById(product+'-extra');
    formemory.innertext='0';
    
    
    
   

   
   
   }
   else if(clicking == false){
    //    console.log('valid');
    const price=100;
    const formemory=document.getElementById( product+'-extra');
     formemory.innerText='100';
    
    const totalofmemory=genuineRate + 100;
    // return totalofmemory ;
    return totalofmemory;
   }
   calculatetotal();
}

// for 8gb 
document.getElementById('eight-memory').addEventListener('click',function memory(){
 
    totalofMemory(true,'memory');   
})
// for 16 gb 
document.getElementById('sixteen-memory').addEventListener('click',function memory(){
    // console.log('hello')
    totalofMemory(false,'memory');   

    
})
function totalofstorage(clicking,product){
    let genuineRate=1299;
  if(clicking == true){
    const formemory=document.getElementById(product+'-extra');
    formemory.innerText='0';

  }
  else if(clicking == false){
    const price=100;
    const forstorage=document.getElementById(product+'-extra');
     forstorage.innerText='100';
    
    const totalofstorage=genuineRate + 100;
    return totalofstorage ;
   

  }
//   else{
//     const price=100;
//     const forstorage=document.getElementById(product+'-extra');
//      forstorage.innerText='180';
    
//     const totalofstorage=genuineRate + 180;
//     return totalofstorage ;
//   }
calculatetotal();
    
}
// for storage 
// 256 gb 
document.getElementById('large-storage').addEventListener('click',function storage(){
    totalofstorage(true,'storage');
    

   
})
//  512 gb 

document.getElementById('larger-storage').addEventListener('click',function storage(){
    // console.log('hello')
    totalofstorage(false,'storage');

    
}) 
// 1 tb 
document.getElementById('largest-storage').addEventListener('click',function storage(){
    // console.log('hello',)
    totalofstorage();

   


    
})
// delivery charge 
// noraml delivery 
function totoalofcharge(clicking,product){
    const genuineRate=1299;
    if(clicking==true){
        const fordelivery=document.getElementById(product+'-extra');
    fordelivery.innerText='0';

    }
    else if(clicking==false){
        const price=20;
    const fordelivery=document.getElementById(product+'-extra');
     fordelivery.innerText='20';
    
    const totalofdelivery=genuineRate + 20;
    return totalofdelivery ;

    }
    calculatetotal();

}
document.getElementById('free').addEventListener('click',function charge(){
    totoalofcharge(true,'charge');
    
})
// nonfree 
document.getElementById('nonfree').addEventListener('click',function charge(){
    // console.log('hello')
    totoalofcharge(false,'charge');
})
function calculatetotal(){
    
    


    const sumofmemory=totalofmemory.parseInt('memory');
    const sumofstorage=totalofstorage.parseInt('storage');
    const sumofcharge=totoalofcharge.parseInt('charge');
    const totalpricetext=document.getElementById('total-price');
    const sumoftotal=sumofmemory + sumofstorage +sumofcharge;
    const sumoftotaltext=parseInt(sumoftotal);
    totalpricetext.innerText=sumoftotal;

}