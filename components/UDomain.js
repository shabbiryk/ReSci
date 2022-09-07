import React, { useState } from "react"
import UAuth from "@uauth/js"
//import { Button } from "react-bootstrap"


const uauth = new UAuth({
    clientID: "bbe8f08a-dd77-4a01-b02c-1b30844650b9",
    redirectUri: "https://re-sci.vercel.app/",
    scope: "openid wallet"
  })

function UDomain() {
    const [Uauth, setUauth] = useState()

    async function Connect() {
        try {
            const authorization = await uauth.loginWithPopup()
            setUauth(JSON.parse(JSON.stringify(authorization))["idToken"])

            // eslint-disable-next-line no-undef
            await authenticate()
        } catch (error) {
            console.error(error)
        }
    }

    async function logOut() {
        uauth.logout()
        logOut()
    }

    function log() {
        if (Uauth === null || Uauth === undefined) {
            Connect()
        } else {
            logOut()
        }
    }

    return (
        <>
            <button className="UDomain" onClick={log}>{Uauth != null ? Uauth["sub"] : "Login with UNSD"}</button>
        </>
    )
}

export default UDomain
