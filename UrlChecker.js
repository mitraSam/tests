class UrlChecker{
    constructor(location){

        this.location = location
        this.urlParams = location.pathname.split("/")
    }

    findInUrl(param,index,relative=false){
        if(relative) index = this.urlParams.length - index;
        const paramString= this.urlParams[index]
        return UrlChecker.findInString(paramString,param)
    }

   static findInString(paramString,param){
        return paramString.indexOf(param) > -1
    }
}

exports.default =   UrlChecker