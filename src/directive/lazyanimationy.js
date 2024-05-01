
const sectionOneObserver=new IntersectionObserver(function(entries){
    
     entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log('in ');
            entry.target.classList.add('move_y');
            sectionOneObserver.unobserve(entry.target);
        }
     });
 });
 
 export default{
     bind(el){
        el.classList.add('before_move_y');
        sectionOneObserver.observe(el);
     }
     
 }