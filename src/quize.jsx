import { useState , useMemo } from "react";


export default function Quize(){

   const  words = useMemo(() => {
   let s = `afraid, agree, angry, arrive, attack, bottom, clever, cruel, finally, hide, hunt, lot, middle, moment, pleased, promise, reply, safe, trick, well adventure, approach, carefully, chemical, create, evil, experiment, kill, laboratory, laugh, loud, nervous, noise, project, scare, secret, shout, smell, terrible, worse alien, among, chart, cloud, comprehend, describe, ever, fail, friendly, grade, instead, library, planet, report, several, solve, suddenly, suppose, universe, view appropriate, avoid, behave, calm, concern, content, expect, frequently, habit, instruct, issue, none, patient, positive, punish, represent, shake, spread, stroll, village aware, badly, belong, continue, error, experience, field, hurt, judgment, likely, normal, rare, relax, request, reside, result, roll, since, visible, wild advantage, cause, choice, community, dead, distance, escape, face, follow, fright, ghost, individual, pet, reach, return, survive, upset, voice, weather, wise allow, announce, beside, challenge, claim, condition, contribute, difference, divide, expert, famous, force, harm, lay, peace, prince, protect, sense, sudden, therefore accept, arrange, attend, balance, contrast, encourage, familiar, grab, hang, huge, necessary, pattern, propose, purpose, release, require, single, success, tear, theory against, beach, damage, discover, emotion, fix, frank, identify, island, ocean, perhaps, pleasant, prevent, rock, save, step, still, taste, throw, wave 10 benefit, certain, chance, effect, essential, far, focus, function, grass, guard, image, immediate, primary, proud, remain, rest, separate, site, tail, trouble 11 anymore, asleep, berry, collect, compete, conversation, creature, decision, either, forest, ground, introduce, marry, prepare, sail, serious, spend, strange, truth, wake 12 alone, apartment, article, artist, attitude, compare, judge, magazine, material, meal, method, neighbor, professional, profit, quality, shape, space, stair, symbol, thin 13 blood, burn, cell, contain, correct, crop, demand, equal, feed, hole, increase, lord, owe, position, raise, responsible, sight, spot, structure, whole 14 coach, control, description, direct, exam, example, limit, local, magical, mail, novel, outline, poet, print, scene, sheet, silly, store, suffer, technology 15 across, breathe, characteristic, consume, excite, extreme, fear, fortunate, happen, length, mistake, observe, opportunity, prize, race, realize, respond, risk, wonder, yet`
       s = s.split(', ')
       s.length =10
   return s 
   } , [])

   const [show , setShow] = useState(true)  
   const [list , setList] = useState([])
   const [index , setIndex] = useState(0) 

   function startAgine(){
         setList([])
         setIndex(0)
         setShow(!show)
   };

   function cheakData(reslut =''){
    if(reslut == 'no')  setList(list => [ ...list,words[index]])

    setIndex(index => index+ 1)
   };
   
   {/** show the the main page */}

   if(show)  
     return (
    <>
       <p> want to test your self ? </p>
       <button onClick={e => setShow(!show)}>click me</button>
    </>
   );
   
   if(index < words.length) {
     return(
     <>
       <h3>do you know this word ? { words[index] }</h3>
           <button onClick={ e => cheakData() }>yes</button>
       <button onClick={ e => cheakData('no') }>no</button>
     </>
    )
   }

   return (
   <>
        <h2>list of wrods you dont know</h2>
        {list.map( (e , i ) => <p key={i}>{e}</p>)}
        {list.length > 3 ? <h1>try more harder 😓 and keep the hard job</h1> 
               : <h1>keep the hard work 😃</h1>}
          <h3>want to try agine ? </h3>
        <button onClick={() => startAgine()}>agine</button>
   </>
   )
}