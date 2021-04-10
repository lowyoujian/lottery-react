import detectEthereumProvider from '@metamask/detect-provider';

let provider;
async function init(){
     provider = await detectEthereumProvider();
}
init();
export default provider;
