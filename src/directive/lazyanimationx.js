
const sectionOneObserver=new IntersectionObserver(function(entries){
    
    entries.forEach((entry)=>{
       if(entry.isIntersecting){
           console.log('in ');
           entry.target.classList.add('move_x');
           sectionOneObserver.unobserve(entry.target);
       }
    });
});

export default{
    bind(el){
       el.classList.add('before_move_x');
       sectionOneObserver.observe(el);
    }
    
}