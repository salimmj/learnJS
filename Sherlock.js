/*
This is a challenge from HackerRank
**/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);

    var ka = new Array(k);

    for(var k0 = 0; k0 < k; k0++ ) {
        ka[k0] = a[n -k0 -1];
    }


    for(var n0 =n-1; n0 > k-1; n0--) {
        a[n0]= a[n0-k];
    }

    for(k0 = 0; k0 < k; k0++) {
        a[k0] = ka[k-k0-1]
    }


    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine());
        console.log(a[m])
    }

}
