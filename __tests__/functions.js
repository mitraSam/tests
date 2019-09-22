const urlChecker = require("../UrlChecker").default

const location = {
    href: "https://www.ligastavok.ru/bets/live/soccer/rossiia-id-350/rossiiskaia-premer-liga-id-5271/arsenal-tula-ural-id-12301265",
    pathname: "/bets/live/soccer/rossiia-id-350/rossiiskaia-premer-liga-id-5271/arsenal-tula-ural-id-12301265"
};
const urlchecker = new urlChecker(location);


const cases = require("jest-in-case")

cases("findInString",opts=>{
    expect(urlChecker.findInString(opts.string,opts.param)).toBe(true)
},[{string:"ForTheLoveOf--id--Test?asd=123&b=345",param:"-id-"},{string:"anotherExemplaeOfString",param:"Exemplae"},
    {string:"---asd?EMailConfirmationaaa!sd/",param:"EMailConfirmation"}])

describe("UrlChecker.constructor",()=>{

    const chunks  = location.pathname.split("/");

    expect(urlchecker.location).toEqual(location)
    expect(urlchecker.urlParams).toEqual(chunks)
})

cases("UrlChecker.findInUrl",opts=>{
    expect(urlchecker.findInUrl(opts.param,opts.index,opts.relative)).toBe(true)

},[{param:"bets",index:1},{param:"socc",index:3},{param:"-id-",index:4},{param:"-id-",index:1,relative:true}])


describe("UrlChecker.findInUrl",()=>{
    const urlchecker = new urlChecker(location);

    expect(urlchecker.findInUrl("-id-",4)).toBe(true)
})

