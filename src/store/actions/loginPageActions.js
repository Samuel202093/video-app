import * as socketConn from "../../socketConnection/socketConnection"

export const proceedWithLogin = (data)=>{
    socketConn.login(data);
}


