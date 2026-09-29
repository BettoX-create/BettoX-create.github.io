import {motion,useReducedMotion} from 'motion/react';
import {useEffect,useRef,useState} from 'react';
export default function BlurText({text,className='',as:Tag='span',delay=70}){
 const ref=useRef(null);const [seen,setSeen]=useState(false);const reduce=useReducedMotion();
 useEffect(()=>{const observer=new IntersectionObserver(([e])=>{if(e.isIntersecting){setSeen(true);observer.disconnect()}},{threshold:.1});observer.observe(ref.current);return()=>observer.disconnect()},[]);
 return <Tag ref={ref} className={className} aria-label={text}>{text.split(' ').map((word,i)=><motion.span aria-hidden="true" key={i} style={{display:'inline-block',marginRight:'.22em'}} initial={reduce?false:{filter:'blur(10px)',opacity:0,y:18}} animate={seen||reduce?{filter:'blur(0px)',opacity:1,y:0}:{}} transition={{duration:.7,delay:reduce?0:i*delay/1000,ease:[.16,1,.3,1]}}>{word}</motion.span>)}</Tag>
}
