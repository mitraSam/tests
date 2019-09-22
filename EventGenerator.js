const eventsConfig = {
    match:[
        {event:"srt.pageView",payload:{page:"match"}}
    ],
    'pixelEvent':[
        {
            event:'srt.Pixel',

        }
    ]
}


const pixelScript = {
    match: "matchScriptUrl"
}
class EventGenerator {
    constructor(creator){
        this.creator = creator
    }

    generateEvents({name,type,scriptParam}){
        let eventConfig;
        if(type==='pixel'){
         eventConfig = this.generatePixelEvent(name,scriptParam)
        }else{
            eventConfig = eventsConfig[name]
        }
        return
    }
   initializeEvents(options){
        const events = this.generateEvents(options)
       events.map(event=>this.creator.push(event))
   }
    generatePixelEvent(name,scriptParam=""){
        const src = pixelScripts[name].concat(scriptParam)
        const eventConfig = eventsConfig['pixel']
        return{
            ...eventConfig,
            src
        }

    }

}

exports.default =   UrlChecker