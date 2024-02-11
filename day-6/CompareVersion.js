// https://www.codewars.com/kata/53b138b3b987275b46000115

function compareVersions (version1, version2) {
    const vers1 = version1.split('.').map(Number);
    const vers2 = version2.split('.').map(Number);

    const max = Math.max(vers1.length, vers2.length);
    
    for (let i = 0; i < max; i++) {
        let num1 = i < vers1.length ? vers1[i] : 0;
        let num2 = i < vers2.length ? vers2[i] : 0;

        if (num1 !== num2) {
            return num1 > num2;
        }
    }

    return true;
}