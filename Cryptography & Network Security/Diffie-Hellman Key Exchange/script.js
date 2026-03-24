const p=23;
const g=5;

const bobPrivateKey = 6;

function powerMod(base, exp, mod) {
  let result = 1;
  base = base%mod;
  while(exp>0) {
    if(exp%2==1) {
      result = (result*base)%mod;
    }
    exp = Math.floor(exp/2);
    base = (base*base)%mod;
  }
  return result;
}

function performKeyExchange() {
  const alicePrivatekey = parseInt(document.getElementById("alicePrivatekey").value);
  
  if(isNaN(alicePrivatekey) || alicePrivatekey<=0) {
    document.getElementById("result").innerText = "Please enter a valid positive integer for Alice's private key.";
    return;
  }
  const alicePublickey = powerMod(g, alicePrivatekey, p);
  
  const bobPublicKey = powerMod(g, bobPrivateKey, p);
  
  const sharedSecretAlice = powerMod(bobPublicKey, alicePrivatekey, p);
  
  const sharedSecretBob = powerMod(alicePublickey, bobPrivateKey, p);
  
  document.getElementById("result").innerHTML = `
    Prime number(p):${p}<br>
    Primitive root(g):${g}<br>
    Alice's private key: ${alicePrivatekey}<br>
    Alice's public key: ${alicePublickey}<br>
    Bob's public key: ${bobPublicKey}<br>
    Shared secret key (Alice's claculation): ${sharedSecretAlice}<br>
    Shared secret key (Bob's claculation): ${sharedSecretBob}<br>`;
    
    if(sharedSecretAlice === sharedSecretBob){
      document.getElementById("result").innerHTML+="<br>Success! Both Alice and Bob have the same shared key.";
    } else {
      document.getElementById("result").innerHTML+="<br>Error! The shared secret keys do not match.";
    }
} 