let productlist=document.getElementById('product-list');

let item1={pid:101,pImg:"https://media.istockphoto.com/id/1491044018/photo/hand-holding-iphone-14-pro-max-back-view-with-camera-and-black-apple-logo.jpg?s=612x612&w=0&k=20&c=QiqKT26Xr1BPwUTFHd9Og43nVpLyr0EyID0wgx_27y0=",
pname:'Iphone',price:49000,Qty:1};
    
let item2={pid:102,pImg:"https://media.istockphoto.com/id/1217881331/photo/man-holding-in-hands-samsung-galaxy-s20-ultra-closeup.jpg?s=612x612&w=0&k=20&c=BhMtzBJQC-D5jNfYfb6vIr4K7vV4INyZ7UzWXkI51EE=",
pname:'Samsung',price:39000,Qty:1};
    
let item3={pid:103,pImg:"https://www.shutterstock.com/image-vector/realistic-vector-illustration-front-back-260nw-2144178297.jpg",
pname:'Miphone',price:29000,Qty:1};
    
let items=[item1,item2,item3];

function displayitems(items)
{
    let htmlCode="";
    items.forEach(function(item,i){
        htmlCode+=`<tr>
                                <td>${item.pid}</td>
                                <td><img style="height: 30px; width: 30px;" src="${item.pImg}"></td>
                                <td>${item.pname}</td>
                                <td>${item.price}</td>
                                <td>
                                <i onclick="decQty(${item.pid})" class="bi bi-dash-circle-fill"></i>
                                ${item.Qty}
                                <i onclick="incQty(${item.pid})" class="bi bi-plus-circle-fill"></i>
                                </td>
                            </tr>`
    })
    productlist.innerHTML=htmlCode;
}
displayitems(items);

function incQty(id)
{

    let updateditem=items.map(function(item){
        if(item.pid==id){
            return {...item,Qty:++item.Qty};
        }
        return item;
    })
    items=updateditem;
    displayitems(items);
}

function decQty(id)
{

    let item=items.find(function(item){
        if(item.pid==id){
            return item;
        }
    })


    if(item && item.Qty>1){
        let updateditem=items.map(function(item){
            if(item.pid==id){
                return {...item,Qty:--item.Qty};
            }
            return item;
        })
        items=updateditem;
        displayitems(items);
    }
}