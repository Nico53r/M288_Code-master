// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope,
// or in any parent/ancestor scope

// Global Scope (v1, v5)
  // Local Scope (v2)
    // Local Scope (v4)

let v1 = 'varOne';

if (true) {
    console.log(v1);
    let v2 = 'varTwo';
    console.log(v2);

    if (true) {
        let v4 = 'varFour';
        console.log(v4);
    }
    console.log(v4); //ReferenceError: v.. is not defined

    //global variables
    var v5 = 'varFive';

}

console.log(v1);
console.log(v5);
console.log(v2); //ReferenceError: v.. is not defined
console.log(v4); //ReferenceError: v.. is not defined

