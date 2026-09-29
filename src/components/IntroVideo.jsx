import {useEffect,useRef,useState} from 'react';
import {Play,Volume2,VolumeX} from 'lucide-react';
export default function IntroVideo(){
 const video=useRef(null);const [volume,setVolume]=useState(50),[playing,setPlaying]=useState(false);
 useEffect(()=>{const v=video.current;v.volume=.5;v.muted=false;v.play().catch(()=>setPlaying(false));},[]);
 const play=()=>{const v=video.current;if(v.paused)v.play().catch(()=>setPlaying(false));else v.pause()};
 const change=value=>{setVolume(value);video.current.volume=value/100;video.current.muted=value===0};
 return <><div className="intro-film native-film"><video ref={video} src="/assets/bettox-presentation.mp4" playsInline loop preload="auto" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onClick={play} aria-label="Presentación BettoX"/>{!playing&&<button className="video-start" onClick={play} aria-label="Reproducir vídeo con sonido"><Play size={30}/></button>}</div><div className="video-controls"><button aria-label={volume?'Silenciar vídeo':'Activar sonido'} onClick={()=>change(volume?0:50)}>{volume?<Volume2 size={18}/>:<VolumeX size={18}/>}</button><input aria-label="Volumen del vídeo" type="range" min="0" max="100" value={volume} onChange={e=>change(Number(e.target.value))}/></div></>;
}
