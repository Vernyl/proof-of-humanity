import React from 'react'
import BiometricsValidator from '../Biometrics/BiometricsValidator'
import HumangramValidator from '../Humangram/HumangramValidator'
import LedgerValidator from '../Ledger/LedgerValidator'
import WorldcoinValidator from '../Worldcoin/WorldcoinValidator'

interface props {
  message1: string,
  message2: string,
  message3: string,
  message4: string,
}

function VerifyHuman(props: props) {
  return (
    <>  
      <div>VerifyHuman - A widget containing all the 4 ways to verify humanity</div>
      {/* <BiometricsValidator message={props.message1}/> */}
      <HumangramValidator message={props.message2}/>
      <LedgerValidator message={props.message3}/>
      {/* <WorldcoinValidator message={props.message4}/> */}
    </>
  )
}

export default VerifyHuman