/**
 * Created by joe12 on 4/19/2017.
 */
class cleaner
{
    constructor()
    {

    }
    mongoClean(string)
    {
        return string.replace(/[=|&{}"'/]/g,'')
    }
    sqlClean(string)
    {
        return string.replace(/[;']/g,'')
    }
    hash(string)
    {
        let temp;
        for(let i =0;i<string.length;i++)
        {
            temp += (temp.charCodeAt(i)*i%89) + ""
        }
    }
}
module.exports = new cleaner();