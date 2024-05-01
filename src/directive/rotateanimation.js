
const sectionOneObserver=new IntersectionObserver(function(entries){
    
    entries.forEach((entry)=>{
       if(entry.isIntersecting){
           console.log('in ');
           entry.target.classList.add('rotate');
           sectionOneObserver.unobserve(entry.target);
       }
    });
});

export default{
    bind(el){
       el.classList.add('before_rotate');
       sectionOneObserver.observe(el);
    }
    
}