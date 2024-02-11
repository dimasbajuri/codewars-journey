// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

url1 = "http://github.com/carbonfive/raygun"    // github
url2 = "http://www.zombie-bites.com"            // zombie-bites
url3 = "https://www.cnet.com"                   // cnet

function domainName(url){
    return url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split(/[/?#]/)[0]
    .split('.')[0];
}