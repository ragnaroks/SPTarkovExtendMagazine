/**
 * hex string inc or dec, just for this repo
 * @param hexString hex string, better make sure that end with '00'
 * @param value value
 * @returns new hex string
 */
export default function idcalc(hexString: string,value: number): string {
  if(!hexString || hexString.length!==24) {return hexString;}
  if(value===0){return hexString;}
  try{
    let dec = BigInt('0x' + hexString);
    dec += BigInt(value);
    return dec.toString(16);
  }catch{
    return hexString;
  }
}
