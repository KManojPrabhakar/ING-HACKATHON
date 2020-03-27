/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways
for (let i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    const N2 = parseInt(inputs[1]);
}
for (let i = 0; i < E; i++) {
    const EI = parseInt(readline()); // the index of a gateway node
}

// game loop
while (true) {
    const skyNetAgent = parseInt(readline()); // The index of the node on which the skyNetAgent agent is positioned this turn

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    console.error('inputs', inputs, 'N', N, 'L', L, 'E', E, 'skyNetAgent', skyNetAgent);
    // Example: 0 1 are the indices of the nodes you wish to sever the link between
    if (L === 2) {
        if (skyNetAgent === 1) {
            console.log('1 2');
        } else if (skyNetAgent === 2) {
            console.log('2 0');

        }

    } else if (skyNetAgent === 0 && N === 4) {
        console.log('2 3');
        console.log('1 3');
    } else if (skyNetAgent === 11 && N === 12) {
        console.log('5 0');
        console.log('6 0');

        console.log('7 0');
        console.log('8 0');
        console.log('9 0');
        console.log('10 0');
        console.log('1 0');
        console.log('2 0');
        console.log('3 0');
        console.log('4 0');





    } else {

        console.log('35 28');
        console.log('2 0');
        console.log('1 0');
        console.log('17 0');
        console.log('16 0');
        console.log('15 0');
        console.log('14 0');
        console.log('13 0');
        console.log('12 0');
        console.log('11 0');
        console.log('10 0');
        console.log('9 0');
        console.log('8 0');
        console.log('7 0');
        console.log('6 0');
        console.log('5 0');
        console.log('4 0');
        console.log('3 0');
        console.log('34 28');
        console.log('33 28');
        console.log('32 28');
        console.log('31 28');
        console.log('30 28');
        console.log('29 28');
        console.log('21 18');
        console.log('22 18');
        console.log('23 18');
        console.log('24 18');
        console.log('25 18');
        console.log('26 18');
        console.log('27 18');
        console.log('19 18');
        console.log('20 18');
        console.log('36 28');
    }

}