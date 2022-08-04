let container=document.createElement("div");
container.classList.add("container");
let span=document.getElementById("span");
span.innerHTML=10;
document.body.append(container);
let count= 10;
span.style.color="blue";
setTimeout(()=>{
    count=count-1;
    span.innerHTML=count;
    span.style.color="red";
    setTimeout(()=>{
        count=count-1;
        span.innerHTML=count;
        span.style.color="yellow";
        setTimeout(() => {
            count=count-1;
            span.innerHTML=count;
            span.style.color="brown";
            setTimeout(() => {
                count=count-1;
                span.innerHTML=count;
                span.style.color="skyblue";
                setTimeout(() => {
                    count=count-1;
                    span.innerHTML=count;
                    span.style.color="pink";
                    setTimeout(() => {
                        count=count-1;
                        span.innerHTML=count;
                        span.style.color="orange";
                        setTimeout(() => {
                            count=count-1;
                            span.innerHTML=count;
                            span.style.color="violet";
                            setTimeout(() => {
                                count=count-1;
                                span.innerHTML=count; 
                                span.style.color="red";
                                setTimeout(() => {
                                    count=count-1;
                                    span.innerHTML=count; 
                                    span.style.color="green";
                                    setTimeout(()=> {
                                        span.innerHTML= "Happy Independence Day";
                                        span.style.color="blue";
                                    },1000)             
                                },1000);
                            },1000);
                        },1000); 
                    },1000);  
                },1000);   
            },1000);
        },1000);
    },1000)
},1000)