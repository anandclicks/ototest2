import React, { useEffect } from 'react'
import DelhiAllpg from '../pgbycities/DelhiAllpg'
import GurugramAllPg from '../pgbycities/GurugramAllPg'
import GaziyabadALlpg from '../pgbycities/GaziyabadAllPg'
import NoidaALLPg from '../pgbycities/NoidaALLPg'
import GreternoidaallPg from '../pgbycities/GreternoidaallPg'
import Navbar2 from '../Navbar2'
import Prasence from '../Prasence'
import PGFilter from '../Filter'

function Allpg() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
     <Navbar2/>
     <PGFilter/>
      <NoidaALLPg/>
      
      <Prasence/>
    </div>
  )
}

export default Allpg