import { Call, Application, Events } from '@wails/types'

declare global {
    export const wails: {
        Call: Call,
        Application: Application,
        Events: typeof Events
    } 
}