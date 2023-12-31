

// document.querySelector('.video_l').addEventListener("loadeddata", function() {
//     document.querySelector('.video_l').currentTime = document.querySelector('.video_l').duration;
// })


document.body.style.overflow = 'hidden';
document.querySelector('.video_l').addEventListener('ended',myHandler,false);

function myHandler(e) {

    document.querySelector('.lecteur').classList.add("hide");
    document.body.style.overflow = '';
    document.querySelector('.pre_show').classList.remove("hide");
    document.querySelector('.navigation_bar').classList.remove("hide");
}


let nav = document.querySelector(".navigation_bar");
let img_icons = document.querySelectorAll(".part_icons")
let part_name = document.querySelectorAll(".part_name")

nav.addEventListener('mouseover',()=>{
    nav.style.width = "150px"
    part_name.forEach(item =>{
        item.style.opacity = 1
        item.style.position = "relative"
    })   
    img_icons.forEach(item_1 =>{
        item_1.style.width = "30px"
    })  
 
})

nav.addEventListener('mouseout',()=>{
    nav.style.width = "50px"
    part_name.forEach(item =>{
        item.style.opacity = 0
        item.style.position = "absolute"
        
    })  
    img_icons.forEach(item_1 =>{
        item_1.style.width = "40px"
    })  

})

var mesGif = document.querySelectorAll('.animated-deco');

mesGif.forEach(
    icon=>{
    
    icon.addEventListener('mouseover',()=>{
 
        if(!icon.getAttribute('src').includes('.gif')){
            icon.setAttribute('src', change_path(icon.getAttribute('src')))
        }
    });

    icon.addEventListener('mouseout', ()=>{
        if(icon.getAttribute('src').includes('.gif')){
            icon.setAttribute('src', change_path(icon.getAttribute('src'), true))
        }
    })

})

function change_path(path, reverse=false){
    path = path.split('/')
    if(reverse){
        path = path.slice(0,-2).join('/') +"/png/"+path[path.length-1].replace('.gif','.png')
    }else{
        path = path.slice(0,-2).join('/') +"/gif/"+path[path.length-1].replace('.png','.gif')
    }
    return path

}

console.log(change_path(mesGif[1].getAttribute('src')))